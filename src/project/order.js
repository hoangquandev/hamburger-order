import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionType from "../redux/action/action"

class Order extends Component {
    renderHamburger = () => {
        return this.props.menu.filter((item) => item.soLuong > 0).map((item, key) => {
            return (
                <img key={key} src={item.hinhAnh} style={{ width: '100px' }} alt='' />
            )
        })
    }
    renderList = () => {
        return this.props.menu.filter((item) => item.soLuong > 0).map((item, key) => {
            return (
                <p key={key}>{item.name} x {item.soLuong}</p>
            )
        })
    }
    render() {
        return (
            <div>
                <h1>Order</h1>
                <div className='container-fluid'>
                    <div className='row'>

                        <div className='col-12'>
                            <h4>Hamburger</h4>
                        </div>
                        <div className='col-12'>
                            <img src={this.props.banhmi} alt='' />
                            {this.renderHamburger()}
                            <img src={this.props.banhmi} alt='' />
                        </div>
                        <div className='col-12'>
                            <h4>order list</h4>
                            {this.renderList()}
                        </div>
                        <div className='col-12'>
                            <span>Tổng tiền: {this.props.tongTien} $ </span>
                            <br />
                            <button onClick={() => { this.props.thanhToan() }}>Thanh toán</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        menu: state.customer.menu,
        tongTien: state.customer.tongTien,
        banhmi: state.customer.banhmi
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        thanhToan: () => {
            dispatch(actionType.thanhToan())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Order)