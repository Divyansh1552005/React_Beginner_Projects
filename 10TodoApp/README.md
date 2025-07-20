# Task Management Application 📝

A modern, feature-rich todo application built with React and Tailwind CSS. This application provides a clean, intuitive interface for managing your daily tasks with persistent storage and a beautiful user experience.

![Task Management App](https://img.shields.io/badge/React-19.1.0-blue) ![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4.1.8-38B2AC) ![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF)

## ✨ Features

- **✅ Full CRUD Operations**: Create, read, update, and delete tasks
- **📝 Task Descriptions**: Add detailed descriptions to your tasks
- **✔️ Task Completion**: Mark tasks as complete/incomplete with visual feedback
- **💾 Persistent Storage**: Tasks are saved in localStorage and persist across sessions
- **📊 Task Statistics**: Real-time count of active, completed, and total tasks
- **🎨 Modern UI**: Beautiful design with subtle glow effects and consistent styling
- **📱 Responsive Design**: Works seamlessly on desktop and mobile devices
- **🌙 Dark Theme**: Elegant dark theme with blue accents

## 🛠️ Tech Stack

- **Frontend**: React 19.1.0 with Hooks (useState, useEffect, useContext)
- **Styling**: Tailwind CSS 4.1.8 with custom glass morphism effects
- **Build Tool**: Vite 6.3.5 for fast development and optimized builds
- **State Management**: React Context API for global state management
- **Storage**: Browser localStorage for data persistence

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Divyansh1552005/React_Beginner_Projects.git
cd React_Beginner_Projects/10TodoApp
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## 📂 Project Structure

```
src/
├── Components/
│   ├── Todoform.jsx     # Form component for adding/editing tasks
│   └── Todoitem.jsx     # Individual task item component
├── Context/
│   └── Todocontext.js   # Context API for state management
├── App.jsx              # Main application component
├── main.jsx            # Application entry point
└── index.css           # Global styles
```

## 🎯 Usage

1. **Add a Task**: Enter a title and optional description, then click "Add"
2. **Mark Complete**: Click the checkbox to toggle task completion
3. **Edit Task**: Click the edit icon to modify task details
4. **Delete Task**: Click the delete icon to remove a task
5. **Track Progress**: View real-time statistics of your tasks

## 🎨 Key Features Explained

### Context API Implementation
The app uses React Context API for efficient state management across components, ensuring smooth data flow and updates.

### Persistent Storage
All tasks are automatically saved to localStorage, so your data persists even after closing the browser.

### Modern Design
- Subtle blue glow effects on the main header
- Consistent spacing and typography
- Glass morphism effects with backdrop blur
- Responsive layout that works on all devices

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Divyansh Sharma**
- GitHub: [@Divyansh1552005](https://github.com/Divyansh1552005)
- LinkedIn: [Divyansh Sharma](https://www.linkedin.com/in/divyansh-sharma-b05897286/)

## 🙏 Acknowledgments

- Built with React and Tailwind CSS
- Inspired by modern task management applications
- Part of React learning journey

---

Made with ❤️ by Divyansh using React
