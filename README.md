**Documentation: Horeca Randomizer Component for Cocktail Bars**

### **1. User Needs and Software Objectives**

#### **Problem**
Customers often experience decision fatigue when faced with a large menu. This leads to:
- Repeatedly choosing the same items.
- Spending too much time deciding.
- Potential dissatisfaction with the experience.

#### **Solution**
Develop a software solution that:
1. Allows horeca establishments (e.g., cocktail bars, restaurants) to input their menu data (e.g., food, drinks, prices).
2. Provides customers with a fun, simple way to select a random menu item, reducing choice paralysis.
3. Offers optional filters (e.g., drinks only, budget-friendly options).

---

### **2. Functional Requirements**

#### **Core Features**
1. **Menu Data Input**:
  - Horeca owners can upload a menu file containing: Name, Price, and Picture (optional: Category and Ingredients).
2. **Saved Menu Data**:
  - Extract and save the data from the uploaded menu file.
3. **Generate QR Code**:
  - Create dynamic pages and store the URL in a generated QR code.
4. **Randomizer Functionality**:
  - Customers can click a button to get a random suggestion from the menu.
5. **Optional Filters**:
  - Allow filtering by category (e.g., drinks, food) or price range.
6. **User Interface**:
  - Provide a clear and attractive display of the randomly selected item.

#### **Accessibility Features**
- Keyboard navigability for buttons and inputs.
- Proper ARIA labels for screen readers.
- High contrast and scalable text for visibility.

#### **Portability Features**
I am considering two options for implementing this feature:
1. A component that can be embedded and used on various websites.
2. A standalone web application that horeca establishments can use directly.

- The component must be embeddable in various website platforms, including:
  - **WordPress** (via shortcode or plugin integration).
  - **Wix** (via custom widget or iframe).
  - **Static HTML sites** (via embedded script or iframe).
  - **React-based sites** (as a reusable component).

---

### **3. Development Stack and Plan**

#### **Proof of Concept**
For the proof of concept, I am using the following technologies:

- **Frontend**: Svelte
  - Svelte is chosen for its simplicity and performance benefits. It allows us to build a reactive user interface with minimal boilerplate code.
- **Backend**: NestJS
  - NestJS provides a robust framework for building scalable server-side applications. It supports TypeScript out of the box and follows a modular architecture.
- **Database**: PostgreSQL
  - PostgreSQL is a powerful, open-source relational database system. It is known for its reliability and performance.
- **ORM**: Drizzle
  - Drizzle is used for database migrations and querying. It provides a type-safe and flexible way to interact with the database.
- **Styling**: Tailwind CSS
  - Tailwind CSS is a utility-first CSS framework that allows for rapid UI development. It provides a set of predefined classes to style the application efficiently.

The combination of these technologies ensures a modern, efficient, and scalable solution for the Horeca Randomizer Component.

---

### **4. Visual Sketch and Layout**

#

### **5. Portability Across Platforms**

---

### **6. Maintenance and Updates**
1. **Centralized Hosting**:
   - Host the component and updates on a cloud service (e.g., AWS, Vercel).
2. **Versioning**:
   - Use version numbers for compatibility (e.g., `v1.0.0`).
3. **Feedback Mechanism**:
   - Include a way for users to report issues or suggest features.

---

### **7. Future Enhancements**
- **Analytics**:
  - Track most-randomized items for insights.
- **Theming**:
  - Allow horeca sites to customize the look and feel.
- **Multi-Language Support**:
  - Translate UI elements for global reach.

---

### **User Account and Menu Management**

Eventually, users will need to log in as a user/horeca to input their menu. The user account will hold and save that menu for possible future uses, as menus often change with seasons. Users can also create randomizers based on categories such as food, drinks, snacks, and so on. All this information will be stored in the database connected to the user account. Additionally, the dynamic pages generated by the QR code for the menu/data can later be customized to fit the brand of the restaurant/horeca.
