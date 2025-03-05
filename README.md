# LocalCart - A hub for local and online vendors. (IDEA ONLY)

**Overview**  
LocalCart is a full-stack web application that enables multiple vendors to list their products, customers to browse and purchase items, and a superadmin to manage the platform. The system includes location-based filtering to help users find nearby shops.

---

## 📌 Features  

| **Feature**                     | **Description**                                                                                          |
|----------------------------------|----------------------------------------------------------------------------------------------------------|
| **Customer Features**            | Customers can browse shops, view products, add items to cart, and checkout.                            |
| **Vendor Features**              | Vendors can register, list products, update inventory, and manage orders.                              |
| **Superadmin Dashboard**         | The superadmin can manage vendors, users, and oversee platform activity.                               |
| **Location-based Filtering**     | Customers can filter shops based on their location for a better shopping experience.                   |
| **Secure Authentication**        | Separate authentication for customers, vendors, and superadmin to ensure data privacy and security.   |

---

## 🛠 Tech Stack  

✅ **Programming Language(s):** JavaScript (Node.js, React)  
✅ **Frontend:** React.js, Tailwind CSS  
✅ **Backend:** Node.js, Express.js  
✅ **Database:** MongoDB  
✅ **Other Tools & Libraries:** JWT for authentication, Mongoose, Redux Toolkit  

---

## 📦 Installation  

### **🔹 Prerequisites**  
- Node.js installed on your system  

### **🔹 Setup Instructions**  
```sh
# Clone the repository
git clone <THIS REPO URL>

# Navigate into the project directory
cd localcart

# Install dependencies
npm install

# Run the application
npm start
```

📌 **For detailed setup instructions, refer to the \`docs/setup.md\` file.**

---

## 🚀 Usage  

### **🔹 Running the Project**  
```sh
npm start
```
- **Step 1:** Open the app and register as a customer or vendor.  
- **Step 2:** Browse shops and products.  
- **Step 3:** Vendors can manage inventory and orders.  
- **Step 4:** Customers can add products to the cart and checkout.  


---

## 📂 Directory Structure  

```
localcart/
│── frontend/
│   ├── src/
│   ├── components/
│   ├── assets/
│── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│── config/
│── public/
│── docs/
│── README.md
│── package.json
│── .gitignore
```
📌 **Modify this structure to match your project.**

---

## 📸 Screenshots  
| **Interface** | **Preview** |
|--------------|------------|
| **Homepage** | <img src="IMAGE_URL_1" width="400px"> |
| **Shop View** | <img src="IMAGE_URL_2" width="400px"> |
| **Cart Page** | <img src="IMAGE_URL_3" width="400px"> |

📌 **More UI screenshots can be found in \`/docs/screenshots\`.**  

---

## ⚡ API Endpoints  

| **Method** | **Endpoint** | **Description** |
|-----------|-------------|----------------|
| GET       | /api/shops  | Fetch all shops |
| GET       | /api/products/:shopId  | Fetch products for a shop |
| POST      | /api/auth/register | Register a new user |
| POST      | /api/auth/login  | Login user |
| POST      | /api/orders  | Place an order |


---

## 🔗 Contributing  

💡 **Want to contribute?** Fork the repo, create a branch, and submit a pull request. Bug fixes and feature improvements are welcome.  

---

## 📬 Contact  

💻 **Developed by Manish Patel**  

📧 **Email:** maneeshkurmii@gmail.com  
🔗 **GitHub:** [its-maneeshk](https://github.com/its-maneeshk)  
🔗 **LinkedIn:** [itsmaneeshk](https://www.linkedin.com/in/itsmaneeshk/)  
