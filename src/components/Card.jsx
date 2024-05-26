import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        return (
            <div className='graphCard'>
                <div className="card" style={this.props.cardStyle}>
                    
                    <div className="card-body d-flex" style={{flexDirection:'column'}}>
                        <span style={{color:"lightgrey", fontSize:"1.2rem"}}>$<span style={{fontSize:"1.5rem",color:"black"}}>{this.props.count}</span></span>
                        <span style={{color:"lightgray"}}>{this.props.sales}</span>
                        <img src={this.props.img} alt="" width={150}/>
                    </div>
                </div>
            </div>
        )
    }
}
