import { NextPage } from "next";
import Layout from "../layout/Layout";
import Kana from "./Kana";



const MySelf: NextPage = () => {
  
  return (
    <Layout title="Kana's Portfolio| myself" className="myself">
      <Kana />
    </Layout>
  )
}

export default MySelf