/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import {
  Drawer as DrawerComponent,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import routes from '../../../routes/routes';

export interface DrawerProps {
  username: string;
  isLoggedIn: boolean;
}

const Drawer = ({ username = 'Dinesh Poudel', isLoggedIn = true }: DrawerProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const routeClickHandler = (route: any) => {
    navigate(route.route);
    onClose();
  };

  return (
    <div>
      <div className="hamburger">
        <i className="fa-solid fa-bars fa-xl" style={{ color: 'white' }} onClick={onOpen} />
      </div>
      <DrawerComponent isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Expense Tracker</DrawerHeader>
          <DrawerBody>
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
          </DrawerBody>
        </DrawerContent>
      </DrawerComponent>
    </div>
  );
};

export default Drawer;
