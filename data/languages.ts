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
        category: "javascript"
    },
    {
        name: "JavaScript",
        Icon: SiJavascript,
        category: "javascript"
    },
    {
        name: "Python",
        Icon: SiPython,
        category: "python"
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
        category: "javascript"
    },
    {
        name: "NextJS",
        Icon: SiNextdotjs,
        category: "javascript"
    },
    {
        name: "VueJS",
        Icon: SiVuedotjs,
        category: "javascript"
    },
    {
        name: "ExpressJS",
        Icon: SiExpress,
        category: "javascript"
    },
    {
        name: "Jest",
        Icon: SiJest,
        category: "javascript"
    },
    {
        name: "Telegram API",
        Icon: SiTelegram,
        category: "javascript"
    },
    // Python
    {
        name: "Flask",
        Icon: SiFlask,
        category: "python"
    },
    {
        name: "PyTest",
        Icon: SiPytest,
        category: "python"
    }
]