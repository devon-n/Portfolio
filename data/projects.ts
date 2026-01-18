import { IProject } from "../types";

export const projects: IProject[] = [
    {
        id: 1,
        name: "Etherlink Bridge",
        description: "Cross-chain bridge supporting >$55M volume between Tezos and EVM chains. Implemented fast withdrawals reducing wait times by 2 weeks.",
        image_path: "/images/EtherlinkBridge.png",
        deployed_url: "https://bridge.etherlink.com",
        github_url: "",
        category: ["Blockchain", "Full Stack"],
        key_techs: ["Next.js", "Ethers", "LayerZero", "Taquito", "MobX"]
    },


    {
        id: 2,
        name: "Tezos Governance",
        description: "Frontend and indexer for Tezos governance supporting >$30M voting power with real-time indexing and voting analytics.",
        image_path: "/images/EtherlinkGovernance.png",
        deployed_url: "https://governance.etherlink.com",
        github_url: "",
        category: ["Blockchain", "Full Stack"],
        key_techs: ["Next.js", "Express", "Taquito", "MySQL", "WebSockets"]
    },

    {
        id: 3,
        name: "Phantom Galaxies (Astrafer)",
        description: "Sole Solidity developer for a Web3 game with 60K players. Shipped upgradeable contracts and LayerZero token bridge.",
        image_path: "/images/PhantomGalaxies.png",
        deployed_url: "https://www.phantomgalaxies.com",
        github_url: "",
        category: ["Blockchain"],
        key_techs: ["Solidity", "Foundry", "LayerZero", "OpenZeppelin"]
    },

    {
        id: 4,
        name: "StratX",
        description: "Forward testing dashboard to monitor and manage multiple algo-trading strategies across multiple exchanges.",
        image_path: "/images/Stratx.png",
        deployed_url: "",
        github_url: "",
        category: ["Blockchain", "Full Stack"],
        key_techs: ["Python", "Typescript", "VueJS"]
    },
    {
        id: 5,
        name: "Bridge Analytics Dashboard",
        description: "Liquidity and volume monitoring dashboard for EVM bridge transfers with real-time data pipelines.",
        image_path: "/images/EtherlinkBridgeStats.png",
        deployed_url: "https://bridge.etherlink.com/stats",
        github_url: "",
        category: ["Full Stack", "Blockchain"],
        key_techs: ["Next.js", "Express", "BigQuery", "GCP"]
    },


    {
        id: 6,
        name: "AI Self Driving Car",
        description: "A neural net with genetic evolution built from scratch using custom neuro-evolutionary algorithms.",
        image_path: "/images/SelfDrivingCar.png",
        deployed_url: "//self-driving-car-rosy.vercel.app/",
        github_url: "https://github.com/devon-n/SelfDrivingCar",
        category: ["AI"],
        key_techs: ["JavaScript", "Neural Networks"]
    },
    {
        id: 7,
        name: "MLB Neuro-Evolution (NEAT)",
        description: "AI that finds optimal betting strategies based on team stats using Neuro-Evolution of Augmented Topologies.",
        image_path: "/images/MLBNeat.png",
        deployed_url: "",
        github_url: "https://github.com/devon-n/MLB_NEAT",
        category: ["AI"],
        key_techs: ["Python", "Keras", "NEAT"]
    },
    {
        id: 8,
        name: "Brek Tasks Telegram Mini-App",
        description: "High-engagement Telegram mini-game with point farming and social tasks integration.",
        image_path: "/images/BrekTasks.png",
        deployed_url: "",
        github_url: "",
        category: ["Full Stack"],
        key_techs: ["React", "Express", "Typescript", "Telegram API"]
    }
]