import About from "@/components/About/about";
import LetsTalk from "@/components/layout/LetsTalk";
import "./about.css";

export const metadata = {
  title: "About Us | Luxélan",
  description:
    "Discover the philosophy, vision, values and people behind Luxélan's approach to luxury interior design.",
};

export default function AboutPage() {
  return (
    <>
      <About />
      <LetsTalk />
    </>
  );
}
