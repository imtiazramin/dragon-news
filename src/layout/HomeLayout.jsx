import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';

const HomeLayout = () => {
    return (
        <div>
            <header></header>
            <main>
                <section className='left_nav'>
                    <Header></Header>
                    <section className='w-11/12 mx-auto my-5'>
                        <LatestNews></LatestNews>
                    </section>
                </section>
                <section className='main'>
                    <Outlet></Outlet>
                </section>
                <section className='right_nav'>

                </section>
            </main>
        </div>
    );
};

export default HomeLayout;