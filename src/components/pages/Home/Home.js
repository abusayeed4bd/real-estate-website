import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import Properties from './Properties';

const Home = () => {
    const [properties, setProperties] = useState([]);
    const [location, setLocation] = useState('');
    const [price, setPrice] = useState('');
    const [type, setType] = useState('');
    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setProperties(data))
    }, [location, price])


    // ----------------------



    const handleLocation = e => {
        setLocation(e.target.value)

    }
    const handleprice = (e) => {
        setPrice(e.target.value)
    }

    const handleType = (e) => {
        setType(e.target.value)
    }


    const handleSearch = () => {
        console.log(location, parseInt(price))
        const searched = properties
            .filter(property => property.location === (location ? location : property.location))

            .filter(property => property.price >= (parseInt(price) ? parseInt(price) : property.price))
        setProperties(searched)
    }
    const functions = [handleLocation, handleprice, handleType, handleSearch]


    return (
        <div>
            <Banner functions={functions}></Banner>
            <Properties properties={properties}></Properties>
        </div>
    );
};

export default Home;