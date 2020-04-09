export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'cil-speedometer icons',
      badge: {
        variant: 'info',
        text: 'NEW'
      }
    },
    {
      name: 'Disabled',
      url: '/dashboard',
      icon: 'cil-ban icons',
      attributes: { disabled: true },
    },
    {
      name: 'Base',
      url: '/base',
      icon: 'cil-puzzle icons',
      children: [
        {
          name: 'Breadcrumbs',
          url: '/base/breadcrumbs',
          icon: 'cil-puzzle icons',
        },
        {
          name: 'Cards',
          url: '/base/cards',
          icon: 'cil-puzzle icons',
        },
        {
          name: 'Carousels',
          url: '/base/carousels',
          icon: 'cil-puzzle icons',
        },
        {
          name: 'Collapses',
          url: '/base/collapses',
          icon: 'cil-puzzle icons',
        },
        {
          name: 'Dropdowns',
          url: '/base/dropdowns',
          icon: 'cil-puzzle icons',
        },
        {
          name: 'Forms',
          url: '/base/forms',
          icon: 'cil-puzzle icons',
        },
        {
          name: 'Jumbotrons',
          url: '/base/jumbotrons',
          icon: 'cil-puzzle icons',
        },
        {
          name: 'List groups',
          url: '/base/list-groups',
          icon: 'cil-puzzle icons',
        },
        {
          name: 'Navs',
          url: '/base/navs',
          icon: 'cil-puzzle icons',
        },
        {
          name: 'Paginations',
          url: '/base/paginations',
          icon: 'cil-puzzle icons',
        },
        {
          name: 'Popovers',
          url: '/base/popovers',
          icon: 'cil-puzzle icons',
        },
        {
          name: 'Progress Bar',
          url: '/base/progress-bar',
          icon: 'cil-puzzle icons',
        },
        {
          name: 'Switches',
          url: '/base/switches',
          icon: 'cil-puzzle icons',
        },
        {
          name: 'Tables',
          url: '/base/tables',
          icon: 'cil-puzzle icons',
        },
        {
          name: 'Tabs',
          url: '/base/tabs',
          icon: 'cil-puzzle icons',
        },
        {
          name: 'Tooltips',
          url: '/base/tooltips',
          icon: 'cil-puzzle icons',
        },
      ],
    },
    {
      name: 'Download CoreUI',
      url: 'https://coreui.io/react/',
      icon: 'cil-cloud-download icons',
      class: 'mt-auto',
      variant: 'success',
      attributes: { target: '_blank', rel: "noopener" },
    },
    {
      name: 'Try CoreUI PRO',
      url: 'https://coreui.io/pro/react/',
      icon: 'cil-layers icons',
      variant: 'danger',
      attributes: { target: '_blank', rel: "noopener" },
    },
  ]
};
