import { IProject, ProjectCategory } from "../types";

export const projects: IProject[] = [
    {
        id: 1,
        name: "Etherlink Bridge",
        description: "Production UI and integrations for a high-volume cross-chain bridge supporting >$55M volume. Architected the off-chain execution services for fast withdrawals.",
        image_path: "/images/EtherlinkBridge.png",
        deployed_url: "https://bridge.etherlink.com",
        github_url: "",
        category: [ProjectCategory.Blockchain, ProjectCategory.FullStack],
        key_techs: ["Next.js", "Ethers", "LayerZero", "Taquito", "MobX"]
    },
    {
        id: 2,
        name: "Tezos Governance",
        description: "Led engineering delivery of the Tezos governance platform — frontend and indexer supporting >$30M voting power with real-time indexing and voting analytics.",
        image_path: "/images/EtherlinkGovernance.png",
        deployed_url: "https://governance.etherlink.com",
        github_url: "https://github.com/etherlinkcom/governance-website-v2",
        category: [ProjectCategory.Blockchain, ProjectCategory.FullStack],
        key_techs: ["Next.js", "Express", "Taquito", "MySQL", "WebSockets"]
    },
    {
        id: 3,
        name: "Phantom Galaxies (Astrafer)",
        description: "Sole Solidity developer for a Web3 game with 60K players. Shipped upgradeable contracts and LayerZero token bridge.",
        image_path: "/images/PhantomGalaxies.png",
        deployed_url: "https://www.phantomgalaxies.com",
        github_url: "",
        category: [ProjectCategory.Blockchain],
        key_techs: ["Solidity", "Foundry", "LayerZero", "OpenZeppelin"]
    },
    {
        id: 4,
        name: "Quant Research Platform",
        description: "Side project: AI-driven crypto research with human review; in-sample testing and out-of-sample validation before strategy promotion and live Binance execution with blue-green signal-sender deployments. Python monorepo with React/Vue dashboards, Postgres, Docker, and Ansible-deployed infra.",
        image_path: "/images/Stratx.png",
        deployed_url: "",
        github_url: "",
        category: [ProjectCategory.FullStack, ProjectCategory.Python],
        key_techs: ["Python", "FastAPI", "React", "Vue.js", "Postgres", "Docker", "Ansible", "Binance API"]
    },
    {
        id: 5,
        name: "Bridge Analytics Dashboard",
        description: "Liquidity and volume monitoring dashboard for EVM bridge transfers with real-time data pipelines.",
        image_path: "/images/EtherlinkBridgeStats.png",
        deployed_url: "https://bridge.etherlink.com/stats",
        github_url: "",
        category: [ProjectCategory.FullStack, ProjectCategory.Blockchain],
        key_techs: ["Next.js", "Express", "BigQuery", "GCP"]
    },
    {
        id: 6,
        name: "AI Self Driving Car",
        description: "A neural net with genetic evolution built from scratch using custom neuro-evolutionary algorithms.",
        image_path: "/images/SelfDrivingCar.png",
        deployed_url: "//self-driving-car-rosy.vercel.app/",
        github_url: "https://github.com/devon-n/SelfDrivingCar",
        category: [ProjectCategory.AI],
        key_techs: ["JavaScript", "Neural Networks"]
    },
    {
        id: 7,
        name: "MLB Neuro-Evolution (NEAT)",
        description: "AI that finds optimal betting strategies based on team stats using Neuro-Evolution of Augmented Topologies.",
        image_path: "/images/MLBNeat.png",
        deployed_url: "",
        github_url: "https://github.com/devon-n/MLB_NEAT",
        category: [ProjectCategory.AI],
        key_techs: ["Python", "Keras", "NEAT"]
    },
    {
        id: 8,
        name: "Brek Tasks Telegram Mini-App",
        description: "High-engagement Telegram mini-game with point farming and social tasks integration.",
        image_path: "/images/BrekTasks.png",
        deployed_url: "",
        github_url: "",
        category: [ProjectCategory.FullStack],
        key_techs: ["React", "Express", "Typescript", "Telegram API"]
    },
    {
        id: 9,
        name: "Distributed Load Testing Framework",
        description: "Architected a Master-Worker system in Python/Locust capable of simulating 3000+ RPS. Features real-time cross-process metric aggregation, kernel-level OS tuning, and headless data visualization.",
        image_path: "/images/DistributedTesting.png",
        deployed_url: "",
        github_url: "",
        category: [ProjectCategory.Infrastructure, ProjectCategory.Python],
        key_techs: ["Python", "Locust", "Distributed Systems", "Matplotlib", "SQLite"]
    },
    {
        id: 10,
        name: "High-Availability Blockchain Cluster",
        description: "Engineered a 'Twin Towers' infrastructure for Etherlink nodes on bare-metal servers. Automated L1/EVM node deployment and optimized 4TB NVMe RAID arrays.",
        image_path: "/images/BlockchainInfra.png",
        deployed_url: "",
        github_url: "",
        category: [ProjectCategory.Infrastructure, ProjectCategory.Blockchain],
        key_techs: ["Ansible", "Docker", "Prometheus", "Grafana", "Linux"]
    },
    {
        id: 11,
        name: "Commercial Node Infrastructure",
        description: "Provisioned multi-region EVM node clusters on Kubernetes to support commercial RPC services. Implemented Grafana/Prometheus alerting for high availability.",
        image_path: "/images/K8sNodes.png",
        deployed_url: "",
        github_url: "",
        category: [ProjectCategory.Infrastructure, ProjectCategory.Blockchain],
        key_techs: ["Kubernetes", "GCP", "Prometheus", "Grafana", "EVM Nodes"]
    }
]