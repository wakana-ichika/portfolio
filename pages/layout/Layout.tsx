// -------------------------------
// Layoutコンポーネント設定
// -------------------------------
import { NextPage } from "next"
import { ReactNode } from "react"
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"


type props = {
  title: string,
  className: string,
  children: ReactNode
}

const Layout: NextPage<props> = (props) => {
    
  return (
      <div className="frame">
        <Header title={ props.title } />
        <Main className={ props.className }>
          { props.children }
        </Main>
        <Footer />
      </div>
  )
}

export default Layout