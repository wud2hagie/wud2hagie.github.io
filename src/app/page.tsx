import { Navbar } from "@/components/site-navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Stats } from "@/components/sections/stats";
import { Teaching } from "@/components/sections/teaching";
import { Publications } from "@/components/sections/publications";
import { YouTubeFeed } from "@/components/sections/youtube-feed";
import { Testimonials } from "@/components/sections/testimonials";
import { Projects } from "@/components/sections/projects";
import { Certifications } from "@/components/sections/certifications";
import { CV } from "@/components/sections/cv";
import { Blog } from "@/components/sections/blog";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Stats />
        <Teaching />
        <Publications />
        <YouTubeFeed />
        <Testimonials />
        <Projects />
        <Certifications />
        <CV />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
