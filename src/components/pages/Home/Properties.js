import React, { useEffect, useState } from 'react';
import Prooperty from './Prooperty';

const Properties = ({ properties }) => {

    return (
        <div className='my-8 mx-12'>
            <h2 className="text-primary font-bold text-5xl uppercase my-5">Properties</h2>



            <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3'>
                {
                    properties.map(property => <Prooperty property={property} key={property.id}></Prooperty>)
                }
            </div>
        </div>
    );
};

export default Properties;