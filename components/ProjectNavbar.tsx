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
        let className = "px-2 sm:px-4 py-1 md:py-2 uppercase cursor-pointer transition-all duration-300 rounded-full font-bold outline-none focus:ring-2 focus:ring-primary/50 whitespace-nowrap text-xs sm:text-sm lg:text-base"

        if (isActive) {
            className += " bg-primary text-background shadow-lg shadow-primary/20"
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
                {/* {value === ProjectCategory.AI ? "AI" : value} */}
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
        <nav aria-label="Project categories" className="w-full">
            <ul className="flex items-center gap-2 overflow-x-auto list-none scrollbar-hide py-2 px-1">
                {categories.map((cat) => (
                    <NavItem
                        key={cat}
                        value={cat}
                        handlerFilterCategory={handlerFilterCategory}
                        active={active}
                    />
                ))}
                {/* Spacer for horizontal scroll on mobile */}
                <li className="shrink-0 w-4 md:hidden" aria-hidden="true" />
            </ul>
        </nav>
    )
}

export default ProjectsNavbar