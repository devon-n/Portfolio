import { SiPython, SiReact, SiExpress, SiJest, SiGooglecloud, SiTelegram } from 'react-icons/si'
import { GiBrain } from 'react-icons/gi'
import { IService } from '../types'
import { MdOutlineMonitor, MdOutlineSecurity } from 'react-icons/md'
import { FaCloud, FaDatabase, FaFileContract } from 'react-icons/fa'
import { AiOutlineCodeSandbox } from 'react-icons/ai'

export const services: IService[] = [
    // Web & Dapp Development
    {
        title: "Full Stack Web3 Developer",
        about: "Create Dapps using <b>Next.js, React.js</b> or <b>JS, HTML</b> and <b>CSS</b> and <b>VueJS</b>.",
        Icon: AiOutlineCodeSandbox
    },
    {
        title: "Frontend UI/UX Development",
        about: "Build responsive, modern user interfaces with <b>React, Next.js, Vue.js, Material UI/Tailwind CSS and MobX</b>.",
        Icon: SiReact
    },
    {
        title: "Backend Development & APIs",
        about: "Develop robust backend systems and RESTful APIs using <b>Express.js, Flask, and Node.js</b>.",
        Icon: SiExpress
    },
    {
        title: "Telegram Bot Development",
        about: "Create interactive Telegram bots and miniapps using <b>TypeScript</b> and the <b>Telegram API</b>.",
        Icon: SiTelegram
    },

    // Data & Cloud
    {
        title: "Indexer Development",
        about: "Build and deploy blockchain indexers using <b>TypeScript, Express, Google Cloud Platform, BigQuery, and MySQL</b> for efficient data extraction and querying.",
        Icon: FaDatabase
    },
    {
        title: "Monitoring & Alerting Solutions",
        about: "Develop monitoring software and alerting systems using <b>TypeScript, Express, GCP, BigQuery, MySQL</b> and integrate with <b>PagerDuty</b> for real-time incident response.",
        Icon: MdOutlineMonitor
    },
    {
        title: "Data Engineering & Analytics",
        about: "Design and implement data pipelines, analytics dashboards, and reporting solutions using <b>SQL, BigQuery, and MongoDB</b>.",
        Icon: FaCloud
    },
    {
        title: "DevOps & Cloud Deployment",
        about: "Automate deployment and manage cloud infrastructure for scalable blockchain and AI applications using <b>Google Cloud Platform</b>.",
        Icon: SiGooglecloud
    },

    // AI & Automation
    {
        title: "Artificial Intelligence Engineer",
        about: "Use different models to tackle any AI problem from frameworks such as <b>Keras, Scikit-Learn, StableBaselines, Neuro-Evolution of Augmented Topologies</b>.",
        Icon: GiBrain
    },
    {
        title: "Web Scraping & Automation",
        about: "Develop bots and automation scripts for data collection and interaction using <b>Selenium</b> and Python.",
        Icon: SiPython
    },

    // Blockchain & Smart Contracts
    {
        title: "Smart Contract Developer",
        about: "Easy to interact with and upgradeable contracts for users to interact with on multiple blockchains such as <b>Ethereum, Polygon, Binance Smart Chain, Avalanche, Etherlink</b>.",
        Icon: FaFileContract
    },
    {
        title: "Smart Contract Security",
        about: "Thorough testing of smart contracts to ensure robust defense against hacks using <b>slither</b> and custom <b>truffle/hardhat</b> written tests.",
        Icon: MdOutlineSecurity
    },

    // Testing & QA
    {
        title: "Automated Testing & QA",
        about: "Set up and maintain automated testing frameworks for smart contracts and web apps using <b>Jest, PyTest, and custom scripts</b>.",
        Icon: SiJest
    }
]