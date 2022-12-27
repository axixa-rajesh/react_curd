import React, { Component } from 'react';
import {useParams} from 'react-router-dom';

class ProductEdit extends Component {
    constructor(props) {
               super(props);
            console.log(this.props)

        this.state = {
            data:[]
        }
    }
    componentDidMount() {
        fetch("http://localhost:3000/product/4").then((r) => r.json()).then((rs) => {
            this.setState({ data: rs });
        })
    }
    render(props) {
        
        return (
          <div>
                <input type="text" id='nm' value={this.state.data.name} placeholder='Enter Name' onChange={(event) => this.setState({ name: event.target.value })}  />
                <input type="number"  value={this.state.data.price} id='prce' onChange={(event) => this.setState({ price: event.target.value })} placeholder='Enter Price' />
                <button onClick={() => { this.create() }}>Ok</button>
                                                                
            </div>
        );
    }
}

export default ProductEdit;