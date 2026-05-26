# URL Shortener
[🇬🇷 Read this in Ελληνικά](./README_GR.md)

A full-stack URL shortening application similar to Bitly. Built with a focus on performance and clean architecture, it allows users to transform long, cumbersome URLs into manageable short links with real-time click tracking.

## Features

- Instant URL Shortening: Generate 6-character unique codes using NanoID.
- Click Analytics: Real-time tracking of how many times a link has been visited.
- Full-stack Integration: Seamless connection between a React frontend and an Express/Prisma backend.
- Clipboard Integration: One-click copy functionality for shortened links.
- Management Dashboard: View all generated links, their original destinations, and analytics in one place.
- Responsive UI: Optimized for both desktop and mobile devices.

## Tech Stack

Frontend
- React 19 (Vite)

Backend
- Node.js & Express.js
- Prisma ORM
- NanoID

## Project Structure

```bash
root/
├── backend/
│   ├── prisma/          # Database schema and client configuration
│   ├── src/
│   │   ├── controllers/ # Request handling logic
│   │   ├── routes/      # API endpoint definitions
│   │   ├── services/    # Business logic & Database queries
│   │   └── utils/       # Helper functions (NanoID)
│
│
├── frontend/
│   ├── src/
│   │   ├── components/  # Reusable UI components (Form, List)
│   │   ├── services/    # API abstraction layer
│   │   └── App.jsx      # Main application logic
```

## Local Setup

1. Clone repository
```bash
git clone https://github.com/dgiagkoudi/url-shortener.git
cd url-shortener
```

2. Backend Setup
```bash
cd backend
npm install
# Create a .env file and add:
# DATABASE_URL="your_database_url"
# BASE_URL="http://localhost:3000"
# PORT=3000
npx prisma generate
npm run dev
```

3. Frontend Setup
```bash
cd ../frontend
npm install
npm run dev
```

## Future Improvements

- User Authentication: Allow users to save their links to a personal account.
- Custom Slugs: Let users choose their own short link aliases.
- QR Code Generation: Generate a QR code for every shortened URL.
- Detailed Analytics: Track browser type, country, and timestamps.
- Expiration Dates: Set links to expire after a certain period.

## License

This project is licensed under the MIT License.
