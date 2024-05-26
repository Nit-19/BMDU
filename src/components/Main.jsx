import React, { Component } from 'react'
import RightMenu from './RightMenu'
import MainBody from './MainBody'

export default class Main extends Component {
  render() {
    return (
      <div className='col-sm-10'>
            <RightMenu/>
            <MainBody/>
      </div>
    )
  }
}
