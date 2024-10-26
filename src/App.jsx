import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Category from './components/Category/Category'
import Services from './components/Services/Services'
import Products from './components/Products/Products'
import Blogs from './components/Blogs/Blogs'
const App = () => {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
      <Navbar/>
      <Hero/>
      <Category/>
      <Services/>
      <Products/>
      <Blogs/>
    </div>
  )
}

export default App
