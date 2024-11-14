import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import LatestNews from '../components/LatestNews'
import Navbar from '../components/Navbar'
import LeftNav from '../components/layout-components/LeftNav'
import RightNav from '../components/layout-components/RightNav'

const MainLayout = () => {
    return (
        <div className='font-poppins'>
            <Header></Header>
            <section className='w-11/12 mx-auto'>
                <LatestNews></LatestNews>
            </section>
            <nav className='w-11/12 mx-auto'>
                <Navbar></Navbar>
            </nav>
            <main className='w-11/12 mx-auto pt-4 grid md:grid-cols-12 gap-3'>
            <aside className='col-span-3'><LeftNav></LeftNav></aside>
            <section className='col-span-6'>
                <Outlet></Outlet>
            </section>
            <aside className='col-span-3'><RightNav></RightNav></aside>

            </main>
        </div>
    )
}

export default MainLayout