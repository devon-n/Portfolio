import { FunctionComponent, useEffect, useState } from "react"
import Link from 'next/link'
import { useRouter } from "next/router"

const NavItem: FunctionComponent<{
    activeItem: string,
    setActiveItem: Function,
    name: string,
    route: string
}> = ({ activeItem, setActiveItem, name, route }) => {
    return activeItem !== name ? (
        <Link href={route}>
            <span
                className="hover:text-primary transition-colors cursor-pointer"
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
        if (pathname === '/') setActiveItem('About')
        if (pathname === '/resume') setActiveItem('Resume')
        if (pathname === '/projects') setActiveItem('Projects')
    }, [pathname])

    return (
        <div className="flex justify-between px-5 py-3 my-3">
            <span className="text-xl font-black border-b-4 border-primary md:text-2xl text-primary uppercase tracking-tighter">
                {activeItem}
            </span>
            <div className="flex space-x-8 text-lg font-bold">
                <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='About' route='/' />
                <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='Projects' route='/projects' />
                <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='Resume' route='/resume' />
            </div>
        </div>
    )
}

export default Navbar