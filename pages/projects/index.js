import Header from '../../components/header'
import Preloader from '../../components/preLoader'
import Footer from '../../components/footer'

import ProjectDetails from '../../components/project-details'

export default function Home() {
  return (
    <div  className="gaspar" data-magic-cursor="show" data-color="crimson" >
      {/* <Preloader/> */}
      <Header/>

      <main id="main">
        <ProjectDetails />
        <Footer/>
      </main>
    </div>
  )
}