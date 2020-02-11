### CoreUI `SidebarBrand` component


prop | default
--- | ---
tag | `a`
children | `<img src width height alt className/>`
className | `navbar-brand`
brand | `{src, width, height, alt, className: 'navbar-brand' }`
full | `{src, width, height, alt, className: 'navbar-brand-full' }`
minimized | `{src, width, height, alt, className: 'navbar-brand-minimized' }`


example:
```js
import { AppSidebarBrand } from '@coreui/react';
import logo from './logo.svg'
import sygnet from './sygnet.svg'

const full= { src: logo, width: 89, height: 25, alt: 'CoreUI Logo' }
const minimized= { src: sygnet, width: 30, height: 30, alt: 'CoreUI Logo' }

<AppSidebarBrand full={full} minimized={minimized} />
```
