import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"
export default () => (
  <Layout>
    <SimpleHero >
    <Banner title="Conoce La paz " 
              info="Visita la Ciudad Maravilla en Bolivia durante 3 dias">
        <Link to="/tours" 
              className="btn-white">explorar tour
        </Link>
      </Banner>
    </SimpleHero>
    <About/>
    <Services/>
  </Layout>
)
