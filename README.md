# 🏘️ Society Marketplace (Frontend Assignment)

A responsive web application built using **React** and **Bootstrap 5**, allowing society residents to **list**, **view**, and **search** for second-hand or unused items within their local community.

---

## ✨ Features

- 🔐 **Login / Signup authentication** (stored locally)
- 🛒 **Add New Product** for sale
- 📋 **View All Listings** (including live search & filter by category)
- 📦 **My Listings**: View and delete your own items
- 🔍 **Live Search** by product name
- 🗂 **Category Filter** (e.g., Furniture, Electronics, Groceries, etc.)
- 📱 Fully **Responsive Design** with Bootstrap (mobile-first)

---

## 📸 Screenshots

### 🔐 Login Page
![Login](https://github.com/user-attachments/assets/88bfb453-f411-43ae-b537-65d4a37aaa7f)

### 🏠 Home (Search + Listings)
![Home](https://github.com/user-attachments/assets/7c2b5f19-7177-4493-8221-1cec631e4002)

### 📂 My Listings
![My Listings](https://github.com/user-attachments/assets/0e0bda83-f9e1-4b57-b3dd-de41720a756d)

### Add Product 
![Add Product](https://github.com/user-attachments/assets/33f90225-7d07-433f-af1c-f4bb9164680d)

---
###Video Demo 
![Video Demo ](https://drive.google.com/file/d/1Ou-lz7yXhGmlSqaukIK3j8W-4H8hnNuc/view?usp=drive_link)

---

## 🛠️ Tech Stack

- ⚛️ React (with Hooks)
- 🎨 Bootstrap 5
- 💾 LocalStorage (for auth & product persistence)
- 📦 React Router v6

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/society-marketplace.git
cd society-marketplace
```
### 2. Install dependencies
```bash
npm install
```
### 3. Start the development server
```bash
npm start
```
---
##  Login / Signup Info
	•	New users can sign up
	•	Credentials are stored in localStorage
	•	Only logged-in users can access:
	•	/home
	•	/addproduct
	•	/mylistings
## Data Handling
	•	Products are initialized from data.js
	•	All new products are added to localStorage
	•	My Listings are filtered by logged-in user
