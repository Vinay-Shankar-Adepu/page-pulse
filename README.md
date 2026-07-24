Page Pulse

Built for Digital Heroes Training Task

Page Pulse is a full-stack web application that analyzes any publicwebpage and generates a concise technical report. Users submit a URLthrough a React frontend, and an Express.js backend fetches the page,extracts useful metadata, and returns a structured analysis.

Features

Analyze any public webpage

HTTP status detection

Response time measurement

Page title extraction

Meta description extraction

H1 tag count

Images missing alt text

Approximate word count

User-friendly error handling

Responsive React UI

Tech Stack

Frontend

React (Vite)

Tailwind CSS

Axios

Backend

Node.js

Express

Axios

Cheerio

Testing

Vitest

Supertest

Project Structure

page-pulse/
├── backend/
├── frontend/
└── README.md

Local Setup

Backend

cd backend
npm install
npm run dev

Frontend

cd frontend
npm install
npm run dev

API

POST /api/analyze

Request

{
  "url": "https://example.com"
}

Successful Response

{
  "success": true,
  "data": {
    "status": 200,
    "responseTime": 180,
    "title": "Example Domain",
    "metaDescription": "",
    "h1Count": 1,
    "missingAltImages": 0,
    "wordCount": 31
  }
}

Design Decisions

Separated business logic into a service layer so HTML parsing isindependent of routing and easier to test.

Used Cheerio instead of a browser automation library because therequired metadata can be extracted efficiently from static HTML.

Centralized error handling to provide consistent API responsesfor invalid URLs, timeouts, and unsupported content types.

Testing

Run all tests:

cd backend
npm test

Current test coverage includes: - Successful HTML parsing - Missingmetadata handling - Missing image alt-text detection - Invalid URLvalidation - Missing request body validation

Future Improvements

If I had another day, I would: - Support JavaScript-rendered pages usingPlaywright or Puppeteer. - Export reports as PDF. - Add Lighthouseintegration. - Maintain recent analysis history.

AI Usage

I used AI to brainstorm the project structure, review edge cases, andrefine documentation. I implemented, tested, and adjusted theapplication logic, UI structure, and error handling based on my ownverification and debugging.

Author

Created by Vinay for the Digital Heroes Software Development InternshipTask.