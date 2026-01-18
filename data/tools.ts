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
        category: "databases"
    },
    // Databases
    {
        name: "MySQL",
        Icon: SiMysql,
        category: "databases"
    },
    {
        name: "BigQuery",
        Icon: SiGooglebigquery,
        category: "databases"
    },
    {
        name: "MongoDB",
        Icon: SiMongodb,
        category: "databases"
    },
    {
        name: "Firebase",
        Icon: SiFirebase,
        category: "databases"
    },
    // Frontend
    {
        name: "Material UI",
        Icon: SiMui,
        category: "javascript"
    },
    {
        name: "Tailwind CSS",
        Icon: SiTailwindcss,
        category: "javascript"
    },
    {
        name: "MobX",
        Icon: SiMobx,
        category: "javascript"
    },
    // AI
    {
        name: "Keras",
        Icon: SiKeras,
        category: "python"
    },
    {
        name: "NEAT",
        // name: "Neuro-evolution of Augmented Topologies",
        Icon: GiArtificialIntelligence,
        category: "python"
    },
    {
        name: "Genetic Algorithms",
        Icon: GiArtificialIntelligence,
        category: "python"
    },
    {
        name: "Telegram API",
        Icon: SiTelegram,
        category: "javascript"
    }
]


