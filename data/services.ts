import { SiPython, SiReact, SiExpress, SiJest, SiGooglecloud, SiTelegram } from 'react-icons/si'
import { GiBrain } from 'react-icons/gi'
import { IService, ServiceCategory } from '../types'
import { MdOutlineMonitor, MdOutlineSecurity } from 'react-icons/md'
import { FaCloud, FaDatabase, FaFileContract } from 'react-icons/fa'
import { AiOutlineCodeSandbox } from 'react-icons/ai'

export const services: IService[] = [
    // Web
    {
        title: "Frontend UI/UX",
        about: "Build responsive, modern user interfaces with <b>React, Next.js, Vue.js, Tailwind CSS and MobX</b>.",
        Icon: SiReact,
        category: ServiceCategory.Web
    },
    {
        title: "Backend & APIs",
        about: "Develop robust backend systems and RESTful APIs using <b>Express.js, Flask, and Node.js</b>.",
        Icon: SiExpress,
        category: ServiceCategory.Web
    },
    {
        title: "Telegram Systems",
        about: "Create interactive Telegram bots and miniapps using <b>TypeScript</b>, <b>Python</b> and the <b>Telegram API</b>.",
        Icon: SiTelegram,
        category: ServiceCategory.Web
    },

    // Blockchain
    {
        title: "Smart Contract Dev",
        about: "Upgradeable contracts on multiple blockchains such as <b>Ethereum, Polygon, and Etherlink</b>.",
        Icon: FaFileContract,
        category: ServiceCategory.Blockchain
    },
    {
        title: "Security & Auditing",
        about: "Thorough testing and defense against hacks using <b>Slither</b> and <b>foundry/hardhat</b> tests.",
        Icon: MdOutlineSecurity,
        category: ServiceCategory.Blockchain
    },
    {
        title: "QA & Verification",
        about: "Automated testing frameworks for contracts and web apps using <b>Jest, PyTest, and custom scripts</b>.",
        Icon: SiJest,
        category: ServiceCategory.Blockchain
    },

    // AI
    {
        title: "AI Engineering",
        about: "Tackle problems using frameworks such as <b>Keras, Scikit-Learn, and Neuro-Evolution (NEAT)</b>.",
        Icon: GiBrain,
        category: ServiceCategory.AI
    },
    {
        title: "Automation Bots",
        about: "Develop bots and automation scripts for data collection and interaction using <b>Selenium and Python</b>.",
        Icon: SiPython,
        category: ServiceCategory.AI
    },

    // Infrastructure
    {
        title: "Systems Architecture",
        about: "Architecting high-value multi-chain systems ($55M+ bridged), focusing on security and scalability.",
        Icon: AiOutlineCodeSandbox,
        category: ServiceCategory.Infrastructure
    },
    {
        title: "Cloud & DevOps",
        about: "Automate deployment and manage cloud infrastructure using <b>Google Cloud Platform</b>.",
        Icon: SiGooglecloud,
        category: ServiceCategory.Infrastructure
    },
    {
        title: "Indexers & Data",
        about: "Build and deploy blockchain indexers using <b>GCP, BigQuery, and MySQL</b> for efficient querying.",
        Icon: FaDatabase,
        category: ServiceCategory.Infrastructure
    },
    {
        title: "Monitoring & Alerting",
        about: "Develop real-time monitoring software and integrate with <b>PagerDuty</b> for incident response.",
        Icon: MdOutlineMonitor,
        category: ServiceCategory.Infrastructure
    }
]