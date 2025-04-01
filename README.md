# 📝 React To-Do App with Weather API Integration

**1. Login Page**

![image](https://github.com/user-attachments/assets/6dff7efc-af0a-4e7c-98ba-ebbb9c1f9141)


**2. Home Screen (Main Page)**

![image](https://github.com/user-attachments/assets/f14e1fe5-31ea-422e-915d-e8189c67194f)




## 🌟 Features

- ✅ **Task Management**
  - Add, edit, and delete tasks
  - Mark tasks as complete/incomplete
  - Priority levels (High/Medium/Low)
  - Local storage persistence

- ⛅ **Weather Integration**
  - Automatic weather display for outdoor tasks
  - Current conditions for default location
  - Error handling for API failures

- 🔒 **User Authentication**
  - Login/logout functionality
  - Protected routes
  - Mock authentication with Redux

- 🎨 **Modern UI**
  - Responsive design (mobile, tablet, desktop)
  - Priority-based color coding
  - Clean, intuitive interface

## 🛠️ Technologies Used

- **Frontend**: React 18, Redux Toolkit, React Router
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Date Handling**: date-fns
- **Weather API**: OpenWeatherMap
- **Build Tool**: Vite (or Create React App)

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (v8 or higher) or yarn
- Git (for version control)
- OpenWeatherMap API key (free tier available)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/todo-app.git
   cd todo-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   REACT_APP_OPENWEATHER_API_KEY=your_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

5. **Open in browser**
   The app should automatically open at:
   ```
   http://localhost:3000
   ```

## 🔐 Authentication

Default login credentials:
- **Username**: `user`
- **Password**: `password`

*(Note: This is a mock authentication system for demonstration purposes. In a production app, you would connect to a real backend service.)*

## 🌤️ Weather Integration

The app automatically:
- Shows current weather for London by default
- Displays weather information for tasks containing "outdoor" in their description
- Handles API errors gracefully with retry option

To change the default location, modify `defaultCity` in `WeatherInfo.jsx`.

## 📱 Responsive Design

The app is fully responsive and works on:
- Mobile phones (≥320px)
- Tablets (≥768px)
- Desktops (≥1024px)

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
├── features/            # Redux feature folders
│   ├── auth/            # Authentication logic
│   ├── tasks/           # Task management
│   └── weather/         # Weather API integration
├── App.js               # Main application component
├── index.js             # Entry point
├── store.js             # Redux store configuration
└── styles/              # Global styles
```

## 🤝 Contributing

Contributions are welcome! Follow these steps:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

## ✉️ Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter) - youremail@example.com

Project Link: [https://github.com/your-username/todo-app](https://github.com/your-username/todo-app)

---

*Replace placeholder URLs, contact information, and screenshots with your actual project details before publishing.*
