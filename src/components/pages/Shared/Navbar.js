import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navItem = <>
        <li><Link className='uppercase font-semibold' to="/">Home</Link></li>
        <li><Link className='uppercase font-semibold' to="/about">About</Link></li>
        <li><Link className='uppercase font-semibold' to="/blog">Blog</Link></li>
        <li><Link className='uppercase font-semibold' to="/contact">Contact</Link></li>
    </>
    return (

        <div class="navbar bg-base-100 shadow-sm sticky top-0 z-50">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItem}
                    </ul>
                </div>
                <Link to="/" class="btn btn-ghost uppercase text-primary font-bold text-2xl">Real Estate</Link>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {navItem}
                </ul>
            </div>
            <div class="navbar-end">
                <Link to="/contact" class="btn btn-primary">Get started</Link>
            </div>
        </div>

    );
};

export default Navbar;