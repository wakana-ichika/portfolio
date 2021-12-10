import { NextPage } from "next";
import { ReactNode } from "react";
import style from "index/website.module.scss"



type props = {
  title: string,
  children: ReactNode
}


// -------------------------------
// サイト説明/ WebExplain
// -------------------------------

const WebExplain: NextPage<props> = (props) => {
  return (
    <div className={ style['web-explain'] }>
      <h4>{ props.title }</h4>
      {props.children}
    </div>
  )
}


export default WebExplain