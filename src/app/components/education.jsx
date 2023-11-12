import React from 'react'
import { info } from '../data/info';
export default function Education() {
  return (
    <section id="education" className='flex flex-col justify-center w-100 text-center mt-10'>
        <div>
              <h1 className='text-5xl text- pt-2 mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-600'>Education</h1>
          
          {
        
          info.education.map((item,index)=>(
        
              <div key={index} className='mt-5 p-10 text-left rounded-md border border-gray-500'>
                  <div className='flex justify-between'>
                      <h1 className='text-xl'>{item.name}</h1>
                      <p className='text-gray-400'> {item.startDate}-{item.endDate}</p>
                  </div>
                  <h2 className='text-lg text-gray-300'>{item.location}</h2>
                  <ul class="mt-3">
          {item.description.map((item) => (
            <li key={index} className="text-gray-500">{item}</li>
          ))}
        </ul>
              </div>
          ))
          }
        </div>
    </section>
  )
}
