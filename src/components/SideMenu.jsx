import React, { Component } from 'react'

export default class SideMenu extends Component {
    render() {
        return (
            <div id='sideMenu'>
                <ul>
                    <li className='level1'>Menu
                        <ul>
                            <li>
                                <div data-toggle="collapse" data-target="#dash-menu1">Dashboards</div>
                                <ul id='dash-menu1' className='collapse'>
                                    <li>Analytics</li>
                                    <li>Commerce</li>
                                    <li>Sales</li>
                                    <li>Minimal</li>
                                    <li>CRM</li>
                                </ul>
                            </li>
                            <li>
                                <div data-toggle="collapse" data-target="#dash-menu">Pages</div>
                                <ul id='dash-menu' className='collapse'>
                                    <li>Analytics</li>
                                    <li>Commerce</li>
                                    <li>Sales</li>
                                    <li>Minimal</li>
                                    <li>CRM</li>
                                </ul>
                            </li>
                            <li>

                                <div data-toggle="collapse" data-target="#dash-menu">Applications</div>
                                <ul id='dash-menu' className='collapse'>
                                    <li>Analytics</li>
                                    <li>Commerce</li>
                                    <li>Sales</li>
                                    <li>Minimal</li>
                                    <li>CRM</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className='level1'>UI Components
                        <ul>
                            <li>
                                <div data-toggle="collapse" data-target="#dash-menu">Elements</div>
                                <ul id='dash-menu' className='collapse'>
                                    <li>Analytics</li>
                                    <li>Commerce</li>
                                    <li>Sales</li>
                                    <li>Minimal</li>
                                    <li>CRM</li>
                                </ul>
                            </li>
                            <li>
                                <div data-toggle="collapse" data-target="#dash-menu">Components</div>
                                <ul id='dash-menu' className='collapse'>
                                    <li>Analytics</li>
                                    <li>Commerce</li>
                                    <li>Sales</li>
                                    <li>Minimal</li>
                                    <li>CRM</li>
                                </ul>
                            </li>
                            <li>
                                <div data-toggle="collapse" data-target="#dash-menu">Tables</div>
                                <ul id='dash-menu' className='collapse'>
                                    <li>Analytics</li>
                                    <li>Commerce</li>
                                    <li>Sales</li>
                                    <li>Minimal</li>
                                    <li>CRM</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className='level1'>Dashboard Widgets
                        <ul>
                            <li>
                                <div data-toggle="collapse" data-target="#dash-menu">Chart Boxes</div>
                                <ul id='dash-menu' className='collapse'>
                                    <li>Analytics</li>
                                    <li>Commerce</li>
                                    <li>Sales</li>
                                    <li>Minimal</li>
                                    <li>CRM</li>
                                </ul>
                            </li>
                            <li>
                                <div data-toggle="collapse" data-target="#dash-menu">Profile Boxes</div>
                                <ul id='dash-menu' className='collapse'>
                                    <li>Analytics</li>
                                    <li>Commerce</li>
                                    <li>Sales</li>
                                    <li>Minimal</li>
                                    <li>CRM</li>
                                </ul>
                            </li>
                            <li>

                                <div data-toggle="collapse" data-target="#dash-menu">Content Boxes</div>
                                <ul id='dash-menu' className='collapse'>
                                    <li>Analytics</li>
                                    <li>Commerce</li>
                                    <li>Sales</li>
                                    <li>Minimal</li>
                                    <li>CRM</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className='level1'>Forms
                        <ul>
                            <li>
                                <div data-toggle="collapse" data-target="#dash-menu">Elements</div>
                                <ul id='dash-menu' className='collapse'>
                                    <li>Analytics</li>
                                    <li>Commerce</li>
                                    <li>Sales</li>
                                    <li>Minimal</li>
                                    <li>CRM</li>
                                </ul>
                            </li>
                            <li>
                                <div data-toggle="collapse" data-target="#dash-menu">Widgets</div>
                                <ul id='dash-menu' className='collapse'>
                                    <li>Analytics</li>
                                    <li>Commerce</li>
                                    <li>Sales</li>
                                    <li>Minimal</li>
                                    <li>CRM</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className='level1'>Charts
                        <ul>
                            <li>
                                <div data-toggle="collapse" data-target="#dash-menu">ChartJS</div>
                                <ul id='dash-menu' className='collapse'>
                                    <li>Analytics</li>
                                    <li>Commerce</li>
                                    <li>Sales</li>
                                    <li>Minimal</li>
                                    <li>CRM</li>
                                </ul>
                            </li>
                            <li>
                                <div data-toggle="collapse" data-target="#dash-menu">Apex Charts</div>
                                <ul id='dash-menu' className='collapse'>
                                    <li>Analytics</li>
                                    <li>Commerce</li>
                                    <li>Sales</li>
                                    <li>Minimal</li>
                                    <li>CRM</li>
                                </ul>
                            </li>
                            <li>

                                <div data-toggle="collapse" data-target="#dash-menu">Gauges</div>
                                <ul id='dash-menu' className='collapse'>
                                    <li>Analytics</li>
                                    <li>Commerce</li>
                                    <li>Sales</li>
                                    <li>Minimal</li>
                                    <li>CRM</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}
