import { FunctionComponent } from "react"
import { Category } from "../types"

export const NavItem: FunctionComponent<{
    value: Category | 'all',
    handlerFilterCategory: Function,
    active: string
}> = ({
    value,
    handlerFilterCategory,
    active
}) => {

        let className = "px-4 py-1 capitalize cursor-pointer transition-all duration-300 rounded-full font-bold outline-none focus:ring-2 focus:ring-primary/50"
        if (active === value) {
            className += " bg-primary text-background shadow-md scale-105"
        } else {
            className += " text-text-muted hover:text-primary hover:bg-primary/10"
        }

        return (
            <li
                className={className}
                onClick={() => handlerFilterCategory(value)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        handlerFilterCategory(value);
                    }
                }}
                aria-current={active === value ? "page" : undefined}
            >
                {value}
            </li>
        )
    }

const ProjectsNavbar: FunctionComponent<{ handlerFilterCategory: Function, active: string }> = (props) => {
    return (
        <nav aria-label="Project categories">
            <ul className="flex px-3 py-4 space-x-3 overflow-x-auto list-none scrollbar-hide">
                <NavItem value="all" {...props} />
                <NavItem value="Blockchain" {...props} />
                <NavItem value="AI" {...props} />
                <NavItem value="Full Stack" {...props} />
            </ul>
        </nav>
    )
}


export default ProjectsNavbar