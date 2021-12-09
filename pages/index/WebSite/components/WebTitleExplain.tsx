import { NextPage } from "next"
import { ReactNode } from "react"



type props = {
  title: string,
  children: ReactNode
}


// -------------------------------
// タイトル・説明/ WebTitleExplain
// -------------------------------

const WebTitleExplain: NextPage<props> = (props) => {
  return (
    <div>
      <h3>{ props.title }</h3>
      { props.children }
    </div>
  )
}


export default WebTitleExplain