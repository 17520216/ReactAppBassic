import React, { useEffect, useState } from 'react';


const data = ["phone", "tablet", "desktop", "desktop1", "desktop2", "desktop2"];

export default function Products(props) {




    let [price, setPrice] = useState(1);

    const [cart, setCart] = useState("Phone");

    const [data, setData] = useState([]);



    const handelIncrease = () => {

        // if (price == 10) return;
        const t = price + 1;
        setPrice(t);

    }

    const handleDecrease = () => {
        // if (price == 1) return;

        const t = price - 1;
        setPrice(t);
    }

    const handleChange = (option) => {

        setCart(option);
    }


    useEffect(() => {
        getData();
    }, [])


    const getData = async () => {
        const res = await fetch("https://tka.tiki.vn/widget/api/v1/banners-group?group=home_banner_main_v2&platform=desktop&trackity_id=633d89d6-bcb8-2e92-8534-907fccb0459e").then((res) => { return res.json() })
        setData(res.data[0].banners);
    }

    return (
        <div className={`box`} style={{ background: "#e8e8e8" }}>
            <h2>Products</h2>
            <p className="name">{props.name}</p>
            <div className="price">{props.price}</div>


            <div className="flex">
                <button className='mx-[10px]' onClick={handleDecrease}>-</button>
                <div className='default'>{price}</div>
                <button className='mx-[10px]' onClick={handelIncrease}>+</button>
            </div>


            <div className="cart p-[10px] bg-red-300">{cart}</div>

            <div className="listOption flex">

                {
                    data.map((e, i) =>
                        <div key={i}>
                            <img className='w-[300px]' src={e.mobile_url} alt="" />
                            {/* <button key={i} className="p-[10px] bg-[#e8e800] mx-[10px]">{e.title}</button> */}
                        </div>

                    )
                }
            </div>

        </div>


    )
}









