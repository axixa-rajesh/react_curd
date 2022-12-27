import React, { Component } from 'react';

class ProductCreate extends Component {
    constructor() {
        super();
        this.state = {
            name: 'kya',
            price:432
        };
    }
    
    create() {
        fetch("http://localhost:3000/product", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state)
        }).then(r => r.json).then(fr => {
            alert("Recod Saved successfully");
            document.getElementById('nm').value = '';
            document.getElementById('prce').value = '';        
            })
    }

    render() {
        return (
            <div>
                <input type="text" id='nm' placeholder='Enter Name' onChange={(event) => this.setState({ name: event.target.value })}  />
                <input type="number" id='prce' onChange={(event) => this.setState({ price: event.target.value })} placeholder='Enter Price' />
                <button onClick={() => { this.create() }}>Ok</button>
                                                                
            </div>
        );
    }
}

export default ProductCreate;