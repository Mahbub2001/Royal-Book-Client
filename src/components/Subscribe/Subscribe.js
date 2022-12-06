import React from 'react';

const Subscribe = () => {
    return (
        <section className='flex flex-col justify-center items-center'>
            <div className='lg:w-[70%] '>
            <div className='flex justify-between items-center flex-col lg:flex-row'>
                <div>
                    <h1 className='lg:text-6xl md:text-5xl text-3xl'>Subscribe To Our Newsletter</h1>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error iste quasi exercitationem architecto quam deserunt magni <br /> reprehenderit quod explicabo esse, culpa voluptatum quis sapiente amet.</p>
                    <form className='mt-5'>
                        <input className='border-b-2 bg-transparent border-gray-700 md:w-96 outline-none' type="email" />
                    </form>
                </div>
            </div>
            </div>
        </section>
    );
};

export default Subscribe;