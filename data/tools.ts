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
    SiMui
} from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";
import { ISkill } from "../types";

export const tools: ISkill[] = [
    // Blockchain
    {
        name: "Ethers/Web3",
        Icon: SiEthers
    },
    {
        name: "Truffle/Hardhat/Brownie/Foundry",
        Icon: SiEthereum
    },
    // Dev Ops
    {
        name: "Google Cloud Platform",
        Icon: SiGooglecloud
    },
    // Databases
    {
        name: "MySQL",
        Icon: SiMysql
    },
    {
        name: "BigQuery",
        Icon: SiGooglebigquery
    },
    {
        name: "MongoDB",
        Icon: SiMongodb
    },
    {
        name: "Firebase",
        Icon: SiFirebase
    },
    // Frontend
    {
        name: "Material UI",
        Icon: SiMui
    },
    {
        name: "Tailwind CSS",
        Icon: SiTailwindcss
    },
    {
        name: "MobX",
        Icon: SiMobx
    },
    // AI
    {
        name: "Keras",
        Icon: SiKeras
    },
    {
        name: "Neuro-evolution of Augmented Topologies",
        Icon: GiArtificialIntelligence
    },
    {
        name: "Genetic Algorithms",
        Icon: GiArtificialIntelligence
    },
    {
        name: "Telegram API",
        Icon: SiTelegram
    }
]
