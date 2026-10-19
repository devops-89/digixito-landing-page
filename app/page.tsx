import Header from "@/components/Header";
import HeroSection3 from "@/components/HeroSection3";
import Problem from "@/components/Problem";
import Solutions from "@/components/Solutions";
import HowWeWork from "@/components/HowWeWork";
import ClientProof from "@/components/ClientProof";
import Contact from "@/components/Contact";
import ScrollProgress from "@/components/ScrollProgress";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimationController from "@/components/AnimationController";
import HeroSection2 from "@/components/HeroSection2";

export default function Page() {
  return (
    <>
      <AnimationController />
      <ScrollProgress />
      <Header />
      <main className="site-shell">
        {/* <HeroSection3 /> */}
        <HeroSection2 />
        <Problem />
        <Solutions />
        <HowWeWork />
        <ClientProof />
        <Contact />
        <WhatsAppButton />
      </main>
    </>
  );
}
