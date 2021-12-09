// -------------------------------
// Mainコンポーネント設定
// -------------------------------
import { NextPage } from "next";
import { ReactNode } from "react";
import style from 'layout/main.module.scss'


type props = {
  className: string,
  children: ReactNode
}

const Main: NextPage<props> = (props) => {
  

  return (
    <main className={`${props.className} ${style.main}`}>
      {props.children}
    </main>
  )
}

export default Main