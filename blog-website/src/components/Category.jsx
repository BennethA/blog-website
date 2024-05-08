import React from 'react'

const Category = ({ onSelectCategory, activeCategory}) => {
  const categories = ["Startups", "Security", "AI", "Apps", "Tech"]
  return (
    <div className='px-4 lg:space-x-16 flex-wrap items-center border-b-2 py-5 text-white font-bold'>
      <button onClick={() => onSelectCategory(null)} className={`lg:ml-12 ${activeCategory ? "" : "active-button"}`}>All</button>
      {
        categories.map(category => 
          <button onClick={() => onSelectCategory(category)} key={category} className={`mr-2 space-x-36 ${activeCategory === category ? "active-button" : ""}`}>{category}</button>
        )
      } 
    </div>
  )
}

export default Category