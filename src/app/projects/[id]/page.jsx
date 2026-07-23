import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import ProjectDetailsClient from "./ProjectDetailsClient";

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} | Portfolio`,
    description: project.shortDescription || project.description,
  };
}

export default async function ProjectDetailsPage({ params }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return <ProjectDetailsClient project={project} />;
}
