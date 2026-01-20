import React from 'react';
import Marquee from 'react-fast-marquee';



const LatestNews = () => {
    return (
        <div className='flex items-center bg-base-200  py-3 gap-4'>
            <p className='text-base-100 bg-primary px-3 py-1  ml-3'>Latest</p>
            {/* <Marquee className='flex gap-3.5'>
                 <p className='font-normal '>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as......</p>
            </Marquee> */}
           
           <p className='font-normal '>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as......</p>
        </div>
    );
};

export default LatestNews;