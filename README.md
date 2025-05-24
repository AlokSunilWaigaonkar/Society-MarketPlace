#  Society Marketplace (Frontend Assignment)

A responsive web application built using **React** and **Bootstrap 5**, allowing society residents to **list**, **view**, and **search** for second-hand or unused items within their local community.

---

##  Features

-  **Login / Signup authentication** (stored locally)
-  **Add New Product** for sale
-  **View All Listings** (including live search & filter by category)
-  **My Listings**: View and delete your own items
-  **Live Search** by product name
-  **Category Filter** (e.g., Furniture, Electronics, Groceries, etc.)
-  Fully **Responsive Design** with Bootstrap (mobile-first)

---
## 📸 Screenshots

| Login | Home (Search + Listings) | My Listings |
|-------|--------------------------|-------------|
| ![Login](./screenshots/login.png) | ![Home](./screenshots/home.png) | ![My Listings](./screenshots/mylistings.png) |

---

##  Tech Stack

-  React (with Hooks)
-  Bootstrap 5
-  LocalStorage (for auth & product persistence)
-  React Router v6
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
## 
