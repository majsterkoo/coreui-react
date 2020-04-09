import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import * as router from 'react-router-dom';
import { Container, Nav, NavItem, NavLink, Badge, DropdownToggle, DropdownMenu, UncontrolledDropdown, DropdownItem } from 'reactstrap';

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
          <AppSidebarNav navConfig={navigation} {...this.props} router={router}/>
          <AppAside fixed>
            <Nav nav className="nav-tabs nav-underline nav-underline-primary">
              <NavItem>
                <NavLink href="#">
                  <i className="c-icon cil-list" />
                </NavLink>
              </NavItem>
            </Nav>
          </AppAside>
          <AppSidebarFooter />
          <AppSidebarMinimizer />
        </AppSidebar>
        <div className="c-wrapper">
          <AppHeader fixed>
            <AppSidebarToggler className="d-lg-none" display="md" mobile />
            <AppSidebarToggler className="d-md-down-none" display="lg" />
            <Nav className="c-header-nav d-md-down-none">
              <NavItem>
                <NavLink to="#" className="c-header-nav-link px-3">Dashboard</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="#" className="c-header-nav-link px-3">Users</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="#" className="c-header-nav-link px-3">Settings</NavLink>
              </NavItem>
            </Nav>
          <Nav className="c-header-nav mfs-auto">  
          <NavItem className="d-md-down-none c-header-nav-item mx-2">
            <NavLink to="#" className="c-header-nav-link"><i className="cil-bell c-icon"></i><Badge pill color="danger">5</Badge></NavLink>
          </NavItem>
          <NavItem className="d-md-down-none c-header-nav-item mx-2">
            <NavLink to="#" className="c-header-nav-link"><i className="cil-list c-icon"></i><Badge pill color="warning">15</Badge></NavLink>
          </NavItem>
          <NavItem className="d-md-down-none c-header-nav-item mx-2">
            <NavLink to="#" className="c-header-nav-link"><i className="cil-location-pin c-icon"></i><Badge pill color="info">7</Badge></NavLink>
          </NavItem>
          <UncontrolledDropdown nav direction="down" className="c-header-nav-item">
            <DropdownToggle tag='a' className="c-header-nav-link" href="#">
              <div className="c-avatar">
                <img src={avatar} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
              </div>
            </DropdownToggle>
            <DropdownMenu right className="pt-0" style={{width: '180px'}}>
              <div className="dropdown-header bg-light py-2"><strong>Account</strong></div>
              <DropdownItem tag='a'><i className="c-icon mfe-2 cil-bell"></i> Updates<Badge color="info" className="mfs-auto">42</Badge></DropdownItem>
              <DropdownItem tag='a'><i className="c-icon mfe-2 cil-envelope-open"></i> Messages<Badge color="success" className="mfs-auto">42</Badge></DropdownItem>
              <DropdownItem tag='a'><i className="c-icon mfe-2 cil-task"></i> Tasks<Badge color="danger" className="mfs-auto">42</Badge></DropdownItem>
              <DropdownItem tag='a'><i className="c-icon mfe-2 cil-comment-square"></i> Comments<Badge color="warning" className="mfs-auto">42</Badge></DropdownItem>
              <div className="dropdown-header bg-light py-2"><strong>Settings</strong></div>
              <DropdownItem tag='a'><i className="c-icon mfe-2 cil-user"></i> Profile</DropdownItem>
              <DropdownItem tag='a'><i className="c-icon mfe-2 cil-settings"></i> Settings</DropdownItem>
              <DropdownItem tag='a'><i className="c-icon mfe-2 cil-credit-card"></i> Payments<Badge color="secondary" className="mfs-auto">42</Badge></DropdownItem>
              <DropdownItem tag='a'><i className="c-icon mfe-2 cil-file"></i> Projects<Badge color="primary" className="mfs-auto">42</Badge></DropdownItem>
              <DropdownItem divider />
              <DropdownItem tag='a'><i className="c-icon mfe-2 cil-lock-locked"></i> Lock Account</DropdownItem>
              <DropdownItem tag='a'><i className="c-icon mfe-2 cil-account-logout"></i> Logout</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
          <AppAsideToggler /*className="d-lg-none"*/ mobile />
          <AppBreadcrumb appRoutes={routes} router={router}/>
          </AppHeader>
          <div className="c-body">
            <main className="c-main">
              {/*<AppBreadcrumb appRoutes={routes}/>*/}
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
          </div>
        </div>
        {/*<AppFooter>
          <span><a href="https://coreui.io">CoreUI</a> &copy; 2019 creativeLabs</span>
          <span className="ml-auto">Powered by <a href="https://coreui.io/react">CoreUI for React</a></span>
        </AppFooter>*/}
      </div>
    );
  }
}

export default DefaultLayout;
