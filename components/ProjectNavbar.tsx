import { FunctionComponent } from "react"
import { Category } from "../types"

export const NavItem:FunctionComponent<{
    value:Category | 'all',
    handlerFilterCategory:Function,
    active:string}> = ({
    value,
    handlerFilterCategory,
    active
}) => {

    let className = "capitalize cursor-pointer hover:text-primary-light dark:hover:text-primary-dark transition-colors duration-500"
    if (active === value) className += " text-primary-light dark:text-primary-dark"

    return (
        <li
            className={className}
            onClick={() => handlerFilterCategory(value)}
        >
            {value}
        </li>
    )
}


const ProjectsNavbar:FunctionComponent<{handlerFilterCategory:Function, active: string}> = (props) => {
    return (
        <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
            <NavItem value="all" {...props} />
            <NavItem value="Blockchain" {...props} />
            <NavItem value="AI" {...props} />
            <NavItem value="Full Stack" {...props} />
        </div>
    )
}

export default ProjectsNavbar