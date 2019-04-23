import React from 'react'
import { Link, NavLink } from "react-router-dom";
import { Scrollbars } from 'react-custom-scrollbars';

const menuData = [
    {
        title: "Dashboad",
        url: "/dashboard"
    },{
        title: "Logout",
        url: "/logout"
    },
  ]

class ItemNode extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            isOpen:false
        }
    }

    toggle = () => {
        // console.log("isOpen:", this.state.isOpen);
        this.setState({
            isOpen: !this.state.isOpen
        })
        // this.forceUpdate();
    }

    render() {
        const { title, url, children } = this.props.menuData;
        const sideMenuToggle = this.props.sideMenuToggle;
        if(children)
        {
            return (
                <li className="nav-item dropdown-btn">
                    <Link className={`nav-link ${ this.state.isOpen ? "rotate-90" : ""}`} to="#" onClick={ this.toggle }>
                        { title } <i className="fa fa-caret-right" ></i>
                    </Link>
                    <ul style={{ display: this.state.isOpen ? "block" : "none"}}>
                        { children.map((item, index) => (<ItemNode menuData={ item } key={ index } sideMenuToggle = { sideMenuToggle }></ItemNode>)) }
                    </ul>
                </li>)
        }
        else
        {
            return (
                <li className="nav-item">
                    <NavLink className="nav-link" to={ url } onClick = { sideMenuToggle }>{ title }</NavLink>
                </li>)

        }
    }
}
class SideBarCollapse extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            active: false
        }

        this.sideMenuToggle = this.sideMenuToggle.bind(this);
    }

    sideMenuToggle() {
        this.setState({
            active: !this.state.active
        })
    }

  render() {
    return (
    <div>
        <header className="top-navbar navbar navbar-dark fixed-top bg-dark justify-content-between">
            <Link className="navbar-brand" to="#">Cookingpot</Link>
            <ul className="navbar-nav flex-row">
                <li className="nav-item">
                <button className={`navbar-toggler ${ this.state.active ? "active" : ""}` } type="button" id="sidebarCollapse"
                    onClick = { this.sideMenuToggle }>
                    <i className="fa fa-bars"></i>
                </button>
                </li>
            </ul>
        </header>
        <nav id="sidebar" className={ `${ this.state.active ? "active" : ""}` }>
            <div className="sideMenuTouchGlass"
                onClick={ this.sideMenuToggle }
                style={{ display: this.state.active ? "block" : "none"}}></div>
            <Scrollbars>
                <p className="text-center text-light mt-3 mb-2">Hi, Rodolfo</p>
                    <hr className="nav-divider" />
                    <ul className="nav flex-column">
                        { menuData.map((item, index)=>(<ItemNode menuData={item} key={index} sideMenuToggle={this.sideMenuToggle}></ItemNode>)) }
                    </ul>
                </Scrollbars>
        </nav>
    </div>
    )
  }
}
export default SideBarCollapse
