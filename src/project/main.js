import React, { Component } from 'react'
import Menu from './menu'
import Order from './order'


export default class Main extends Component {
    render() {
        return (
            <div>
                <Menu />
                <Order />
            </div>
        )
    }
}
