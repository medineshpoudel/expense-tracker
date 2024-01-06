/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import routes from '../../../routes/routes';

export interface DrawerProps {
  username: string;
  isLoggedIn: boolean;
}

const Drawer = ({ username = 'Dinesh Poudel', isLoggedIn = true }: DrawerProps) => {
  const navigate = useNavigate();
  const [showDrawer, setShowDrawer] = useState<boolean>(false);

  const handleHamburgerClick = () => {
    setShowDrawer((prevValue) => !prevValue);
  };

  const routeClickHandler = (route: any) => {
    navigate(route.route);
    setShowDrawer(false);
  };

  return (
    <div>
      <div className="hamburger">
        <i
          className="fa-solid fa-bars fa-xl"
          style={{ color: 'white' }}
          onClick={handleHamburgerClick}
        />
      </div>
      {showDrawer && (
        <div className="drawer-wrapper">
          {isLoggedIn && (
            <div className="drawer-user-info">
              <div className="user-avatar">{username[0]}</div>
              <div className="user-info">
                <h2 className="drawer-user-name">{username}</h2>
                <h2 className="user-app">Expense Tracker</h2>
              </div>
            </div>
          )}
          <div className="drawer-routes">
            {isLoggedIn &&
              routes
                .filter((route) => route.role[0].indexOf('user') >= 0)
                // .filter((route) => route.showOnDrawer[0].indexOf('true') >= 0)
                .map((route) => (
                  <div
                    key={route.name}
                    className="routes-wrapper"
                    onClick={() => routeClickHandler(route)}
                  >
                    <i className={route.icon} />
                    <li className="drawer-route">{route.name}</li>
                  </div>
                ))}
            {!isLoggedIn &&
              routes
                .filter((route) => route.role[0].indexOf('guest') >= 0)
                .map((route) => (
                  <div
                    key={route.name}
                    className="routes-wrapper"
                    onClick={() => routeClickHandler(route)}
                  >
                    <i className={route.icon} />
                    <li className="drawer-route">{route.name}</li>
                  </div>
                ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Drawer;
