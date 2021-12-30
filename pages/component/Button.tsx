//import { NextPage } from "next";
import Link from "next/link";
import style from "components.module.scss"



type props = {
  name: string,
  href: string,
  className: string,
}

const Button = (props:props) => {
  return (
    <div className={`${style.btn} ${style[props.className]}`} >
      <Link  href={ props.href }>
        <a>{ props.name }</a>
      </Link>
    </div>
  )
}


export default Button