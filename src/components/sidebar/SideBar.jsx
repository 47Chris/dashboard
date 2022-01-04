import React from 'react'

import './sidebar.css'

import logo from '../../assets/images/logo.svg'

import { Link } from 'react-router-dom'

import sidebar_items from '../../assets/JsonData/sidebar_routes.json'

const SideBarItem = props => {

    const active = props.active ? 'active' : 'disabled'

    return (
        <div className="sidebar_item">
            <div className={`sidebar_item-inner ${active}`}>
                <i className={props.icon}></i>
                <span>
                    {props.title}
                </span>
            </div>
        </div>
    )
}

const SideBar = props => {

    const activeItem = sidebar_items.findIndex(item => item.route === props.location.pathname)

    return (
        <div className="sidebar">
            <div className="sidebar_logo">
                <img src={logo} alt="company_logo" />
            </div>
            {
                sidebar_items.map((item,index) => (
                    <Link to={item.route} key={index}>
                        <SideBarItem
                            title={item.display_name}
                            icon={item.icon}
                            active={index === activeItem}
                        />
                    </Link>
                ))
            }
        </div>
    )
}

export default SideBar
