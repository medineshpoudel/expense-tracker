export const permissions = [
  {
    resource: 'User',
    path: '/users',
    method: 'get',
  },
  {
    resource: 'User',
    path: '/users',
    method: 'post',
  },
  {
    resource: 'Contracts',
    path: '/contracts',
    method: 'get',
  },
  {
    resource: 'Contracts',
    path: '/contracts',
    method: 'post',
  },
  {
    resource: 'Timesheet',
    path: '/timesheet',
    method: 'get',
  },
  {
    resource: 'Role',
    path: '/roles',
    method: 'get',
  },
  {
    resource: 'Role',
    path: '/roles',
    method: 'post',
  },
];

export const data = [
  {
    text: 'Create Contract',
    selectedIcon: 'fa-solid fa-bell fa-lg',
    defaultIcon: 'fa-light fa-bell fa-lg',
    location: 'drawer',
    role: ['user', 'admin'],
    route: '/home',
    selected: true,
  },
  {
    text: 'Contracts',
    location: 'drawer',
    role: ['user', 'admin'],
    selectedIcon: 'fa-solid fa-file-contract fa-lg',
    defaultIcon: 'fa-light fa-file-contract fa-lg',
    route: '/contracts',
  },
  {
    text: 'User',
    selectedIcon: 'fa-solid fa-user fa-lg',
    defaultIcon: 'fa-light fa-user fa-lg',
    route: '/users',
    role: ['user'],
    location: 'drawer',
  },
  {
    text: 'TimeSheetsssssssssss',
    selectedIcon: 'fa-solid fa-clock fa-lg',
    defaultIcon: 'fa-light fa-clock fa-lg',
    route: '/timesheet',
    role: ['user'],
    location: 'drawer',
  },
  {
    text: 'Security',
    selectedIcon: 'fa-solid fa-lock fa-lg',
    defaultIcon: 'fa-light fa-lock fa-lg',
    route: '/Security',
  },
];

export const differentIconOnSelect = [
  {
    id: 1,
    text: 'Create Contract',
    selectedIcon: 'fa-solid fa-user fa-lg',
    defaultIcon: 'fa-light fa-bell fa-lg',
    route: '/home',
    role: ['user'],
    location: 'drawer',
  },
  {
    id: 2,
    text: 'Contracts',
    selectedIcon: 'fa-solid fa-clock fa-lg',
    defaultIcon: 'fa-light fa-file-contract fa-lg',
    route: '/contracts',
    selected: true,
    role: ['user'],
    location: 'drawer',
  },
];

export const drawerItemsWithSeparator = [
  {
    id: 1,
    text: 'Create Contract',
    selectedIcon: 'fa-solid fa-bell fa-lg',
    defaultIcon: 'fa-light fa-bell fa-lg',
    route: '/home',
    role: ['user'],
    location: 'drawer',
  },
  {
    id: 2,
    text: 'Contracts',
    selectedIcon: 'fa-solid fa-file-contract fa-lg',
    defaultIcon: 'fa-light fa-file-contract fa-lg',
    route: '/contracts',
    selected: true,
    role: ['user'],
    location: 'drawer',
  },
  {
    id: 3,
    text: 'TimeSheetsssssssssss',
    selectedIcon: 'fa-solid fa-clock fa-lg',
    defaultIcon: 'fa-light fa-clock fa-lg',
    route: '/timesheet',
    role: ['user'],
    location: 'drawer',
  },
  {
    separator: true,
    role: ['user'],
    location: 'drawer',
  },
  {
    separator: true,
    role: ['user'],
    location: 'drawer',
  },
  {
    separator: true,
    role: ['user'],
    location: 'drawer',
  },
  {
    id: 4,
    text: 'Security',
    selectedIcon: 'fa-solid fa-lock fa-lg',
    defaultIcon: 'fa-light fa-lock fa-lg',
    route: '/Security',
    role: ['user'],
    location: 'drawer',
  },
];
