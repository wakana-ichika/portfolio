import { NextPage } from "next";
import { ReactNode } from "react";



type props = {
  title: string,
  children: ReactNode
}


// -------------------------------
// サイト説明/ WebExplain
// -------------------------------

const WebExplain: NextPage<props> = (props) => {
  return (
    <div>
      <h4>{ props.title }</h4>
      {props.children}
    </div>
  )
}


export default WebExplain