import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Start seeding...");

  // Upsert to avoid duplicates during multiple runs
  const offers = [
    {
      title: "Senior Data Engineer (AWS / Snowflake)",
      description:
        "Nous recherchons un Senior Data Engineer pour accompagner notre client grand compte dans la refonte de sa plateforme de données vers le Cloud. Vous interviendrez sur l'architecture, le développement de pipelines ETL complexes et l'optimisation des performances SQL.",
      location: "Paris (Hybride)",
      type: "ESN Mission",
      published: true,
    },
    {
      title: "Consultant Cybersécurité GRC",
      description:
        "Rejoignez notre équipe d'experts pour mener des audits de conformité (ISO 27001) et accompagner la stratégie cyber de nos clients du secteur bancaire. Vous serez responsable de l'analyse de risques et de la mise en place de politiques de sécurité.",
      location: "Remote",
      type: "Freelance / Portage",
      published: true,
    },
    {
      title: "Développeur Fullstack React / Node.js",
      description:
        "Mission longue durée pour une startup en forte croissance dans le domaine de l'IA. Vous participerez au développement de nouvelles fonctionnalités, à l'amélioration de l'UI/UX et à la scalabilité du backend sous environnement micro-services.",
      location: "Lyon / Télétravail",
      type: "ESN Mission",
      published: true,
    },
  ];

  for (const offer of offers) {
    const createdOffer = await prisma.jobOffer.create({
      data: offer,
    });
    console.log(`Created job offer: ${createdOffer.title}`);
  }

  console.log("Seeding finished.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
