/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Drawer from '../drawer/Drawer';
import { LocalStorageConstants } from '../../../constants/Constants';

export interface HeaderProps {
  isLoggedIn: boolean;
}

const Header = ({ isLoggedIn = false }: HeaderProps) => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState(localStorage.getItem('theme'));

  const themeChanger = () => {
    const body = document.getElementById('app-theme');
    if (theme === 'light') {
      setTheme('dark');
      body?.setAttribute('href', 'AppDark.css');
      localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      body?.setAttribute('href', 'AppLight.css');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="header">
      <div className="header-app-info">
        <Drawer username="Dinesh Poudel" isLoggedIn={isLoggedIn} />
        <div
          className="app-logo"
          style={{ fontFamily: 'cursive', fontStyle: 'italic' }}
          onClick={() => navigate('/')}
        >
          Expense Tracker
        </div>
      </div>
      <div className="header-controls">
        {theme === 'dark' ? (
          <i className="fa fa-moon fa-lg" onClick={themeChanger} />
        ) : (
          <i className="fa-solid fa-sun fa-lg" onClick={themeChanger} />
        )}

        <i className="fa fa-bell fa-lg" />
        {isLoggedIn && (
          <>
            <h3>{localStorage.getItem(LocalStorageConstants.expenseTrackerUsername)}</h3>
            <button
              className="button"
              type="button"
              onClick={() => {
                localStorage.clear();
                window.location.href = '/';
              }}
            >
              Logout
            </button>
          </>
        )}
        {!isLoggedIn && (
          <button className="button" type="button" onClick={() => navigate('/login')}>
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
