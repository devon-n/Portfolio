import { IExperienceItemProps } from "../types";

export const experiences: IExperienceItemProps[] = [
  {
    title: "Lead Hands-on Blockchain Solutions Architect",
    company: "Trilitech (Etherlink)",
    period: "2024 - Present",
    description: `SOFTWARE ENGINEERING:
• Architected off-chain execution services and UI flows for fast-withdrawals; advised on L2 contract design to reduce L2-to-L1 bridge latency by ~2 weeks.
• Engineered and sustained the production UI and integrations for high-volume cross-chain bridges ($55M+ vol) and Tezos governance systems ($30M+ voting power).

DEVOPS & INFRASTRUCTURE:
• Provisioned multi-region EVM node clusters on Kubernetes for commercial RPC services; implemented Grafana/Prometheus alerting.
• Orchestrated High-Availability bare-metal clusters and automated node provisioning via GCP and Ansible.`,
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