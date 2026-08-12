export type ServiceId =
  | "mvp"
  | "crm"
  | "api"
  | "cloud"
  | "commerce"
  | "ai"
  | "growth"
  | "analytics"
  | "rpa";

export type Service = {
  id: ServiceId;
  number: string;
  title: string;
  shortTitle: string;
  marker: string;
  description: string;
  problem: string;
  includes: string[];
  result: string;
  note?: string;
};

export const services: Service[] = [
  {
    id: "mvp",
    number: "01",
    title: "MVPs and web products",
    shortTitle: "MVP or web product",
    marker: "Launch",
    description:
      "Define the product core, ship a working first release, and prepare a foundation for the next iteration.",
    problem: "An idea needs to become a product that users can experience and the team can validate in real scenarios.",
    includes: ["Discovery and scope", "UX prototype", "First release build", "Launch preparation"],
    result: "A working first release with a clear path for further development.",
    note: "A practical starting point for a clearly scoped product.",
  },
  {
    id: "crm",
    number: "02",
    title: "Custom dashboards and CRM",
    shortTitle: "CRM or dashboard",
    marker: "Operate",
    description:
      "Design operational interfaces around team decisions, roles, data, and real working scenarios.",
    problem: "The team makes decisions across spreadsheets and disconnected tools, with no clear view of current work.",
    includes: ["Role-based workflows", "Pipelines and states", "Filters and reports", "Source integrations"],
    result: "An operational interface built around the way the company actually works.",
  },
  {
    id: "api",
    number: "03",
    title: "API integrations",
    shortTitle: "API integration",
    marker: "Connect",
    description:
      "Connect services and remove manual gaps between the website, CRM, payments, accounting, and internal systems.",
    problem: "Data is duplicated, moved manually, or lost at the boundaries between services.",
    includes: ["System map", "API contracts", "Webhooks and queues", "Error monitoring"],
    result: "A documented integration layer with observable states and failures.",
  },
  {
    id: "cloud",
    number: "04",
    title: "Cloud migration",
    shortTitle: "Cloud infrastructure",
    marker: "Scale",
    description:
      "Move applications and data to AWS, GCP, or Azure with a clear plan, controlled risk, and an operational model.",
    problem: "The current infrastructure limits growth, is difficult to maintain, or makes load management unpredictable.",
    includes: ["Environment audit", "Migration plan", "Containerization", "CI/CD and observability"],
    result: "A manageable cloud environment with a documented operating model.",
  },
  {
    id: "commerce",
    number: "05",
    title: "E-commerce platforms",
    shortTitle: "E-commerce platform",
    marker: "Commerce",
    description:
      "Create a clear path from discovery to purchase and connect payments, inventory, delivery, and operations.",
    problem: "Customers struggle to choose and check out, while storefront data remains disconnected from internal systems.",
    includes: ["Catalog and search", "Cart and checkout", "Payments and delivery", "Inventory and CRM"],
    result: "A connected commerce flow from product discovery to order handling.",
  },
  {
    id: "ai",
    number: "06",
    title: "AI agents and assistants",
    shortTitle: "AI agent",
    marker: "Intelligence",
    description:
      "Embed AI into a defined workflow: support, knowledge retrieval, lead qualification, or document handling.",
    problem: "Teams repeat the same knowledge work and lose time searching for context across systems.",
    includes: ["Agent scenarios", "Knowledge base and RAG", "System integrations", "Quality controls"],
    result: "An AI assistant with a defined role, trusted sources, and explicit action boundaries.",
  },
  {
    id: "growth",
    number: "07",
    title: "Marketing and sales automation",
    shortTitle: "Marketing & Sales Ops",
    marker: "Growth ops",
    description:
      "Orchestrate lead movement, communication, and data transfer across campaigns, websites, CRM, and analytics.",
    problem: "Leads move through the funnel manually, messaging is inconsistent, and attribution remains unclear.",
    includes: ["Lead routing", "Triggered workflows", "CRM synchronization", "End-to-end analytics"],
    result: "An observable automated flow from first inquiry to the next best action.",
  },
  {
    id: "analytics",
    number: "08",
    title: "Data analytics",
    shortTitle: "Data analytics",
    marker: "Decide",
    description:
      "Unify data sources and turn metrics into clear dashboards for daily operational decisions.",
    problem: "Metrics take too long to assemble, conflict across tools, or fail to answer leadership questions.",
    includes: ["Metric model", "Source connections", "Visualization", "Roles and scheduled reports"],
    result: "A shared reporting layer with transparent calculation rules.",
  },
  {
    id: "rpa",
    number: "09",
    title: "RPA and process automation",
    shortTitle: "RPA automation",
    marker: "Automate",
    description:
      "Identify repetitive work and turn it into resilient workflows with visible exceptions and outcomes.",
    problem: "People repeat predictable sequences of actions across documents and business systems.",
    includes: ["Process map", "Automation scenarios", "Exception handling", "Execution log"],
    result: "An automated sequence with control and visibility at every step.",
  },
];

export const serviceById = Object.fromEntries(
  services.map((service) => [service.id, service]),
) as Record<ServiceId, Service>;
