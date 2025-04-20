import Intro from "./intro/page";
import SectionDivider from "@/components/section-divider";

export default function Home() {
  return (
    <main className="flex flex-col  items-center px-4">
      <Intro />
      <SectionDivider />
    </main>
  );
}
