// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'Home',
    path: '',
    icon: getIcon('eva:pie-chart-2-fill')
  },
  {
    title: 'About',
    path: '/about',
    icon: getIcon('eva:people-fill')
  },
  {
    title: 'Our Team',
    path: '/team',
    icon: getIcon('eva:file-text-fill')
  },
  {
    title: 'Blog',
    path: '/blog',
    icon: getIcon('eva:alert-triangle-fill')
  }
    ,
  {
    title: 'Sign In',
    path: '/login',
    icon: getIcon('eva:lock-fill')
  },
  {
    title: 'Register',
    path: '/register',
    icon: getIcon('eva:person-add-fill')
  }
];

export default sidebarConfig;
