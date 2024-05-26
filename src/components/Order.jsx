import React, { Component } from "react";

export default class Order extends Component {
    render() {
        return (
            <span className="col">
                <div className="card" style={{ margin: "10px" ,boxShadow:'2px 2px 10px lightgray' }}>
                    <div className="card-body">
                        <span className="row">
                            <span className="col-sm-8">
                                <h6 className="card-title">{this.props.title}</h6>
                                <p  style={{color:'lightgray'}}>
                                    {this.props.sub}
                                </p>
                            </span>
                            <span className="col-sm-4">
                                <h2 style={this.props.textColor}>
                                    {this.props.count}
                                </h2>
                            </span>
                        </span>
                        <p className="card-text">
                            <div
                                class="progress"
                                role="progressbar"
                                aria-label="Success example"
                                aria-valuenow="25"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{height:'10px'}}
                            >
                                <div className="progress-bar" style={this.props.progress}></div>
                            </div>
                        </p>
                        <div className="d-flex" style={{justifyContent:'space-between', color:'lightgray'}}>
                            <span>{this.props.footer}</span>
                            <span>100%</span>
                        </div>
                    </div>
                </div>
            </span>
        );
    }
}
