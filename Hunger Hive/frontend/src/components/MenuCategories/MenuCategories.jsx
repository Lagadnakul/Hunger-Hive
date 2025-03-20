import React from 'react'
import { menu_list } from '../../assets/assets'

const MenuCategories = () => {
  return (
    <section className="section-spacing">
  <h2 className="text-3xl font-bold text-center mb-12">
    Explore Our <span className="text-orange-500">Menu Categories</span>
  </h2>
  <div className="relative">
    <div className="flex overflow-x-auto space-x-8 pb-8 scrollbar-hide">
      {menu_list.map((category, index) => (
        <div 
          key={index}
          className="flex-none w-32 group cursor-pointer transform hover:scale-105 transition-all"
        >
          <div className="relative rounded-full overflow-hidden shadow-lg aspect-square mb-4">
            <img
              src={category.menu_image}
              alt={category.menu_name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform"
            />
          </div>
          <h3 className="text-center font-medium group-hover:text-orange-500">
            {category.menu_name}
          </h3>
        </div>
      ))}
    </div>
  </div>
</section>
  )
}

export default MenuCategories