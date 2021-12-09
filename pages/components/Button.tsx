import { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";



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
    <div className={ props.className }>
      <Link  href={ props.href }>
        <a>{ name }</a>
      </Link>
    </div>
  )
}


export default Button