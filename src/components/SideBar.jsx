import React, { Component } from 'react'
import SideNav from './SideNav'
import SideMenu from './SideMenu'

export default class SideBar extends Component {
    render() {
        return (
            <div className='col-sm-2'>
                <SideNav/>
                <SideMenu/>
            </div>
        )
    }
}
