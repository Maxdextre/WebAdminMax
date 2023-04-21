import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },

  {
    title: true,
    name: 'Theme'
  },
  {
    name: 'Estados de Cuenta',
    url: '/theme/colors',
    iconComponent: { name: 'cil-drop' }
  },
  {
    name: 'Components',
    title: true
  },
  {
    name: 'Colaborador',
    url: '/base',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'Usarios',
        url: '/base/accordion'
      },
    ]
  },
  {
    name: 'Académico',
    url: '/base',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'Carreras',
        url: '/base/accordion'
      },
      {
        name: 'Página web',
        url: '/base/accordion'
      },
    ]
  },

];
