# TEDx Website Template 🎯

A modern, responsive, and feature-rich TEDx event website template built with React and Vite. This template includes a complete ticketing system powered by PhonePe APIs and has been successfully used for multiple TEDx events.

![TEDx Website Preview](https://via.placeholder.com/800x400/ff2b06/ffffff?text=TEDx+Website+Template)

## ✨ Features

### 🎨 Modern Design
- Responsive design that works on all devices
- Smooth animations and transitions using Tailwind CSS
- Professional TEDx branding and styling
- Interactive UI components

### 🎫 Integrated Ticketing System
- **PhonePe Payment Gateway** integration
- Secure payment processing
- Real-time ticket validation
- Automated confirmation emails
- Admin dashboard for ticket management

### 🚀 Performance Optimized
- Built with **React 18** and **Vite** for lightning-fast development
- Optimized bundle size and loading times
- SEO-friendly with proper meta tags and schema markup
- Progressive Web App (PWA) ready

### 🔧 Developer-Friendly
- Hot Module Replacement (HMR) for instant development feedback
- ESLint configuration for code quality
- Modern JavaScript/JSX syntax
- Easy customization and theming

## 🏆 Success Stories

This template has been successfully deployed for:
- **TEDx IIIT Sricity** - Original implementation
- **TEDx IIT Tirupati** - Adapted version
- Multiple other TEDx events across institutions

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | Frontend framework |
| **Vite** | Build tool and dev server |
| **Tailwind CSS** | Styling and responsive design |
| **Firebase** | Backend services and hosting |
| **PhonePe API** | Payment processing |
| **React Router** | Client-side routing |
| **React Hot Toast** | Notifications |

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager
- Firebase account
- PhonePe merchant account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/tedx-website-template.git
   cd tedx-website-template
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   Create a `.env` file in the root directory:
   ```env
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_PHONEPE_MERCHANT_ID=your_phonepe_merchant_id
   VITE_PHONEPE_API_KEY=your_phonepe_api_key
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Navigate to `http://localhost:3000`

## 🎨 Customization

### Brand Colors
Update the Tailwind config to match your TEDx event colors:

```javascript
// tailwind.config.js
theme: {
  extend: {
    colors: {
      'tedx-red': '#e62b1e',
      'tedx-black': '#000000',
      // Add your custom colors
    }
  }
}
```

### Event Information
Update the event details in:
- `src/config/eventConfig.js`
- `public/index.html` (meta tags and schema markup)
- Firebase configuration

### Speaker Information
Add your speakers in:
- `src/data/speakers.js`
- Upload speaker images to `public/assets/speakers/`

## 💳 Payment Integration

### PhonePe Setup
1. Create a PhonePe merchant account
2. Get your Merchant ID and API credentials
3. Configure webhook URLs for payment confirmation
4. Test in sandbox environment before going live

### Firebase Configuration
1. Set up Firebase project
2. Enable Authentication and Firestore
3. Configure security rules
4. Set up Cloud Functions for payment processing

## 🚀 Deployment

### GitHub Pages
```bash
npm run deploy
```

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push

### Firebase Hosting
```bash
npm run build
firebase deploy
```

## 📱 Mobile Optimization

The template is fully responsive and includes:
- Touch-friendly navigation
- Optimized images for mobile
- Fast loading on slow connections
- Progressive Web App capabilities

## 🔒 Security Features

- Secure payment processing
- Input validation and sanitization
- HTTPS enforcement
- Firebase security rules
- XSS protection

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🌟 Show Your Support

If this template helped you create an amazing TEDx event website, please:
- ⭐ Star this repository
- 🍴 Fork it for your own events
- 📱 Share it with other TEDx organizers
- 💝 Consider sponsoring the project

---

**Made with ❤️ for the TEDx community**

*Spreading ideas worth sharing, one website at a time.*
