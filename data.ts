import { AiOutlineCodeSandbox } from 'react-icons/ai'
import { MdOutlineCollections, MdOutlineSecurity } from 'react-icons/md'
import { FaFileContract } from 'react-icons/fa'
import { GiBrain } from 'react-icons/gi'
import { BsCircleFill } from 'react-icons/bs'
import { SiPython, SiReact, SiNextdotjs, SiTypescript, SiSolidity, SiJavascript } from 'react-icons/si'
import { IconType } from 'react-icons'
import { IProject, IService, ISkill } from "./types";


export const services:IService[] = [

    {
        title: "Smart Contract Developer",
        about: "Easy to interact with and updatable contracts for users to interact with on multiple blockchains such as <b>Ethereum, Polygon, Binance Smart Chain, Avalanche</b>",
        Icon: FaFileContract
    },
    {
        title: "NFT Collection Creator",
        about: "Build Non-Fungible Tokens using multiple standards for instance <b>ERC721, ERC721a, ERC1155</b> etc. with any customization necessary",
        Icon: MdOutlineCollections
    },
    {
        title: "Full Stack Web3 Developer",
        about: "Create Dapps using <b>Next.js, React.js</b> or <b>JS, HTML</b> and <b>CSS</b> and can deploy on web2 or <b>ENS</b> domains",
        Icon: AiOutlineCodeSandbox
    },
    {
        title: "Smart Contract Security",
        about: "Thorough testing of smart contracts to ensure robust defense against hacks using <b>slither</b> and custom <b>truffle/hardhat</b> written tests",
        Icon: MdOutlineSecurity
    },
    {
        title: "Artificial Intelligence Engineer",
        about: "Use different models to tackle any AI problem from frameworks such as <b>Keras, Scikit-Learn, StableBaselines, Neuro-Evolution of Augmented Topologies</b>",
        Icon: GiBrain
    }
]

export const languages:ISkill[] = [
    {
        name:"Python",
        level: "100%",
        Icon: SiPython
    },
    {
        name:"JavaScript",
        level: "100%",
        Icon: SiJavascript
    },
    {
        name:"Solidity",
        level: "100%",
        Icon: SiSolidity
    },
    {
        name:"TypeScript",
        level: "100%",
        Icon: SiTypescript
    },
    {
        name:"ReactJS",
        level: "100%",
        Icon: SiReact
    },
    {
        name:"NextJS",
        level: "100%",
        Icon: SiNextdotjs
    },

]

export const tools:ISkill[] = [
    {
        name:"Ethers/Web3",
        level: "100%",
        Icon: BsCircleFill
    },
    {
        name:"Truffle/Hardhat/Brownie",
        level: "100%",
        Icon: BsCircleFill
    },
    {
        name:"Ethereum Name Services Domains",
        level: "100%",
        Icon: BsCircleFill
    },
    {
        name:"Keras",
        level: "100%",
        Icon: BsCircleFill
    },
    {
        name:"Neuro-evolution of Augmented Topologies",
        level: "100%",
        Icon: BsCircleFill
    },
    {
        name:"Genetic Algorithms",
        level: "100%",
        Icon: BsCircleFill
    },

]

export const projects: IProject[] = [
    {
        id: 1,
        name: "Crypto Fund Me",
        description: "Crowdfunding that uses NFTs as the funds",
        image_path: "/images/CFM.png",
        deployed_url: "//cryptofundme.eth.link/",
        github_url: "https://github.com/devon-n/CryptoFundMeV2",
        category: ["Blockchain", "Full Stack", ],
        key_techs: ["Solidity", "JavaScript", "HTML/CSS"]
    },
    {
        id: 2,
        name: "Panda Siege",
        description: "A NFT game on the BSC Network",
        image_path: "/images/PandaSiege.png",
        deployed_url: "//www.pandasiege.app",
        github_url: "",
        category: ["Blockchain"],
        key_techs: ["Solidity"]
    },
    {
        id: 3,
        name: "NFT Minting Dapp + Marketplace",
        description: "A NFT minting dapp with a multi-NFT marketplace",
        image_path: "/images/NFTSite.png",
        deployed_url: "",
        github_url: "https://github.com/devon-n/NFTSiteDisplay",
        category: ["Blockchain", "Full Stack"],
        key_techs: ["Solidity", "NextJS", "JavaScript"]
    },
    {
        id: 4,
        name: "AI Self Driving Car",
        description: "A neural net with genetic evolution built from scratch",
        image_path: "/images/SelfDrivingCar.png",
        deployed_url: "//self-driving-car-rosy.vercel.app/",
        github_url: "https://github.com/devon-n/SelfDrivingCar",
        category: ["AI"],
        key_techs: ["JavaScript"]
    },
    {
        id: 5,
        name: "MLB Neuro-Evolution of Augmented Topologies",
        description: "AI that finds the optimal betting strategies based on team stats",
        image_path: "/images/MLBNeat.png",
        deployed_url: "",
        github_url: "https://github.com/devon-n/MLB_NEAT",
        category: ["AI"],
        key_techs: ["Keras", "NEAT"]
    },
    {
        id: 6,
        name: "Betting Bot",
        description: "A bot that places bets based on AI predictions and betting strategies",
        image_path: "/images/MLBNeatBetting.png",
        deployed_url: "",
        github_url: "https://github.com/devon-n/MLB_NEAT_AI_Betting",
        category: ["AI"],
        key_techs: ["Keras", "NEAT", "Selenium",]
    },
    {
        id: 7,
        name: "NBA AI Game predictor",
        description: "AI that predicts the outcomes of NBA games",
        image_path: "/images/NBAAI.png",
        deployed_url: "",
        github_url: "https://github.com/devon-n/AI_NBA",
        category: ["AI"],
        key_techs: ["Keras", "Scikit-Learn", "Stable Baselines"]
    },
    {
        id: 8, 
        name: "MLB AI Game predictor",
        description: "AI that predicts the outcomes of MLB games",
        image_path: "/images/MLBAI.png",
        deployed_url: "",
        github_url: "https://github.com/devon-n/AI_MLB",
        category: ["AI"],
        key_techs: ["Keras", "Scikit-Learn", "NEAT", "Selenium"]
    },
]