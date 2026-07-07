import portfolioConfig from "@/data/portfolioConfig.json";

export interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  year: string;
  overview: string;
  services: string[];
  images: string[];
  videos: string[];
  // Mock fields for the new detail page
  client?: string;
  duration?: string;
  eventType?: string;
  areaCovered?: string;
  highlights?: string[];
}

// Ensure all image paths are mapped correctly to the public directory
export const allProjects: Project[] = portfolioConfig.projects.map((p) => ({
  ...p,
  images: p.images.map((img) => `/images/portfolio/${img}`),
  videos: p.videos.map((v) => `/images/portfolio/${v}`),
  // Add placeholder data for the new luxury layout if it doesn't exist
  client: "Confidential Corporate Client",
  duration: "4 Days Setup, 2 Days Event",
  eventType: p.category,
  areaCovered: "Approx. 45,000 Sq. Ft.",
  highlights: [
    "Custom Fabricated Stage Design",
    "High-Performance Acoustic Treatment",
    "Weather-Resistant German Hangar Infrastructure",
    "VVIP Lounge Areas & Protocol Management",
  ]
}));

export function getProjectById(id: number): Project | undefined {
  return allProjects.find((p) => p.id === id);
}

export function getRelatedProjects(currentProject: Project, limit: number = 3): Project[] {
  // Try to find projects in the same category, excluding the current one
  let related = allProjects.filter(
    (p) => p.category === currentProject.category && p.id !== currentProject.id
  );

  // If not enough related projects, pad with other projects
  if (related.length < limit) {
    const others = allProjects.filter(
      (p) => p.category !== currentProject.category && p.id !== currentProject.id
    );
    related = [...related, ...others];
  }

  return related.slice(0, limit);
}

export function getNextProject(currentId: number): Project {
  const currentIndex = allProjects.findIndex((p) => p.id === currentId);
  // Loop back to the first project if we are at the end
  const nextIndex = currentIndex + 1 >= allProjects.length ? 0 : currentIndex + 1;
  return allProjects[nextIndex];
}

export function getAllCategories(): string[] {
  const categories = new Set(allProjects.map((p) => p.category));
  return ["All", ...Array.from(categories)];
}
