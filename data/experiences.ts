import { IExperienceItemProps } from "../types";

export const experiences: IExperienceItemProps[] = [
  {
    title: "Lead Blockchain Solutions Architect",
    company: "Trilitech (Etherlink)",
    period: "2024 - Present",
    description: "Technical leadership in cross-chain bridging solutions ($55M+ volume), specifically overseeing the architectural overhaul of the Etherlink bridge and managing the Tezos integration. Engineered fast withdrawal system. Architected a High-Availability Blockchain Cluster on bare-metal servers, achieving 99.9% uptime via Nginx load balancing. Automated L1/EVM node provisioning and indexer stacks using Ansible and Docker. Engineered a distributed load-testing framework in Python/Locust capable of 3000+ RPS and optimized 4TB NVMe RAID arrays for high-IOPS blockchain indexing.",
  },
  {
    title: "Smart Contract Engineer",
    company: "Blowfish Studios (Phantom Galaxies)",
    period: "2022 - 2024",
    description: "Sole smart contract developer for Web3 title (60k+ players, 1,700 ETH volume). Shipped robust upgradeable proxy systems, LayerZero cross-chain bridges, and dynamic NFT rendering pipelines.",
  },
  {
    title: "Substitute Instructor",
    company: "Monash University (2U)",
    period: "2022",
    description: "Taught Blockchain Programming and AI fundamentals to specialized cohorts."
  },
  {
    title: "Blockchain Developer",
    company: "Panda Siege / Crypto Fund Me",
    period: "2020 - 2022",
    description: "Early-stage development of NFT marketplaces, crowdfunding platforms, and decentralized applications on EVM networks."
  },
];