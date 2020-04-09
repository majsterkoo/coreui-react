class LayoutHelper {

  static elClassList = document.body.classList;
  static sidebarClassList = null;

  static sidebarToggle(toggle) {
    if(this.sidebarClassList === null) this.sidebarClassList = document.getElementById('sidebar').classList;
    const minimize = arguments.length ? toggle : !this.sidebarClassList.contains(/*'c-sidebar-minimized'*/'c-sidebar-unfoldable');
    this.sidebarMinimize(minimize);
    //this.brandMinimize(minimize);
    this.sidebarPSToggle(!minimize);  /*remove PS on sidebar minimized*/
  }

  static sidebarMinimize(force) {
    // return this.elClassList.toggle('sidebar-minimized', force);
    return this.toggleSidebarClass(/*'c-sidebar-minimized'*/'c-sidebar-unfoldable', force);
  }

  static brandMinimize(force) {
    // this.elClassList.toggle('brand-minimized', force);
    this.toggleClass('brand-minimized', force);
  }

  //  sidebar perfect scrollbar
  static sidebarPSToggle(toggle) {
    const sidebar = document.querySelector('.c-sidebar-nav');
    if (sidebar) {
      if (toggle) {
        sidebar.classList.add('ps');
        sidebar.classList.add('ps-container');
        sidebar.classList.add('ps--active-y');
      } else {
        sidebar.classList.remove('ps');
        sidebar.classList.remove('ps-container');
        sidebar.classList.remove('ps--active-y');
      }
    }
  }

  static toggleClass(className, force) {

    if (force === true) {
      this.elClassList.add(className);
    } else if (force === false) {
      this.elClassList.remove(className);
    } else {
      this.elClassList.toggle(className);
    }
    return this.elClassList.contains(className);
  }

  static toggleSidebarClass(className, force) {
    if(force === true){
      this.sidebarClassList.add(className);
    } else if (force === false) {
      this.sidebarClassList.remove(className);
    } else {
      this.sidebarClassList.toggle(className);
    }
    return this.sidebarClassList.contains(className);
  }

}

export default LayoutHelper;
