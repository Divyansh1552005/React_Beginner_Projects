# BlogSpace 📝

> **Empowering writers and readers to share knowledge that matters, one post at a time.**

BlogSpace is a modern, full-featured blogging platform built with React and Appwrite that provides a seamless and anonymous blogging experience. Whether you're sharing knowledge, experiences, or creative content, BlogSpace offers a secure and user-friendly environment for content creators and readers alike.

![BlogSpace Banner](https://img.shields.io/badge/BlogSpace-Modern%20Blogging%20Platform-blue?style=for-the-badge&logo=react)

## ✨ Features

### 🔐 **Authentication & Security**
- **Secure User Registration** - Email-based account creation with validation
- **Safe Login System** - Email/password authentication with session management
- **Anonymous Publishing** - Option to publish content with anonymous author names
- **Password Reset** - Email-based password recovery system
- **Account Management** - Complete profile and security settings
- **Session Management** - Active session monitoring and control

### 📖 **Content Management**
- **Rich Text Editor** - TinyMCE-powered content creation with formatting options
- **Smart Reading Time** - Character-based reading time calculation (500 chars ≈ 1 min)
- **Post Categorization** - Organize content with tags and categories
- **Image Support** - Upload and manage images with Appwrite storage
- **Draft System** - Save and edit drafts before publishing
- **Publication Settings** - Control visibility and publication options

### 🎯 **User Experience**
- **Universal Sorting** - Sort posts by latest/oldest across all pages
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Dark Theme** - Modern dark UI for comfortable reading
- **Interactive Cards** - Enhanced post cards with hover effects
- **Real-time Toast Notifications** - User feedback for all actions
- **Loading States** - Smooth loading indicators throughout the app

### 👤 **Profile & Personalization**
- **Personal Dashboard** - Manage your posts and account settings
- **Profile Customization** - Update personal information and bio
- **Account Statistics** - Track posts published, profile views, and member stats
- **Privacy Controls** - Manage profile visibility and data sharing
- **Social Media Integration** - Connect GitHub, LinkedIn, Portfolio, Instagram profiles

### 🔍 **Content Discovery**
- **All Posts Feed** - Browse all published content with filtering
- **My Posts Management** - Personal post management with editing capabilities
- **Search & Filter** - Find content easily with sorting options
- **Anonymous Authors** - "User [Random Number]" system for privacy protection

### ⚙️ **Technical Features**
- **Appwrite Backend** - Secure cloud backend for data management
- **Redux State Management** - Efficient state handling across components
- **React Router** - Client-side routing with protected routes
- **Form Validation** - React Hook Form with comprehensive validation
- **Error Handling** - Graceful error management with user feedback
- **Progressive Enhancement** - Features work across different devices

## 🚀 Tech Stack

### Frontend
- **React 19.1.0** - Latest React with modern hooks and features
- **Vite 7.0.4** - Lightning-fast build tool and dev server
- **Tailwind CSS 4.1.11** - Utility-first CSS framework for styling
- **React Router Dom 7.7.1** - Client-side routing and navigation
- **Redux Toolkit 2.8.2** - State management with modern Redux

### Backend & Services
- **Appwrite 18.2.0** - Open-source backend-as-a-service
- **Appwrite Authentication** - User management and security
- **Appwrite Database** - Document database for content storage
- **Appwrite Storage** - File storage for images and media

### UI/UX Libraries
- **TinyMCE React 6.3.0** - Rich text editor for content creation
- **React Hook Form 7.61.1** - Performant forms with easy validation
- **React Toastify 11.0.5** - Beautiful toast notifications
- **React Icons 5.5.0** - Comprehensive icon library
- **HTML React Parser 5.2.6** - Safe HTML content rendering

### Development Tools
- **ESLint 9.30.1** - Code linting and formatting
- **Vite Plugin React 4.6.0** - React support for Vite
- **TypeScript Support** - Type definitions for better development

## 📁 Project Structure

```
BlogSpace/
├── public/
│   └── vite.svg
├── src/
│   ├── Components/          # Reusable UI components
│   │   ├── Header/         # Navigation and user dropdown
│   │   ├── Footer/         # Site footer
│   │   ├── container/      # Layout container
│   │   ├── post-form/      # Post creation/editing form
│   │   ├── AuthLayout.jsx  # Protected route wrapper
│   │   ├── Button.jsx      # Custom button component
│   │   ├── Input.jsx       # Form input component
│   │   ├── Login.jsx       # Login form component
│   │   ├── Signup.jsx      # Registration form component
│   │   ├── PostCard.jsx    # Blog post card component
│   │   ├── RTE.jsx         # Rich text editor
│   │   └── Select.jsx      # Dropdown select component
│   ├── pages/              # Page components
│   │   ├── Home.jsx        # Homepage with featured posts
│   │   ├── AllPosts.jsx    # Browse all posts
│   │   ├── MyPosts.jsx     # User's personal posts
│   │   ├── AddPost.jsx     # Create new post
│   │   ├── EditPost.jsx    # Edit existing post
│   │   ├── Post.jsx        # Single post view
│   │   ├── About.jsx       # About page with developer info
│   │   ├── Profile.jsx     # User profile management
│   │   ├── Account.jsx     # Account settings
│   │   ├── Settings.jsx    # Privacy and security settings
│   │   └── Login.jsx       # Login page
│   ├── store/              # Redux store configuration
│   │   ├── store.js        # Main store setup
│   │   └── authSlice.js    # Authentication state slice
│   ├── appwrite/           # Backend service integration
│   │   ├── auth.js         # Authentication service
│   │   ├── config.js       # Database and storage service
│   │   └── index.js        # Service exports
│   ├── conf/               # Configuration
│   │   └── conf.js         # Environment variables
│   ├── assets/             # Static assets
│   │   ├── blogspace-removebg-preview.png
│   │   ├── profile.jpeg
│   │   └── react.svg
│   ├── App.jsx             # Main app component
│   ├── main.jsx           # App entry point
│   ├── App.css            # Global styles
│   └── index.css          # Tailwind imports
├── package.json           # Dependencies and scripts
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── README.md             # Project documentation
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager
- Appwrite account and project setup

### 1. Clone the Repository
```bash
git clone https://github.com/Divyansh1552005/React_Beginner_Projects.git
cd React_Beginner_Projects/12-Blogging-Site-Appwrite
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Setup
Create a `.env` file in the root directory:
```env
VITE_APPWRITE_URL=your_appwrite_endpoint
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_COLLECTION_ID=your_collection_id
VITE_APPWRITE_BUCKET_ID=your_bucket_id
```

### 4. Appwrite Configuration
1. Create an [Appwrite](https://appwrite.io/) account
2. Create a new project
3. Set up authentication (Email/Password)
4. Create a database and collection for posts
5. Set up storage bucket for images
6. Configure appropriate permissions

### 5. Run Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### 6. Build for Production
```bash
npm run build
```

## 🎨 Key Components

### PostCard Component
- **Dynamic Reading Time**: Character-based calculation for accurate estimates
- **Anonymous Authors**: Privacy-focused author display
- **Publication Dates**: Formatted date display
- **Responsive Design**: Mobile-friendly card layout
- **Interactive Effects**: Hover animations and transitions

### Authentication System
- **Secure Registration**: Email validation and password requirements
- **Session Management**: Persistent login across browser sessions
- **Profile Updates**: Name and email modification capabilities
- **Password Reset**: Email-based recovery system

### Content Editor
- **Rich Text Support**: TinyMCE integration with formatting options
- **Image Upload**: Direct image embedding with Appwrite storage
- **Auto-save**: Draft functionality for work-in-progress posts
- **Publication Control**: Visibility and publication date settings

### User Dashboard
- **Post Management**: Create, edit, and delete personal posts
- **Account Settings**: Profile information and preferences
- **Privacy Controls**: Manage data sharing and visibility
- **Security Features**: Password changes and session monitoring

## 🔧 Configuration Options

### Tailwind CSS Customization
The project uses Tailwind CSS v4 with custom configurations for:
- **Color Schemes**: Dark theme with blue accent colors
- **Typography**: Optimized font sizes and spacing
- **Components**: Custom button and form styles
- **Animations**: Smooth transitions and hover effects

### Appwrite Services
- **Authentication**: Email/password with session management
- **Database**: Document storage for blog posts and user data
- **Storage**: File management for images and media
- **Real-time**: Live updates for collaborative features

## 📱 Responsive Design

BlogSpace is built with a mobile-first approach:
- **Mobile (320px+)**: Optimized for smartphones
- **Tablet (768px+)**: Enhanced layout for tablets
- **Desktop (1024px+)**: Full-featured desktop experience
- **Large Screens (1280px+)**: Optimized for large displays

## 🔒 Security Features

- **Input Validation**: Comprehensive form validation with React Hook Form
- **XSS Protection**: Safe HTML rendering with html-react-parser
- **Authentication Guards**: Protected routes for authenticated users
- **Data Encryption**: Appwrite handles all data encryption
- **Session Security**: Secure session management with automatic expiry

## 🚀 Performance Optimizations

- **Code Splitting**: Lazy loading of components and routes
- **Image Optimization**: Efficient image handling with Appwrite
- **Bundle Analysis**: Optimized build size with Vite
- **Caching Strategy**: Browser caching for static assets
- **Loading States**: Skeleton screens and loading indicators

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Guidelines
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Developer

**Divyansh Sharma**
- 🎓 Software Engineering Student
- 💼 Developer & Owner of BlogSpace
- 🌐 [Portfolio](https://divyanshsharma.site/)
- 💼 [LinkedIn](https://www.linkedin.com/in/divyansh-sharma-b05897286/)
- 🐙 [GitHub](https://github.com/Divyansh1552005)
- 📧 [Email](mailto:officialdslc1552005@gmail.com)
- 📱 [Instagram](https://instagram.com/divyanshsharma1552005)

## 🙏 Acknowledgments

- **React Team** - For the amazing React framework
- **Appwrite** - For the excellent backend-as-a-service platform
- **Tailwind CSS** - For the utility-first CSS framework
- **TinyMCE** - For the rich text editor integration
- **Vite** - For the lightning-fast build tool

## 📞 Support

If you have any questions or need support, please:
1. Check the [Issues](https://github.com/Divyansh1552005/React_Beginner_Projects/issues) page
2. Create a new issue if your problem isn't already listed
3. Email us at [officialdslc1552005@gmail.com](mailto:officialdslc1552005@gmail.com)

---

<div align="center">

**Built with ❤️ by [Divyansh Sharma](https://divyanshsharma.site/)**

*Empowering writers and readers to share knowledge that matters*

[![React](https://img.shields.io/badge/React-19.1.0-blue?style=flat&logo=react)](https://reactjs.org/)
[![Appwrite](https://img.shields.io/badge/Appwrite-18.2.0-red?style=flat&logo=appwrite)](https://appwrite.io/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.11-teal?style=flat&logo=tailwindcss)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-7.0.4-purple?style=flat&logo=vite)](https://vitejs.dev/)

</div>
