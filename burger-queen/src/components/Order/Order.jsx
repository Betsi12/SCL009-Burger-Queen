import React, { Component} from 'react';
import './Order.css';

import OrderItem from '../OrderItem/OrderItem'
class Order extends Component{
   
    render(){
        return(
            <div className="col-12 pedido container-fluid">   
                <input value={this.props.name} name="name" onChange={(e)=>this.props.handleChange(e)} className="pedido__input" type="text" placeholder="Ingresa Nombre de Cliente"/>
                <table className="tableOrder">
                    <tbody>
                    {this.props.order.map(el=> <OrderItem key={el.id} id={el.id} item={el.item} price={el.price} quantity={el.quantity} deleteItem={this.props.deleteItem}  />)}
                    </tbody>
                </table>
                <table className="tableTotal">
                    <tbody>
                        <tr>
                            <td className="total">Total:</td>
                            <td className="totalPriceOrder">{this.props.total}</td>
                        </tr>
                    </tbody>
                </table>
            <div className="row">
                <div className="col-6">
                    <button className="btn btn-limpiar"onClick={()=>this.props.clearOrder()}>Limpiar</button>
                </div>
                <div className="col-6">
                    <button className="btn btn-order" onClick={()=>this.props.submitToFirestore()}>Enviar pedido</button>
                </div>
            </div>
        </div>
        )
    }
}
export default Order;