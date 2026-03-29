import LogoSection from "./sections/LogoSection.jsx"
import NavBar from "./components/NavBar.jsx"
import FeatureCards from "./sections/FeatureCards.jsx"
import Home from "./sections/Home.jsx"
import Hero from "./sections/Hero.jsx"
import ShowcaseSection from "./sections/ShowcaseSection.jsx"
import ExperienceSection from "./sections/ExperienceSection.jsx"
import TechStack from "./sections/TechStack.jsx"
// import Testimonials from "./sections/Testimonials.jsx"
import Contact from "./sections/Contact.jsx"
import Footer from "./sections/Footer.jsx"
import ClickSpark from "./components/ClickSpark.jsx"

const App = () => {
  return (
    <ClickSpark
      sparkColor="#fff"
      sparkSize={5}
      sparkRadius={15}
      sparkCount={8}
      duration={300}
    >
      <NavBar />
      <Home />
      <Hero />
      <TechStack />
      <LogoSection />
      <ExperienceSection />
      <ShowcaseSection />
      <FeatureCards />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </ClickSpark>
  )
}

export default App