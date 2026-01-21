import React, { use } from 'react';
import { NavLink } from 'react-router';



const categoriesPromise=fetch('/categories.json')
.then((res)=>res.json())


const Categories = () => {
const categories=use(categoriesPromise)    
console.log(categories)
    return (
        <div>
            <h2 className='font-bold'>All Categories({categories.length})</h2>
            <div className='grid grid-cols-1 gap-2.5 mt-5 w-4/6'>
                {
                    categories.map(category=><NavLink key={category.id} to={`/category/${category.id}`} className={'btn border-0 bg-base-100 text-accent'}>{category.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default Categories;