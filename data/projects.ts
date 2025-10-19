import { IProject } from "../types";

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