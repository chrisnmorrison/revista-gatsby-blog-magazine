import React from 'react'
import Layout from '../components/Layout'
import AboutUs from '../components/About/AboutUs'
import Vision from '../components/About/Vision'
import Network from '../components/About/Network'
import Seo from '../components/SEO'

const about = () => {
  return (
    <Layout>
      <Seo
        title="About Us | Revista"
        description="Revista is a platform for passionate people to share knowledge. We are open source and believe in free learning."
      />

      <AboutUs />
      <Vision />
      <Network />
    </Layout>
  )
}

export default about
