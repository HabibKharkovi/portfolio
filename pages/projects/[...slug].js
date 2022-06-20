import Header from '../../components/header'
import Preloader from '../../components/preLoader'
import Breadcrumbs from '../../components/breadcrumbs'
import ProjectDetails from '../../components/project-details'
import Footer from '../../components/footer'

const Project = () => {
  return (
    <div  className="gaspar" data-magic-cursor="show" data-color="crimson" >
      {/* <Preloader/> */}
      <Header/>

      <main id="main">
        <Breadcrumbs/>
        <ProjectDetails/>
        <Footer/>
      </main>
    </div>
  )
}


export default Project;