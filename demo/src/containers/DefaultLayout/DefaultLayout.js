import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import * as router from 'react-router-dom';
import { Container, Nav, NavItem, NavLink, Badge, DropdownToggle, DropdownMenu } from 'reactstrap';

import {
  AppAside,
  AppAsideToggler,
  AppBreadcrumb2 as AppBreadcrumb,
  AppFooter,
  AppHeader,
  AppHeaderDropdown,
  AppSidebar,
  AppSidebarBrand,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  // AppSidebarNav as AppSidebarNav,
  AppSidebarNav2 as AppSidebarNav,
  AppSidebarToggler,
} from '../../../../src';
// sidebar nav config
import navigation from '../../_nav.js';
// routes config
import routes from '../../routes.js';

import logo from '../../assets/img/brand/logo.svg'
import sygnet from '../../assets/img/brand/sygnet.svg'
import avatar from '../../assets/img/avatars/6.jpg'

class DefaultLayout extends Component {
  render() {
    return (
      <div className="c-app">
        <AppSidebar fixed display="lg">
          <AppSidebarBrand
              full={{ src: logo, width: 89, height: 25, alt: 'CoreUI Logo' }}
              minimized={{ src: sygnet, width: 30, height: 30, alt: 'CoreUI Logo' }}
          />
          <AppSidebarHeader />
          <AppSidebarForm />
          {/*<AppSidebarNav navConfig={navigation} {...this.props} />*/}
          <AppSidebarNav navConfig={navigation} {...this.props} router={router}/>
          <AppSidebarFooter />
          <AppSidebarMinimizer />
        </AppSidebar>
        <div className="c-wrapper">
          <AppHeader fixed>
            <AppSidebarToggler className="d-lg-none" display="md" mobile />
            <AppSidebarToggler className="d-md-down-none" display="lg" />
            <ul className="c-header-nav">
              <li className="d-md-down-none c-header-nav-item">
                <NavLink href="#" className="c-header-nav-link"><i className="cui-bell icons font-xl d-block"></i><Badge pill color="danger">5</Badge></NavLink>
              </li>
              <li className="d-md-down-none c-header-nav-item">
                <NavLink href="#"><i className="c-header-nav-link cui-list icons icons font-xl d-block"></i></NavLink>
              </li>
              <li className="d-md-down-none c-header-nav-item">
                <NavLink href="#"><i className="c-header-nav-link cui-location-pin icons icons font-xl d-block"></i></NavLink>
              </li>
              <AppHeaderDropdown className="c-header-nav-item">
                <DropdownToggle nav className="c-header-nav-link" >
                  <img src={avatar} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                </DropdownToggle>
                <DropdownMenu right style={{ height: '400px' }}>
                  AppHeaderDropdown
                </DropdownMenu>
              </AppHeaderDropdown>
            </ul>
            <AppAsideToggler className="d-md-down-none" />
            <AppAsideToggler className="d-lg-none" mobile />
          </AppHeader>
          <div className="c-body">
            <main className="c-main">
              {/*<AppBreadcrumb appRoutes={routes}/>*/}
              {/*<AppBreadcrumb appRoutes={routes} router={router}/>*/}
              <Container fluid>
                <Switch>
                  {routes.map((route, idx) => {
                      return route.component ? (<Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (
                          <route.component {...props} />
                        )} />)
                        : (null);
                    },
                  )}
                  <Redirect from="/" to="/dashboard" />
                </Switch>
              </Container>
            </main>
            <AppAside fixed>
              Aside
            </AppAside>
          </div>
        </div>
        <AppFooter>
          <span><a href="https://coreui.io">CoreUI</a> &copy; 2019 creativeLabs</span>
          <span className="ml-auto">Powered by <a href="https://coreui.io/react">CoreUI for React</a></span>
        </AppFooter>
      </div>
    );
  }
}

export default DefaultLayout;
