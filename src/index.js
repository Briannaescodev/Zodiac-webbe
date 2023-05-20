import React from 'react'; //library
import ReactDOM from 'react-dom/client'; //reactDom endering react components to the DOM (Document Object Model).
import './styles/index.css'; //cssfile
import App from './App.js'; //main app


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( //This line creates a root element for rendering the React application. It selects the HTML element with the id "root" from the document, where the React application will be mounted.
  <React.StrictMode>  
     <App />
 </React.StrictMode>
);

// this code sets up the foundation for a React application. It imports necessary libraries and CSS styles, creates a root element to render the application, and renders the "App" component inside the root element. The use of <React.StrictMode> helps identify and address potential issues in the code.