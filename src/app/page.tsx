import { Navbar } from "@/components/site-navbar";
import { ReadingProgress } from "@/components/micro/read-progress";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { NowPage } from "@/components/sections/now";
import { Projects } from "@/components/sections/projects";
import { Blog } from "@/components/sections/blog";
import { Uses } from "@/components/sections/uses";
import { Gallery } from "@/components/sections/gallery";
import { SocialLinks } from "@/components/sections/social-links";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <ReadingProgress />
      <Navbar />
      <main id="main-content" className="flex-1">
        <Hero />
        <About />
        <NowPage />
        <Projects />
        <Blog />
        <Uses />
        <Gallery />
        <SocialLinks />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
