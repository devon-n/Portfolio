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
        name:"TypeScript",
        Icon: SiTypescript
    },
    {
        name:"JavaScript",
        Icon: SiJavascript
    },
    {
        name:"Python",
        Icon: SiPython
    },
    {
        name:"Solidity",
        Icon: SiSolidity
    },
    // JavaScript Frameworks
    {
        name:"ReactJS",
        Icon: SiReact
    },
    {
        name:"NextJS",
        Icon: SiNextdotjs
    },
    {
        name:"VueJS",
        Icon: SiVuedotjs
    },
    {
        name:"ExpressJS",
        Icon: SiExpress
    },
    {
        name:"Jest",
        Icon: SiJest
    },
    {
        name: "Telegram API",
        Icon: SiTelegram
    },
    // Python
    {
        name:"Flask",
        Icon: SiFlask
    },
    {
        name:"PyTest",
        Icon: SiPytest
    }
]