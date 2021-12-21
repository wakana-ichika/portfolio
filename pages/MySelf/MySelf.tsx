import { NextPage } from "next";
import Layout from "../layout/Layout";
import Kana from "./Kana";
import Skill from "./Skill";
import CareerLicense from "./CareerLicense";



const MySelf: NextPage = () => {
  
  return (
    <Layout title="Kana's Portfolio| myself" className="myself">
      <Kana />
      <Skill />
      <CareerLicense />
    </Layout>
  )
}

export default MySelf