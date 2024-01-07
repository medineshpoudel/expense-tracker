/* eslint-disable max-len */
import Login from '../pages/Authentication/Login';
import Signup from '../pages/Authentication/Signup';
import Debts from '../pages/Debts/Debts';
import Expenses from '../pages/Expenses/Expenses';
import Home from '../pages/Home';
import Landing from '../pages/Landing';

const routes = [
  {
    text: 'Landing',
    name: 'Landing',
    role: ['guest'],
    element: <Landing />,
    route: '/landing',
    parent: 'default',
    icon: 'fa-light fa-home',
  },
  {
    text: 'LogIn',
    name: 'LogIn',
    role: ['guest'],
    element: <Login />,
    route: '/login',
    parent: 'default',
    showOnDrawer: false,
  },
  {
    text: 'SignUp',
    name: 'SignUp',
    role: ['guest'],
    element: <Signup />,
    route: '/signup',
    parent: 'default',
    showOnDrawer: false,
  },
  {
    text: 'Home',
    name: 'Home',
    role: ['user'],
    element: <Home />,
    route: '/home',
    parent: 'default',
    icon: 'fa-light fa-home',
  },
  {
    text: 'Expenses',
    name: 'Expenses',
    role: ['user'],
    element: <Expenses />,
    route: '/expenses',
    parent: 'default',
    icon: 'fa-solid fa-list',
  },
  {
    text: 'Debts',
    name: 'Debts',
    role: ['user'],
    element: <Debts />,
    route: '/debts',
    parent: 'default',
    icon: 'fa-solid fa-list',
  },
  {
    text: 'Statistics',
    name: 'Statistics',
    role: ['user'],
    element: <Home />,
    route: '/statistics',
    parent: 'default',
    icon: 'fa-solid fa-chart-bar',
  },
  {
    text: 'Planned payments',
    name: 'Planned payments',
    role: ['user'],
    element: <Home />,
    route: '/planned-payments',
    parent: 'default',
    icon: 'fa-solid fa-clock',
  },
  {
    text: 'Budgets',
    name: 'Budgets',
    role: ['user'],
    element: <Home />,
    route: '/budgets',
    parent: 'default',
    icon: 'fa-solid fa-coin',
  },
  {
    text: 'Debts',
    name: 'Debts',
    role: ['user'],
    element: <Home />,
    route: '/debts',
    parent: 'default',
    icon: 'fa-solid fa-hand-holding-usd',
  },
  {
    text: 'Goals',
    name: 'Goals',
    role: ['user'],
    element: <Home />,
    route: '/goals',
    parent: 'default',
    icon: 'fa-solid fa-bullseye',
  },
  {
    text: 'Shopping Lists',
    name: 'Shopping Lists',
    role: ['user'],
    element: <Home />,
    route: '/shopping-lists',
    parent: 'default',
    icon: 'fa-solid fa-cart-shopping',
  },
];

export default routes;
