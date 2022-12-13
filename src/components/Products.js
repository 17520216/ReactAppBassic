import React from 'react'

export default function Products(props) {

    console.log('props---->', props);

    return (
        <div className={`box`}
            style={{ backgroundImage: `url(${props.images})` }}
        >
            <h2>Products</h2>
            <p className="name">{props.name}</p>
            <div className="price">{props.price}</div>
            {/* <img src={props.images} alt="" /> */}
        </div>


    )
}



