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
    name: 'Components',
    title: true
  },
  {
    name: 'Estados de cuenta',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
  },
  {
    name: 'Colaborador',
    url: '/base',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'Usuario',
        url: '/base/accordion'
      },
    ]
  },
  {
    name: 'Académico',
    url: '/forms',
    iconComponent: { name: 'cil-notes' },
    children: [
      {
        name: 'Carreras',
        url: '/forms/form-control'
      },
      {
        name: 'Página web',
        url: '/forms/select'
      },
    ]
  },
];
