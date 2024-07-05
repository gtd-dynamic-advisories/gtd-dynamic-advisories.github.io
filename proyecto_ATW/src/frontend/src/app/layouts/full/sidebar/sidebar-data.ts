import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Home',
  },
  {
    displayName: 'Asesores',
    iconName: 'user',
    route: '/Asesors',
  },
  {
    displayName: 'Crear Asesor',
    iconName: 'user-plus',
    route: '/Asesors/new',
  },
  {
    displayName: 'PYMEs',
    iconName: 'building-skyscraper',
    route: '/Pymes',
  },
  {
    displayName: 'Crear PYME',
    iconName: 'home-plus',
    route: '/Pymes/new',
  },
  {
    displayName: 'Trabajadores',
    iconName: 'phone',
    route: '/Pyme_Asesors',
  },
  {
    displayName: 'Nuevo Trabajador',
    iconName: 'phone-plus',
    route: '/Pyme_Asesors/new',
  },

];
