import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import 'antd/dist/reset.css';
import { ConfigProvider, Switch } from 'antd';
import { LoggingProvider } from './utilities/LoggingContext';

const lightTheme = {
  token: {
    colorPrimary: '#52c41a', // Green primary color
    colorBgLayout: '#f0f2f5', // Light background for layout
    colorBgContainer: '#ffffff', // White background for components
    borderRadius: 8, // Larger border radius
    fontSizeBase: 16, // Larger base font size
  },
};

const darkTheme = {
  token: {
    colorPrimary: '#52c41a',
    colorBgLayout: '#001529', // Dark background for layout
    colorBgContainer: '#141414', // Darker background for components
    borderRadius: 8,
    fontSizeBase: 16,
  },
};

const Root = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    
    <ConfigProvider theme={isDarkMode ? darkTheme : lightTheme}>
    <div>
      {/* Theme switcher in header */}
      {/*
      <div style={{ padding: '10px', textAlign: 'right', background: isDarkMode ? '#001529' : '#f0f2f5' }}>
        <Switch checked={isDarkMode} onChange={toggleTheme} checkedChildren="Dark" unCheckedChildren="Light" />
      </div> */}
      <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
    </div>
  </ConfigProvider>
  );
}


// Use React 18 createRoot
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<Root />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
