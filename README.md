# 🤝 Donate-Ease

A modern, secure donation platform built with the MERN stack, enabling seamless charitable contributions through integrated Razorpay payment gateway.

## 🌟 Live Demo

**[🔗 Visit Donate-Ease](https://donateease.vercel.app/)**

## 📋 Overview

Donate-Ease is a full-stack web application designed to facilitate online donations with a user-friendly interface and secure payment processing. The platform connects donors with charitable causes, making it easy to contribute to meaningful initiatives.

## ✨ Features

- 🏠 **Home Page** - Welcome interface with platform overview
- 💰 **Donation System** - Secure donation processing with multiple amount options
- 📞 **Contact Page** - Easy communication channel for users
- 💳 **Razorpay Integration** - Secure payment gateway for seamless transactions
- 📱 **Responsive Design** - Optimized for desktop and mobile devices
- 🔒 **Secure Transactions** - End-to-end encrypted payment processing
- ⚡ **Fast Loading** - Optimized performance for better user experience

## 🛠️ Tech Stack

### Frontend
- **React.js** - User interface library
- **HTML5 & CSS3** - Structure and styling
- **JavaScript (ES6+)** - Programming language
- **Responsive Design** - Mobile-first approach

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **RESTful APIs** - Clean API architecture

### Database
- **MongoDB** - NoSQL database for data storage
- **Mongoose** - MongoDB object modeling

### Payment Gateway
- **Razorpay API** - Secure payment processing
- **Webhook Integration** - Real-time payment status updates

### Deployment
- **Vercel** - Frontend deployment
- **MongoDB Atlas** - Cloud database hosting

## 🚀 Quick Start

### Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or Atlas)
- Razorpay account for payment integration

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MohdOves/Donate-Ease.git
   cd Donate-Ease
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Environment Configuration**
   
   Create a `.env` file in the backend directory:
   ```env
   # Database
   MONGODB_URI=your_mongodb_connection_string
   
   # Razorpay Configuration
   RAZORPAY_KEY_ID=your_razorpay_key_id
   RAZORPAY_KEY_SECRET=your_razorpay_key_secret
   
   # Server Configuration
   PORT=5000
   NODE_ENV=development
   
   # Frontend URL (for CORS)
   FRONTEND_URL=http://localhost:3000
   ```

   Create a `.env` file in the frontend directory:
   ```env
   REACT_APP_API_URL=http://localhost:5000/api
   REACT_APP_RAZORPAY_KEY_ID=your_razorpay_key_id
   ```

5. **Start the development servers**
   
   Backend server:
   ```bash
   cd backend
   npm run dev
   ```
   
   Frontend server (in a new terminal):
   ```bash
   cd frontend
   npm start
   ```

6. **Access the application**
   - Frontend: `http://localhost:3000`
   - Backend API: `http://localhost:5000`

## 📁 Project Structure

```
Donate-Ease/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── utils/
│   │   └── App.js
│   └── package.json
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── server.js
└── README.md
```

## 🔧 API Endpoints

### Donation Routes
- `POST /api/donations/create` - Create new donation
- `POST /api/donations/verify` - Verify payment
- `GET /api/donations` - Get donation history

### Contact Routes
- `POST /api/contact` - Submit contact form

## 💳 Razorpay Integration

The application uses Razorpay for secure payment processing:

1. **Payment Creation** - Generate payment orders
2. **Payment Processing** - Handle user payments
3. **Payment Verification** - Verify transaction authenticity
4. **Webhook Handling** - Process payment status updates

### Supported Payment Methods
- Credit/Debit Cards
- Net Banking
- UPI
- Digital Wallets
- EMI Options

## 🌐 Deployment

### Frontend (Vercel)
1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push to main branch

### Backend Deployment
1. Choose your preferred hosting platform (Heroku, Railway, etc.)
2. Configure environment variables
3. Set up MongoDB Atlas connection
4. Deploy the backend API

## 🤝 Contributing

We welcome contributions to Donate-Ease! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Mohd Owes**
- GitHub: [@MohdOves](https://github.com/MohdOves)
- LinkedIn: [Connect with me](https://linkedin.com/in/your-profile)

## 🙏 Acknowledgments

- [Razorpay](https://razorpay.com/) for payment gateway services
- [Vercel](https://vercel.com/) for hosting platform
- [MongoDB Atlas](https://www.mongodb.com/atlas) for database hosting
- Open source community for amazing tools and libraries

## 📧 Support

If you have any questions or need help, please feel free to:
- Open an issue on GitHub
- Contact through the website's contact form
- Email: your-email@example.com

---

⭐ **If you found this project helpful, please consider giving it a star!** ⭐
