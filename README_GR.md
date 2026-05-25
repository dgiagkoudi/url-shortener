# URL Shortener

Μια full-stack εφαρμογή για τη δημιουργία σύντομων συνδέσμων (URL shortening), αντίστοιχη του Bitly. Σχεδιασμένη με έμφαση στην απόδοση και την καθαρή αρχιτεκτονική, επιτρέπει στους χρήστες να μετατρέπουν μεγάλα URLs σε σύντομα links με ταυτόχρονη καταγραφή των clicks σε πραγματικό χρόνο.

## Λειτουργίες

- Άμεση Συντόμευση URL: Δημιουργία μοναδικών κωδικών 6 χαρακτήρων με τη χρήση NanoID.
- Click Analytics: Καταγραφή σε πραγματικό χρόνο του αριθμού των επισκέψεων για κάθε σύνδεσμο.
- Full-stack Σύνδεση: Πλήρης επικοινωνία μεταξύ React frontend και Express/Prisma backend.
- Clipboard Integration: Λειτουργία αντιγραφής του συνδέσμου με ένα κλικ.
- Management Dashboard: Προβολή όλων των συνδέσμων, των αρχικών προορισμών και των στατιστικών σε μία οθόνη.
- Responsive UI: Βελτιστοποιημένο περιβάλλον για χρήση από υπολογιστή και κινητά.

## Τεχνολογίες

Frontend
- React 19 (Vite)

Backend
- Node.js & Express.js
- Prisma ORM
- NanoID

## Δομή Φακέλων

```bash
root/
├── backend/
│   ├── prisma/          # Schema βάσης και Prisma client
│   ├── src/
│   │   ├── controllers/ # Διαχείριση των requests
│   │   ├── routes/      # Ορισμός των API endpoints
│   │   ├── services/    # Business logic & Queries βάσης
│   │   └── utils/       # Βοηθητικές συναρτήσεις (NanoID)
│
│
├── frontend/
│   ├── src/
│   │   ├── components/  # Επαναχρησιμοποιήσιμα στοιχεία (Form, List)
│   │   ├── services/    # API abstraction layer
│   │   └── App.jsx      # Κεντρική λογική εφαρμογής
```

## Τοπική Εκτέλεση

1. Κλωνοποιήστε το repository
```bash
git clone https://github.com/dgiagkoudi/url-shortener.git
cd url-shortener
```

2. Ρύθμιση Backend
```bash
cd backend
npm install
# Δημιουργήστε ένα αρχείο .env και προσθέστε:
# DATABASE_URL="το_url_της_βάσης_σας"
# BASE_URL="http://localhost:3000"
# PORT=3000
npx prisma generate
npm run dev
```

3. Ρύθμιση Frontend
```bash
cd ../frontend
npm install
npm run dev
```

## Μελλοντικές Βελτιώσεις

- User Authentication: Σύνδεση χρήστη για αποθήκευση και διαχείριση προσωπικών links.
- Custom Slugs: Δυνατότητα ορισμού εξατομικευμένων συνδέσμων (π.χ. /my-link).
- QR Code Generation: Αυτόματη δημιουργία QR code για κάθε link.
- Αναλυτικά Στατιστικά: Καταγραφή χώρας, browser και χρονικών στιγμών των clicks.
- Expiration Dates: Ορισμός ημερομηνίας λήξης για τα links.

## License

Το project διατίθεται με άδεια MIT License.
