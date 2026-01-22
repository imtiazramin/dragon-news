import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { GrGithub } from 'react-icons/gr';

const SocialLogin = () => {
    return (
        <div className='w-full'>
            <h2 className='font-bold mb-5 '>Login With</h2>
            <div className=' space-y-3'>
<button className='btn btn-outline btn-primary w-full '><FcGoogle  size={24}/> Login With Google</button>
            <button className='btn btn-outline btn-secondary w-full'><GrGithub size={24}/> Login With Github</button>
            </div>

        </div>
    );
};

export default SocialLogin;