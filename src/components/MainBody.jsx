import React, { Component } from 'react'
import Order from './Order'
import Card from './Card'
import RightMenu from './RightMenu'
import img1 from '../assets/img/img1.png'
import img2 from '../assets/img/img2.png'
import img3 from '../assets/img/img3.png'
import img4 from '../assets/img/img4.png'

export default class MainBody extends Component {
    render() {
        return (
            <div>
                <div className='d-flex' style={{ justifyContent: 'space-between',alignItems:'center' , padding:'20px 20px' , backgroundColor:'rgba(0,0,0,0.03)'}}>
                    <span>CRM Dashboard</span>
                    <span className='d-flex' style={{alignItems:'center'}}>
                        <span style={{backgroundColor:'green' , padding:'7px 15px' , borderRadius:'30px' , color:'white', marginRight:'20px'}}>
                        <i class="fa-solid fa-battery-three-quarters"></i>
                        </span>
                        <button className='btn btn-primary' style={{backgroundColor:'black', borderRadius:'40px', padding:'8px 25px'}}>
                            Zoom In
                        </button>
                    </span>
                </div>
                <div>
                    <div style={{padding:'30px 20px'}}>
                        <button className='btn btn-primary' style={{marginRight:'20px'}} >Variation 1</button>
                        <button className='btn '>Variation 2</button>
                    </div>
                    <div className='row'>
                        <Order title='Total Orders'sub='Last Year Expenses' count='1896' progress={{width:'80%', backgroundColor:'rgb(88, 94, 209)'}} footer='YOY Growth' textColor={{ color: "rgb(105, 178, 123)", textAlign: "right" , fontWeight:"700"}}/>
                        <Order title='Product Sold' sub='Revenue Streams' count='$3M' progress={{width:'70%', backgroundColor:'red'}} footer='Sales' textColor={{ color: "rgb(223, 185, 87)", textAlign: "right" , fontWeight:"700"}}/>
                        <Order title='Followers'sub='People Interested' count='45,9%'progress={{width:'80%' , backgroundColor:'green'}} footer='Twitter Progress'textColor={{ color: "rgb(167, 63, 83)", textAlign: "right" , fontWeight:"700"}}/>
                    </div>
                    <div className='d-flex'>
                        <div className='col-sm-5' style={{display:'grid' , gridTemplateColumns:'50% 50%'}}>
                            <Card count='874' img={img1} sales={"sales last month"} cardStyle={{border:"1px solid rgb(149, 195, 168)",boxShadow:"1px 1px 6px rgb(149, 195, 168)"}}/>
                            <Card count='1283'img={img2} sales={"sales income"} cardStyle={{border:"1px solid rgb(126, 125, 156)",boxShadow:"1px 1px 6px rgb(126, 125, 156)"}}/>
                            <Card count='1286'img={img3} sales={"last month sales"} cardStyle={{border:"1px solid rgb(222, 208, 169)",boxShadow:"1px 1px 5px rgb(222, 208, 169)"}}/>
                            <Card count='564' img={img4} sales={"total revenue"} cardStyle={{border:"1px solid rgb(165, 124, 137)",boxShadow:"1px 1px 5px rgb(165, 124, 137)"}}/>
                        </div>
                        <div className='col-sm-7' style={{padding:'20px'}}>
                            <div className="card" style={{height:'100%  '}}>
                                
                                    <div className="card-body">
                                        <h5 className="card-title d-flex" style={{justifyContent:'space-between' , alignItems:'center'}}><span><i class="fa-solid fa-rocket"></i> Bandwidth Report</span><span><button className='btn btn-primary'>Tab 1</button><button className='btn'>Tab 2</button></span></h5>
                                        <div style={{display:'grid' , gridTemplateColumns:"50% 50%"}}>
                                            <div className='d-flex' style={{flexDirection:"column"}}><span>63%</span><span>Server Error</span></div>
                                            <div className='d-flex' style={{flexDirection:"column"}}><span>63%</span><span>Server Error</span></div>
                                            <div className='d-flex' style={{flexDirection:"column"}}><span>63%</span><span>Server Error</span></div>
                                            <div className='d-flex' style={{flexDirection:"column"}}><span>63%</span><span>Server Error</span></div>
                                        </div>
                                        <div>
                                            <img src={img3} alt="" style={{width:'60%'}} />
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
