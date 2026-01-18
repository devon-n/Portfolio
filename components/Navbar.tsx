import { FunctionComponent, useEffect, useState } from "react"
import Link from 'next/link'
import { useRouter } from "next/router"

const NavItem: FunctionComponent<{
    activeItem: string,
    setActiveItem: Function,
    name: string,
    route: string
}> = ({ activeItem, setActiveItem, name, route }) => {
    return (
        <Link href={route}>
            <span
                className={`hover:text-primary transition-all cursor-pointer pb-1 border-b-2 outline-none focus:text-primary ${activeItem === name ? "text-primary border-primary" : "text-text-muted border-transparent"
                    }`}
                onClick={() => setActiveItem(name)}
                aria-current={activeItem === name ? "page" : undefined}
            >
                {name}
            </span>
        </Link>
    )
}

const Navbar = () => {
    const [activeItem, setActiveItem] = useState<string>('About')
    const { pathname } = useRouter()

    useEffect(() => {
        if (pathname === '/') setActiveItem('About')
        if (pathname === '/resume') setActiveItem('Resume')
        if (pathname === '/skills') setActiveItem('Skills')
        if (pathname === '/projects') setActiveItem('Projects')
    }, [pathname])

    return (
        <nav className="flex justify-between items-center px-6 py-4" aria-label="Main navigation">
            <span className="text-xl font-black md:text-2xl text-primary uppercase tracking-tighter">
                {activeItem}
            </span>
            <div className="flex space-x-6 text-base font-bold uppercase tracking-widest">
                <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='About' route='/' />
                <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='Resume' route='/resume' />
                <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='Skills' route='/skills' />
                <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='Projects' route='/projects' />
            </div>
        </nav>
    )
}



export default Navbar