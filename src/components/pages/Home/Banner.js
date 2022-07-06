import React, { useState } from 'react';
import banner from '../../../images/banner.jpg'

const Banner = ({ functions }) => {
    const [handleLocation, handleprice, handleType, handleSearch, handleDate] = functions;

    return (
        <div style={{ backgroundImage: `url(${banner})` }} class="hero min-h-[70vh] bg-base-200">
            <div class="hero-content text-center ">
                <div class="grid grid-cols-2 lg:grid-cols-5">


                    <div class="card bg-base-100 p-0  rounded-none shadow">
                        <div class="card-body">
                            <label className='label font-bold' htmlFor="">Location</label>
                            <select onChange={handleLocation} name='location' class="select select-bordered  w-full max-w-xs">
                                <option disabled selected>Location</option>
                                <option value="United States">United Satate</option>
                                <option value="Canada">Canada</option>
                                <option value="Maxico">Maxico</option>
                            </select>
                        </div>
                    </div>
                    <div class="card bg-base-100 p-0 rounded-none shadow">
                        <div class="card-body">
                            <label className='label font-bold' htmlFor="">When</label>
                            <select onChange={handleDate} class="select select-bordered  w-full max-w-xs">
                                <option disabled selected>When</option>
                                <option value="In a month">In a month</option>
                                <option value="In two month">In two month</option>

                            </select>
                        </div>
                    </div>
                    <div class="card bg-base-100 p-0 rounded-none shadow">
                        <div class="card-body">
                            <label className='label font-bold' htmlFor="">Property Type</label>
                            <select onChange={handleType} class=" select-bordered select w-full max-w-xs">
                                <option disabled selected>Select Type</option>
                                <option value='Home'>Property</option>
                                <option value='Office'>Office</option>

                            </select>
                        </div>
                    </div>
                    <div class="card bg-base-100 p-0 rounded-none shadow">
                        <div class="card-body">
                            <label className='label font-bold' htmlFor="">Price</label>
                            <select onChange={handleprice} class="select select-bordered select w-full max-w-xs">
                                <option disabled selected>Select Price</option>
                                <option value='2000'>Above $2000 </option>
                                <option value='3000'>Above $3000 </option>
                                <option value='4000'>Above $4000 </option>
                            </select>
                        </div>
                    </div>
                    <div class="card bg-base-100 p-0 rounded-none shadow">
                        <div class="card-body">
                            <label className='label font-bold' htmlFor=""></label>
                            <button onClick={handleSearch} className='btn  btn-primary'>Search</button>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default Banner;