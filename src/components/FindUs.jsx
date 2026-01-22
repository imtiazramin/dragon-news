import React from 'react';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaSquareTwitter } from 'react-icons/fa6';
import { SiFacebook } from 'react-icons/si';

const FindUs = () => {
    return (
        <div>
            <h2 className='font-bold mb-5'>Find Us On</h2>
            <div className="">
                <div className="join join-vertical w-full">
                    <button className="btn bg-base-100 py-5 join-item"><SiFacebook size={20} /> Facebook</button>
                    <button className="btn bg-base-100  py-5 join-item"> <FaSquareTwitter size={20}/>Twitter</button>
                    <button className="btn bg-base-100 py-5  join-item"> <FaInstagramSquare size={20}/>Instagram</button>
                </div>
            </div>
        </div>
    );
};

export default FindUs;