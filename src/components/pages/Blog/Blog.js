import React from 'react';
import blog from '../../../images/blog (2).png'

const Blog = () => {
    return (
        <div>
            <img className='w-50 mx-auto' src={blog} alt="" />
            <h1 className="text-primary text-3xl uppercase font-bold text-center">Comming soon</h1>
        </div>
    );
};

export default Blog;