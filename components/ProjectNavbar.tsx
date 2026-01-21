import { FunctionComponent } from "react"
import { ProjectCategory } from "../types"

export const NavItem: FunctionComponent<{
    value: ProjectCategory | 'all',
    handlerFilterCategory: (val: ProjectCategory | 'all') => void,
    active: ProjectCategory | 'all'
}> = ({
    value,
    handlerFilterCategory,
    active
}) => {
        const isActive = active === value;
        let className = "px-5 py-1.5 capitalize cursor-pointer transition-all duration-300 rounded-full font-bold outline-none focus:ring-2 focus:ring-primary/50 whitespace-nowrap"

        if (isActive) {
            className += " bg-primary text-background shadow-lg scale-105"
        } else {
            className += " text-text-muted hover:text-primary hover:bg-primary/5"
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
                aria-current={isActive ? "page" : undefined}
            >
                {value}
            </li>
        )
    }

interface IProjectsNavbarProps {
    handlerFilterCategory: (val: ProjectCategory | 'all') => void;
    active: ProjectCategory | 'all';
}

const ProjectsNavbar: FunctionComponent<IProjectsNavbarProps> = ({ handlerFilterCategory, active }) => {
    // Standard: Use Enum values for navigation to ensure single source of truth
    const categories: (ProjectCategory | 'all')[] = ['all', ...Object.values(ProjectCategory)];

    return (
        <nav aria-label="Project categories" className="glass-card rounded-3xl p-1 inline-block border-none bg-transparent">
            <ul className="flex items-center gap-2 overflow-x-auto list-none scrollbar-hide py-1 px-1">
                {categories.map((cat) => (
                    <NavItem
                        key={cat}
                        value={cat}
                        handlerFilterCategory={handlerFilterCategory}
                        active={active}
                    />
                ))}
            </ul>
        </nav>
    )
}

export default ProjectsNavbar