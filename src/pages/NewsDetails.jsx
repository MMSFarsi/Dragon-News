import React from 'react'
import Header from '../components/Header'
import RightNav from '../components/layout-components/RightNav'
import { Link, useLoaderData } from 'react-router-dom'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const NewsDetails = () => {
    const data=useLoaderData();
    const newsData=(data.data[0]);
  return (
    <div>
        <header>
            <Header></Header>
        </header>
        <main className='w-11/12 mx-auto grid grid-cols-12 gap-5'>
    <section className='col-span-9'>
    <h2 className='text-2xl font-medium mb-3'>Dragon News</h2>

    {/* Cards */}

    <div className=" bg-base-100 ">
  <figure className="px-10 pt-10">
    <img
      src={newsData.image_url}
      alt="Shoes"
      className="rounded-none" />
  </figure>
  <div className="card-body ">
    <h2 className="text-2xl font-medium">{newsData.title}</h2>
    <p className=''>{newsData.details}</p>
    <div className="card-actions">
      <Link to="/category/08" className="btn btn-error text-white rounded-none"> <FaArrowLeft></FaArrowLeft> All news in this category</Link>
    </div>
  </div>
</div>
    {/* Cards */}

    </section>
    <aside className='col-span-3'>
        <RightNav></RightNav>
    </aside>
        </main>
    </div>
  )
}

export default NewsDetails