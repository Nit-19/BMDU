import React, { Component } from 'react'

export default class RightMenu extends Component {
    render() {
        return (
            
                <nav className="navbar bg-body-tertiary redgradient">
                    <div className='container-fluid' >
                        <span className="navbar-brand d-flex" >
                            <span style={{background:'rgba(0,0,0,0.3)' , borderRadius:'50%' , padding:'5px 14px'}}>
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </span>
                            <span id='megaMenu'>
                                <span><i class="fa-solid fa-gift"></i> Mega Menu <i class="fa-solid fa-chevron-down"></i></span>
                                <span><span style={{color:'white' , backgroundColor:'red' , borderRadius:'50%' , padding:'0 6px'}}>4</span>Setting <i class="fa-solid fa-chevron-down"></i></span>
                                <span><i class="fa-solid fa-gear"></i> Project <i class="fa-solid fa-chevron-down"></i></span>
                            </span>
                        </span>
                        <span style={{display:'grid' , gridTemplateColumns:'45px 45px 45px 45px', borderRight:'1px solid rgba(255,255,255,0.5)' , paddingRight:'20px'}}>
                                <span className='menu-icon'><i class="fa-solid fa-table-cells"></i></span>
                                <span className='menu-icon'><i class="fa-regular fa-bell"></i></span>
                                <span className='menu-icon'><img src="https://cdn.britannica.com/97/897-004-232BDF01/Flag-Germany.jpg" width='20' alt="" /></span>
                                <span className='menu-icon'><i class="fa-solid fa-chart-simple"></i></span>
                        </span>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                </nav>
            
        )
    }
}
