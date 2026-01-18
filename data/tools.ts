import {
    SiGooglecloud,
    SiMysql,
    SiMongodb,
    SiFirebase,
    SiTailwindcss,
    SiMobx,
    SiKeras,
    SiTelegram,
    SiEthers,
    SiEthereum,
    SiGooglebigquery,
    SiMui,
    SiWeb3Dotjs,
} from "react-icons/si";
import { GiArtificialIntelligence, GiFoundryBucket } from "react-icons/gi";
import { ISkill } from "../types";
import { FaHardHat } from "react-icons/fa";

export const tools: ISkill[] = [
    // Blockchain
    {
        name: "Ethers",
        Icon: SiEthers,
        category: "blockchain"
    },
    {
        name: 'Web3',
        Icon: SiWeb3Dotjs,
        category: "blockchain"
    },
    {
        name: "Truffle",
        Icon: SiEthereum,
        category: "blockchain"
    },
    {
        name: "Hardhat",
        Icon: FaHardHat,
        category: "blockchain"
    },
    {
        name: "Brownie",
        Icon: SiEthereum,
        category: "blockchain"
    },
    {
        name: "Foundry",
        Icon: GiFoundryBucket,
        category: "blockchain"
    },
    // Dev Ops
    {
        name: "Google Cloud Platform",
        Icon: SiGooglecloud,
        category: "data"
    },
    // Databases
    {
        name: "MySQL",
        Icon: SiMysql,
        category: "data"
    },
    {
        name: "BigQuery",
        Icon: SiGooglebigquery,
        category: "data"
    },
    {
        name: "MongoDB",
        Icon: SiMongodb,
        category: "data"
    },
    {
        name: "Firebase",
        Icon: SiFirebase,
        category: "data"
    },
    // Frontend
    {
        name: "Material UI",
        Icon: SiMui,
        category: "web"
    },
    {
        name: "Tailwind CSS",
        Icon: SiTailwindcss,
        category: "web"
    },
    {
        name: "MobX",
        Icon: SiMobx,
        category: "web"
    },
    // AI
    {
        name: "Keras",
        Icon: SiKeras,
        category: "ai"
    },
    {
        name: "NEAT",
        // name: "Neuro-evolution of Augmented Topologies",
        Icon: GiArtificialIntelligence,
        category: "ai"
    },
    {
        name: "Genetic Algorithms",
        Icon: GiArtificialIntelligence,
        category: "ai"
    },
    {
        name: "Telegram API",
        Icon: SiTelegram,
        category: "web"
    }
]

