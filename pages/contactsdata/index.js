import Header from '../../components/header'
import Footer from '../../components/footer'
import { useDebugValue, useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {
    const [userData, setUserData] = useState([])
    const [email, setUserEmail] = useState([])
    useEffect(() => {
      dta()
    }, [])

    const dta = () => {
      axios
        .get('http://localhost:3333/api/contact')
        .then((res) => {
          // console.log(res)
          if(res != ''){
            setUserData(res.data)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  return (
    <div  className="gaspar" data-magic-cursor="show" data-color="crimson" >
    {/* <Preloader/> */}
    <Header/>
      
      <main id="main">
      {userData.map((data) => (
          <div>
            <br/>
            <h6>Name: <strong>{data.name} </strong></h6>
            <h6> Email : {data.email}</h6>
            <h6>Subject: {data.subject} </h6>
            <h6>Message: {data.message} </h6>
            <hr/>
          </div>
        ))}
        <Footer/>
      </main>
        
      
      <h1>Contacts</h1>
    </div>
   
  )
}