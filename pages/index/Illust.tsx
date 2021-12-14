import { NextPage } from "next";
import Image from "next/image";
import { useState, useEffect } from "react";
import style from 'index.module.scss'
import Section from "../components/section";
import Lightbox from "lightbox-react";
import 'react-image-lightbox/style.css'



/* 
Section
title => h2
className => className
*/

// 使用するイメージ画像
const images = ['/index/illust01.jpg', '/index/illust02.png', '/index/illust03.jpg', '/index/illust04.jpg', '/index/illust05.gif',]
const title = ['水彩風イラスト', '架空博覧会のロゴ', '趣味イラスト', '子供向けイベントパネル/印刷用', 'gifアニメーションイラスト']


const Illust: NextPage = () => {
  const [photoIndex, setPhotoIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const [illust, setIllust] = useState<any>([])

  useEffect(()=> {
    let images_elements: any[] = []

    images.map((img, index) => {
      images_elements.push(
        <li key={ index } onClick={() => { setPhotoIndex( index ), setIsOpen(true) }}>
          <Image src={ img } width={300} height={250} objectFit="cover" />
        </li>
      )
    })
    setIllust(images_elements)

    console.log(images_elements)
  }, [])


  return (
      <Section title="Illust" className={style.illust}>
        <ul>
          { illust }
        </ul>

        { isOpen && (
          <Lightbox 
            mainSrc={ images[photoIndex] }
            nextSrc={ images[ ( photoIndex + 1 ) % images.length ] }
            prevSrc={ images[ ( photoIndex + images.length - 1 ) % images.length ] }
            onCloseRequest={ () => { setIsOpen(false) } }
            onMovePrevRequest={ () => { setPhotoIndex(( photoIndex + images.length - 1 ) % images.length) } }
            onMoveNextRequest={ () => { setPhotoIndex(( photoIndex + images.length + 1 ) % images.length) } }
            imageTitle={ title[ photoIndex ] }
            imageCaption={ title[ photoIndex ] }
            />
        ) }
      </Section>
  )
}

export default Illust