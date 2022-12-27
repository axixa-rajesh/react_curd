import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

function PU() {
    
  let [name, setName] =useState('');
    let [price, setPrice] =useState(0);
    const params = useParams()
        
    const [data, getdata] = useState([]);
    useEffect(() => {
         fetch("http://localhost:3000/product/"+params.id).then((r) => r.json()).then((rs) => {
            getdata( rs );
        })
    })
    const update = () => {
    let fdata = {
        "name": (name)?name: data.name,
        "price":(price)?price: data.price
     }
        fetch("http://localhost:3000/product/"+params.id, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(fdata)
        }).then(r => r.json).then(fr => {
            alert("Recod Saved successfully");
                  
            })
    }
 
     return (
            <div>
                <input type="text" id='nm' placeholder='Enter Name' onChange={(event) => setName( event.target.value)} defaultValue={data.name}  />
                <input type="number" id='prce' onChange={(event) => setPrice( event.target.value )} placeholder='Enter Price' defaultValue={data.price} />
                <button onClick={() => update() }>Ok</button>
                                                                
            </div>
        );
   
}

export default PU;