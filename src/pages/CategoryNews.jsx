import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Card from '../components/Card';

const CategoryNews = () => {
    const {data}=useLoaderData();
  
  return (
    <div> 
        <h2>Dragon News Home</h2>

    
    <div>
        {data.map(singledata=> <Card key={singledata._id} news={singledata}></Card> )}
    </div>
    </div>
  )
}

export default CategoryNews