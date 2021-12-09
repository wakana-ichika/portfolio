// -------------------------------
// section設定
// -------------------------------
import { NextPage } from "next";
import { ReactNode } from "react";
import style from 'components.module.scss'


type props = {
  title: string,
  children: ReactNode,
  className: string
}


// -------------------------------
// Section設定
// -------------------------------

const Section: NextPage<props> = (props) => {
  return (
    <section className={`${props.className} ${style.section}`}>
      <H2 title={props.title} />
      <div>
        {props.children}
      </div>
    </section>
  )
}


// -------------------------------
// H2設定
// -------------------------------

const H2: NextPage<props> = (props) => {
  return (
    <h2>{props.title}</h2>
  )
}



export default Section