import { NextPage } from "next";
import Layout from "../layout/Layout";
import PageTitle from "../components/pagetitle";
import style from "contact/contact.module.scss"



const Contact: NextPage = () => {
  return (
    <Layout title="Kana's Portfolio| contact" className={ style.contact }>
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeBUlDxo6zq0qkOn8vxDjpsOWAZ2bHuXBnHNVJzxgMYapZY6Q/viewform?embedded=true">読み込んでいます…</iframe>
    </Layout>
  )
}

export default Contact