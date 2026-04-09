# API Demon Slayer - Assignment 1

This project is a simple web application that consumes the [Demon Slayer API](https://www.demonslayer-api.com/). It was developed as part of the **Web Programming** course (Seventh Semester).

## 🚀 Features

1. **Simulated Authentication (Login)**:
   - The initial page (`index.html`) requires logging in to access the system.
   - **Username**: `admin`
   - **Password**: `1234`
   - Uses `localStorage` to keep the session active.

2. **Character Search**:
   - Displays a list of characters fetched directly from the API (`search.html`).
   - Allows searching for specific characters by name and clearing the results.

3. **Character Details (Dashboard)**:
   - Clicking on a character redirects to `dashboard.html` passing its ID.
   - Displays detailed information of the selected character (Age, Gender, Race, Description, etc.).

## 🛠️ Technologies Used

- **HTML5**: Page structure.
- **CSS3**: Application styling.
- **Vanilla JavaScript**: Application logic, access control using `localStorage`, and HTTP requests via `fetch`.

## ⚙️ How to run the project

1. Clone or download the repository to your local machine.
2. Open the `index.html` file directly in your web browser.
3. Log in with the credentials: **admin** / **1234**.
4. Explore all the Demon Slayer characters!
