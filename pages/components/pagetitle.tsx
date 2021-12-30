// -------------------------------
// ページ上のタイトル設定
// -------------------------------
import { NextPage } from "next";
import style from 'components.module.scss';


type props = {
  title: string
}

const PageTitle: NextPage<props> = (props) => {
  return (
    <h2 className={style.pagetitle}>{ props.title }</h2>
  )
}

export default PageTitle