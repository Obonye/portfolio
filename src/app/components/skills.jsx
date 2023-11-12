
import React from 'react'
import { info } from '../data/info';
import {Chip,Avatar} from "@nextui-org/react";
export default function Skills() {
  return (
   <section id= "skills" className='flex flex-col justify-center w-100 text-center mt-20'>
     <h1 className='text-5xl text- pt-2 mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-600'>Skills</h1>
    <div className='flex-wrap mt-10 '>
        {
            info.skills.map((item,index)=>(
                <Chip key={index} color='success' variant='shadow'radius='sm' className='m-5'>
                    {item.title}
                </Chip>
            ))
        }
    </div>
   </section>
  )
}
