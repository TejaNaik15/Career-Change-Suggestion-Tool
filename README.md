# 🚀 Career Change Suggestion Tool

**"Discover your next wild career adventure!"**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Frontend: React](https://img.shields.io/badge/Frontend-React.js-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Styling: TailwindCSS](https://img.shields.io/badge/Styling-Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Backend: Node.js](https://img.shields.io/badge/Backend-Node.js-339933?logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![API: Groq](https://img.shields.io/badge/AI_Logic-Groq_LLaMA-F04F2F?logo=openai&logoColor=white)](https://groq.com/)

---

## ✨ Live Demo 

[Click here to try out the Career Change Suggestion Tool!](https://career-change-suggestion-tool-f.onrender.com/)



---

## 📸 Screenshots

*(Replace these with actual screenshots of your application after you deploy or run it locally.)*

**Hero Section**
![Screenshot of Hero Section](https://via.placeholder.com/600x300?text=Hero+Section+Screenshot)

**Input Form**
![Screenshot of Input Form](https://via.placeholder.com/600x300?text=Input+Form+Screenshot)

**Suggestions Display**
![Screenshot of Suggestions Display](https://via.placeholder.com/600x300?text=Suggestions+Screenshot)

---

## 📖 Table of Contents

* [About the Project](#about-the-project)
* [Features](#features)
* [Tech Stack](#tech-stack)
* [Getting Started](#getting-started)
    * [Prerequisites](#prerequisites)
    * [Backend Setup](#backend-setup)
    * [Frontend Setup](#frontend-setup)
* [Deployment](#deployment)
* [Project Structure](#project-structure)
* [License](#license)
* [Developed By](#developed-by)
* [Acknowledgements](#acknowledgements)

---

## 💡 About the Project

The **Career Change Suggestion Tool** is a whimsical web application designed to inspire users with creative and radically different career options based on their current job title. Ever wondered what absurdly unique job an "Accountant" could transition into? This tool aims to spark imagination and provide a fun, engaging experience for anyone looking for their next unexpected professional adventure.

Leveraging cutting-edge AI (Groq's LLaMA), the application generates short, creative, and sometimes humorous suggestions, transforming career exploration into a delightful journey.

---

## 🌟 Features

* **Attractive Landing Page:** A fun hero section with animated career icons and the tagline "Discover your next wild career adventure!"
* **Intuitive Input Form:** Users input their current job title via a clean form with playful submit button animations.
* **AI Integration:** Seamlessly connects to the Groq API to generate unique career suggestions.
    * **Prompt Example:** "Suggest 5 radically different or whimsical career options for someone who is currently a [user input career]. Make them short and creative."
* **Dynamic Results Display:** Suggestions are presented as animated cards with fun, relevant icons, fading in with bounce/slide-up effects.
* **"Get More Suggestions" Option:** A button with an animated refresh icon to fetch new ideas.
* **Responsive UI:** Optimized for seamless experience on both desktop and mobile devices using Tailwind CSS.
* **Dark Mode Toggle:** A user-friendly dark mode with animated sun/moon icons for personalized viewing.
* **Download Suggestions as PDF:** Users can download their generated career ideas for offline viewing using `jsPDF`.
* **Social Media Sharing:** Share your whimsical career suggestions directly to Twitter and LinkedIn with animated share icons.
* **Informative Footer:** Includes developer information, copyright, quick links, and a fun note.

---

## 🛠️ Tech Stack

This project is built using a modern full-stack JavaScript approach.

* **Frontend:**
    * [**React.js**](https://react.dev/) - A JavaScript library for building user interfaces.
    * [**Vite**](https://vitejs.dev/) - A blazing fast frontend build tool (used for this project's React setup).
    * [**Tailwind CSS**](https://tailwindcss.com/) - A utility-first CSS framework for rapid UI development.
    * [**Framer Motion**](https://www.framer.com/motion/) - A production-ready animation library for React.
    * [**react-icons**](https://react-icons.github.io/react-icons/) - Popular icon library.
    * [**jsPDF**](https://jspdf.org/) & [**html2canvas**](https://html2canvas.hertzen.com/) - For client-side PDF generation.

* **Backend:**
    * [**Node.js**](https://nodejs.org/en/) - JavaScript runtime environment.
    * [**Express.js**](https://expressjs.com/) - A fast, unopinionated, minimalist web framework for Node.js.
    * [**CORS**](https://github.com/expressjs/cors#readme) - Node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
    * [**dotenv**](https://github.com/motdotla/dotenv#readme) - Loads environment variables from a `.env` file into `process.env`.
    * [**Groq SDK**](https://groq.com/docs/sdk) - Official SDK for interacting with Groq API.
    * [**LLaMA 3 8B**](https://groq.com/docs/models#llama-3-8b-8192) (via Groq) - The specific AI model used for generating suggestions.

---

## 🚀 Getting Started

Follow these steps to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following installed:

* [Node.js](https://nodejs.org/en/) (v18.x or higher recommended)
* [npm](https://www.npmjs.com/get-npm) (comes with Node.js) or [Yarn](https://yarnpkg.com/getting-started/install)
* [Git](https://git-scm.com/downloads)

### Backend Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/TejaNaik15/Career-Change-Suggestion-Tool]
    cd career-change-app
    ```
2.  **Navigate to the backend directory:**
    ```bash
    cd backend
    ```
3.  **Install backend dependencies:**
    ```bash
    npm install
    # or yarn install
    ```
4.  **Create a `.env` file:**
    In the `backend` directory, create a file named `.env` and add your Groq API key:
    ```
    GROQ_API_KEY=your_groq_api_key_here
    ```
    *Replace `your_groq_api_key_here` with your actual API key from [Groq Console](https://console.groq.com/keys).*

5.  **Start the backend server:**
    ```bash
    npm start
    # or npm run dev (if you have nodemon installed and configured)
    ```
    The backend server should start on `http://localhost:5000`.

### Frontend Setup

1.  **Navigate to the frontend directory** (in a new terminal window/tab, keep the backend running):
    ```bash
    cd ../frontend
    ```
2.  **Install frontend dependencies:**
    ```bash
    npm install
    # or yarn install
    ```
3.  **Create a `.env.development` file:**
    In the `frontend` directory, create a file named `.env.development` and specify your backend URL:
    ```
    VITE_REACT_APP_BACKEND_URL=http://localhost:5000
    ```
    *This tells your React app where to find your locally running backend.*

4.  **Start the frontend development server:**
    ```bash
    npm start
    # or npm run dev
    ```
    The frontend application should open in your browser, usually at `http://localhost:3000` or `http://localhost:5173` (Vite's default).

---

## ☁️ Deployment

This project is designed for easy deployment to cloud platforms:

* **Frontend (React):** Can be deployed on platforms like [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/).
    * Remember to set the `VITE_REACT_APP_BACKEND_URL` environment variable on your chosen platform to the URL of your deployed backend.
* **Backend (Node.js/Express):** Can be deployed on platforms like [Render](https://render.com/) or [Heroku](https://www.heroku.com/).
    * Ensure you set your `GROQ_API_KEY` as a secure environment variable within your hosting platform's settings.

---
## 👩‍💻 Developed By

This project was developed with ❤️ by:

**Teja Naik**

* **GitHub:** [github.com/your-github-profile](https://github.com/your-github-profile)
* **LinkedIn:** [linkedin.com/in/your-linkedin-profile](https://linkedin.com/in/your-linkedin-profile)
* **Portfolio/Website:** [your-portfolio-website.com](https://your-portfolio-website.com)
* **Email:** [your.email@example.com](mailto:your.email@example.com)

---

## 🙏 Acknowledgements

* [Groq](https://groq.com/) for providing fast inference for large language models.
* [React](https://react.dev/) community for their amazing ecosystem.
* [Tailwind CSS](https://tailwindcss.com/) for simplifying styling.
* [Framer Motion](https://www.framer.com/motion/) for delightful animations.
* All the open-source contributors for the libraries and tools used in this project.
