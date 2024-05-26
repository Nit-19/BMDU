import React, { Component } from 'react'

export default class SideNav extends Component {
    render() {
        return (
            <div >
                <nav className="navbar bg-body-tertiary redgradient">
                    <div className='container-fluid'>
                        <a className="navbar-brand" id='font' href="/" >
                            architect
                        </a>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                </nav>
            </div>
        )
    }
}
