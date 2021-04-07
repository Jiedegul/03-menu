import React, { Component } from 'react';
import MenuItem from "../components/MenuItem"

class MenuList extends Component {
    render() {
        return (
            <table className="table border">
             <thead>
                 <tr>
                     <th spoce="col">#</th>
                     <th spoce="col">Name</th>
                     <th spoce="col">Volume</th>
                     <th spoce="col">price</th>
                     <th></th>
                 </tr>
            </thead> 
            <tbody>
            {this.props.menu.map((item,index)=>(
                <MenuItem  addCart={this.props.addCart}key={item.id}index={index} item={item}/>
            ))}
               
                
             </tbody>  
            </table>
        
        );
    }
}

export default MenuList;