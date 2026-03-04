# Devon Nathan
**Senior Full-Stack Blockchain Engineer (EVM/Tezos)**
[devonnathan.com](https://www.devonnathan.com) | [devon.nathan@protonmail.com](mailto:devon.nathan@protonmail.com) | [LinkedIn](https://www.linkedin.com/in/devonnathan/) | [GitHub](https://github.com/devon-n)

---

## Professional Summary
Full-stack blockchain engineer with 5+ years delivering production-grade, multi-chain (EVM/Tezos) systems. Strengths in end-to-end delivery across web apps, integrations, monitoring/incident response, and cloud (GCP).

**Key Highlights**
- Cross-chain bridge UI + integrations supporting **>$55M** bridged volume (Tezos ↔ EVM)
- Architected a **High-Availability Blockchain Cluster** on bare-metal servers; automated L1/EVM node provisioning using **Ansible** and **Docker**
- Engineered a **distributed load-testing framework** in Python/Locust capable of simulating **3000+ RPS** with real-time metric aggregation
- Implemented **fast withdrawals**, reducing withdrawal time by **~2 weeks** (Etherlink L2 → Tezos L1)
- Governance UI + indexing system supporting **>$30M** voting power

---

## Work Experience

**Lead Hands-on Blockchain Solutions Architect** | Trilitech | 2024 - Present | [etherlink.com](https://www.etherlink.com)
- Built and shipped the cross-chain bridge frontend and production integrations ([etherlinkbridge.com](https://www.etherlinkbridge.com)) supporting **>$55M** across Tezos and EVM chains (*Next.js, Ethers, LayerZero, Taquito, MUI, MobX*)
- **Architected a High-Availability Blockchain Cluster:** Designed and deployed a "Twin Towers" infrastructure for Etherlink nodes on bare-metal servers, achieving 99.9% uptime via Nginx load balancing.
- **Infrastructure as Code:** Automated server provisioning and software stack deployment (L1/EVM nodes, Indexers, Postgres) using **Ansible** and **Docker Compose**.
- **Data Engineering & Storage:** Optimized 4TB NVMe RAID 0 arrays for high-IOPS indexing and authored "**Fast Restore**" automation for 1.2TB+ snapshots.
- **Monitoring & Observability:** Integrated a centralized **Prometheus/Grafana** stack to monitor real-time node health across multi-region clusters.
- **Distributed Performance Engineering:** Engineered a custom load-testing framework in **Python/Locust** to benchmark high-throughput RPC nodes, supporting 3000+ RPS and automated kernel tuning.
- Built liquidity dashboard to monitor EVM bridge transfers ([etherlinkbridge.com/stats](https://www.etherlinkbridge.com/stats)) (*Next.js, Express, TypeScript, BigQuery, MySQL, GCP*)
- Created frontend and indexer for Tezos governance ([governance.etherlink.com](https://governance.etherlink.com)) supporting **>$30M** voting power (*Next.js, Express, Taquito, MySQL, WebSockets, MobX*)
- Built monitoring/alerting for dapp availability and RPC/indexer issues with on-call escalation (*Node.js, Express, Ethers, Taquito, PagerDuty*)
- Built CI/CD across Vercel and GCP; standardized release workflows and deployments
- Mentored junior engineers; supported delivery of [bridge.explorer.etherlink.com](https://bridge.explorer.etherlink.com)

**Solidity Developer** | Level 77 - Blowfish Studios | 2022 - 2024 | [phantomgalaxies.com](https://www.phantomgalaxies.com)
- Sole Solidity developer for a game with **60,000 players**, **500,000 NFT owners**, and **1700 ETH (6.5M USD)** trading volume
- Shipped upgradeable smart contracts (transparent proxy pattern), staking/rewards, and timelocks
- Implemented a **LayerZero** token bridge for **Astrafer** ([Polygon](https://polygonscan.com/address/0xdfce1e99a31c4597a3f8a8945cbfa9037655e335#writeContract) → [Ethereum](https://etherscan.io/token/0xb51b97dd5569fab69495316b5a065cccff4b829d))
- Production Polygon **NFT contract** with **12,000+ on-chain transactions** ([contract](https://polygonscan.com/address/0xBD662d0D765428A79aee9aE7B003E7037d77F041))
- Built **dynamic NFT images** with game updates and **EC2** → **S3** rendering pipeline (*JavaScript, AWS*)
- Integrated on-chain features with React/Express and Unity (C#)

**Substitute Instructor** | 2U Monash University | 2022
- Taught Blockchain Programming and AI to classrooms of 20+ people

**Blockchain Developer** | Panda Siege | 2021 - 2022
- NFT minting dapp and marketplace (*Next.js, CSS, Solidity*)

**Full Stack Developer** | Crypto Fund Me | 2020 - 2021
- NFT crowdfunding platform (*JavaScript, HTML, CSS, IPFS hosting, Solidity*)

---

## Skills
- **DevOps / SRE:** Ansible, Docker, Nginx (Load Balancing), Prometheus, Grafana, RAID Storage, Bash Scripting, Linux SysAdmin
- **JavaScript/TypeScript:** Node.js, Express, React, Next.js, Vue.js, Ethers, MUI, MobX, TanStack, Tailwind
- **Python:** Locust (Distributed Testing), Brownie, web3.py, Flask, pytest, Keras, SciKit-Learn, HyperNEAT, Computer Vision
- **Databases:** MySQL, MongoDB, BigQuery, SQLite
- **Blockchain Infrastructure:** Tezos/Etherlink Node Ops, TzKT Indexer Management, RPC Optimization, Snapshot Handling

---

## Own Projects
- **StratX** — Algo crypto trading (Vue.js frontend, Python backend)
- **MLB & NBA AI Betting Predictor** — Sports prediction models
- **Telegram Mini Apps** — Custom mini apps for Telegram