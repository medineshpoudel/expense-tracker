import 'hammerjs';
import { useState } from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/layout/header/Header';
import routes from './routes/routes';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>();

  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column' }}>
      <HashRouter>
        <Header isLoggedIn={false} />
        <div className="app-content">
          {isLoggedIn && (
            <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              {routes
                .filter((f) => f.role.indexOf('user') >= 0)
                .map((item) => (
                  <Route key={item.route} path={item.route} element={item.element} />
                ))}
              <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
          )}
          {!isLoggedIn && (
            <Routes>
              <Route path="/" element={<Navigate to="/landing" />} />
              {routes
                .filter((f) => f.role.indexOf('guest') >= 0)
                .map((item) => (
                  <Route key={item.route} path={item.route} element={item.element} />
                ))}
              <Route path="*" element={<Navigate to="/landing" />} />
            </Routes>
          )}
        </div>
        <ToastContainer />
      </HashRouter>
    </div>
  );
}

export default App;
