<!-- # Grapes – Freelance Task Marketplace


**Live Site:** [https://freelancer-marketplase.web.app](https://freelancer-marketplase.web.app)

## Features

- 🔐 **Authentication with Protected Routes**  
  Users can securely sign up or log in using email/password or Google. Private routes such as "Add Task", "My Posted Tasks", and "Task Details" are only accessible after authentication. Conditional navbar items adapt based on login status.

- 📋 **Full CRUD Functionality for Tasks**  
  Users can **Create**, **Read**, **Update**, and **Delete** tasks. Each task includes a title, category, description, deadline, budget, and is tied to the logged-in user. Toast/SweetAlert notifications provide feedback on success and error actions.

- 🎯 **Dynamic Home Page with Featured Content**  
  Home page includes a **slider/banner**, **featured tasks** (based on nearest deadlines via MongoDB's limit and sort), and two extra informative sections to enhance user engagement.

- 📌 **Task Browsing and Bidding**  
  All public tasks are viewable on the "Browse Tasks" page. Users can view detailed task information and place bids, with a live counter tracking total bids per task.

- 🌙 **Dark/Light Theme Toggle & Enhanced UI Tools**  
  Supports theme switching between dark and light mode. Integrates tools like **Lottie animations**, **React-tooltip**, and **React Awesome Reveal** to enhance visual engagement and interactivity.


---

Feel free to clone, fork, or contribute to make FitLife Gym even better!
 -->
# 🛠️ Freelance Task Marketplace

A MERN-based platform that connects task posters with freelancers. Users can post short-term freelance tasks, browse available tasks, and place bids. Built for smooth and secure user experience with meaningful UI/UX and responsive design.

🔗 **Live Site:** [https://freelancer-marketplase.web.app](https://freelancer-marketplase.web.app)

---

## 🎯 Purpose

The goal of this project is to provide a minimal freelance task marketplace for task providers and freelancers. The platform allows task posting, browsing, bidding, and user account management with authentication and private routes.

---

## ✨ Features

- 🔐 Authentication using Firebase (Email/Password & Google login)
- 📌 Add, update, delete, and view tasks (with protected/private routes)
- 📅 Sort featured tasks by closest deadline
- 📥 Bid system for freelancers (with real-time count)
- 🌓 Dark/Light theme toggle on Home Page
- 📱 Responsive Design for mobile, tablet, and desktop
- 💬 Toast/SweetAlert for success/error feedback
- 📄 404 Not Found Page & loading spinner
- 🚫 Proper access control for private routes & route reloading

---

## 🚀 Pages Overview

- **Home** – Banner + Featured Tasks + 2 Extra Sections
- **Add Task** – Form to post a new freelance task (Private)
- **Browse Tasks** – View all public tasks with "See Details" option
- **Task Details** – Detailed view of the task with bidding option (Private)
- **My Posted Tasks** – Table of tasks created by logged-in user (Private)
- **Update Task** – Edit form to update existing task (Private)
- **Login/Register** – Firebase auth with password validation
- **404 Page** – Custom not found page with navigation option

---

## 🧩 NPM Packages Used

### Client Side

- `react-router-dom`
- `firebase`
- `react-hook-form`
- `axios`
- `sweetalert2`
- `react-icons`
- `react-toastify`
- `react-datepicker`
- `react-awesome-reveal` *(for animation)*
- `tailwindcss`
- `daisyui`

### Server Side

- `express`
- `cors`
- `dotenv`
- `mongoose`
- `morgan`

---

## 📁 Environment Variables

Create a `.env` file in both `client` and `server` folders with the following:

### Client-side `.env`
```env
VITE_API_URL=https://your-api.vercel.app
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
