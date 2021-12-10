import { NextPage } from "next";
import Image from "next/dist/client/image";
import style from "index/website.module.scss"


type props = {
  src: string,
  alt: string,
  width: number,
  height: number
}


// -------------------------------
// webサイトのイメージ画像設定/ WebImage
// -------------------------------

const WebImage: NextPage<props> = (props) => {
  
  return (
    <div className={ style['web-image'] }>
        <Image src={ props.src } alt={ props.alt } width={ props.width } height={ props.height } />
    </div>
  )
}


export default WebImage