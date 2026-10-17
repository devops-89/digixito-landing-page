import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Solutions from '@/components/Solutions'
import Capabilities from '@/components/Capabilities'
import HowWeWork from '@/components/HowWeWork'
import ClientProof from '@/components/ClientProof'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import WhatsAppButton from '@/components/WhatsAppButton'
import AnimationController from '@/components/AnimationController'

export default function Page() {
  return (
    <main className="site-shell">
      <AnimationController />
      <ScrollProgress />
      <Header />
      <Hero />
      <Problem />
      <Solutions />
      <Capabilities />
      <HowWeWork />
      <ClientProof />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
