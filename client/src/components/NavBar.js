import React from 'react'

export const NavBar = () => {
  const categories = [{name:"React", slug:"react"}, {name:"Web Development", slug:"web-dev"}]
  return (
    <nav className='container mx-auto px-10 mb-8'>
      <div className='border-b w-full inline-block border-blue-400 py-8'>
        <div className="md:float-left block">
          <span className="cursor-pointer font-bold text-4xl text-blue-500">
          se@tas
          </span>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category)=> (
            <div key={category.slug}>
              <span className="md:float-right mt-2 align-middle text-red-300 ml-4 font-semibold cursor-pointer">
                {category.name}
              </span>

            </div>
          ))}

        </div>
      </div>
    </nav>
  )
}
