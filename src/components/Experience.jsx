import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reactpic from '../assets/react.png'
import github from '../assets/github.png'
import tailwind from '../assets/tailwind.png'
import MongoDB from '../assets/MongoDB.png'
import java from '../assets/java.svg'
import springboot from '../assets/spring-boot-logo.png';
import node from  '../assets/Node.js_logo.svg.png';
import docker from '../assets/Docker.png';
import cpp from '../assets/c++Logo.png';
import mysql from '../assets/mysqlLogo.jpg'

const Experience = () => {
 
    const techs=[
        {
            id: 1,
            src:java,
            title:'JAVA',
            style:'shadow-orange-500'
        },
        {
            id: 2,
            src:reactpic,
            title:'React',
            style:'shadow-blue-600'
        },
        {
            id: 3,
            src:springboot,
            title:'React',
            style:'shadow-blue-600'
        },
        {
            id: 4,
            src:node,
            title:'Node',
            style:'shadow-orange-500'
        },
        {
            id: 4,
            src:javascript,
            title:'JavaScript',
            style:'shadow-yellow-500'
        },
        {
            id: 5,
            src:cpp,
            title:'C++',
            style:'shadow-yellow-500'
        },
        {
            id: 6,
            src:html,
            title:'HTML',
            style:'shadow-orange-500'
        },
        {
            id: 7,
            src:css,
            title:'CSS',
            style:'shadow-blue-500'
        },
        {
            id: 8,
            src:tailwind,
            title:'Tailwind',
            style:'shadow-sky-400'
        },
        {
            id: 9,
            src:github,
            title:'GitHub',
            style:'shadow-gray-400'
        },
        {
            id: 10,
            src:MongoDB,
            title:'MongoDB',
            style:'shadow-gray-400'
        },
        {
            id: 11,
            src:mysql,
            title:'MySQL',
            style:'shadow-gray-400'
        },
        {
            id: 12,
            src:docker,
            title:'DOCKER',
            style:'shadow-gray-400'
        },
    ]

  return (
    <div name='experience' className='bg-gradient-to-b
    from-gray-800 to-black w-full h-screen'>

      <div className='max-w-screen-lg max-auto p-4 flex flex-col
      justify-center w-full h-full text-white'>
        <div >
            <p className='text-4xl font-bold border-b-4
            border-gray-500 p-2 inline '>Experience         </p>

            <p className='py-6'> These are the technologies I've worked with</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-5
        gap-8 text-center py-8 px-12 sm:px-0 '>

            {techs.map(({id,src,title,style})=>(
                    
            <div key={id}
            classname={`shadow-md hover:scale-105 duration-500
            py-2 rounded-lg ${style}`}
            >
                <img src={src} alt=''className='w-20 mx-auto' />
                <p className='mt-4'> {title}</p>
            </div>


            ))}

        </div>
        </div>  
    </div>
  )
}

export default Experience