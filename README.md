# 🎬 CineFlix  
### Flix Your Movie Night!

Cineflix is your gateway to a vast world of movies! Search, explore, and discover movie details, ratings, and more in a sleek, user-friendly interface powered by React, Tailwind CSS, Firebase, and Axios. These modern technologies ensure a seamless experience, efficient data management, and fast, responsive performance. Get the most out of Cineflix by signing up or logging in to access detailed movie information.

👉 **Live Demo:** [https://cineflix-app-gilt.vercel.app/]

### Demo

![Project Demo](./public/cineflix.gif)

### Features

- 🔍 Movie Search: Effortlessly search from an extensive database.

- 🌐 Wide Movie Library: Explore diverse genres and movies.

- 🔐 Authentication: Secure login and registration via Firebase.

- ⭐ Ratings & Details: View detailed movie ratings and insights upon login.

- 🌙 Light/Dark Mode: Switch between light and dark themes for a tailored experience.

- 🔔 Toasts for Alerts: Smooth and informative notifications with React-Toastify.

### Tech Stack

- React (with Vite) - Fast and modern frontend.

- Tailwind CSS - For a stylish and responsive design.

- Firebase - Authentication and data management.

- Axios - Efficient API requests to TMDB.

- Heroicons - Modern icons to enhance UI.

- React-Toastify - User-friendly notifications.

- pnpm - For fast, reliable package management.

### Project Structure

```plaintext
src
     ┣ assets
 ┃ ┗ clickSound.mp3
 ┣ auth
 ┃ ┗ firebase.js
 ┣ components
 ┃ ┣ atoms
 ┃ ┃ ┗ SwitchButton.jsx
 ┃ ┣ molecules
 ┃ ┃ ┣ DesktopMenu.jsx
 ┃ ┃ ┣ MobileMenu.jsx
 ┃ ┃ ┗ MovieCard.jsx
 ┃ ┗ organisms
 ┃ ┃ ┗ Navbar.jsx
 ┣ context
 ┃ ┣ AuthContext.jsx
 ┃ ┗ MovieContext.jsx
 ┣ helpers
 ┃ ┗ Toastify.js
 ┣ pages
 ┃ ┣ Home.jsx
 ┃ ┣ Login.jsx
 ┃ ┣ MovieDetails.jsx
 ┃ ┣ NotFound.jsx
 ┃ ┗ Register.jsx
 ┣ router
 ┃ ┣ AppRouter.jsx
 ┃ ┗ PrivateRouter.jsx
 ┣ App.jsx
 ┣ _redirects
 ┣ index.css
 ┗ main.jsx
 ```

###  Project Setup

If you'd like to run this project locally, follow these steps:

1. **Clone the Repository and Navigate to the Project Directory:**
   ```bash
   git clone https://github.com/zbaharyilmaz/cineflix-app.git

   cd cineflix
2. **Install Dependencies:**
   ```bash
   pnpm install
3. **Set up Firebase:**
- Go to Firebase Console, create a new project, and add a web app.
- Enable Authentication and choose Email/Password.
- Install Firebase:
  ```bash
  pnpm add firebase
- Create a .env file with your Firebase and TMDB API keys:
    ```bash
    VITE_API_KEY=your_firebase_api_key
    VITE_API_KEY=your_firebase_api_key
    VITE_AUTH_DOMAIN=your_auth_domain
    VITE_PROJECT_ID=your_project_id
    VITE_TMDB_KEY=your_tmdb_api_key
4. **Run the Development Server:**

   ```bash
    pnpm dev
5. **Open the App:**

- Visit http://localhost:3000 in your browser to view the app.

###  Code Highlights

- Authentication Setup: Firebase authentication for login/signup.

- Movie Search & Display: API requests via Axios to fetch and display movie data.

- Dynamic Styling: Responsive, modern UI with Tailwind CSS.

###  Future Enhancements

- User Watchlists: Save favorite movies.

- Personalized Recommendations: Based on user preferences.

- Enhanced UI Animations: For a more interactive experience.

###  Contributing

Feel free to fork the repo and submit PRs for improvements!

