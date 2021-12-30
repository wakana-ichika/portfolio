import { NextPage } from "next";
import Section from "../components/section";
import style from "myself/careerLicense.module.scss"

const CareerLicense: NextPage = () => {
  return (
    <div className={ style.careerLicense }>
      <Section title="Career" className={ style.career }>
        <ul>
          <li>
            <p><time dateTime="2010">2011年</time>日本郵便株式会社入社<span>パート社員</span></p>
          </li>
          <li>
            <p><time dateTime="2014">2014年</time>私立京都芸術大学入学</p>
          </li>
          <li>
            <p><time dateTime="2016">2016年</time>日本郵便株式会社契約変更<span>契約社員</span></p>
          </li>
          <li>
            <p><time dateTime="2020">2020年</time>私立京都芸術大学休学</p>
          </li>
          <li>
            <p><time dateTime="2021">2021年</time>シナリオテクノロジーミカガミ<span>イラストレーター契約</span></p>
          </li>
          <li>
            <p><time dateTime="2022">2022年</time>私立京都芸術大学卒業予定</p>
          </li>
        </ul>
      </Section>
      <Section title="License" className={ style.license }>
        <ul>
          <li>
            <h3>パーソナルカラリスト検定2級</h3>
            カラーリストの知識をもとにイメージに合う配色を心がけております
          </li>
          <li>
            <h3>Python3エンジニア認定試験</h3>
            ExcelやWordでの自動化、Djangoでのログイン機能・カート作成ができます
          </li>
        </ul>
      </Section>
    </div>
  )
}

export default CareerLicense