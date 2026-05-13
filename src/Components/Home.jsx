import React, { useEffect, useState } from 'react'
import Carousel from '../Pages/Carousel'
import Navbar from './Navbar'
import Footer from './Footer'
import Card from '../Pages/Card'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [cat,setCat] = useState([])
  const [items,setItem] = useState([])
  const navigate = useNavigate()
  const Fetch_Data = async ()=>{
       try {
        const response = await fetch("http://localhost:5000/api/data",{
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        }
       })
       const result = await response.json()
       console.log(result)
        setItem(result[0])
        setCat(result[1])
       } catch (error) {
         console.log("Cant fetch error",error)
       }
  }
  const handleProduct = ()=>{
    navigate("/product")
  }
  useEffect(()=>{
    Fetch_Data()
  },[])
  return (
    <div>
       <div><Navbar/></div>
       <div><Carousel/></div>
       <div>
        
          {
            cat.length > 0 ? cat.map((category)=>{
              return( 
              <div key={category._id} className='mt-5'>
                 <div  className='max-w-full text-4xl font-extrabold text-blue-950 tracking-tight text-center'>
                  {category.category} 

                 </div>
                 <hr className='mt-4 text-blue-400'/>
                 <div className='grid grid-cols-1 p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
                     {
                  items.length>0?items.filter((data)=>data.category===category.category).slice(0,10).map((filterdata=>{
                        return(
                        <div key={filterdata._id}>
                          <Card 
                          items = {filterdata}
                          sizes = {filterdata.sizes[0]}

                          />
                         
                          </div>
                      )
                  })):null
                 }
                 </div>
                 
               </div>
               
             )}):null
          }
        
        </div>
       <div><Footer/></div>
    </div>
  )
}

export default Home
