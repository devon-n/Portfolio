import { SiPython, SiReact, SiExpress, SiJest, SiGooglecloud, SiTelegram } from 'react-icons/si'
import { GiBrain } from 'react-icons/gi'
import { IService } from '../types'
import { MdOutlineMonitor, MdOutlineSecurity } from 'react-icons/md'
import { FaCloud, FaDatabase, FaFileContract } from 'react-icons/fa'
import { AiOutlineCodeSandbox } from 'react-icons/ai'

export const services: IService[] = [
    // Web & Dapp Development
    {
        title: "Systems Architecture",
        about: "Architecting high-value multi-chain systems ($55M+ bridged), focusing on security, scalability, and robust interoperability.",
        Icon: AiOutlineCodeSandbox,
        category: "engineering"
    },

    {
        title: "Frontend UI/UX Development",
        about: "Build responsive, modern user interfaces with <b>React, Next.js, Vue.js, Material UI/Tailwind CSS and MobX</b>.",
        Icon: SiReact,
        category: "engineering"
    },
    {
        title: "Backend Development & APIs",
        about: "Develop robust backend systems and RESTful APIs using <b>Express.js, Flask, and Node.js</b>.",
        Icon: SiExpress,
        category: "engineering"
    },
    {
        title: "Telegram Bot Development",
        about: "Create interactive Telegram bots and miniapps using <b>TypeScript</b> and the <b>Telegram API</b>.",
        Icon: SiTelegram,
        category: "blockchain"
    },

    // Data & Cloud
    {
        title: "Indexer Development",
        about: "Build and deploy blockchain indexers using <b>TypeScript, Express, Google Cloud Platform, BigQuery, and MySQL</b> for efficient data extraction and querying.",
        Icon: FaDatabase,
        category: "data"
    },
    {
        title: "Monitoring & Alerting Solutions",
        about: "Develop monitoring software and alerting systems using <b>TypeScript, Express, GCP, BigQuery, MySQL</b> and integrate with <b>PagerDuty</b> for real-time incident response.",
        Icon: MdOutlineMonitor,
        category: "data"
    },
    {
        title: "Data Engineering & Analytics",
        about: "Design and implement data pipelines, analytics dashboards, and reporting solutions using <b>SQL, BigQuery, and MongoDB</b>.",
        Icon: FaCloud,
        category: "data"
    },
    {
        title: "DevOps & Cloud Deployment",
        about: "Automate deployment and manage cloud infrastructure for scalable blockchain using <b>Google Cloud Platform</b>.",
        Icon: SiGooglecloud,
        category: "engineering"
    },

    // AI & Automation
    {
        title: "Artificial Intelligence Engineer",
        about: "Use different models to tackle any AI problem from frameworks such as <b>Keras, Scikit-Learn, StableBaselines, Neuro-Evolution of Augmented Topologies</b>.",
        Icon: GiBrain,
        category: "blockchain"
    },
    {
        title: "Web Scraping & Automation",
        about: "Develop bots and automation scripts for data collection and interaction using <b>Selenium</b> and Python.",
        Icon: SiPython,
        category: "data"
    },

    // Blockchain & Smart Contracts
    {
        title: "Smart Contract Developer",
        about: "Easy to interact with and upgradeable contracts for users to interact with on multiple blockchains such as <b>Ethereum, Polygon, Binance Smart Chain, Avalanche, Etherlink</b>.",
        Icon: FaFileContract,
        category: "blockchain"
    },
    {
        title: "Smart Contract Security",
        about: "Thorough testing of smart contracts to ensure robust defense against hacks using <b>slither</b> and custom <b>foundry/hardhat/truffle</b> written tests.",
        Icon: MdOutlineSecurity,
        category: "blockchain"
    },

    // Testing & QA
    {
        title: "Automated Testing & QA",
        about: "Set up and maintain automated testing frameworks for smart contracts and web apps using <b>Jest, PyTest, and custom scripts</b>.",
        Icon: SiJest,
        category: "blockchain"
    }
]