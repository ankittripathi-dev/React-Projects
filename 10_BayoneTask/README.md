## 🌐 Live Demo

Check out the live demo of the project here:  
[BayoneTask on Netlify](https://bayonetask.netlify.app)

> Note: Use the demo credentials to log in:  
> Email: `user@gmail.com`  
> Password: `password@123`


##  Screenshots

### Login Page
<img width="2689" height="1294" alt="image" src="https://github.com/user-attachments/assets/485d990f-fbcc-498e-aa05-1cba1f54636f" />



### Dashboard Page
<img width="2570" height="1265" alt="image" src="https://github.com/user-attachments/assets/caaa0b13-0574-484a-bc52-8ebed2a1a13f" />


---



# ReqRes Auth Dashboard (Vite + React)

A small, beginner-friendly **React application** demonstrating **authentication flow**, **protected routes**, and **API data fetching** using a **mocked backend**.  

This project simulates a real-world login + dashboard scenario while staying fully self-contained and offline-friendly.

---

## 🌟 Features

### Login Page
- Demo credentials:  
  - **Email:** `user@gmail.com`  
  - **Password:** `password@123`
- On success: saves a token in `localStorage` and redirects to the dashboard.
- On failure: shows clear, user-friendly error messages.

### Protected Dashboard
- Accessible **only** when a valid token exists in `localStorage`.
- Displays a **grid of user cards** with:
  - Name  
  - Email  
  - Avatar - User profile images are fetched from [Random User API](https://randomuser.me/photos) for demo purposes.

- Includes a **Logout** button that clears the token and redirects to the login page.

### Realistic Mock API
- All API calls are handled by `src/services/api.js`.
- Mocked login and users data mimic **ReqRes API responses**.
- Works offline and avoids CORS / 403 issues.

### UX Improvements
- Loader shown during API calls.
- Error states handled gracefully.
- Simple, clean, and responsive UI using **plain CSS**.

---

## 🛠 Tech Stack
- **Vite** – fast dev server and build tool  
- **React 18** – UI library  
- **React Router v6** – routing and protected routes  
- **Plain CSS** – layout, cards, buttons, forms  
- **Mocked API** – for authentication & user data  

```

##  Project Structure (Quick Overview)

src/
├── main.jsx # App entry point (BrowserRouter wraps App)
├── App.jsx # Routes defined here
├── components/
│ └── ProtectedRoute.jsx # Route guard
├── pages/
│ ├── LoginPage.jsx
│ └── DashboardPage.jsx
├── services/
│ └── api.js # Mocked login & fetchUsers functions
└── styles.css # All styling (grid, cards, buttons)
vite.config.js # Vite config + optional API proxy

```

##  Running the Project

1. Install dependencies:

```bash
npm install

Start the development server:

npm run dev


Open the URL shown in the terminal (usually http://localhost:5173).
You should see the Login page.
