import { FunctionComponent, useEffect, useState } from "react"
import Link from 'next/link'
import { useRouter } from "next/router"

const NavItem:FunctionComponent<{
    activeItem: string,
    setActiveItem: Function,
    name: string,
    route: string
}> = ({ activeItem, setActiveItem, name, route }) => {
    return activeItem !== name ? (
        <Link href={route}>
            <a>
                <span 
                    className="hover:text-blue-400"
                    onClick={() => setActiveItem(name)}>
                    {name}
                </span>
            </a>
        </Link>
    ) : null
}

const Navbar = () => {

    const [activeItem, setActiveItem] = useState<string>('About')

    const { pathname } = useRouter()

    useEffect(() => {

        if (pathname === '/resume') setActiveItem('Resume')
        if (pathname === '/projects') setActiveItem('Projects')

    }, [])
    
    return (
        <div className="flex justify-between px-5 py-3 my-3">
            <span className="text-xl font-bold text-blue-400 border-b-4 border-blue-400 md:text-2xl">
                {activeItem}
            </span>
            <div className="flex space-x-5 text-lg">
                <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='About' route='/' />
                <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='Projects' route='/projects' />
                <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='Resume' route='/resume' />
            </div>
        </div>
    )
}

export default Navbar