import Hero from "@/components/Home/Hero";
import OurBrands from "@/components/Home/OurBrands";
import Process from "@/components/Home/Process";
import Projects from "@/components/Home/Projects";
import Statement from "@/components/Home/Statement";
import Stylux from "@/components/Home/Stylux";
import WorkWithUs from "@/components/Home/WorkWithUs";
import BlogSection from "@/components/layout/BlogSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <Statement />
      <Projects />
      <Stylux />
      <OurBrands />
      <Process />
      <BlogSection />
      <WorkWithUs />
    </main>
  );
}
