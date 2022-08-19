import React, { useEffect, useState } from 'react';

const Home = () => {
    const [quote, setQuote] = useState([]);
    const [search, setSearch] = useState([]);
    const [error, setError] = useState([]);

    const handleQuote = () => {

        fetch('https://quotes15.p.rapidapi.com/quotes/random/', {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_X_RapidAPI_Key,
                'X-RapidAPI-Host': process.env.REACT_APP_X_RapidAPI_Host
            }
        })
            .then(response => response.json())
            .then(data => setQuote(data))
            .catch(err => setError(err));

    }

    console.log(quote);
    // console.log(search);
    console.error(error);

    return (
        <div className='mt-10'>

            <h1 className='font-semibold text-2xl text-black-800 text-center '>Welcome To <span className='font-semibold text-2xl text-blue-800 text-center'>Random Quotes</span></h1>

            <div className='flex justify-center items-center mt-14 mb-5'>
                <div class="card-actions justify-end">
                    <button class="btn btn-secondary text-white" onClick={handleQuote}>Get a New Quote</button>
                </div>
            </div>

            <div className='flex justify-center items-center mb-5'>
                <div class="card w-96 lg:max-w-full bg-base-100 shadow-lg">
                    <div class="card-body">
                        <p className='text-blue-800 text-center font-serif font-bold text-lg'>"{quote?.content}"</p>
                    </div>
                </div>
            </div>

            <p style={{ color: "red", textAlign: "center", margin: "10px" }}>
                {quote?.content ? "" : "Please click this button 1 second later to get a new quote"}
            </p>

            <div className='flex justify-center items-center mt-14 mb-20'>
                <div class="form-control">
                    <div class="input-group">
                        <input type="text" placeholder="Search…" class="input input-bordered" />
                        <button class="btn btn-square btn-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default Home;