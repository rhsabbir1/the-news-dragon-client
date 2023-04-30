import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Left = () => {

    const [cartaGoris , setCatagoris] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/catagoris')
        .then(res => res.json())
        .then(data => setCatagoris(data))
        .catch(error => console.log(error))
    },[])

    return (
        <div>
            <h4>All catagoris</h4>
          
           <div className='ps-2'>
            {
                cartaGoris.map(catagory => <p
                key={catagory.id}
                >
                    <Link to={`/catagory/${catagory.id}`} className='text-decoration-none text-black'>{catagory.name}</Link>
                    </p>)
            }
           </div>
           
           
        </div>
    );
};

export default Left;