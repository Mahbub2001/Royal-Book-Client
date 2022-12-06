import React from 'react';
import icon1 from '../../assets/icons/icon1.png'
import icon2 from '../../assets/icons/icon2.png'
import icon3 from '../../assets/icons/icon3.png'
import icon4 from '../../assets/icons/icon4.png'
import icon5 from '../../assets/icons/icon5.png'

const Section2Home = () => {
    return (
        <div className='flex flex-col justify-center items-center justify-items-center'>
            <div className='grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 items-center justify-center'>
                <img  src={icon1} alt="" />
                <img  src={icon2} alt="" />
                <img  src={icon3} alt="" />
                <img  src={icon4} alt="" />
                <img  src={icon5} alt="" />
            </div>
        </div>
    );
};

export default Section2Home;