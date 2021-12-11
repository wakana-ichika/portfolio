import { NextPage } from "next";
import Section from "../../components/section";
import Banner01 from "./Banner01";
import Banner02 from "./Banner02";
import Banner03 from "./Banner03";
import style from "index/website.module.scss"



/* 
Section
title => h2
className => className
*/

const Banner: NextPage = () => {
  return (
    <Section title="Banner" className={ style.banner }>
      <ul>
        <Banner01 />
        <Banner02 />
        <Banner03 />
      </ul>
    </Section>
  )
} 

export default Banner