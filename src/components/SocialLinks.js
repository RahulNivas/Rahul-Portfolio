import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const SocialLinks = () => {
    const Links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn<FaLinkedin size={25} />
                </>
            ),
            href: 'https://Linkedin.com',
            style: 'rounded-tr-md',
        },
        {
            id: 2,
            child: (
                <>
                    GitHub<FaGithub size={25} />
                </>
            ),
            href: 'https://Github.com',
        },
        {
            id: 3,
            child: (
                <>
                    Mail<HiOutlineMail size={25} />
                </>
            ),
            href: 'mailto:rahulnivas03@gmail.com',
        },
        {
            id: 4,
            child: (
                <>
                    Resume<BsFillPersonLinesFill size={25} />
                </>
            ),
            href: '/resume.pdf',
            style: 'rounded-br-md',
            download: true,
        },
    ]
    return (
        <div className='hidden  lg:flex felx-col top-[35%] left-0 fixed '>
            <ul>
                {Links.map(({ id, child, href, style, download }) => (
                    <li key={id} 
                    className={`flex justify-between items-center w-36 h-14 px-2 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 ${style}`}
                    >
                        <a href={href} className='flex justify-between items-center w-full text-white' download={download} target="blank" rel="noreferrer" >
                            
                            {child}
                        </a>
                    </li>
                ))}

            </ul>
        </div>
    )
}

export default SocialLinks
