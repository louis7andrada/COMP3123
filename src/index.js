import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Assuming you have some global styles
import App from './App'; // Import the main App component
import { store } from './redux/store'; // Import the Redux store you configured
import { Provider } from 'react-redux'; // Import the Provider component from react-redux

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
