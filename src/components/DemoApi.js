import React, { useEffect, useState } from 'react'


import axios from 'axios';

const DemoApi = () => {




    const [count, setCount] = useState(0);


    const [loading, setLoading] = useState(true);


    const [listName, setListName] = useState([]);


    const [book, setBook] = useState({});

    useEffect(() => {
        getApi();
    }, []);



    const getApi = async () => {
        // console.log('๐111---->', 111);
        // await new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //         resolve();
        //         console.log('๐2222---->', 2222);
        //     }, 3000);
        // });
        // console.log('๐333---->', 333);

        // const myPromise = new Promise((resolve, reject) => {
        //     let a = 0;

        //     setTimeout(() => {
        //         a = 100000;
        //         resolve(a);
        //     }, 3000);
        // });
        // const res = await myPromise;
        // setCount(res);


        const res = await axios.get('https://api.chucknorris.io/jokes/random')
        console.log('๐res---->', res);

        if (res) {
            setLoading(false);
            // setListName(res2.data.docs);
            setBook(res.data)
        } else {
            // setLoading(false);
            // alert("something went wrong");
        }



    }

    console.log('๐listName.length---->', listName.length);


    return (
        <>
            <div>DemoApi</div>

            <div className={`fixed inset-0 w-screen h-screen bg-[#000] ${loading ? "opacity-70" : "opacity-0 hidden"}`}></div>
            {/* {listName.map((item, index) => <p key={index}>{item.customer.name}</p>)} */}


            <p className='text-red-300'>{book.value}</p>


            <a href={book.url} target="_blank">{book.url}</a>

            {/* <p>{count}</p> */}
        </>
    )
}

export default DemoApi;