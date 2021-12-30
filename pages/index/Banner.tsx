import { NextPage } from "next";
import Image from "next/image";
import { useState, useEffect } from "react";
import Section from "../component/section";
import style from "index.module.scss"
import Lightbox from "react-image-lightbox";
import 'react-image-lightbox/style.css'




/* 
Section
title => h2
className => className
*/

//　使用する画像
const images = ['/index/AD01.jpg', '/index/AD02.jpg', '/index/AD03.jpg']
const title = ['コーヒーショップの割引広告', 'バレンタインキット広告', 'バレンタインキット広告']

const Banner: NextPage = () => {
  const [photoIndex, setPhotoIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const [bannerImg, setBannerImg] = useState<any[]>([])

  // 画像を表示セット
  useEffect(() => {
    let images_elements: any[] = []
    
    images.map((img, index) => {
      
      images_elements.push(
      <li key={ index } onClick={() => { setIsOpen(true), setPhotoIndex(index) }}>
        <Image src={ img } alt={`AD design${index}`} width={300} height={250} />
      </li>
      )

    })

    setBannerImg(images_elements)
  }, [])


  return (
    <Section title="Banner" className={ style.banner }>
      <ul>
        { bannerImg }
      </ul>

      {isOpen && (
        <Lightbox
          mainSrc={ images[ photoIndex ] }
          nextSrc={ images[ ( photoIndex + 1 ) % images.length ] }
          prevSrc={ images[ ( photoIndex + images.length - 1 ) % images.length ] }
          onCloseRequest={ () => setIsOpen(false) }
          onMovePrevRequest={ () =>
            setPhotoIndex(( photoIndex + images.length - 1 ) % images.length)
          }
          onMoveNextRequest={ () => setPhotoIndex(( photoIndex + 1 ) % images.length) }
          imageTitle={ title[photoIndex] }
          imageCaption={ title[photoIndex] }
         />
      )}

        
    </Section>
  )
} 

export default Banner