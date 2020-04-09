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
          <UncontrolledDropdown nav direction="down" className="c-header-nav-item mr-4">
            <DropdownToggle tag='a' className="c-header-nav-link" href="#">
              <i className={"fas fa-user"} />
              TODO user icon
              {/*<img src={'../../assets/img/avatars/6.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />*/}
            </DropdownToggle>
            <DropdownMenu right>
              
              {/*<DropdownItem header tag="div" className="text-center"><strong>Účet</strong></DropdownItem>
              <Link to="/account/settings"><DropdownItem><i className="fa fa-wrench"></i>Nastavení</DropdownItem></Link>*/}
              <DropdownItem><i className="fa fa-bell-o"></i> Updates<Badge color="info">42</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-envelope-o"></i> Messages<Badge color="success">42</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-tasks"></i> Tasks<Badge color="danger">42</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-comments"></i> Comments<Badge color="warning">42</Badge></DropdownItem>
              <DropdownItem header tag="div" className="bg-light py-2 text-dark"><strong>Správa</strong></DropdownItem>
              {/*<Link to="/management/users"><DropdownItem><i className="fa fa-user"></i>Uživatelé</DropdownItem></Link>*/}
              <DropdownItem><i className="fa fa-user"></i> Profile</DropdownItem>
              <DropdownItem><i className="fa fa-wrench"></i> Settings</DropdownItem>
              <DropdownItem><i className="fa fa-usd"></i> Payments<Badge color="secondary">42</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-file"></i> Projects<Badge color="primary">42</Badge></DropdownItem>
              <DropdownItem divider />
              {/*<DropdownItem><i className="fa fa-shield"></i> Lock Account</DropdownItem>*/}
              <DropdownItem onClick={e => {}}><i className="fa fa-lock"></i> Odhlásit se</DropdownItem>
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
