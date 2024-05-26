import { Component, createRef } from "react";

class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenus: {},
    };
    this.menuRefs = {};
  }

  toggleMenu = (menuId) => {
    this.setState(
      (prevState) => ({
        openMenus: {
          ...prevState.openMenus,
          [menuId]: !prevState.openMenus[menuId],
        },
      }),
      () => {
        const menuElement = this.menuRefs[menuId].current;
        if (this.state.openMenus[menuId]) {
          menuElement.style.maxHeight = `${menuElement.scrollHeight}px`;
          menuElement.style.overflow = "hidden";
        } else {
          menuElement.style.maxHeight = `${menuElement.scrollHeight}px`;
          setTimeout(() => {
            menuElement.style.maxHeight = "0px";
            menuElement.style.overflow = "hidden";
          }, 10);
        }
      }
    );
  };

  renderMenu = (menuId, title, items) => {
    if (!this.menuRefs[menuId]) {
      this.menuRefs[menuId] = createRef();
    }
    const isOpen = this.state.openMenus[menuId];
    return (
      <li key={menuId}>
        <div
          onClick={() => this.toggleMenu(menuId)}
          style={{
            cursor: "pointer",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",
            paddingLeft: 0,
          }}
        >
          {title}
          <i
            className={`fas fa-chevron-down ${isOpen ? "rotate" : "rotate0"}`}
          />
        </div>
        <ul
          ref={this.menuRefs[menuId]}
          className={`${isOpen ? "show" : "collapse"}`}
          style={{
            maxHeight: "0px",
            overflow: "hidden",
            transition: "max-height 0.3s ease-out",
          }}
        >
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </li>
    );
  };

  render() {
    return (
      <div id="sideMenu">
        <ul>
          <li className="level1">
            Menu
            <ul>
              {this.renderMenu("dash-menu1", "Dashboards", [
                "Analytics",
                "Commerce",
                "Sales",
                "Minimal",
                "CRM",
              ])}
              {this.renderMenu("dash-menu2", "Pages", [
                "Analytics",
                "Commerce",
                "Sales",
                "Minimal",
                "CRM",
              ])}
              {this.renderMenu("dash-menu3", "Applications", [
                "Analytics",
                "Commerce",
                "Sales",
                "Minimal",
                "CRM",
              ])}
            </ul>
          </li>
          <li className="level1">
            UI Components
            <ul>
              {this.renderMenu("dash-menu4", "Elements", [
                "Analytics",
                "Commerce",
                "Sales",
                "Minimal",
                "CRM",
              ])}
              {this.renderMenu("dash-menu5", "Components", [
                "Analytics",
                "Commerce",
                "Sales",
                "Minimal",
                "CRM",
              ])}
              {this.renderMenu("dash-menu6", "Tables", [
                "Analytics",
                "Commerce",
                "Sales",
                "Minimal",
                "CRM",
              ])}
            </ul>
          </li>
          <li className="level1">
            Dashboard Widgets
            <ul>
              {this.renderMenu("dash-menu7", "Chart Boxes", [
                "Analytics",
                "Commerce",
                "Sales",
                "Minimal",
                "CRM",
              ])}
              {this.renderMenu("dash-menu8", "Profile Boxes", [
                "Analytics",
                "Commerce",
                "Sales",
                "Minimal",
                "CRM",
              ])}
              {this.renderMenu("dash-menu9", "Content Boxes", [
                "Analytics",
                "Commerce",
                "Sales",
                "Minimal",
                "CRM",
              ])}
            </ul>
          </li>
          <li className="level1">
            Forms
            <ul>
              {this.renderMenu("dash-menu10", "Elements", [
                "Analytics",
                "Commerce",
                "Sales",
                "Minimal",
                "CRM",
              ])}
              {this.renderMenu("dash-menu11", "Widgets", [
                "Analytics",
                "Commerce",
                "Sales",
                "Minimal",
                "CRM",
              ])}
            </ul>
          </li>
          <li className="level1">
            Charts
            <ul>
              {this.renderMenu("dash-menu12", "ChartJS", [
                "Analytics",
                "Commerce",
                "Sales",
                "Minimal",
                "CRM",
              ])}
              {this.renderMenu("dash-menu13", "Apex Charts", [
                "Analytics",
                "Commerce",
                "Sales",
                "Minimal",
                "CRM",
              ])}
              {this.renderMenu("dash-menu14", "Gauges", [
                "Analytics",
                "Commerce",
                "Sales",
                "Minimal",
                "CRM",
              ])}
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default SideMenu;
