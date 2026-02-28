# Firestore rules (required for Apply & Pay)

The payment flow writes to Firestore. You must allow the correct collections in **Firebase Console**.

1. Open [Firebase Console](https://console.firebase.google.com/) → your project (**aoo-loan-applications**).
2. Go to **Firestore Database** → **Rules**.
3. Replace the rules with the contents of **firestore.rules** in this repo (or add the `applications` and `_counters` blocks if you already have other rules).
4. Click **Publish**.

Required rules:

- **applications**: signed-in users can create and read application documents (used for each ₹99 application).
- **_counters**: signed-in users can read/write the `applications` counter document (used to generate unique 6-digit application IDs).

If `_counters` is missing, the site will fall back to a random 6-digit ID so the payment popup still opens, but adding the rule gives guaranteed unique IDs.
