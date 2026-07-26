import HomepageBanner from "@/components/Homepage/Banner"
import CodingJourney from "@/components/Homepage/CodingJourney"
import HomepageProjects from "@/components/Homepage/Projects"
import Skills from "@/components/Homepage/Skills"

const Home = () => {
  return (
    <>
      <HomepageBanner />
      <CodingJourney />
      <Skills />
      <HomepageProjects />
    </>
  )
}

export default Home