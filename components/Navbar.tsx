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
                <span
                    className="dark:hover:test-primary-dark hover:text-primary-light"
                    onClick={() => setActiveItem(name)}>
                    {name}
                </span>
        </Link>
    ) : null
}

const Navbar = () => {

    const [activeItem, setActiveItem] = useState<string>('About')

    const { pathname } = useRouter()

    useEffect(() => {

        if (pathname === '/resume') setActiveItem('Resume')
        if (pathname === '/projects') setActiveItem('Projects')

    }, [pathname])

    return (
        <div className="flex justify-between px-5 py-3 my-3">
            <span className="text-xl font-bold border-b-4 border-primary-light md:text-2xl
                text-primary-light dark:text-primary-date dark:border-primary-dark">
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