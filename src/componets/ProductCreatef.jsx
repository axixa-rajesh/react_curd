import { useState } from "react";

const ProductCreatef = () => {
    let [name, setName] =useState('');
    let [price, setPrice] =useState(0);
 const create = () => {
    let data = {
        "name": name,
        "price":price
     }
        fetch("http://localhost:3000/product", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(r => r.json).then(fr => {
            alert("Recod Saved successfully");
            document.getElementById('nm').value = '';
            document.getElementById('prce').value = '';        
            })
    }
   
   
    
        return (
            <div>
                <input type="text" id='nm' placeholder='Enter Name' onChange={(event) => setName( event.target.value)}  />
                <input type="number" id='prce' onChange={(event) => setPrice( event.target.value )} placeholder='Enter Price' />
                <button onClick={() => create() }>Ok</button>
                                                                
            </div>
        );
    
}

export default ProductCreatef;