import { FunctionComponent, useEffect, useState } from "react"
import Link from 'next/link'
import { useRouter } from "next/router"

interface INavItemProps {
    activeItem: string;
    setActiveItem: (name: string) => void;
    name: string;
    route: string;
}

const NavItem: FunctionComponent<INavItemProps> = ({ activeItem, setActiveItem, name, route }) => {
    const isActive = activeItem === name;
    return (
        <Link href={route}>
            <span
                className={`hover:text-primary transition-all cursor-pointer pb-1 border-b-2 outline-none focus:text-primary font-bold ${isActive ? "text-primary border-primary" : "text-text-muted border-transparent"
                    }`}
                onClick={() => setActiveItem(name)}
                aria-current={isActive ? "page" : undefined}
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
        else if (pathname === '/resume') setActiveItem('Resume')
        else if (pathname === '/skills') setActiveItem('Skills')
        else if (pathname === '/projects') setActiveItem('Projects')
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