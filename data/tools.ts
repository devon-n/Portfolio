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
import { ISkill, SkillCategory } from "../types";
import { FaHardHat } from "react-icons/fa";

export const tools: ISkill[] = [
    // Blockchain
    {
        name: "Ethers",
        Icon: SiEthers,
        category: SkillCategory.Blockchain
    },
    {
        name: 'Web3',
        Icon: SiWeb3Dotjs,
        category: SkillCategory.Blockchain
    },
    {
        name: "Truffle",
        Icon: SiEthereum,
        category: SkillCategory.Blockchain
    },
    {
        name: "Hardhat",
        Icon: FaHardHat,
        category: SkillCategory.Blockchain
    },
    {
        name: "Brownie",
        Icon: SiEthereum,
        category: SkillCategory.Blockchain
    },
    {
        name: "Foundry",
        Icon: GiFoundryBucket,
        category: SkillCategory.Blockchain
    },
    // Dev Ops
    {
        name: "Google Cloud Platform",
        Icon: SiGooglecloud,
        category: SkillCategory.Databases
    },
    // Databases
    {
        name: "MySQL",
        Icon: SiMysql,
        category: SkillCategory.Databases
    },
    {
        name: "BigQuery",
        Icon: SiGooglebigquery,
        category: SkillCategory.Databases
    },
    {
        name: "MongoDB",
        Icon: SiMongodb,
        category: SkillCategory.Databases
    },
    {
        name: "Firebase",
        Icon: SiFirebase,
        category: SkillCategory.Databases
    },
    // Frontend
    {
        name: "Material UI",
        Icon: SiMui,
        category: SkillCategory.JavaScript
    },
    {
        name: "Tailwind CSS",
        Icon: SiTailwindcss,
        category: SkillCategory.JavaScript
    },
    {
        name: "MobX",
        Icon: SiMobx,
        category: SkillCategory.JavaScript
    },
    // AI
    {
        name: "Keras",
        Icon: SiKeras,
        category: SkillCategory.Python
    },
    {
        name: "NEAT",
        // name: "Neuro-evolution of Augmented Topologies",
        Icon: GiArtificialIntelligence,
        category: SkillCategory.Python
    },
    {
        name: "Genetic Algorithms",
        Icon: GiArtificialIntelligence,
        category: SkillCategory.Python
    },
    {
        name: "Telegram API",
        Icon: SiTelegram,
        category: SkillCategory.JavaScript
    }
]
