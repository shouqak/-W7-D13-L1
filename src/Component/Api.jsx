import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Api() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products ")
      .then(function (response) {
        // Set fetched products into state
        setProducts(response.data);
      })
      
  }, []);
  return (
    <div className="flex flex-wrap justify-center gap-6 p-5 bg-amber-50">
      {products.map((product) => (
        <div key={product.id} className="max-w-sm bg-pink-50 border border-gray-200 rounded-lg shadow-sm ">
          <a href="#">
            <img 
              className="rounded-t-lg w-full h-48 object-cover" 
              src={product.image} 
              alt={product.title} 
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 line-clamp-1">
                {product.title}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700  line-clamp-2">
              {product.description}
            </p>
            <div className='flex justify-between'>
            <p className="mb-3 font-bold text-gray-900 ">
              ${product.price}
            </p>
            <div className='flex '>
                <img className='w-4 h-4  m-1' src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="" />
                 <p className='font-bold text-gray-900'> {product.rating.rate}</p>
            </div>
            </div>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-orange-100 rounded-lg hover:bg-orange-300 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
               more
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Api;