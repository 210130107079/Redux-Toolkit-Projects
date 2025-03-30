# Shopping Cart Application

This is a simple **Shopping Cart Application** built using **React**, **Redux Toolkit**, and **Tailwind CSS**. The application allows users to browse products, add them to a cart, and manage the cart items.

## Features

- **Product Listing**: Fetches products from a public API and displays them.
- **Add to Cart**: Users can add products to the cart.
- **Cart Management**:
  - Increase or decrease the quantity of items in the cart.
  - Remove items from the cart.
- **Total Calculation**:
  - Displays the total number of items in the cart.
  - Calculates the total price of items in the cart.
- **Responsive Design**: Styled using Tailwind CSS for a modern and responsive UI.

## Tech Stack

- **Frontend**: React
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **API**: [Fake Store API](https://fakestoreapi.com/)

## Project Structure

```
Shopping Cart/
├── src/
│   ├── app/
│   │   └── store.js          # Redux store configuration
│   ├── components/
│   │   ├── Navbar.jsx        # Navigation bar component
│   │   ├── Main.jsx          # Main layout component
│   │   ├── Shop.jsx          # Product listing component
│   │   └── Cart.jsx          # Cart management component
│   ├── slices/
│   │   └── productSlice.js   # Redux slice for product and cart state
│   ├── index.css             # Tailwind CSS imports
│   ├── main.jsx              # Application entry point
│   └── App.jsx               # Root component
├── public/                   # Static assets
├── tailwind.config.js        # Tailwind CSS configuration
├── vite.config.js            # Vite configuration
├── package.json              # Project dependencies and scripts
└── README.md                 # Project documentation
```

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Shopping Cart
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open the application in your browser at `http://localhost:5173`.

## Usage

1. Browse the list of products fetched from the Fake Store API.
2. Click the **Add to Cart** button to add a product to the cart.
3. Navigate to the cart section to:
   - Increase or decrease the quantity of items.
   - Remove items from the cart.
4. View the total number of items and the total price in the cart.

## Screenshots

### Product Listing
![Product Listing](https://via.placeholder.com/800x400?text=Product+Listing)

### Cart Management
![Cart Management](https://via.placeholder.com/800x400?text=Cart+Management)

## License

This project is licensed under the MIT License. Feel free to use and modify it as needed.

## Acknowledgments

- [Fake Store API](https://fakestoreapi.com/) for providing the product data.
- [Tailwind CSS](https://tailwindcss.com/) for the styling framework.
- [Redux Toolkit](https://redux-toolkit.js.org/) for state management.
