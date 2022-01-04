import React, { useEffect } from 'react'

import './layout.css'

import SideBar from '../sidebar/SideBar'
import Routes from '../Routes' 

import { useSelector, useDispatch } from 'react-redux'
import ThemeAction from '../../redux/actions/ThemeAction'

import { BrowserRouter, Route } from 'react-router-dom'
import TopNav from '../topnav/TopNav'

const Layout = () => {

    const themeReducer = useSelector(state => state.ThemeReducer)

    const dispatch = useDispatch()

    useEffect(() => {
        const themeClass = localStorage.getItem('themeMode', 'theme-mode-light')

        const colorClass = localStorage.getItem('colorMode', 'theme-mode-light')

        dispatch(ThemeAction.setMode(themeClass))

        dispatch(ThemeAction.setColor(colorClass))
    },[dispatch])

    return (
        <BrowserRouter>
            <Route
                render={(props) => (
                    <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
                        <SideBar {...props}/>
                        <div className="layout_content">
                            <TopNav/>
                            <div className="layout_content_main">
                                <Routes/>
                            </div>
                        </div>
                    </div>
                )}
            />
        </BrowserRouter>
    )
}

export default Layout
