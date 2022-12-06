import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryCard.css'

const CategoryCard = ({category,handleClick}) => {
    const {image,name,_id} = category;
    return (
        <>
        <Link to={`/categories/${name}`} className='cardcategory'>
            <div className=''>
                <img className='h-[15rem] w-[10rem]' src={image} alt="" />
            </div>
            <div>
                <p className='my-4 text-center font-bold uppercase text-orange-900 space-4'>{name}</p>
            </div>
        </Link>
        </>
    );
};

export default CategoryCard;