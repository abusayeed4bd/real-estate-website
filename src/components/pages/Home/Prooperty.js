import React from 'react';
import { Link } from 'react-router-dom'

const Prooperty = ({ property }) => {

    const { name, img, description, price, location, type } = property;
    return (
        <Link to="/">

            <div class="card rounded-lg card-compact w-[90%] mx-auto mb-5 bg-base-100 shadow-xl text-left">
                <figure><img className='h-[219px] w-full' src={img} alt="Shoes" /></figure>
                <div class="card-body">
                    <h1 className="text-primary text-2xl uppercase font-bold">${price}</h1>
                    <h2 class="card-title font-bold text-2xl">{name}

                    </h2>

                    <div className='flex items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <h4 className="text-slate-600 text-xl">
                            {location}
                        </h4>

                    </div>

                    <p className='text-slate-500 text-lg'>{description}</p>

                </div>
            </div>
        </Link>
    );
};

export default Prooperty;