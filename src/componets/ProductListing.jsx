import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import{Link} from 'react-router-dom'
class ProductListing extends Component {
    constructor() {
        super();
        this.state = {
            data:[]
        }
    }
    componentDidMount() {
        fetch("http://localhost:3000/product").then((r) => r.json()).then((rs) => {
            this.setState({ data: rs });
        })
    }
    render() {
        let index = 0;
        return (
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>S.no</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                {
                    this.state.data.map((info) => (
                        <tr>
                            <td>{ ++index}</td>
                            <td>{ info.name}</td>
                            <td>{ info.price}</td>
                            <td>
                                <Link to={`/pedit/` + info.id} >Edit</Link> 
                                &nbsp;
                                <Link to={`/pdelete/`+info.id} >Delete</Link>
                            </td>
                        </tr>
                ))
                        }
                        </tbody>
                    </Table>
            </div>
        );
    }
}

export default ProductListing;