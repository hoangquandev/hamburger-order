import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionType from "../redux/action/action"

class Menu extends Component {
    renderMenu = () => {
        return this.props.menu.map((customerChoose, index) => {
            return (
                <div className='col-4 mt-2' key={index}>
                    <button onClick={() => { this.props.chooseMenus(customerChoose) }}>
                        <img style={{ width: '200px' }} src={customerChoose.hinhAnh} alt='hinhanh' />
                        <span>{customerChoose.name}</span>
                    </button>
                    <span>Số lượng: {customerChoose.soLuong}</span>
                </div>
            )
        })
    }
    render() {
        return (
            <div className='container'>
                <h1>Menu</h1>
                <div className="row">
                    {this.renderMenu()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        menu: state.customer.menu,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        chooseMenus: (customerChoose) => {
            dispatch(actionType.chooseMenu(customerChoose))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)