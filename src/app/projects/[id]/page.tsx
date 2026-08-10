import { notFound } from "next/navigation";
import { projectsData } from "@/data/projects";
import ProjectDetail from "@/components/Projeccts/ProjectDetail";

export function generateStaticParams() {
    return projectsData.map((project) => ({
        id: project.id,
    }));
}

export default async function ProjectDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const projectIndex = projectsData.findIndex((p) => p.id === id);

    if (projectIndex === -1) {
        notFound();
    }

    const project = projectsData[projectIndex];
    const prevProject = projectIndex > 0 ? projectsData[projectIndex - 1] : undefined;
    const nextProject = projectIndex < projectsData.length - 1 ? projectsData[projectIndex + 1] : undefined;

    return (
        <>
            <ProjectDetail
                project={project}
                prevProject={prevProject}
                nextProject={nextProject}
            />
        </>
    );
}
