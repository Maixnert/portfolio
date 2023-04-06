import React, {useState, useEffect} from 'react'
import BarLoader from "react-spinners/BarLoader";
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import { HelmetProvider } from 'react-helmet-async';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])



  return (
    <HelmetProvider>
          <React.StrictMode>
    <BrowserRouter> 

    <>
        <div className="head">
    <Helmet>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="rights" content="Tomáš Maixner 2023" />
    <meta name="robots" content="index, follow" />
    <meta name="keywords"
        content="Grafika, web development, digitalni marketing, tvorba webu, Šumperk, zábřeh, olomouc, shopify, newsletter, sociální sítě, reklama, tvorba vebových stránek, tvorba grafiky, DTP, SEO, " />
    <meta name="description"
        content="Tvorba webových stránek, grafiky a digitální marketing nejen pro firmy. Wordpress, shopify, HTML, Šumperk, Zábřeh, Olomouc" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="generator" content="maixnert.cz" />
    <title >Tomáš Maixner - Tvorba webů a Digitální marketing</title>
    <script src="https://cmp.osano.com/AzqafqTV6PDOv1v7/d37d653b-7c92-4d78-90fb-a3238cb12a43/osano.js"></script>
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon"></link>
    
    </Helmet>

    </div>
      <div className='App'>
        {
          loading ?

          <BarLoader className='loader-bar' 
          color="red"
          height={15}
          width={200} />

          :
       <div className="root-container">
      <Header />
      <Nav />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
      </div> 
    }
      </div>
    </> 
    </BrowserRouter>
  </React.StrictMode>
    </HelmetProvider>
  )
}

export default App
