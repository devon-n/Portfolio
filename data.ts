import { AiOutlineCodeSandbox } from 'react-icons/ai'
import { MdOutlineCollections, MdOutlineSecurity } from 'react-icons/md'
import { FaFileContract } from 'react-icons/fa'
import { GiBrain } from 'react-icons/gi'
import { BsCircleFill } from 'react-icons/bs'
import { SiPython, SiReact, SiNextdotjs, SiTypescript, SiSolidity, SiJavascript } from 'react-icons/si'
import { IExperienceItemProps, IProject, IService, ISkill } from "./types";


export const services: IService[] = [

    {
        title: "Smart Contract Developer",
        about: "Easy to interact with and updatable contracts for users to interact with on multiple blockchains such as <b>Ethereum, Polygon, Binance Smart Chain, Avalanche</b>",
        Icon: FaFileContract
    },
    {
        title: "Full Stack Web3 Developer",
        about: "Create Dapps using <b>Next.js, React.js</b> or <b>JS, HTML</b> and <b>CSS</b> and can deploy on web2 or <b>ENS</b> domains",
        Icon: AiOutlineCodeSandbox
    },
    {
        title: "NFT Collection Creator",
        about: "Build Non-Fungible Tokens using multiple standards for instance <b>ERC721, ERC721a, ERC1155</b> etc. with any customization necessary",
        Icon: MdOutlineCollections
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

export const languages: ISkill[] = [
    {
        name:"Python",
        Icon: SiPython
    },
    {
        name:"JavaScript",
        Icon: SiJavascript
    },
    {
        name:"Solidity",
        Icon: SiSolidity
    },
    {
        name:"TypeScript",
        Icon: SiTypescript
    },
    {
        name:"ReactJS",
        Icon: SiReact
    },
    {
        name:"NextJS",
        Icon: SiNextdotjs
    },
    {
        name:"ExpressJS",
        Icon: SiNextdotjs
    },
    {
        name:"Flask",
        Icon: SiNextdotjs
    },

]

export const tools:ISkill[] = [
    {
        name:"Ethers/Web3",
        Icon: BsCircleFill
    },
    {
        name:"Truffle/Hardhat/Brownie/Foundry",
        Icon: BsCircleFill
    },
    {
        name:"Google Cloud Platform",
        Icon: BsCircleFill
    },
    {
        name:"MySQL",
        Icon: BsCircleFill
    },
    {
        name:"VueJS",
        Icon: BsCircleFill
    },
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
    {
        name:"BigQuery",
        Icon: BsCircleFill
    },
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

]

export const projects: IProject[] = [
    {
        id: 1,
        name: "StratX",
        description: "Forward testing dashboard to monitor and manage multiple strategies across multiple exchanges",
        image_path: "/images/Stratx.png",
        deployed_url: "//stratx.app/",
        github_url: "https://github.com/Forward-Tester/ForwardTesterV2",
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