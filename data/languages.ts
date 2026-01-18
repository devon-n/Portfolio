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
import { ISkill } from '../types'

export const languages: ISkill[] = [
    {
        name: "TypeScript",
        Icon: SiTypescript,
        category: "web"
    },
    {
        name: "JavaScript",
        Icon: SiJavascript,
        category: "web"
    },
    {
        name: "Python",
        Icon: SiPython,
        category: "ai"
    },
    {
        name: "Solidity",
        Icon: SiSolidity,
        category: "blockchain"
    },
    // JavaScript Frameworks
    {
        name: "ReactJS",
        Icon: SiReact,
        category: "web"
    },
    {
        name: "NextJS",
        Icon: SiNextdotjs,
        category: "web"
    },
    {
        name: "VueJS",
        Icon: SiVuedotjs,
        category: "web"
    },
    {
        name: "ExpressJS",
        Icon: SiExpress,
        category: "web"
    },
    {
        name: "Jest",
        Icon: SiJest,
        category: "web"
    },
    {
        name: "Telegram API",
        Icon: SiTelegram,
        category: "web"
    },
    // Python
    {
        name: "Flask",
        Icon: SiFlask,
        category: "ai"
    },
    {
        name: "PyTest",
        Icon: SiPytest,
        category: "ai"
    }
]