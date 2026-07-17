# DeskFlow - Internal IT Service Request Portal

A full-stack ticketing system for employees to report IT issues and admins to manage resolutions, built as a 5-day sprint project.

## Live Demo
- **App:** https://deskflow-orcin.vercel.app/login
- **API:** https://deskflow-api-lbo9.onrender.com
- **API Docs (Swagger):** https://deskflow-api-lbo9.onrender.com/api-docs

> Note: the backend is hosted on Render's free tier, which spins down after ~15 minutes of inactivity. The first request after idle time may take 30–60 seconds to respond while the server wakes up — this is expected, not a bug.

## Tech Stack

- **Frontend:** React (Vite), React Router, Axios
- **Backend:** Node.js, Express
- **Database:** MongoDB (Mongoose ODM)
- **Auth:** JWT-based (simulated login, no password storage)
- **API Docs:** Swagger / OpenAPI (`swagger-ui-express`)

## Features

- Simulated login with role toggle (Employee / Admin)
- Employees can submit tickets and view their own submission history
- Admins can view all tickets across the organization and update ticket status
- Role-based access control enforced on the backend via JWT middleware
- Live, interactive API documentation at `/api-docs`

## Project Structure

```
deskflow/
├── server/     # Express API
└── client/     # React frontend
```

## Getting Started

### Prerequisites
- Node.js (v18+)
- A MongoDB connection string (local or MongoDB Atlas)

### 1. Clone the repo
```bash
git clone https://github.com/tumahole-dev/deskflow.git
cd deskflow
```

### 2. Backend setup
```bash
cd server
npm install
```

Create a `.env` file in `server/` (see `.env.example`):
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_random_secret_string
```

Start the server:
```bash
npm run dev
```
Server runs on `http://localhost:5000`. API docs available at `http://localhost:5000/api-docs`.

### 3. Frontend setup
In a separate terminal:
```bash
cd client
npm install
npm run dev
```
App runs on `http://localhost:5173`.

## API Endpoints

| Method | Endpoint | Access | Description |
|---|---|---|---|
| POST | `/api/auth/login` | Public | Simulated login, returns JWT + user role |
| POST | `/api/tickets` | Employee | Create a new ticket |
| GET | `/api/tickets` | Employee / Admin | Employees see own tickets, Admins see all |
| PUT | `/api/tickets/:id` | Admin | Update ticket status |

Full request/response schemas available via Swagger at `/api-docs`.

## Testing the App

1. Visit `http://localhost:5173`
2. Log in with any name/email, select role **Employee**
3. Submit a ticket
4. Log out, log back in with the same or different email, select role **Admin**
5. View the submitted ticket, update its status
6. Log back in as the Employee to confirm the status change is reflected

## Notes on Auth

Authentication is intentionally simulated per the project brief — there's no password verification. Logging in with a given email either creates a new user record or logs into an existing one, with the role selected at login time. This means role assignment is user-selectable for testing purposes rather than gatekept, matching the assignment's requirement to "toggle between logging in as an Employee or Admin to test role-based views."

## Known Limitations

- No real password authentication (by design, per project scope)
- No pagination on ticket lists (not required at this scale)
- Styling is functional but minimal, prioritizing working features within the sprint timeline
