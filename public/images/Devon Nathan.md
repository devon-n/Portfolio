# Devon Nathan
**Lead Hands-on Blockchain Solutions Architect (EVM/Tezos)**
[devonnathan.com](https://www.devonnathan.com) | [devon.nathan@protonmail.com](mailto:devon.nathan@protonmail.com) | [LinkedIn](https://www.linkedin.com/in/devonnathan/) | [GitHub](https://github.com/devon-n)

---

## Professional Summary
Full-stack blockchain engineer with 6+ years delivering production-grade, multi-chain (EVM/Tezos) systems. Strengths in end-to-end delivery across applications, crypto dapps, integrations, monitoring/incident response, and cloud (GCP).

**Key Highlights**
- Cross-chain bridge UI + integrations supporting **>$55M** bridged volume (Tezos ↔ EVM)
- Provisioned **Tezos L1 + Etherlink EVM** stack on **OVH bare-metal**; automated provisioning with **Ansible** and **Docker**
- Engineered a **distributed load-testing framework** in Python/Locust capable of simulating **3000+ RPS** with real-time metric aggregation
- Implemented **fast withdrawals**, reducing withdrawal time by **~2 weeks** (Etherlink L2 → Tezos L1)
- Governance UI + indexing system supporting **>$30M** voting power

---

## Work Experience

**Lead Hands-on Blockchain Solutions Architect** | Trilitech | 2024 - Present | [etherlink.com](https://www.etherlink.com)
- **Software Development & Engineering:**
  - **Engineered and sustained the production UI and integrations** for the high-volume cross-chain bridge ([bridge.etherlink.com](https://bridge.etherlink.com)) supporting **>$55M** across Tezos and EVM.
  - **Co-built Tezos Intents**, a cross-chain intent settlement platform (MPC threshold signing, ERC-4337 smart accounts, treasury pipeline); led architecture, integration, and test strategy across contracts, off-chain services, and UI. Sole maintainer.
  - **Architected the off-chain execution services and UI flow for fast-withdrawals**; advised on L2 contract design to reduce L2-to-L1 bridge latency by **~2 weeks**.
  - **Standardized the frontend and indexing architecture** for Tezos governance ([governance.etherlink.com](https://governance.etherlink.com)) supporting **>$30M** voting power.
  - **Designed and maintained automated liquidity dashboards** to monitor EVM/Tezos bridge health via real-time data pipelines.
  - **Mentored junior engineers**; supported delivery of [bridge.explorer.etherlink.com](https://bridge.explorer.etherlink.com)
- **DevOps & Infrastructure Architecture:**
  - **Orchestrated monitoring and incident response** across dapp availability, node clusters, and RPC health using **PagerDuty, Grafana, and Prometheus**.
  - **Designed an AI-assisted alert triage system** — Slack-triggered investigation across Kubernetes and GCP logs, posts automated root-cause replies in Slack alert threads, and automated remediation via pull requests.
  - **Provisioned multi-region EVM node clusters on Kubernetes** to support upcoming commercial RPC services.
  - **Provisioned production blockchain stack on dedicated OVH bare-metal servers** — Tezos L1, Etherlink EVM, API, and indexers; optimized **4TB NVMe RAID 0** for high-IOPS indexing and authored **Fast Restore** automation for **1.2TB+** snapshots.
  - **Infrastructure as Code:** Automated server provisioning and software stack using **Ansible** and **Docker Compose**.
  - **Distributed Performance Engineering:** Engineered a custom **Python/Locust** load-testing framework; benchmarked RPC throughput at **3000+ RPS** with real-time metric aggregation.

**Solidity Developer** | Level 77 - Blowfish Studios | 2022 - 2024 | [phantomgalaxies.com](https://www.blowfishstudios.com/phantom-galaxies)
- Sole Solidity developer for a game with **60,000 players**, **500,000 NFT owners**, and **1700 ETH (6.5M USD)** trading volume
- Shipped **upgradeable smart contracts** (transparent proxy pattern), staking/rewards, and timelocks
- Implemented a **LayerZero** token bridge for **Astrafer** ([Polygon](https://polygonscan.com/address/0xdfce1e99a31c4597a3f8a8945cbfa9037655e335#writeContract) → [Ethereum](https://etherscan.io/token/0xb51b97dd5569fab69495316b5a065cccff4b829d))
- Production Polygon **NFT contract** with **12,000+ on-chain transactions** ([contract](https://polygonscan.com/address/0xBD662d0D765428A79aee9aE7B003E7037d77F041))
- Built **dynamic NFT images** with game updates and **EC2** → **S3** rendering pipeline (*JavaScript, AWS*)
- Integrated on-chain features with React/Express and Unity (C#)
- Built automated TypeScript pipelines for cross-chain smart contract deployments and upgrades, ensuring seamless multi-network releases


**Early Career Blockchain & Web Development** | 2020 - 2022 — NFT marketplaces, crowdfunding platforms, and dapps for **Panda Siege** and **Crypto Fund Me** (*Next.js, Solidity, IPFS*).

---

## Skills & Stack
- **Languages:** JavaScript/TypeScript (Node, React, Next, Vue), Python (Locust, Keras, Scikit-Learn), Solidity
- **Cloud & DevOps:** **GCP (Run, Build, Storage, BigQuery, VM)**, Kubernetes, Ansible, Docker, Prometheus
- **Specialization:** Cross-chain bridge architecture, high-IOPS indexing, bare-metal node provisioning, CI/CD

---

## Own Projects
- **Quant Research Platform** (side project) — AI-driven crypto research with human review; in-sample testing and out-of-sample validation before strategy promotion and live execution on Binance with **blue-green signal-sender deployments**. Monorepo with **Python/FastAPI**, **React/Vue** dashboards, **Postgres**, **Docker**, and **Ansible**-deployed infra.

---

## Education
**Double Degree: Bachelor of Business (Marketing) & Bachelor of Arts (Philosophy)**
Macquarie University, Sydney