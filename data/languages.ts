import {
    SiPython,
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiSolidity,
    SiJavascript,
    SiVuedotjs,
    SiExpress,
    SiFlask,
    SiPytest,
    SiJest,
    SiTelegram
} from 'react-icons/si'
import { ISkill, SkillCategory } from '../types'

export const languages: ISkill[] = [
    {
        name: "TypeScript",
        Icon: SiTypescript,
        category: SkillCategory.JavaScript
    },
    {
        name: "JavaScript",
        Icon: SiJavascript,
        category: SkillCategory.JavaScript
    },
    {
        name: "Python",
        Icon: SiPython,
        category: SkillCategory.Python
    },
    {
        name: "Solidity",
        Icon: SiSolidity,
        category: SkillCategory.Blockchain
    },
    // JavaScript Frameworks
    {
        name: "ReactJS",
        Icon: SiReact,
        category: SkillCategory.JavaScript
    },
    {
        name: "NextJS",
        Icon: SiNextdotjs,
        category: SkillCategory.JavaScript
    },
    {
        name: "VueJS",
        Icon: SiVuedotjs,
        category: SkillCategory.JavaScript
    },
    {
        name: "ExpressJS",
        Icon: SiExpress,
        category: SkillCategory.JavaScript
    },
    {
        name: "Jest",
        Icon: SiJest,
        category: SkillCategory.JavaScript
    },
    {
        name: "Telegram API",
        Icon: SiTelegram,
        category: SkillCategory.JavaScript
    },
    // Python
    {
        name: "Flask",
        Icon: SiFlask,
        category: SkillCategory.Python
    },
    {
        name: "PyTest",
        Icon: SiPytest,
        category: SkillCategory.Python
    }
]