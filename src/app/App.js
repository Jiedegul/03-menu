import React, { Component } from 'react';
import MenuList from "../components/MenuList"
import Cart from '../components/Cart'

class App extends Component {
    state = {
        cart:{
        
            foods:[]
        },
        // araba
        menu: [
            {
                id:15,
                name: "Manty",
                gram:300,
                price:200
            },
            {
                id:14,
                name: "shashluk",
                gram:120,
                price:70
            },
            {
                id:13,
                name: "plov",
                gram:300,
                price:150
            },
            {
                id:12,
                name: "lagman",
                gram:300,
                price:130
            },
        ]
    }

    addCart =(id)=>{
        this.setState((state)=>{
            const food = state.menu.find((item)=>item.id===id)
            const foods=[...state.cart.foods,{...food}]
            return {cart:{foods}}
        })
    }
    render() {
        console.log(this.state.cart)
        return (
            <div className="container">
                <h1 className="text-center">Menu</h1>
                <MenuList addCart={this.addCart}menu={this.state.menu}/>
                <Cart cart={this.state.cart}/>
            </div>
        );
    }
}

export default App;