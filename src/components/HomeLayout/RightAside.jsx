import React from 'react';
import SocialLogin from './SocialLogin';
import FindUs from '../FindUs';

const RightAside = () => {
    return (
        <div>
            <section className='mb-10'>
                 <SocialLogin></SocialLogin>
            </section>
          <section>
              <FindUs></FindUs>
          </section>
         
        </div>
    );
};

export default RightAside;