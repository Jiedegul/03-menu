import React, { Component } from 'react';
import MenuList from "../components/MenuList"

class App extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="text-center">Menu</h1>
                <MenuList/>
            </div>
        );
    }
}

export default App;