import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import git from '../assets/github.png'
import javascript from '../assets/javascript.png'
import reactImage from '../assets/react.png'
import nextJs from '../assets/nextjs.png'
import graphql from '../assets/graphql.png'
import tailWind from '../assets/tailwind.png'



const Experience = () => {
    const experiences=[
        {
            id:1,
            src:html,
            title:'Html',
            style: 'shadow-orange-500',
        },
        {
            id:2,
            src:css,
            title:'Css',
            style: 'shadow-blue-500',

        },
        {
            id:3,
            src:git,
            title:'Git',
            style: 'shadow-orange-500',

        },
        {
            id:4,
            src:reactImage,
            title:'React',
            style: 'shadow-blue-600',

        },
        {
            id:5,
            src:nextJs,
            title:'Nextjs',
            style: 'shadow-white',

        },
        
        {
            id:6,
            src:tailWind,
            title:'TailWind',
            style: 'shadow-sky-400',

        },
        {
            id:7,
            src:graphql,
            title:'Graphql',
            style: 'shadow-pink-800',

        },
        {
            id:1,
            src:javascript,
            title:'JavaScript',
            style: 'shadow-yellow-500',

        },
    ]
    return (
        <div name="experience" className=' bg-gradient-to-b from-gray-800 to-black '>
            <div className=' max-w-screen-lg p-4  mx-auto flex flex-col justify-center w-full h-full text-white'>
                <div className='md:mt-20 md:pl-[60px] pl-[20px]'>
                    <p className='text-4xl font-bold inline p-2 border-b-4 border-gray-500'>Experience</p>
                    <p className='py-6'>These are the technologies I've worked with</p>
                </div>
                <div className=' grid grid-cols-2 sm:grid-cols-3 gap-8 w-full md:px-12 lg:px-12 xl:px-0 text-center py-8 sm:px-0'> 
                {
                    experiences.map(({id,src,title,style})=>(
                        <div key={id} className={` shadow-md hover:scale-105 duration-500  py-2 rounded-lg ${style}`}>
                        <img src={src} alt='' className='w-20 mx-auto'/>
                        <p className='mt-4'>{title}</p>
                    </div>
                    ))
                }
                   
                </div>
            </div>

        </div>
    )
}

export default Experience
