import { AiOutlineCodeSandbox } from 'react-icons/ai'
import { MdOutlineMonitor, MdOutlineSecurity } from 'react-icons/md'
import { FaCloud, FaDatabase, FaFileContract } from 'react-icons/fa'
import { GiBrain } from 'react-icons/gi'
import { BsCircleFill } from 'react-icons/bs'
import { SiPython, SiReact, SiNextdotjs, SiTypescript, SiSolidity, SiJavascript, SiVuedotjs, SiExpress, SiFlask, SiPytest, SiJest, SiGooglecloud, SiTelegram } from 'react-icons/si'
import { IExperienceItemProps, IProject, IService, ISkill } from "./types";


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

export const tools:ISkill[] = [
    // Blockchain
    {
        name:"Ethers/Web3",
        Icon: BsCircleFill
    },
    {
        name:"Truffle/Hardhat/Brownie/Foundry",
        Icon: BsCircleFill
    },
    // Dev Ops
    {
        name:"Google Cloud Platform",
        Icon: BsCircleFill
    },
    // Databases
    {
        name:"MySQL",
        Icon: BsCircleFill
    },
    {
        name:"BigQuery",
        Icon: BsCircleFill
    },
    {
        name:"MongoDB",
        Icon: BsCircleFill
    },
    {
        name:"Firebase",
        Icon: BsCircleFill
    },
    // Frontend
    {
        name:"Material UI",
        Icon: BsCircleFill
    },
    {
        name:"Tailwind CSS",
        Icon: BsCircleFill
    },
    {
        name:"MobX",
        Icon: BsCircleFill
    },
    // AI
    {
        name:"Keras",
        Icon: BsCircleFill
    },
    {
        name:"Neuro-evolution of Augmented Topologies",
        Icon: BsCircleFill
    },
    {
        name:"Genetic Algorithms",
        Icon: BsCircleFill
    },
    {
        name: "Telegram API",
        Icon: BsCircleFill
    }

]

export const projects: IProject[] = [
    {
        id: 1,
        name: "StratX",
        description: "Forward testing dashboard to monitor and manage multiple strategies across multiple exchanges",
        image_path: "/images/Stratx.png",
        deployed_url: "",
        github_url: "",
        category: ["Blockchain", "Full Stack"],
        key_techs: ["Python", "Typescript", "VueJS"]
    },
    {
        id: 2,
        name: "Crypto Fund Me",
        description: "Crowdfunding that uses NFTs as the funds",
        image_path: "/images/CFM.png",
        deployed_url: "//cryptofundme.eth.link/",
        github_url: "https://github.com/devon-n/CryptoFundMeV2",
        category: ["Blockchain", "Full Stack"],
        key_techs: ["Solidity", "JavaScript", "HTML/CSS"]
    },
    {
        id: 3,
        name: "Panda Siege",
        description: "A NFT game on the BSC Network",
        image_path: "/images/PandaSiege.png",
        deployed_url: "//www.pandasiege.app",
        github_url: "",
        category: ["Blockchain"],
        key_techs: ["Solidity"]
    },
    {
        id: 4,
        name: "NFT Minting Dapp + Marketplace",
        description: "A NFT minting dapp with a multi-NFT marketplace",
        image_path: "/images/NFTSite.png",
        deployed_url: "",
        github_url: "https://github.com/devon-n/NFTSiteDisplay",
        category: ["Blockchain", "Full Stack"],
        key_techs: ["Solidity", "NextJS", "JavaScript"]
    },
    {
        id: 5,
        name: "AI Self Driving Car",
        description: "A neural net with genetic evolution built from scratch",
        image_path: "/images/SelfDrivingCar.png",
        deployed_url: "//self-driving-car-rosy.vercel.app/",
        github_url: "https://github.com/devon-n/SelfDrivingCar",
        category: ["AI"],
        key_techs: ["JavaScript"]
    },
    {
        id: 6,
        name: "MLB Neuro-Evolution of Augmented Topologies",
        description: "AI that finds the optimal betting strategies based on team stats",
        image_path: "/images/MLBNeat.png",
        deployed_url: "",
        github_url: "https://github.com/devon-n/MLB_NEAT",
        category: ["AI"],
        key_techs: ["Keras", "NEAT"]
    },
    {
        id: 7,
        name: "Betting Bot",
        description: "A bot that places bets based on AI predictions and betting strategies",
        image_path: "/images/MLBNeatBetting.png",
        deployed_url: "",
        github_url: "https://github.com/devon-n/MLB_NEAT_AI_Betting",
        category: ["AI"],
        key_techs: ["Keras", "NEAT", "Selenium",]
    },
    {
        id: 8,
        name: "NBA AI Game predictor",
        description: "AI that predicts the outcomes of NBA games",
        image_path: "/images/NBAAI.png",
        deployed_url: "",
        github_url: "https://github.com/devon-n/AI_NBA",
        category: ["AI"],
        key_techs: ["Keras", "Scikit-Learn", "Stable Baselines"]
    },
    {
        id: 9,
        name: "MLB AI Game predictor",
        description: "AI that predicts the outcomes of MLB games",
        image_path: "/images/MLBAI.png",
        deployed_url: "",
        github_url: "https://github.com/devon-n/AI_MLB",
        category: ["AI"],
        key_techs: ["Keras", "Scikit-Learn", "NEAT", "Selenium"]
    },
    {
        id: 10,
        name: "Brek Tasks Telegram Miniapp",
        description: "A telegram bot that allows users to play a minigame to earn points",
        image_path: "/images/BrekTasks.png",
        deployed_url: "",
        github_url: "",
        category: ["Blockchain", "Full Stack"],
        key_techs: ["React", "Express", "Typescript", "Telegram API"]
    },
    {
        id: 11,
        name: "Brek Telegram Minigame",
        description: "A telegram bot that allows users to play a minigame to earn points",
        image_path: "/images/BrekGame.png",
        deployed_url: "",
        github_url: "",
        category: ["Blockchain", "Full Stack"],
        key_techs: ["React", "Express", "Typescript", "Telegram API"]
    }
]


export const experiences: IExperienceItemProps[] = [
    {
      title: "Solutions Architect",
      company: "Trilitech",
      period: "2024/25",
      description: "Provided technical solutions and architecture for blockchain-based projects and applications.",
    },
    {
      title: "Solidity Developer",
      company: "Blowfish Studios",
      period: "2022/24",
      description: "Lead smart contract developer for major blockchain gaming platform",
    },
    {
        title: "Substitute Teacher",
        company: "2u",
        period: "2022",
        description: "Subsitute teacher for blockchain and AI classes at Monash University"
    },
    {
      title: "Full Stack Developer",
      company: "Crypto Fund Me",
      period: "2022",
      description: "Created a crowdfunding web3 platform that uses NFTs as the individual crowdfunds on an ENS domain.",
    },
    {
      title: "Blockchain Developer",
      company: "Panda Siege",
      period: "2021/22",
      description: "Developed reusable initial coin offerings, an NFT minting dapp and an NFT marketplace.",
    },
  ];