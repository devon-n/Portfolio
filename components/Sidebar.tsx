import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai'
import { useTheme } from 'next-themes'
import Image from 'next/image'

const Sidebar = () => {


    const {theme, setTheme} = useTheme()

    const changeTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    return (
        <div>
            <Image
                src="/images/Headshot.jpeg"
                alt="Profile"
                className="mx-auto rounded-full"
                width={128}
                height={128}
                layout="intrinsic"
            />

            {/* Profile */}
            <h3
            className="my-4 text-3xl font-medium tracking-wider ">
                <span className="text-primary-light dark:text-primary-dark">Devon </span>
                Nathan
            </h3>
            <p className="flex items-center justify-center w-auto px-2 py-1 my-3 bg-surface-light rounded-full dark:bg-surface-dark transition-colors duration-500">
                Full Stack Blockchain Developer
            </p>
            <a
                className="flex items-center justify-center w-auto px-2 py-1 my-3 bg-surface-light rounded-full dark:bg-surface-dark transition-colors duration-500"
                href="/images/Devon Nathan.pdf"
                target="_blank" rel="noreferrer"
                download="Devon_Nathan_CV.pdf"
                aria-label="CV Download">Download Resume
            </a>
            <p className="flex items-center justify-center w-auto px-2 py-1 my-3 break-all bg-surface-light rounded-full dark:bg-surface-dark transition-colors duration-500">
                devon.nathan@protonmail.com
            </p>
            {/* Social Icons */}
            <div className="flex justify-around w-9/12 mx-auto my-5 text-primary-light dark:text-primary-darkn md:w-full">
                <a href="https://github.com/devon-n" target="_blank" rel="noreferrer" aria-label="Github">
                    {React.createElement(AiFillGithub as any, { className: "w-8 h-8 cursor-pointer" })}
                </a>
                <a href="https://www.linkedin.com/in/devonnathan/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    {React.createElement(AiFillLinkedin as any, { className: "w-8 h-8 cursor-pointer" })}
                </a>
                <a href="mailto:devon.nathan@protonmail.com" target="_blank" rel="noreferrer" aria-label="Email">
                    {React.createElement(AiOutlineMail as any, { className: "w-8 h-8 cursor-pointer" })}
                </a>
            </div>

            {/* Toggle Theme */}
            <button
            className="w-8/12 px-5 py-2 my-2 text-text-light rounded-full bg-gradient-to-r from-background-light to-primary-light dark:from-background-dark dark:to-primary-dark dark:text-text-dark transition-colors duration-500"
            onClick={changeTheme}>
                Toggle Theme
            </button>
        </div>
    )
}

export default Sidebar