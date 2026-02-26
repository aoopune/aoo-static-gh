# -*- coding: utf-8 -*-
"""
Fix and standardize country names for every row in the institutes CSV.
- Build correct institute -> country (from known overrides + name inference + majority vote).
- Normalize country names to standard form (United States of America, United Kingdom, etc.).
- Write back to the CSV.
"""
import csv
import os
import re
from collections import Counter, defaultdict

# Standardize country names (same format across all banks and institutes)
COUNTRY_STANDARD_MAP = {
    "usa": "United States of America",
    "u.s.a.": "United States of America",
    "united states": "United States of America",
    "us": "United States of America",
    "uk": "United Kingdom",
    "u.k.": "United Kingdom",
    "united kingdom": "United Kingdom",
    "england": "United Kingdom",
    "scotland": "United Kingdom",
    "wales": "United Kingdom",
    "swiss confederation": "Switzerland",
    "state of israel": "Israel",
    "türkiye": "Turkiye",
    "turkey": "Turkiye",
    "korea": "South Korea",
    "republic of korea": "South Korea",
    "russia": "Russian Federation",
    "uae": "United Arab Emirates",
    "emirates": "United Arab Emirates",
    "hong kong": "China",
    "taiwan": "Taiwan",
    "new zealand": "New Zealand",
    "south africa": "South Africa",
    "northern cyprus": "Northern Cyprus",
    "republic of china": "Taiwan",
    "pr china": "China",
    "people's republic of china": "China",
}


def normalize_country(country):
    if not country or not isinstance(country, str):
        return country
    s = country.strip()
    if not s:
        return s
    key = s.lower()
    if key in COUNTRY_STANDARD_MAP:
        return COUNTRY_STANDARD_MAP[key]
    # Capitalize words
    return s


def infer_country_from_name(uni):
    """Infer country from institute name (city/country keywords). Returns None if unknown."""
    if not uni:
        return None
    u = uni.lower()
    # Canada (Ecole de Technologie Superieure is Montreal - check before France "Ecole")
    if any(x in u for x in ["ecole de technologie superieure", "ets montreal"]):
        return "Canada"
    # Iran
    if any(x in u for x in ["tehran", "iran", "sharif university", "kharazmi", "tarbiat", "iran university"]):
        return "Iran"
    # Ukraine
    if any(x in u for x in ["kyiv", "kiev", "ukraine", "kharkiv", "odessa", "lviv", "shevchenko", "kyiv polytechnic"]):
        return "Ukraine"
    # Slovakia / Czech
    if any(x in u for x in ["bratislava", "slovak", "comenius university", "slovak university of technology"]):
        return "Slovakia"
    # Bulgaria
    if any(x in u for x in ["sofia bulgaria", "sofia university", "medical university sofia", "st kliment ohridski", "bulgaria"]):
        return "Bulgaria"
    # Iceland
    if any(x in u for x in ["reykjavik", "iceland"]):
        return "Iceland"
    # Latvia
    if any(x in u for x in ["riga", "latvia", "stradins", "medical academy of latvia"]):
        return "Latvia"
    # Ecuador / Peru / Chile / Colombia / Venezuela (Spanish names)
    if any(x in u for x in ["ecuador", "quito", "guayaquil", "pontificia universidad catolica del ecuador", "ucese", "espol", "nacional de loja", "tecnica particular de loja", "universidad de cuenca", "universidad de cuenca ecuador", "fuerzas armadas espe", "escuela politecnica del ejercito"]):
        return "Ecuador"
    if any(x in u for x in ["peru", "lima", "pontificia universidad catolica del peru", "pucp", "cientifica del sur", "cayetano", "nacional agraria la molina"]):
        return "Peru"
    if any(x in u for x in ["chile", "santiago chile", "pontificia universidad catolica de chile", "universidad de chile", "andres bello", "alberto hurtado", "diego portales", "catolica de temuco", "catolica de la santisima", "catolica del maule", "catolica del norte", "adolfo ibanez", "federico santa maria", "tecnica federico santa maria", "universidad de antofagasta", "universidad de talca", "universidad de tarapaca", "universidad de valparaiso", "universidad de la frontera", "universidad de la serena", "universidad de los lagos", "universidad del bio-bio", "universidad del desarrollo"]):
        return "Chile"
    if any(x in u for x in ["colombia", "bogota", "uniandes", "universidad de los andes colombia", "icesi", "distrital francisco jose", "antonio narino", "eafit", "sergio arboleda", "pontificia bolivariana", "universidad pontificia bolivariana", "universidad de caldas", "universidad de la sabana", "universidad del cauca", "universidad del valle", "univalle", "valle cali", "universidad del norte barranquilla", "tecnologica de pereira"]):
        return "Colombia"
    # Costa Rica / Paraguay / Bolivia
    if any(x in u for x in ["costa rica", "universidad nacional costa rica", "universidad de costa rica"]):
        return "Costa Rica"
    if any(x in u for x in ["asuncion", "paraguay", "nacional de asuncion"]):
        return "Paraguay"
    if any(x in u for x in ["san andres", "bolivia", "mayor de san andres", "la paz bolivia"]):
        return "Bolivia"
    if any(x in u for x in ["venezuela", "caracas", "universidad central de venezuela", "ucv", "andres bello venezuela", "simon bolivar"]):
        return "Venezuela"
    # Uruguay (la Republica = Uruguay)
    if any(x in u for x in ["uruguay", "universidad de la republica", "udelar", "universidad de la republica uruguay"]):
        return "Uruguay"
    # Guatemala
    if any(x in u for x in ["guatemala", "san carlos de guatemala", "universidad de san carlos"]):
        return "Guatemala"
    # Puerto Rico = United States (do not override)
    if "puerto rico" in u:
        return "United States of America"
    # Mexico (Spanish Universidad + Mexican city/state)
    if any(x in u for x in ["mexico", "monterrey", "itam", "tec de monterrey", "unam", "uam ", "autonoma metropolitana", "ipn", "queretaro", "baja california", "nuevo leon", "san luis potosi", "yucatan", "hidalgo", "puebla", "guadalajara", "leon mexico", "anahuac", "red de universidades anahuac", "autonoma de nuevo leon", "autonoma de baja california", "autonoma de yucatan", "autonoma de queretaro", "autonoma de san luis", "ciudad juarez", "bemerita puebla", "universidad de guanajuato", "universidad veracruzana", "universidad iberoamericana"]):
        return "Mexico"
    # Spain (Universidad + Spanish city/region)
    if any(x in u for x in ["spain", "madrid", "barcelona", "valencia", "seville", "granada", "murcia", "ceu cardenal herrera", "san antonio de murcia", "francisco de vitoria", "complutense", "autonoma madrid", "autonoma barcelona", "pompeu fabra", "ie university", "iese", "esade", "navarra", "deusto", "la rioja spain", "internacional de la rioja", "uned ", "educacion a distancia uned", "miguel hernandez", "nebrija", "pablo de olavide", "rey juan carlos", "san pablo ceu", "politecnica de cartagena", "politecnica de madrid", "politecnica de catalunya", "politecnica de valencia", "universidad de almeria", "universidad de burgos", "universidad de cadiz", "universidad de cantabria", "castilla la mancha", "universidad de cordoba", "universidad de cordoba spain", "universidad de extremadura", "universidad de huelva", "universidad de jaen", "universidad de la laguna", "universidad de la rioja", "las palmas de gran canaria", "universidad de leon", "universidad de leon spain", "universidad de malaga", "mondragon unibertsitatea", "universidad de salamanca", "universidade da coruna"]):
        return "Spain"
    # France (Ecole, Haute Ecole France, etc.)
    if any(x in u for x in ["ecole ", "ecole nationale", "ecole superieure", "ecole polytechnique", "ecole des ", "institut national", "grande ecole", "caen france", "eurecom", "ingenieurs caen", "techniques avancees paris", "estaca", "centrale ", "sup elec", "ens "]):
        return "France"
    # Switzerland (Haute Ecole Suisse, etc.)
    if any(x in u for x in ["suisse occidentale", "hes-so", "haute ecole suisse", "european institute", "eurecom"]):
        return "Switzerland"
    # Poland (Kozminski, etc.)
    if any(x in u for x in ["kozminski", "leon kozminski", "poland", "warsaw", "krakow", "jagiellonian", "agh ", "adam mickiewicz", "wroclaw", "poznan", "gdansk", "lodz", "lublin"]):
        return "Poland"
    # Turkey / Turkiye
    if any(x in u for x in ["kayseri", "baysal", "izzet baysal", "abdullah gul", "istanbul", "ankara", "izmir", "middle east technical", "bilkent", "sabanci", "koç ", "koc ", "bogazici", "hacettepe", "gazi university turkey", "erciyes", "dokuz eylul", "ege university", "marmara", "yildiz"]):
        return "Turkiye"
    # Kazakhstan
    if any(x in u for x in ["karaganda", "kazakh", "almaty", "nur-sultan", "astana", "saginov", "abylkas", "satbayev", "nazarbayev"]):
        return "Kazakhstan"
    # Uzbekistan
    if any(x in u for x in ["tashkent", "uzbek", "samarkand", "tiame", "national research university uzbekistan"]):
        return "Uzbekistan"
    # Egypt
    if any(x in u for x in ["cairo", "alexandria", "egypt", "ain shams", "mansoura university egypt"]):
        return "Egypt"
    # Lebanon
    if any(x in u for x in ["beirut", "lebanon", "american university of beirut", "saint joseph"]):
        return "Lebanon"
    # Jordan
    if any(x in u for x in ["amman", "jordan", "al ahliyya", "amman arab", "applied science private university - jordan", "applied science university jordan"]):
        return "Jordan"
    # Saudi Arabia
    if any(x in u for x in ["riyadh", "king saud", "king abdulaziz", "dammam", "imam abdulrahman", "saudi", "kaust"]):
        return "Saudi Arabia"
    # UAE / Gulf
    if any(x in u for x in ["abu dhabi", "dubai", "sharjah", "uae", "american university sharjah", "khalifa university"]):
        return "United Arab Emirates"
    # Pakistan
    if any(x in u for x in ["lahore", "karachi", "islamabad", "pakistan", "punjab university pakistan", "government college university lahore", "pieas", "nust islamabad", "quaid", "lums "]):
        return "Pakistan"
    # Bangladesh
    if any(x in u for x in ["dhaka", "bangladesh", "chittagong", "bangladesh agricultural"]):
        return "Bangladesh"
    # India (abroad list may have few; avoid false positives)
    if any(x in u for x in ["indian institute of technology", "iit ", "iit-", "iisc ", "tata institute", "bombay iit", "delhi iit", "madras iit", "kanpur iit", "iit kharagpur", "iit roorkee"]):
        return "India"
    # Thailand
    if any(x in u for x in ["thailand", "bangkok", "chulalongkorn", "mahidol", "asian institute of technology thailand", "assumption university of thailand", "thammasat"]):
        return "Thailand"
    # Vietnam
    if any(x in u for x in ["vietnam", "hanoi", "ho chi minh", "vnu-", "vnu hcm", "can tho", "da nang"]):
        return "Vietnam"
    # Malaysia
    if any(x in u for x in ["malaysia", "universiti ", "um ", "ukm", "utm ", "usm", "upm", "curtin university malaysia", "taylors university", "monash malaysia", "nottingham malaysia"]):
        return "Malaysia"
    # Indonesia (Bandung, Institut Teknologi Bandung, etc.)
    if any(x in u for x in ["indonesia", "bandung", "bandung institute", "gadjah mada", "universitas ", "binus ", "bogor agricultural", "ipb university", "institut teknologi bandung", "its indonesia", "sepuluh nopember"]):
        return "Indonesia"
    # Taiwan (before China to avoid overlap)
    if any(x in u for x in ["taiwan", "taipei", "national taiwan", "national cheng kung", "national tsing hua", "ncku", "nthu", "chiao tung taiwan", "taiwan tech"]):
        return "Taiwan"
    # Hong Kong
    if "hong kong" in u:
        return "China"
    # China (include more cities and "light industry" / "university of light industry" which are Chinese)
    if any(x in u for x in ["beijing", "peking", "tsinghua", "shanghai", "fudan", "zhejiang", "nanjing", "wuhan", "harbin", "xian", "sichuan", "sun yat-sen", "zhongshan", "chinese academy", "beihang", "nankai", "tongji", "tianjin", "dalian", "suzhou", "hefei", "xiamen", "jinan university china", "communication university of china", "zhengzhou", "henan", "light industry", "qingdao", "jinan china", "changsha", "nanchang", "kunming", "guiyang", "lanzhou", "haerbin", "shenyang", "changchun", "nanning", "fuzhou china", "hebei", "shanxi china", "shandong", "anhui", "jiangxi", "hunan", "hubei", "guangxi", "yunnan", "gansu", "liaoning", "jilin", "heilongjiang"]):
        return "China"
    # Japan
    if any(x in u for x in ["tokyo", "osaka", "kyoto", "tohoku", "nagoya", "hokkaido", "waseda", "keio", "tsukuba", "hiroshima", "kyushu", "riken", "tokyo institute of technology"]):
        return "Japan"
    # South Korea
    if any(x in u for x in ["seoul", "korea", "yonsei", "kaist", "postech", "sungkyunkwan", "hanyang", "jeonbuk", "jeonbuk national", "chonbuk", "pohang", "busan", "incheon", "daegu", "gwangju", "dgist", "gist"]):
        return "South Korea"
    # UK
    if any(x in u for x in ["oxford", "cambridge", "london", "edinburgh", "manchester", "leeds", "bristol", "warwick", "nottingham", "sheffield", "exeter", "birmingham", "glasgow", "southampton", "newcastle", "liverpool", "kings college", "imperial college", "queen mary", "ucl ", "university college london", "leicester", "strathclyde", "lancaster", "york uk", "bath ", "east anglia", "sussex", "surrey", "reading", "loughborough", "aberdeen", "dundee", "cardiff", "wales ", "belfast", "queens belfast", "st andrews", "west of england", "uwe bristol"]):
        return "United Kingdom"
    # Australia
    if any(x in u for x in ["melbourne", "sydney", "queensland", "monash", "adelaide", "western australia", "new south wales", "australian national", "unsw ", "macquarie", "curtin ", "griffith ", "wollongong", "tasmania", "deakin", "la trobe", "rmit ", "university of newcastle australia", "uon ", "queensland university"]):
        return "Australia"
    # Canada (include Ecole de Technologie Superieure Montreal)
    if any(x in u for x in ["toronto", "british columbia", "mcgill", "alberta", "calgary", "waterloo", "mcmaster", "montreal", "queens university", "western ontario", "university of ottawa", "university of british columbia", "ubc", "university of alberta", "university of calgary", "university of montreal", "laval university", "university of sherbrooke", "dalhousie", "simon fraser", "york university canada", "concordia montreal", "h ec montreal", "ecole de technologie superieure", "ets montreal"]):
        return "Canada"
    # Switzerland
    if any(x in u for x in ["eth zurich", "zurich", "lausanne", "geneva", "basel", "epfl", "bern", "st gallen"]):
        return "Switzerland"
    # Germany
    if any(x in u for x in ["munich", "berlin", "heidelberg", "frankfurt", "hamburg", "bonn", "cologne", "stuttgart", "technische universitat", "ludwig maximilian", "humboldt", "freie universitat", "rwth aachen", "karlsruhe", "tubingen", "freiburg", "göttingen", "goettingen", "leipzig", "dresden", "mainz", "wurzburg", "erlangen", "hannover", "darmstadt", "braunschweig", "bochum", "duisburg", "essen"]):
        return "Germany"
    # France
    if any(x in u for x in ["paris", "lyon", "marseille", "toulouse", "grenoble", "strasbourg", "bordeaux", "nice", "nantes", "montpellier", "sorbonne", "institut polytechnique", "ecole polytechnique", "hec ", "essec", "escp", "sciences po", "psl", "paris-saclay"]):
        return "France"
    # Netherlands (Hogeschool = Dutch university of applied sciences; Zuyd, Saxion, HAN, HvA, etc.)
    if any(x in u for x in ["hogeschool", "zuyd", "saxion", "han ", "hva ", "fontys", "inholland", "hanze", "domstad", "arnhem", "nijmegen", "amsterdam", "rotterdam", "delft", "utrecht", "groningen", "leiden", "eindhoven", "maastricht", "wageningen", "tilburg", "vrije universiteit", "erasmus rotterdam", "holland", "netherlands", "twente", "eindhoven", "avans", "hogeschool van"]):
        return "Netherlands"
    # Belgium
    if any(x in u for x in ["leuven", "ghent", "brussels", "belgium", "vub", "ulb", "ku leuven"]):
        return "Belgium"
    # Sweden
    if any(x in u for x in ["stockholm", "lund", "uppsala", "gothenburg", "karolinska", "kth ", "chalmers"]):
        return "Sweden"
    # Norway
    if any(x in u for x in ["oslo", "bergen", "norway", "norwegian", "trondheim", "tromso"]):
        return "Norway"
    # Denmark
    if any(x in u for x in ["copenhagen", "aarhus", "denmark", "danish", "aalborg", "technical university of denmark"]):
        return "Denmark"
    # Finland
    if any(x in u for x in ["helsinki", "aalto", "finland", "tampere", "turku", "abo akademi"]):
        return "Finland"
    # Ireland
    if any(x in u for x in ["dublin", "ireland", "trinity college dublin", "university college dublin", "galway", "cork ireland"]):
        return "Ireland"
    # Spain
    if any(x in u for x in ["barcelona", "madrid", "valencia", "seville", "granada", "bilbao", "complutense", "autonoma barcelona", "pompeu fabra", "ie university", "iese", "esade"]):
        return "Spain"
    # Italy
    if any(x in u for x in ["milano", "milan", "rome", "bologna", "padua", "padova", "naples", "turin", "florence", "pisa", "sapienza", "politecnico", "bocconi", "universita ", "università"]):
        return "Italy"
    # Poland
    if any(x in u for x in ["warsaw", "krakow", "poland", "adam mickiewicz", "agh university", "jagiellonian", "wroclaw", "poznan", "gdansk", "lodz"]):
        return "Poland"
    # Austria
    if any(x in u for x in ["vienna", "austria", "wien", "innsbruck", "graz", "wbu"]):
        return "Austria"
    # Israel
    if any(x in u for x in ["tel aviv", "hebrew university", "technion", "israel", "weizmann", "ben gurion", "haifa"]):
        return "Israel"
    # Singapore
    if any(x in u for x in ["singapore", "nus ", "nanyang", "ntu singapore", "smu singapore"]):
        return "Singapore"
    # New Zealand
    if any(x in u for x in ["auckland", "wellington", "new zealand", "otago", "canterbury nz", "victoria university of wellington"]):
        return "New Zealand"
    # Mozambique
    if any(x in u for x in ["mozambique", "eduardo mondlane", "universidade eduardo mondlane", "maputo"]):
        return "Mozambique"
    # South Africa
    if any(x in u for x in ["cape town", "johannesburg", "south africa", "witwatersrand", "stellenbosch", "kwazulu", "pretoria"]):
        return "South Africa"
    # Russia
    if any(x in u for x in ["moscow", "st petersburg", "russia", "novosibirsk", "tomsk", "kazan", "sechenov", "mphi", "hse moscow", "mpei", "bauman"]):
        return "Russian Federation"
    # Brazil (Pontificia Universidade, PUCRS, PUCPR, etc.)
    if any(x in u for x in ["sao paulo", "rio de janeiro", "brasil", "brazil", "unicamp", "unesp", "ufrj", "usp ", "federal de", "universidade de sao paulo", "universidade estadual", "universidade federal", "pontificia universidade", "pucrs", "pucpr", "rio grande do sul", "parana brazil", "unifesp", "unicamp", "minas gerais", "bahia", "pernambuco", "ceara", "goias", "universidade nove de julho", "universidade paulista", "universidade presbiteriana mackenzie", "universidade regional de blumenau", "furb", "universidade tecnologica federal do parana", "utfpr", "universidade de caxias do sul", "universidade de fortaleza", "unifor", "universidade de passo fundo", "universidade do estado de mato grosso", "unemat", "universidade do estado de santa catarina", "udesc", "universidade do vale do itajai", "univali", "universidade do vale do rio dos sinos", "unisinos"]):
        return "Brazil"
    # Mexico
    if any(x in u for x in ["mexico", "monterrey", "itam", "tec de monterrey", "unam", "uam ", "ipn"]):
        return "Mexico"
    # Chile / Argentina / Colombia etc.
    if any(x in u for x in ["santiago chile", "chile", "pontificia chile", "universidad de chile"]):
        return "Chile"
    if any(x in u for x in ["buenos aires", "argentina", "cordoba argentina", "universidad de buenos aires", "nacional de cuyo", "nacional de cordoba", "mar del plata", "nacional de quilmes", "nacional de rosario", "nacional de san luis", "nacional de tucuman", "nacional del comahue", "nacional del litoral", "nacional del nordeste", "nacional del sur", "tecnologica nacional argentina", "universidad tecnologica nacional"]):
        return "Argentina"
    if any(x in u for x in ["colombia", "bogota", "andes colombia", "uniandes"]):
        return "Colombia"
    # Portugal
    if any(x in u for x in ["lisbon", "portugal", "porto", "coimbra", "nova lisboa", "catolica portugal", "universidade catolica portuguesa", "catolica portuguesa", "universidade da beira interior", "universidade da madeira", "universidade de aveiro", "universidade de evora", "universidade de lisboa", "universidade de tras os montes", "universidade do algarve", "universidade do minho", "universidade dos acores", "universidade lusofona", "lusofona de humanidades"]):
        return "Portugal"
    # Greece
    if any(x in u for x in ["athens", "greece", "thessaloniki", "patras", "crete"]):
        return "Greece"
    # Czech / Hungary / Romania
    if any(x in u for x in ["prague", "czech", "charles university prague"]):
        return "Czechia"
    if any(x in u for x in ["budapest", "hungary", "central european university"]):
        return "Hungary"
    if any(x in u for x in ["bucharest", "romania", "cluj romania"]):
        return "Romania"
    # India (abroad list - few)
    if any(x in u for x in ["india", "iit ", "iisc", "iim ", "tata institute", "bombay", "delhi", "bangalore", "chennai", "hyderabad", "kolkata", "iit madras", "iit bombay", "iit delhi"]):
        return "India"
    return None


def main():
    import sys
    path = sys.argv[1] if len(sys.argv) > 1 else None
    if not path or not os.path.isfile(path):
        path = os.path.join(os.path.expanduser("~"), "Desktop", "Loan data matrix  for website - institutes-abroad-standardized.csv")
    if not os.path.isfile(path):
        print("File not found:", path)
        return
    rows = []
    with open(path, "r", encoding="utf-8") as f:
        reader = csv.reader(f)
        rows = list(reader)
    if not rows:
        print("Empty file")
        return
    header = rows[0]
    try:
        ui = header.index("University")
        ci = header.index("Country / Main Campus")
    except (ValueError, IndexError):
        ui, ci = 1, 2
    # 1) Build institute -> correct country: first from non-webometrics rows (majority), then infer
    uni_countries = defaultdict(list)
    for row in rows[1:]:
        if len(row) <= max(ui, ci):
            continue
        u, c = row[ui].strip(), row[ci].strip()
        if not u:
            continue
        uni_countries[u].append(c)
    # Majority country per university (excluding empty)
    uni_to_country = {}
    for u, countries in uni_countries.items():
        non_empty = [c for c in countries if c and c.strip()]
        if not non_empty:
            uni_to_country[u] = ""
            continue
        majority = Counter(non_empty).most_common(1)[0][0]
        uni_to_country[u] = majority
    # 2) Override with inferred country where inference says different (fix wrong USA etc.)
    overrides = 0
    for u in list(uni_to_country.keys()):
        inferred = infer_country_from_name(u)
        if inferred is None:
            continue
        current = (uni_to_country[u] or "").strip().lower()
        inferred_std = normalize_country(inferred)
        # If current is USA but inferred is Turkey/Kazakhstan/etc., override
        if current in ("united states of america", "usa", "") and inferred_std != "United States of America":
            uni_to_country[u] = inferred_std
            overrides += 1
        # Normalize multi-country: e.g. Taiwan vs China, UK vs England
        if current and inferred_std and normalize_country(current) != inferred_std:
            if inferred_std in ("Taiwan", "Turkiye", "Lebanon", "Jordan", "Egypt", "Saudi Arabia", "Pakistan", "Bangladesh", "Thailand", "Vietnam", "Malaysia", "Indonesia", "Kazakhstan", "Uzbekistan"):
                uni_to_country[u] = inferred_std
                overrides += 1
    # 3) Resolve multi-country: use known correct for the 12 we found
    multi_fix = {
        "Adam Mickiewicz University": "Poland",
        "AGH University of Krakow": "Poland",
        "American University of Beirut (AUB)": "Lebanon",
        "Applied Science Private University - Jordan": "Jordan",
        "Jeonbuk National University": "South Korea",
        "National Cheng Kung University (NCKU)": "Taiwan",
        "National Taiwan University": "Taiwan",
        "National Taiwan University of Science and Technology (Taiwan Tech)": "Taiwan",
        "National Tsing Hua University": "Taiwan",
        "Northeastern University": "United States of America",  # majority USA
        "University of Leicester": "United Kingdom",
        "University of Newcastle": "Australia",
    }
    for u, c in multi_fix.items():
        if u in uni_to_country:
            uni_to_country[u] = normalize_country(c)
    # 4) Apply to every row: set country from uni_to_country (or infer) and normalize
    updated = 0
    for row in rows[1:]:
        if len(row) <= max(ui, ci):
            continue
        u = row[ui].strip()
        if not u:
            continue
        correct = uni_to_country.get(u) or infer_country_from_name(u) or row[ci]
        correct_std = normalize_country(correct) if correct else ""
        old_val = (row[ci].strip() or "")
        row[ci] = correct_std
        if old_val != correct_std:
            updated += 1
    # 5) Write back
    with open(path, "w", encoding="utf-8", newline="") as f:
        writer = csv.writer(f)
        writer.writerows(rows)
    print("Wrote", path)
    print("Rows updated/normalized:", updated)
    print("Overrides from name inference:", overrides)


if __name__ == "__main__":
    main()
