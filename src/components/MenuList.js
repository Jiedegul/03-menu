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
                 </tr>
            </thead> 
            <tbody>
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
                
             </tbody>  
            </table>
        
        );
    }
}

export default MenuList;