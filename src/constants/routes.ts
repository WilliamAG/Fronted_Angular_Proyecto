const ROUTES = {
    HOME: '',
    LOGIN: 'login',
    PLAN_SELECTION: 'plan-selection',
    REGISTER: 'register',
    ADMIN: {
      ROOT: 'admin',
      BINNACLE: 'admin/binnacle',
      MAINTENANCE: 'admin/maintenance',
      DASHBOARD: 'dashboard'
    },
    CUSTOMER: {
      ROOT: 'customer'
    },
    GALLERY: 'gallery',
    
  } as const;
  
  export default ROUTES;