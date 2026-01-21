import React from 'react';

const SocialLogin = () => {
    return (
        <div className='w-4/6'>
            <h2 className='font-bold mb-5 '>Login With</h2>
            <div className=' space-y-3'>
<button className='btn w-full '>Login With Google</button>
            <button className='btn w-full'>Login With Github</button>
            </div>
            
        </div>
    );
};

export default SocialLogin;