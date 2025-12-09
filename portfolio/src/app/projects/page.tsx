import ProjectsGrid from "@/components/ProjectsGrid";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <Link href="/" className="inline-block text-yellow-500 hover:text-yellow-600 mb-8 font-medium">
          ← Back to Home
        </Link>
      </div>
      <ProjectsGrid />
    </div>
  );
}
