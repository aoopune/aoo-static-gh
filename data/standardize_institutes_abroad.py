# -*- coding: utf-8 -*-
"""
Standardize institute names in 'Copy of Loan data - Institutes data abroad.csv'
so one canonical name maps all bank variants. Output: institutes-abroad-standardized.csv
Only the University column is altered; Lender, Country, Criteria, Source, Courses unchanged.
Names are normalized to ASCII (no diacritics) so they are typable and searchable everywhere.
"""
import csv
import os
import re
import unicodedata

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
INPUT_CSV = os.path.join(SCRIPT_DIR, "Copy of Loan data - Institutes data abroad.csv")
OUTPUT_CSV = os.path.join(SCRIPT_DIR, "institutes-abroad-standardized-ascii.csv")
OUTPUT_CSV_ALT = os.path.join(SCRIPT_DIR, "institutes-abroad-standardized.csv")

# Country names: map variants to same format as rest of file (typable, consistent)
COUNTRY_STANDARD_MAP = {
    "usa": "United States of America",
    "u.s.a.": "United States of America",
    "united states": "United States of America",
    "us": "United States of America",
    "uk": "United Kingdom",
    "u.k.": "United Kingdom",
    "united kingdom": "United Kingdom",
    "swiss confederation": "Switzerland",
    "state of israel": "Israel",
    "türkiye": "Turkiye",
    "turkey": "Turkiye",
    "korea": "South Korea",
    "republic of korea": "South Korea",
    "russia": "Russian Federation",
    "uae": "United Arab Emirates",
    "emirates": "United Arab Emirates",
    "hong kong": "China",  # if you list HK under China
    "taiwan": "Taiwan",
    "new zealand": "New Zealand",
    "south africa": "South Africa",
    "northern cyprus": "Northern Cyprus",
}

# Explicit variant -> standard name (publicly known / Google standard)
# Order: more specific variants first so we don't overwrite with a shorter match
STANDARD_NAME_MAP = {
    # MIT
    "Massachusetts Institute of Technology (MIT)": "Massachusetts Institute of Technology",
    "Massachusetts Institute of Technology: Sloan": "Massachusetts Institute of Technology",
    # Oxford / Cambridge
    "University of Oxford: Saïd": "University of Oxford",
    "University of Cambridge: Judge": "University of Cambridge",
    # UC system
    "University of California, Berkeley (UCB)": "University of California, Berkeley",
    "University of California Berkeley": "University of California, Berkeley",
    "University of California at Berkeley: Haas": "University of California, Berkeley",
    "University of California, Los Angeles (UCLA)": "University of California, Los Angeles",
    "University of California Los Angeles UCLA": "University of California, Los Angeles",
    "University of California Los Angeles: Anderson": "University of California, Los Angeles",
    "University of California, San Diego (UCSD)": "University of California, San Diego",
    "University of California San Diego": "University of California, San Diego",
    "University of California--Davis": "University of California, Davis",
    "University of California - Berkeley": "University of California, Berkeley",
    "University of California - Davis": "University of California, Davis",
    "University of California - Irvine": "University of California, Irvine",
    "University of California - Los Angeles": "University of California, Los Angeles",
    "University of California - Merced": "University of California, Merced",
    "University of California - Riverside": "University of California, Riverside",
    "University of California - San Diego": "University of California, San Diego",
    "University of California - San Francisco": "University of California, San Francisco",
    "University of California - Santa Barbara": "University of California, Santa Barbara",
    "University of California - Santa Cruz": "University of California, Santa Cruz",
    "University of California at Irvine: Merage": "University of California, Irvine",
    "University of California Santa Barbara": "University of California, Santa Barbara",
    "University of California, Santa Barbara (UCSB)": "University of California, Santa Barbara",
    "University of California Santa Cruz": "University of California, Santa Cruz",
    "University of California Riverside": "University of California, Riverside",
    "University of California, Riverside": "University of California, Riverside",
    "University of California Irvine": "University of California, Irvine",
    "University of California Davis": "University of California, Davis",
    "University of California San Francisco": "University of California, San Francisco",
    # Caltech
    "California Institute of Technology (Caltech)": "California Institute of Technology",
    "California Institute of Technology Caltech": "California Institute of Technology",
    # Columbia / NYU
    "Columbia University New York": "Columbia University",
    "New York University (NYU)": "New York University",
    "New York University: Stern": "New York University",
    # Penn / Chicago / Duke / Cornell / etc.
    "University of Pennsylvania: Wharton": "University of Pennsylvania",
    "University of Chicago: Booth": "University of Chicago",
    "Duke University: Fuqua": "Duke University",
    "Cornell University: Johnson": "Cornell University",
    "Northwestern University: Kellogg": "Northwestern University",
    "University of Michigan: Ross": "University of Michigan",
    "University of Michigan-Ann Arbor": "University of Michigan",
    "University of Michigan - Ann Arbor": "University of Michigan",
    "University of North Carolina: Kenan-Flagler": "University of North Carolina at Chapel Hill",
    "University of North Carolina Chapel Hill": "University of North Carolina at Chapel Hill",
    "University of North Carolina, Chapel Hill": "University of North Carolina at Chapel Hill",
    "University of Minnesota: Carlson": "University of Minnesota",
    "University of Minnesota System": "University of Minnesota",
    "University of Minnesota - Twin Cities": "University of Minnesota",
    "Arizona State University: Carey": "Arizona State University",
    "Michigan State University: Broad": "Michigan State University",
    "Pennsylvania State University: Smeal": "Pennsylvania State University",
    "University of Maryland: Smith": "University of Maryland, College Park",
    "University of Maryland College Park": "University of Maryland, College Park",
    "University of Maryland - College Park": "University of Maryland, College Park",
    "University of Maryland - Baltimore": "University of Maryland, Baltimore",
    "University of Maryland - Baltimore County": "University of Maryland, Baltimore County",
    "Ohio State University: Fisher": "Ohio State University",
    "University of Southern California: Marshall": "University of Southern California",
    "University of Texas at Austin: McCombs": "University of Texas at Austin",
    "University of Texas Austin": "University of Texas at Austin",
    "Texas A&M University--College Station": "Texas A&M University",
    "University of Washington: Foster": "University of Washington",
    "Washington University in St. Louis": "Washington University in St. Louis",
    "Washington University Saint Louis": "Washington University in St. Louis",
    "Washington University: Olin": "Washington University in St. Louis",
    "Dartmouth College: Tuck": "Dartmouth College",
    "Dartmouth college": "Dartmouth College",
    "Boston University: Questrom": "Boston University",
    "Boston College: Carroll": "Boston College",
    "Georgia Institute of Technology: Scheller": "Georgia Institute of Technology",
    "University of Texas at Dallas: Jindal": "University of Texas at Dallas",
    "University of Notre Dame: Mendoza": "University of Notre Dame",
    "University of South Carolina: Moore": "University of South Carolina",
    "Babson College: Olin": "Babson College",
    "Temple University: Fox": "Temple University",
    "Emory University: Goizueta": "Emory University",
    "Vanderbilt University: Owen": "Vanderbilt University",
    "University of Virginia: Darden": "University of Virginia",
    "Purdue University: Krannert": "Purdue University",
    "University of Pittsburgh: Katz": "University of Pittsburgh",
    "Georgetown University: McDonough": "Georgetown University",
    "Rice University: Jones": "Rice University",
    "Rice university": "Rice University",
    "Brigham Young University: Marriott": "Brigham Young University",
    "University of Rochester: Simon": "University of Rochester",
    "Southern Methodist University (SMU): Cox": "Southern Methodist University",
    "University of Iowa: Tippie": "University of Iowa",
    "IU Kelley School of Business": "Indiana University Bloomington",
    "University of Illinois at Urbana-Champaign": "University of Illinois at Urbana-Champaign",
    "University of Illinois Urbana-Champaign": "University of Illinois at Urbana-Champaign",
    "University of Illinois Urbana Champaign": "University of Illinois at Urbana-Champaign",
    "University of Illinois--Chicago": "University of Illinois Chicago",
    "University at Buffalo SUNY": "University at Buffalo",
    "University of Colorado--Boulder": "University of Colorado Boulder",
    "University of Colorado - Boulder": "University of Colorado Boulder",
    "University of Colorado - Denver": "University of Colorado, Denver",
    "Rutgers - The State University of New Jersey, Newark--New Brunswick": "Rutgers University",
    "Rutgers The State University of New Jersey": "Rutgers University",
    "North Carolina State University--Raleigh": "North Carolina State University",
    "University of Wisconsin Madison": "University of Wisconsin-Madison",
    "University of Wisconsin": "University of Wisconsin-Madison",
    "University of Wisconsin - Madison": "University of Wisconsin-Madison",
    "University of Wisconsin - Milwaukee": "University of Wisconsin-Milwaukee",
    "University of Wisconsin, Madison": "University of Wisconsin-Madison",
    "University of Massachusetts--Amherst": "University of Massachusetts Amherst",
    "University of Massachusetts, Amherst": "University of Massachusetts Amherst",
    "University of Massachusetts Amherst": "University of Massachusetts Amherst",
    "University of Massachusetts - Boston": "University of Massachusetts Boston",
    "University of Massachusetts": "University of Massachusetts Amherst",  # generic -> flagship
    "University of Massachusetts - Amherst": "University of Massachusetts Amherst",
    "University of Massachusetts - Boston": "University of Massachusetts Boston",
    "University of Massachusetts - Lowell": "University of Massachusetts Lowell",
    "University of Massachusetts - Dartmouth": "University of Massachusetts Dartmouth",
    "University of Massachusetts-Boston": "University of Massachusetts Boston",
    "University of Massachusetts-Lowell": "University of Massachusetts Lowell",
    # UCL / NUS / NTU / LSE / KCL
    "UCL (University College London)": "University College London",
    "UCL University College London": "University College London",
    "University College London (UCL)": "University College London",
    "National University of Singapore (NUS)": "National University of Singapore",
    "National University of Singapore Business School": "National University of Singapore",
    "Nanyang Technological University, Singapore (NTU Singapore)": "Nanyang Technological University",
    '"Nanyang Technological University, Singapore (NTU Singapore)"': "Nanyang Technological University",
    "London School of Economics and Political Science (LSE)": "London School of Economics and Political Science",
    "King's College London (KCL)": "King's College London",
    "King's College London": "King's College London",
    "National Taiwan University (NTU)": "National Taiwan University",
    # ETH / EPFL / Zurich
    "ETH Zurich (Swiss Federal Institute of Technology)": "ETH Zurich",
    "ETH Zurich – Swiss Federal Institute of Technology Zurich": "ETH Zurich",
    "Swiss Federal Institute of Technology Zurich": "ETH Zurich",
    "École Polytechnique Fédérale de Lausanne (Swiss Federal Institute of Technology in Lausanne)": "École Polytechnique Fédérale de Lausanne",
    "University of Zurich": "University of Zurich",
    "Universität Zürich": "University of Zurich",
    # UK
    "Imperial College Business School": "Imperial College London",
    "City University: Cass": "City, University of London",
    "City Univ- Cass Business School, London": "City, University of London",
    "The University of Nottingham": "University of Nottingham",
    "Lancaster University Management School": "Lancaster University",
    "University of Strathclyde Business School": "University of Strathclyde",
    "Durham University Business School": "Durham University",
    "University of Edinburgh Business School": "University of Edinburgh",
    "Warwick Business School (University of Warwick)": "University of Warwick",
    "University of Warwick": "University of Warwick",
    "The University of Warwick": "University of Warwick",
    "University of Sheffield": "University of Sheffield",
    "The University of Sheffield": "University of Sheffield",
    "Newcastle University Newcastle upon Tyne": "Newcastle University",
    "Bristol University": "University of Bristol",
    # The X -> X (common)
    "The University of Melbourne": "University of Melbourne",
    "The University of Sydney": "University of Sydney",
    "The University of Queensland": "University of Queensland",
    "The University of Manchester": "University of Manchester",
    "The University of Western Australia": "University of Western Australia",
    "The University of Tokyo": "University of Tokyo",
    "The University of Hong Kong": "University of Hong Kong",
    "The Chinese University of Hong Kong": "Chinese University of Hong Kong",
    "The Hong Kong Polytechnic University": "Hong Kong Polytechnic University",
    "The University of Auckland": "University of Auckland",
    "The University of Amsterdam": "University of Amsterdam",
    "The University of New South Wales": "University of New South Wales",
    "The University of Osaka": "Osaka University",
    "The Hong Kong University of Science and Technology": "Hong Kong University of Science and Technology",
    "The University of Dublin": "Trinity College Dublin",
    "Trinity College Dublin, The University of Dublin": "Trinity College Dublin",
    # Europe
    "LMU Munich (Ludwig-Maximilians-Universität München)": "Ludwig Maximilians University Munich",
    "Ludwig-Maximilians-Universität München": "Ludwig Maximilians University Munich",
    "Ludwig-Maximilians – Universität München": "Ludwig Maximilians University Munich",
    "Technical University of Munich": "Technical University of Munich",
    "Technische Universität München": "Technical University of Munich",
    "Heidelberg University (Ruprecht-Karls-Universität Heidelberg)": "Heidelberg University",
    "Ruprecht-Karls-Universität Heidelberg": "Heidelberg University",
    "Ruprecht Karls Universität Heidelberg": "Heidelberg University",
    "KU Leuven (Katholieke Universiteit Leuven)": "KU Leuven",
    "Katholieke Universiteit Leuven (KU Leauven)": "KU Leuven",
    "PSL Research University (Université Paris Sciences et Lettres)": "PSL University",
    "Sorbonne University (merged from Paris IV & UPMC)": "Sorbonne University",
    "Karolinska Institute (Karolinska Institutet)": "Karolinska Institutet",
    "Karolinska Institute": "Karolinska Institutet",
    "Delft University of Technology TU Delft": "Delft University of Technology",
    "Universiti Malaya (UM)": "Universiti Malaya",
    "Ghent University / Universiteit Gent": "Ghent University",
    "Aarhus University / Aarhus Universitet": "Aarhus University",
    "Lund University / Lunds Universitet": "Lund University",
    "Uppsala University / Uppsala Universitet": "Uppsala University",
    "Rheinisch Westfalische Technische Hochschule Aachen": "RWTH Aachen University",
    "RWTH Aachen University": "RWTH Aachen University",
    "Technische University Dresden": "Technische Universität Dresden",
    "Free University of Berlin": "Freie Universität Berlin",
    "Humboldt University of Berlin": "Humboldt-Universität zu Berlin",
    "Humboldt-Universität zu Berlin": "Humboldt-Universität zu Berlin",
    "KIT, Karlsruher Institut für Technologie": "Karlsruhe Institute of Technology",
    "University Hamburg": "University of Hamburg",
    "University Bern": "University of Bern",
    "University de Geneve": "University of Geneva",
    "University degli Studi di Milano": "University of Milan",
    "University degli Studi di Padova": "University of Padua",
    "University degli Studi di Napoli Federico II": "University of Naples Federico II",
    "Università di Bologna (Università degli Studi di Bologna)": "University of Bologna",
    "Universitat de Barcelona": "University of Barcelona",
    "Università degli Studi di Roma La Sapienza": "Sapienza University of Rome",
    "University of St Gallen": "University of St. Gallen",
    "IMD (International Institute of Management Development)": "IMD Business School",
    "IMD Business School, Lausanne": "IMD Business School",
    "HEC Paris (Ecole des Hautes Etudes Commerciales de Paris)": "HEC Paris",
    "IE Business School, Madrid": "IE University",
    "Rotterdam School of Management": "Erasmus University Rotterdam",
    "Rotterdam School of Management, Erasmus University": "Erasmus University Rotterdam",
    "SDA Bocconi School of Management, Milan": "Bocconi University",
    "IESE Business School, Barcelona": "IESE Business School",
    "London Business School, London": "London Business School",
    "INSEAD Business School France/ Singapore": "INSEAD",
    "INSEAD Business School": "INSEAD",
    "University College Dublin: Smurfit": "University College Dublin",
    "Hong Kong University of Science and Technology (HKUST) Business School": "Hong Kong University of Science and Technology",
    "Chinese University of Hong Kong (CUHK) Business School": "Chinese University of Hong Kong",
    "Shanghai Jiao Tong University: Antai": "Shanghai Jiao Tong University",
    "China Europe International Business School (CEIBS)": "China Europe International Business School",
    "University of Toronto: Rotman": "University of Toronto",
    "Western University: Ivey": "Western University",
    "Queen's University: Smith": "Queen's University",
    "Queen's university - Kingston": "Queen's University",
    "University of Montreal": "Université de Montréal",
    "Macquarie Graduate School of Management": "Macquarie University",
    "AGSM (Australian Graduate School of Management) at UNSW Business School": "University of New South Wales",
    "University of Adelaide": "University of Adelaide",
    "Adelaide University": "University of Adelaide",
    "University of Western Australia": "University of Western Australia",
    "University of Queensland": "University of Queensland",
    "University of New South Wales": "University of New South Wales",
    "University of Sydney": "University of Sydney",
    "University of Melbourne": "University of Melbourne",
    "University of Hong Kong": "University of Hong Kong",
    "University of Manchester": "University of Manchester",
    "University of Bristol": "University of Bristol",
    "University of Birmingham": "University of Birmingham",
    "University of Leeds": "University of Leeds",
    "University of Southampton": "University of Southampton",
    "University of Glasgow": "University of Glasgow",
    "University of Exeter": "University of Exeter",
    "University of Nottingham": "University of Nottingham",
    "University of Bath": "University of Bath",
    "University of York": "University of York",
    "University of St Andrews": "University of St Andrews",
    "Cardiff University": "Cardiff University",
    "University of Edinburgh": "University of Edinburgh",
    "University of Amsterdam": "University of Amsterdam",
    "VU University of Amsterdam /\nVrije Universiteit Amsterdam": "Vrije Universiteit Amsterdam",
    "University of Maryland Baltimore": "University of Maryland, Baltimore",
    "University of Tennessee -Knoxville": "University of Tennessee, Knoxville",
    "University of Tennessee - Knoxville": "University of Tennessee, Knoxville",
    "University of Tennessee - Chattanooga": "University of Tennessee, Chattanooga",
    "University of Nebraska Lincoln": "University of Nebraska-Lincoln",
    "University of Nebraska - Lincoln": "University of Nebraska-Lincoln",
    "University of Nebraska - Omaha": "University of Nebraska, Omaha",
    "University of Alabama Birmingham": "University of Alabama at Birmingham",
    "Washington State University Pullman": "Washington State University",
    "M D Anderson Cancer Center University of Texas": "University of Texas MD Anderson Cancer Center",
    "Virginia Tech": "Virginia Polytechnic Institute and State University",
    "Virginia Polytechnic Institute (Virginia Tech)": "Virginia Polytechnic Institute and State University",
    "Virginia Polytechnic Institute": "Virginia Polytechnic Institute and State University",
    "City, University of London (including Bayes Business School)": "City, University of London",
    "City St Georges, University of London": "City, University of London",
    "City University London": "City, University of London",
    "Toronto Metropolitan University (formerly Ryerson University)": "Toronto Metropolitan University",
    "ESCP Business School (formerly ESCP Europe)": "ESCP Business School",
    "Imam Abdulrahman Bin Faisal University (formerly University of Dammam)": "Imam Abdulrahman Bin Faisal University",
    "Jeonbuk National University (formerly known as Chonbuk National University)": "Jeonbuk National University",
    "Manipal Academy of Higher Education (formerly Manipal University)": "Manipal Academy of Higher Education",
    "University of Memphis (including Lambuth)": "University of Memphis",
    "University of Florida": "University of Florida",
    "University of Georgia": "University of Georgia",
    "Lowa State University": "Iowa State University",  # typo
    "Zhejiang University (National Che Kiang University)": "Zhejiang University",
    "Universidade de São Paulo USP": "Universidade de São Paulo",
    "University of Cologne": "University of Cologne",
    "Ramon Lull University": "Ramon Llull University",
    "The Katz School at Yeshiva University": "Yeshiva University",
    "University of Maryland, Baltimore": "University of Maryland, Baltimore",
    "University of Maryland, Baltimore County": "University of Maryland, Baltimore County",
    "University of Hawaii System": "University of Hawaii at Manoa",
    "Wageningen University & Research Centre": "Wageningen University & Research",
    # Same university different names (from line-by-line check)
    "Queensland University of Technology (QUT)": "Queensland University of Technology",
    "University of New South Wales (UNSW Sydney)": "University of New South Wales",
    "Universidade de Sao Paulo (USP)": "Universidade de Sao Paulo",
    "Laval University (University Laval)": "Laval University",
    "University Of British Columbia": "University of British Columbia",
    "University of British Columbia (UBC)": "University of British Columbia",
    "University of Montreal (University of Montreal)": "University of Montreal",
    "University of Sherbrooke (University of Sherbrooke)": "University of Sherbrooke",
    "Beihang University (Beijing University of Aeronautics and Astronautics)": "Beihang University",
    "Beihang University (former BUAA)": "Beihang University",
    "Beijing (Northern) Jiaotong University": "Beijing Jiaotong University",
    "Beijing University of Technology (Beijing Polytechnic University)": "Beijing University of Technology",
    "Fudan University (Shanghai Medical University)": "Fudan University",
    "Edhec Business School": "EDHEC Business School",
    "Karlsruhe Institute of Technology (KIT)": "Karlsruhe Institute of Technology",
    "Technical University of Munich (Technische Universitat Munchen)": "Technical University of Munich",
    "University of Freiburg (Albert-Ludwigs-Universitat Freiburg)": "University of Freiburg",
    "University of Tubingen (Eberhard Karls Universitat Tubingen)": "University of Tubingen",
    "Tokyo University of Science (RIKADAI)": "Tokyo University of Science",
    "Universiti Teknologi Malaysia (UTM)": "Universiti Teknologi Malaysia",
    "Nanyang Technological University, Singapore (NTU)": "Nanyang Technological University",
    "Sungkyunkwan University (SKKU)": "Sungkyunkwan University",
    "ETH Zurich (Eidgenossische Technische Hochschule Zurich / Swiss Federal Institute of Technology Zurich)": "ETH Zurich",
    "University of Zurich (UZH)": "University of Zurich",
    "Imperial College London (Imperial College of Science, Technology and Medicine)": "Imperial College London",
    "Queen Mary University of London (QMUL)": "Queen Mary University of London",
    "University of East Anglia (UEA)": "University of East Anglia",
    "Claremont Mckenna College": "Claremont McKenna College",
    "Columbia University (Columbia University in the City of New York)": "Columbia University",
    "Columbia University (Fu Foundation)": "Columbia University",
    "Depaul University": "DePaul University",
    "Georgia Institute of Technology (Georgia Tech)": "Georgia Institute of Technology",
    "Mgh Institute of Health Professions": "MGH Institute of Health Professions",
    "New Jersey Institute of Technology (NJIT)": "New Jersey Institute of Technology",
    "Rochester Institute of Technology (RIT)": "Rochester Institute of Technology",
    "Towson University (Baltimore Hebrew University)": "Towson University",
    "University at Albany (SUNY)": "University at Albany",
    "University of California, San Diego (UC San Diego)": "University of California, San Diego",
    "University of Illinois Chicago (UIC)": "University of Illinois Chicago",
    "University of Michigan (University of Michigan\u2013Ann Arbor)": "University of Michigan",
    "University of Michigan (University of Michigan-Ann Arbor)": "University of Michigan",
    "University of Minnesota (System)": "University of Minnesota",
    "University of Pennsylvania (UPenn)": "University of Pennsylvania",
    "University of Southern California (Viterbi)": "University of Southern California",
    "University of Illinois, Chicago (UIC)": "University of Illinois Chicago",
    # "The University of X" -> "University of X" (same institution)
    "The University of Newcastle, Australia (UON)": "University of Newcastle",
    "The University of Newcastle": "University of Newcastle",
    "The University of Hong Kong (HKU)": "University of Hong Kong",
    "The University of New South Wales (UNSW Australia)": "University of New South Wales",
    "The University of Arizona": "University of Arizona",
    "The University of Alabama": "University of Alabama",
    "The University of Tampa": "University of Tampa",
    "The University of Chicago": "University of Chicago",
    "The University of Tennessee, Knoxville": "University of Tennessee, Knoxville",
    "The University of Texas Health Science - San Antonio": "University of Texas Health Science Center at San Antonio",
    "The University of Texas Health Science Center at Houston": "University of Texas Health Science Center at Houston",
    "The University of Texas MD Anderson Cancer Center": "University of Texas MD Anderson Cancer Center",
    "The University of Texas Medical Branch": "University of Texas Medical Branch at Galveston",
    "The University of Texas Rio Grande Valley": "University of Texas Rio Grande Valley",
    "The University of Texas at Arlington": "University of Texas at Arlington",
    "The University of Texas at Dallas": "University of Texas at Dallas",
    "The University of West Florida": "University of West Florida",
}


def normalize_university(name):
    """Return standardized institute name. Only alter University column."""
    if not name or not name.strip():
        return name
    n = name.strip()
    # Strip parenthetical "(including ...)" and "(formerly ...)" so one name per university
    if " (including " in n:
        n = n.split(" (including ")[0].strip()
    if " (formerly " in n:
        n = n.split(" (formerly ")[0].strip()
    if " (formerly known as " in n:
        n = n.split(" (formerly known as ")[0].strip()
    # Unify hyphen vs comma for same university (so one search result shows all lenders)
    # Explicit overrides first (special canonical forms: hyphen not comma)
    if n == "University of Wisconsin - Madison":
        n = "University of Wisconsin-Madison"
    elif n == "University of Michigan - Ann Arbor":
        n = "University of Michigan"
    elif n == "University of Minnesota - Twin Cities":
        n = "University of Minnesota"
    elif n.startswith("University of Wisconsin - "):
        campus = n[27:].strip()
        if campus == "Madison":
            n = "University of Wisconsin-Madison"
        elif campus == "Milwaukee":
            n = "University of Wisconsin-Milwaukee"
        else:
            n = "University of Wisconsin, " + campus
    elif n.startswith("University of California - "):
        n = "University of California, " + n[27:].strip()
    elif n.startswith("University of Maryland - "):
        n = "University of Maryland, " + n[25:].strip()
    elif n.startswith("University of Tennessee - "):
        n = "University of Tennessee, " + n[26:].strip()
    elif n.startswith("University of Missouri - "):
        n = "University of Missouri, " + n[25:].strip()
    elif n.startswith("University of Colorado - "):
        campus = n[25:].strip()
        if campus == "Boulder":
            n = "University of Colorado Boulder"
        elif campus == "Denver":
            n = "University of Colorado, Denver"
        else:
            n = "University of Colorado, " + campus
    elif n.startswith("University of Massachusetts - "):
        campus = n[30:].strip()
        if campus == "Amherst":
            n = "University of Massachusetts Amherst"
        elif campus == "Boston":
            n = "University of Massachusetts Boston"
        elif campus == "Lowell":
            n = "University of Massachusetts Lowell"
        elif campus == "Dartmouth":
            n = "University of Massachusetts Dartmouth"
        else:
            n = "University of Massachusetts " + campus
    elif " - " in n and n.startswith("University of "):
        # Generic: "University of X - Y" -> "University of X, Y" when Y is a campus name
        idx = n.find(" - ")
        after = n[idx + 3 :].strip()
        if after and not after.lower().startswith("university") and not after.lower().startswith("universidad"):
            n = n[:idx] + ", " + after
    # Exact match first
    if n in STANDARD_NAME_MAP:
        return STANDARD_NAME_MAP[n]
    # Strip trailing ": School/College name" and map base to standard
    if ": " in n:
        base = n.split(": ")[0].strip()
        if base in STANDARD_NAME_MAP:
            return STANDARD_NAME_MAP[base]
        # Map known "University of X at Y" -> "University of X, Y" etc.
        if base in STANDARD_NAME_MAP:
            return STANDARD_NAME_MAP[base]
        # Otherwise standardize to base (parent university)
        return base
    # Normalize "The University of X" -> "University of X" only if we have a standard
    if n.startswith("The "):
        without_the = n[4:].strip()
        if without_the in STANDARD_NAME_MAP:
            return STANDARD_NAME_MAP[without_the]
    return n


def to_ascii_name(name):
    """
    Convert institute name to ASCII-only so it is typable and searchable
    without special characters (no diacritics: a, o, u, e, n, c, etc.).
    Uses NFD decomposition + strip combining marks; German ss -> ss.
    """
    if not name or not isinstance(name, str):
        return name
    result = []
    for c in name:
        if c == "\u00df":  # ß
            result.append("ss")
            continue
        decomp = unicodedata.normalize("NFD", c)
        for d in decomp:
            if unicodedata.category(d) == "Mn":
                continue  # skip combining character (accent)
            if ord(d) < 128:
                result.append(d)
            else:
                # try base letter (e.g. from ă, ǎ -> a)
                base = unicodedata.normalize("NFD", d)
                if base and ord(base[0]) < 128 and unicodedata.category(base[0])[0] == "L":
                    result.append(base[0])
                else:
                    result.append(d)
    return "".join(result)


# Apostrophe-like characters: remove entirely so "Ha'il" -> "Hail", "King's" -> "Kings"
APOSTROPHE_CHARS = "'\u2019\u2018\u0060\u00b4\u02bc\u2032"  # ' ' ` ´ ʼ ′


def to_typable_searchable_name(name):
    """
    Make name simple to type and search: no apostrophes (Ha'il -> Hail),
    French Universite -> University, Italian Universita' -> University,
    Roman numerals -> digits (III -> 3), normalize spaces.
    """
    if not name or not isinstance(name, str):
        return name
    s = name.strip()

    # 1. Apostrophe: single letter before (d'Azur) -> space so "d Azur"; else remove (Ha'il->Hail, King's->Kings)
    for ap in APOSTROPHE_CHARS:
        parts = s.split(ap)
        if len(parts) <= 1:
            continue
        new_parts = []
        for i, p in enumerate(parts):
            new_parts.append(p)
            if i < len(parts) - 1:
                before_part = p.rstrip()
                after_part = parts[i + 1].lstrip() if parts[i + 1] else ""
                # Only add space when before is single letter (d'Azur -> d Azur)
                if len(before_part) == 1 and before_part.isalpha() and after_part and after_part[0].isalpha():
                    new_parts.append(" ")
                else:
                    new_parts.append("")
        s = "".join(new_parts)
    s = re.sub(r"\s+", " ", s).strip()

    # 2. French "Universite" -> "University" (so "University of Rennes 1" is clear)
    s = re.sub(r"\bUniversite\s+", "University ", s, flags=re.I)
    s = re.sub(r"\bUniversite\s+de\s+", "University of ", s, flags=re.I)
    s = re.sub(r"\bUniversite\s+du\s+", "University of ", s, flags=re.I)
    s = re.sub(r"\bUniversite\s+Paris\s+", "University Paris ", s, flags=re.I)
    s = re.sub(r"\bUniversite\s+Cote\s+", "University Cote ", s, flags=re.I)
    s = re.sub(r"\bUniversite\s+Claude\s+", "University Claude ", s, flags=re.I)
    s = re.sub(r"\bUniversite\s+Paul\s+", "University Paul ", s, flags=re.I)
    s = re.sub(r"\bUniversite\s+Libre\s+", "University Libre ", s, flags=re.I)
    s = re.sub(r"\bUniversite\s+Catholique\s+", "University Catholique ", s, flags=re.I)
    s = re.sub(r"\bUniversite\s+Pierre\s+", "University Pierre ", s, flags=re.I)
    # "University de Rennes 1" -> "University of Rennes 1" (so "1" = campus 1 is clear)
    s = re.sub(r"\bUniversity\s+de\s+", "University of ", s, flags=re.I)

    # 3. Italian "Universita'" (already apostrophe removed -> "Universita ") -> "University "
    s = re.sub(r"\bUniversita\s+degli\s+studi\s+di\s+", "University of ", s, flags=re.I)
    s = re.sub(r"\bUniversita\s+degli\s+Studi\s+di\s+", "University of ", s, flags=re.I)
    s = re.sub(r"\bUniversita\s+degli\s+Studi\s+della\s+", "University of ", s, flags=re.I)
    s = re.sub(r"\bUniversita\s+Politecnica\s+delle\s+Marche\b", "Polytechnic University of Marche", s, flags=re.I)
    s = re.sub(r"\bLibera\s+Universita\s+di\s+", "Free University of ", s, flags=re.I)
    s = re.sub(r"\bCa\s+Foscari\b", "Ca Foscari", s, flags=re.I)

    # 4. Roman numerals at word boundary -> digits (so "1" is obvious: Rennes 1, Lyon 1, Toulouse 3)
    # Roman numerals -> digits so "Rennes 1", "Toulouse 3", "Carlos 3" are clear
    s = re.sub(r"\s+III\b", " 3", s)
    s = re.sub(r"\s+II\b", " 2", s)
    s = re.sub(r"\s+IV\b", " 4", s)
    s = re.sub(r"\s+VI\b", " 6", s)
    s = re.sub(r"\s+III\s+", " 3 ", s)
    s = re.sub(r"\s+II\s+", " 2 ", s)

    # 5. Normalize spaces again
    s = re.sub(r"\s+", " ", s).strip()
    return s


def normalize_country(country):
    """Match country names to the same format as the rest of the file (typable, consistent)."""
    if not country or not isinstance(country, str):
        return country
    s = country.strip()
    key = s.lower()
    if key in COUNTRY_STANDARD_MAP:
        return COUNTRY_STANDARD_MAP[key]
    # ASCII for country too (e.g. Turkiye)
    return to_ascii_name(s)


def main():
    input_path = INPUT_CSV
    if not os.path.exists(input_path):
        alt = os.path.join(SCRIPT_DIR, "Copy of Loan data - institutes-abroad-standardized-double.csv")
        if os.path.exists(alt):
            input_path = alt
            print("Using input:", input_path)
    rows_out = []
    header = None
    with open(input_path, "r", encoding="utf-8", newline="") as f:
        reader = csv.reader(f)
        for i, row in enumerate(reader):
            if len(row) < 2:
                rows_out.append(row)
                continue
            # Header row: second column is "University"
            if row[1].strip() == "University":
                header = row
                rows_out.append(row)
                continue
            # Metadata lines before header (e.g. "Bank of India,Top 3000...")
            if header is None:
                rows_out.append(row)
                continue
            # Data row: standardize University (ASCII, typable) and Country (same format as rest)
            lender, university, rest = row[0], row[1], row[2:]
            standard_uni = normalize_university(university)
            standard_uni = to_ascii_name(standard_uni)
            standard_uni = to_typable_searchable_name(standard_uni)
            country = normalize_country(rest[0]) if len(rest) > 0 else ""
            rows_out.append([lender, standard_uni, country] + rest[1:])
    out_path = OUTPUT_CSV
    try:
        with open(OUTPUT_CSV, "w", encoding="utf-8", newline="") as f:
            writer = csv.writer(f)
            for row in rows_out:
                writer.writerow(row)
    except PermissionError:
        out_path = OUTPUT_CSV_ALT
        with open(OUTPUT_CSV_ALT, "w", encoding="utf-8", newline="") as f:
            writer = csv.writer(f)
            for row in rows_out:
                writer.writerow(row)
    print("Wrote", out_path)
    print("Rows:", len(rows_out))


if __name__ == "__main__":
    main()
