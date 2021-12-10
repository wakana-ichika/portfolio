import { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import style from "components.module.scss"



type props = {
  name: string,
  href: string,
  className: string,
}

const Button: NextPage<props> = (props) => {
  const [name, setName] = useState<string>('')

  useEffect(() => {
    setName(props.name)
  }, [])

  return (
    <div className={`${style.btn} ${style[props.className]}`} >
      <Link  href={ props.href }>
        <a>{ name }</a>
      </Link>
    </div>
  )
}


export default Button