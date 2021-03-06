import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai'
import { GiTie } from 'react-icons/gi'
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
                width="128px"
                height="128px"
                layout="intrinsic"
            />

            {/* Profile */}
            <h3 
            className="my-4 text-3xl font-medium tracking-wider ">
                <span className="text-blue-400 dark:text-lime-400">Devon </span>
                Nathan
            </h3>
            <p className="flex items-center justify-center w-auto px-2 py-1 my-3 bg-gray-100 rounded-full dark:bg-dark-200">
                Smart Contract Developer
            </p>
            <a 
            className="flex items-center justify-center w-auto px-2 py-1 my-3 bg-gray-100 rounded-full dark:bg-dark-200"
            href="/images/Devon Nathan.pdf"
            target="_blank" rel="noreferrer"
            download="Devon_Nathan_CV.pdf"
            aria-label="CV Download">
                <GiTie className="w-6 h-6"/>
                Download Resume
            </a>
            <p className="flex items-center justify-center w-auto px-2 py-1 my-3 break-all bg-gray-100 rounded-full dark:bg-dark-200">
                devon.nathan@protonmail.com
            </p>

            {/* Social Icons */}
            <div className="flex justify-around w-9/12 mx-auto my-5 text-blue-500 dark:text-lime-400 md:w-full">
                <a href="https://github.com/devon-n" target="_blank" rel="noreferrer" aria-label="Github">
                    <AiFillGithub className="w-8 h-8 cursor-pointer"/>
                </a>
                <a href="https://www.linkedin.com/in/devonnathan/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <AiFillLinkedin className="w-8 h-8 cursor-pointer"/>
                </a>
                <a href="mailto:devon.nathan@protonmail.com" target="_blank" rel="noreferrer" aria-label="Email">
                    <AiOutlineMail className="w-8 h-8 cursor-pointer"/>
                </a>
            </div>

            {/* Toggle Theme */}
            <button 
            className="w-8/12 px-5 py-2 my-2 text-gray-600 rounded-full bg-gradient-to-r from-gray-200 to-blue-400 dark:from-dark-200 dark:to-lime-400 dark:text-white"
            onClick={changeTheme}>
                Toggle Theme
            </button>
        </div>
    )
}

export default Sidebar