import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className=' flex justify-center items-center flex-col mt-7 gap-3 w-11/12 mx-auto'>
           <img className='w-[400px]' src={logo} alt="" />
           <p className='text-accent'>Journalism Without Fear or Favour</p>
          
           <p className='text-accent'>{
            format(new Date(),"EEEE , MMMM dd , yyyy")
            }</p>
        
        </div>
    );
};

export default Header;