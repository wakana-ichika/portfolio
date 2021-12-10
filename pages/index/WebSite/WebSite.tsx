import Section from "../../components/section";
import { NextPage } from "next";
import List from './components/List'
import I_A_cafe from "./I_A_cafe";
import I_A_chocolate from "./I_A_chocolate"
import style from "index/website.module.scss"





// -------------------------------
// 全体設定
// -------------------------------

const WebSite: NextPage = () => {
  return (
    <Section title="WebSite" className={ style.website }>
      <List />

      <ul>

        <I_A_cafe />
        <I_A_chocolate />

      </ul>
    </Section>
    )
}


export default WebSite