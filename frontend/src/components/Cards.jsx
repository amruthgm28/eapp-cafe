import React from 'react'

function Cards({item}) {
    // console.log(item);
  return (
   <>
   <div className='mt-4 my-3 p-3 hover:shadow-xl 2 2 4 1 rgba(0, 0, 0, 0.2)'>
   <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200">
  <figure>
    <img
      src={item.image}
      alt={item.name} 
      className='h-96 w-full'/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
    <div className="border-2 hover:bg-pink-400 hover:text-white duration-200  cursor-pointer px-2 py-0 rounded-full">$ {item.price}</div>
      <div className="border-2 hover:bg-pink-400 hover:text-white duration-200  cursor-pointer px-2 py-0 rounded-full">Buy Now</div>
     
    </div>
  </div>
</div>
   </div>
   </>
  )
}

export default Cards