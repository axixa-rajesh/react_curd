import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

function ProductDelete() {
    
     const params = useParams()
   
    useEffect(() => {
        fetch("http://localhost:3000/product/"+params.id, {
            method: 'delete',
            headers: { 'Content-Type': 'application/json' }
           
        }).then(r => r.json).then(fr => {
            alert("Recod Deleted successfully");
                  
            })
    })
   
     return (
            <div>
                Data deleting...                                                               
            </div>
        );
   
}

export default ProductDelete;