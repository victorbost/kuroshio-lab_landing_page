# Kuroshio-Lab

**Kuroshio-Lab** is an open-source, cloud-native platform dedicated to the **preservation, study, and long-term monitoring of marine ecosystems**.

It is designed as a **modular ecosystem of applications**, each addressing a specific domain of marine biology and ocean science, while sharing a coherent technical foundation.
The project prioritizes transparency, reproducibility, and long-term maintainability, treating software as **scientific infrastructure** rather than disposable tooling.

---

## 🌊 Mission

Marine research relies on complex data pipelines, heterogeneous sources, and long-lived datasets.
Kuroshio-Lab exists to provide:

- Open, auditable tools for marine data collection and analysis
- Clean, documented architectures that can be reused or self-hosted
- A unified technical framework for diverse marine science use cases

The platform is **non-commercial**, **fully open-source**, and designed to be extended by the community.

---

## 🧭 Core Principles

- **Open by design** — no proprietary lock-in, no closed logic
- **Modular architecture** — each application evolves independently
- **Explicit data flows** — clarity over abstraction
- **Production realism** — infrastructure designed for real deployment
- **Scientific durability** — systems built to last years, not demos

---

## 🧱 Platform Overview

Kuroshio-Lab is composed of **five independent applications**, each with its own domain, API, database, and deployment lifecycle.

### Domains

```txt
kuroshio-lab.com
├── species.kuroshio-lab.com
├── dashboard.kuroshio-lab.com
├── reef.kuroshio-lab.com
├── encyclopedia.kuroshio-lab.com
└── monitoring.kuroshio-lab.com
```


Each application exposes a dedicated API:
api.species.kuroshio-lab.com
api.dashboard.kuroshio-lab.com
api.reef.kuroshio-lab.com
api.encyclopedia.kuroshio-lab.com
api.monitoring.kuroshio-lab.com


### ☁️ Shared AWS Infrastructure

All applications rely on a centralized AWS foundation:

- Route53 — DNS and domain management
- IAM — strict role separation per application
- SES — transactional email (authentication, notifications)
- CloudWatch — logs, metrics, alarms
- S3 — shared bucket with prefix-level isolation

#### S3 Structure
s3://kuroshio-lab-assets/
├── species/
│ └── observations/
├── dashboard/
│ └── datasets/
├── reef/
│ └── satellite/
├── encyclopedia/
│ └── images/
└── monitoring/
└── ingestion/


Each application:

- Owns a dedicated S3 prefix
- Uses a scoped IAM role
- Avoids cross-application coupling

### 🧩 Applications

#### 🐚 Marine Species Observation Tracker

Field-oriented platform for recording and managing marine species observations.

**Stack**

- Frontend: Next.js (AWS Amplify)
- Backend: Django + Django REST Framework (EC2)
- Database: PostgreSQL (RDS)
- Storage: S3 (species/observations/)
- Auth: Local users + password reset via SES

**Focus**

- Structured biodiversity data
- Media-backed observations
- Researcher & citizen-science workflows

#### 🌊 Ocean Data Dashboard

Analytics and visualization platform for oceanographic datasets.

**Stack**

- Frontend: Next.js (AWS Amplify)
- Backend: Django + DRF (ECS)
- Workers: Celery (ECS)
- Cache/Broker: Redis (ElastiCache)
- Database: PostgreSQL

**Focus**

- Scheduled and event-based ingestion
- Aggregation pipelines
- Metrics, trends, and dashboards

#### 🪸 Coral Reef Health Index

Monitoring tool combining satellite imagery and machine learning.

**Stack**

- Frontend: Next.js
- Backend: Django (ECS)
- ML: Python-based models embedded in backend
- Workers: Celery for retraining and batch processing
- Storage: S3 (reef/satellite/)

**Focus**

- Reef health indicators
- Temporal analysis
- Predictive modeling

#### 🐠 Marine Life Encyclopedia

Structured, open knowledge base for marine species.

**Stack**

- Frontend: Next.js
- Backend: Django (ECS)
- API: REST
- Search: PostgreSQL full-text (v1)

**Focus**

- Public-first, read-only access
- Taxonomy and species metadata
- Educational and outreach use cases

#### 🛰️ Marine Monitoring Platform

Infrastructure-level ingestion and monitoring system.

**Stack**

- Frontend: Next.js
- Backend: Django + GraphQL (ECS)
- Ingestion: AWS Lambda (cron) + Celery
- Database: PostgreSQL
- Storage: S3 (monitoring/ingestion/)

**Focus**

- Long-term environmental signals
- Flexible querying via GraphQL
- Automation and extensibility

### 🔐 Authentication Strategy

- Each application manages its own users
- No shared auth layer (intentional isolation)
- Email-based flows via AWS SES
- Public access supported where appropriate

### 📦 Repository Structure
kuroshio-lab/
├── species/
├── dashboard/
├── reef/
├── encyclopedia/
├── monitoring/
├── infra/
│ ├── iam/
│ ├── ecs/
│ ├── rds/
│ └── route53/
├── docs/
└── README.md


Each application can also be split into its own repository if needed.

### 🚀 Roadmap (High-Level)

v1 focus: ship core functionality for each app within one year

**Prioritize:**

- data ingestion
- schema stability
- observability

**Progressive enrichment:**

- ML models
- search enhancements
- cross-app data federation (optional)

### 🤝 Contributing

Contributions are welcome.

- Code, documentation, architecture discussions
- Scientific feedback and domain expertise
- Infrastructure and performance improvements

Please refer to CONTRIBUTING.md (coming soon) for guidelines.

### 📄 License

Kuroshio-Lab is released under an open-source license.
(License to be defined — e.g. MIT or Apache 2.0)
