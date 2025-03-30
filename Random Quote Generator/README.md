# Random Quote Generator

This is a **Random Quote Generator** application built using **React**, **Redux Toolkit**, and **Tailwind CSS**. The application fetches random quotes from an API and displays them with additional metadata.

## Features

- **Random Quote Generation**: Fetches a random quote from a public API.
- **Quote Metadata**:
  - Displays the quote content, author, and tags.
  - Shows the date the quote was added and last modified.
  - Displays the length of the quote.
- **Loading State**: Shows a loading spinner while fetching quotes.
- **Error Handling**: Displays an error message if the API request fails.
- **Responsive Design**: Styled using Tailwind CSS for a modern and responsive UI.

## Tech Stack

- **Frontend**: React
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **API**: [Quotable API](https://api.quotable.io/)

## Project Structure

```
Random Quote Generator/
├── src/
│   ├── app/
│   │   └── store.js          # Redux store configuration
│   ├── slices/
│   │   └── quoteSlices.js    # Redux slice for quote state
│   ├── Quote.jsx             # Main component for displaying quotes
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
   cd Random Quote Generator
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

1. The application will display a random quote upon loading.
2. Click the **Generate Quote** button to fetch a new random quote.
3. View additional metadata such as:
   - Author of the quote.
   - Tags associated with the quote.
   - Date added and last modified.
   - Length of the quote.

## Screenshots

### Random Quote Display
![Random Quote Display](https://via.placeholder.com/800x400?text=Random+Quote+Display)

### Loading State
![Loading State](https://via.placeholder.com/800x400?text=Loading+State)

## License

This project is licensed under the MIT License. Feel free to use and modify it as needed.

## Acknowledgments

- [Quotable API](https://api.quotable.io/) for providing the quote data.
- [Tailwind CSS](https://tailwindcss.com/) for the styling framework.
- [Redux Toolkit](https://redux-toolkit.js.org/) for state management.
