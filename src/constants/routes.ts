const ROUTES = {
    HOME: '',
    LOGIN: 'login',
    PLAN_SELECTION: 'plan-selection',
    REGISTER: 'register',
    ADMIN: {
      ROOT: 'admin',
      BINNACLE: 'admin/binnacle',
      MAINTENANCE: 'admin/maintenance'
    },
    CUSTOMER: {
      ROOT: 'customer'
    }
  } as const;
  
  export default ROUTES;