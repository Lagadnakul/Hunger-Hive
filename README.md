# 🍔 Hunger Hive

<div align="center">
  <img src="/Hunger%20Hive/frontend/src/assets/HH_logo.png" alt="Hunger Hive Logo" width="200"/>
  <p><i>The Ultimate Food Delivery Platform</i></p>
  
  [![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
  [![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
  [![Express.js](https://img.shields.io/badge/Express-4.18.2-000000?style=flat-square&logo=express)](https://expressjs.com/)
  [![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0.14-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
</div>

## 📋 Overview

Hunger Hive is a modern food delivery application built with a microservices architecture:

- 🖥️ **Admin Panel**: Manage food items, restaurants and orders
- 📱 **Frontend**: Customer-facing food ordering web app
- 🔄 **Backend API**: Express.js API handling data and business logic

## 🚀 Features

- **For Customers:**
  - Browse popular restaurants
  - View comprehensive food menus
  - Seamless food ordering experience
  - User profiles and order tracking

- **For Admins:**
  - Add and manage food items
  - View and process customer orders
  - Manage restaurant information
  - Upload food images

## 📦 Project Structure

```
Hunger Hive/
├── frontend/          # Customer-facing React application
│   ├── src/
│   │   ├── assets/    # Images and assets
│   │   ├── components/# Reusable UI components
│   │   └── Pages/     # Page components
│
├── admin/             # Admin panel React application
│   ├── src/
│   │   ├── assets/    # Admin assets
│   │   ├── components/# Admin UI components
│   │   └── pages/     # Admin page components
│
└── backend/           # Express.js API server
    ├── config/        # Database configuration
    ├── controllers/   # Request handlers
    ├── models/        # MongoDB data models
    └── routes/        # API endpoints
```

## 🛠️ Technology Stack

### Frontend & Admin
- **React 19** - UI Library
- **React Router 7.4** - Client-side routing
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **Multer** - File upload handling

## 🔧 Installation & Setup

### Prerequisites
- Node.js 18+
- MongoDB

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/Lagadnakul/Hunger-Hive.git
   cd Hunger-Hive
   ```

2. **Backend Setup**
   ```bash
   cd "Hunger Hive/backend"
   npm install
   # Create a .env file and add your MongoDB URI
   npm run dev
   ```

3. **Frontend Setup**
   ```bash
   cd "../frontend"
   npm install
   npm run dev
   ```

4. **Admin Panel Setup**
   ```bash
   cd "../admin"
   npm install
   npm run dev
   ```

## 📷 Screenshots

<div align="center">
  <img src="/Hunger%20Hive/frontend/src/assets/header_img.png" alt="Hunger Hive Homepage" width="80%"/>
</div>

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements

- Icons from [Various sources]
- Food images courtesy of [Various sources]
