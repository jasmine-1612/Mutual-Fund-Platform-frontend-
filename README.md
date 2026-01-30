# Mutual Fund Platform Frontend 💹

![HTML](https://img.shields.io/badge/HTML-5-orange)
![CSS](https://img.shields.io/badge/CSS-3-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-purple)
![GitHub repo size](https://img.shields.io/github/repo-size/jasmine-1612/Mutual-Fund-Platform-frontend-)

---

## 📖 Overview  

The **Mutual Fund Platform Frontend** is a web application that allows users to **invest, view, and manage mutual funds**.  
It is built using **HTML, CSS, JavaScript, and Bootstrap** and interacts with backend APIs to provide dynamic functionality.

It is ideal for:
- 📊 Learning frontend development with real-world financial project
- 🏦 Simulating mutual fund management and investment flows
- 💡 Practicing HTML, CSS, JS, and API integration
- 🌐 Creating responsive web pages for dashboards and user forms

---

## ✨ Features  

### 👩‍💻 User Features  
- 🔑 User Login & Authentication  
- 📖 Browse and view **Mutual Fund details**  
- 💰 **Invest in Funds** via Invest Now page  
- 🔄 **Redeem Investments**  
- 📊 **Portfolio Dashboard** to track performance  
- 📂 View transaction history  
- 📱 **Responsive UI** with Bootstrap 5  

### 🧑‍💼 Admin / Manager Features  
- 🛡 Admin / Portfolio Manager Login  
- 📂 Manage users and funds  
- 📊 Dashboard charts to visualize investments and fund details  

### ⚙️ Technical Features  
- ✅ **HTML5 & CSS3** for responsive design  
- ✅ **JavaScript (ES6)** for dynamic content and form validation  
- ✅ **Bootstrap 5** for UI components and styling  
- ✅ API folder for interacting with backend endpoints  
- ✅ Organized structure for HTML pages, JS scripts, forms, and assets  

---

## 🏗️ Project Structure

Mutual_Fund_Project_Frontend-master

├── api/ # API calls and endpoints

├── assets/ # Images, CSS, JS libraries

├── forms/ # Form pages and scripts

├── dummy/ # Sample pages

├── index.html # Main entry page

├── investnow.html # Invest Now page

├── investnow.js # JS for invest now

├── view_mutual_fund.html # View mutual fund details

├── investor_dashboard.html # Investor dashboard

├── investor_dashboard.js # JS for investor dashboard

├── portfolio_dashboard.html # Portfolio dashboard

├── portfolio_dashboard.css # CSS for portfolio dashboard

├── portfolio_dashboard.js # JS for portfolio dashboard

├── redeem_investment.html # Redeem investment page

├── redeem_investment.js # JS for redeem investment

├── redeem_investment1.html # Alternative redeem page

├── redeem_investment1.js # JS for redeem investment1

├── view_transaction.html # Transaction history page

├── view_transaction.js # JS for transaction history

├── view_user.html # User profile page

├── view_user.js # JS for user profile

├── create_MF.html # Create mutual fund page

├── create_MF.js # JS for create mutual fund

├── demo.html # Demo page

├── sample.html # Sample page

├── sample.js # JS for sample page

├── blog.html # Blog main page

├── blog-details.html # Blog details page

├── login.html # Login page

├── pm_login.html # Portfolio manager login page

├── pm-login.js # JS for pm login

├── pm-style.css # CSS for pm pages

├── user.html # User profile page

├── user-style.css # CSS for user pages

├── sidebar.html # Sidebar HTML

├── sidebar_manager.html # Sidebar for manager

├── style.css # Main CSS file

├── dashboard-style.css # Dashboard CSS

├── investment_graph.js # JS for investment graphs

└── screenshots/ # Screenshots folder

---

## 📸 Screenshots  

### 🏠 Home / Index Page  
Main landing page with navigation and featured funds.  

<img width="1891" height="883" alt="image" src="https://github.com/user-attachments/assets/f7ae1ed7-d7ca-4177-8407-9edd8d66269b" />


### 🏦 Browse Mutual Fund  
Users can explore all available mutual funds, see details like fund name, type, NAV, and performance.  

<img width="1878" height="884" alt="image" src="https://github.com/user-attachments/assets/ad1e1242-2795-48a0-ac0b-c5a652cfc901" />


### 💰 Invest Now Page  
User can invest in selected mutual funds.  

<img width="1896" height="877" alt="image" src="https://github.com/user-attachments/assets/bfeee925-70f4-4d36-82e3-ba3d1ce692ce" />


### 📊 Portfolio Dashboard  
Track portfolio performance with charts.  

<img width="1902" height="879" alt="image" src="https://github.com/user-attachments/assets/af50a5db-07e6-4fea-b4a6-be72fa7decda" />


### 🔄 Redeem Investment  
Redeem mutual fund investments from user account.  

<img width="1868" height="863" alt="image" src="https://github.com/user-attachments/assets/9a1c3bd2-6370-4f73-b7db-aaa7dace6168" />

<img width="1889" height="871" alt="image" src="https://github.com/user-attachments/assets/3729df60-47d1-467b-9f30-1c731ebb81e9" />

---

## 🚀 Getting Started  

### 1️⃣ Clone the repository
```bash
git clone https://github.com/jasmine-1612/Mutual-Fund-Platform-frontend-.git
cd Mutual_Fund_Project_Frontend-master
```

### 2️⃣ Open the Project in a Browser

Since this is a static frontend project, you can simply open index.html in your preferred browser:

Double-click index.html or

Right-click → Open With → Browser

For development with live reload (optional):

Use Live Server extension in VS Code

Or run a simple HTTP server


### 3️⃣ Connect to Backend APIs

Make sure the Mutual Fund Backend is running on http://localhost:8188/.

The frontend interacts with backend endpoints located in the api/ folder.

Update API URLs in JavaScript files if your backend port or host differs.

Example in investnow.js or portfolio_dashboard.js:

```bash
const BASE_URL = "http://localhost:8188/";
fetch(`${BASE_URL}investments/add`, { method: "POST", ... });
```

### 4️⃣ Folder Structure Overview

- index.html → Main landing page
- investnow.html → Investment page
- investor_dashboard.html → User dashboard
- portfolio_dashboard.html → Portfolio analytics
- redeem_investment.html → Redeem funds
- view_transaction.html → View transaction history
- create_MF.html → Admin/PM creates mutual funds
- api/ → JS for API calls
- assets/ → Images, CSS, JS libraries
- forms/ → HTML forms and scripts

### 5️⃣ Recommended Tools

- VS Code → Editor with Live Server
- Google Chrome / Edge → For testing
- Postman → For testing backend APIs
- Bootstrap 5 → UI framework (already included in assets/)

---

## Future Enhancements

- 🔐 JWT authentication integration
- ⚡ Dynamic charting with real-time data
- 🖥 Admin dashboard with more analytics
- 🌐 Multi-user role management (Investors & Portfolio Managers)


---

## 👩‍💻 Author
Developed by Jasmine ✨

