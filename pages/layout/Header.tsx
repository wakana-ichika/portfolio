// -------------------------------
// Headerコンポーネント設定
// -------------------------------
import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import style from 'layout/header.module.scss'


type Props = {
  title: string
}


// -------------------------------
// Header
// -------------------------------

const Header: NextPage<Props> = (props) => {

  return (
    <div>
      <HeaderTop title={props.title} />
      <Botanical />
      <header className={ style.header }>
        <div>
          <Logo />
          <Nav />
        </div>
      </header>
    </div>
  )
}

export default Header


// -------------------------------
// <Head>設定 /HeaderTop
// -------------------------------

const HeaderTop: NextPage<Props> = (props) => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=0.5, maximum-scale=2, user-scalable=yes" />
      <link rel="preconnect" href="https://fonts.googleapis.com" /> 
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="True" /> 
      <link href="https://fonts.googleapis.com/css2?family=Caveat&display=swap" rel="stylesheet" />
    </Head>
  )
}


// -------------------------------
// 植物layout設定 /Botanical
// -------------------------------

const Botanical: NextPage = () => {
  return (
    <div className={style.layout}>
      <div>
        <svg id="left-top.svg" xmlns="http://www.w3.org/2000/svg" width="359.438" height="436.156" viewBox="0 0 359.438 436.156">
          <path id="シェイプ_6" data-name="シェイプ 6" className={style.cls1} d="M15,468s-58.328-94.719-6-247S257,114,257,114" transform="translate(0 -33.844)"/>
          <path id="シェイプ_7" data-name="シェイプ 7" className={style.cls1} d="M220.819,112.614s41.43-23.233,73.121-19.242,63.5,19.026,63.5,19.026-16.529,15.667-61.362,22.356C275.722,137.791,220.819,112.614,220.819,112.614Z" transform="translate(0 -33.844)"/>
          <path id="シェイプ_8" data-name="シェイプ 8" className={style.cls1} d="M155,110s31.465,11.074,51,21,25,16,25,16" transform="translate(0 -33.844)"/>
          <path id="シェイプ_9" data-name="シェイプ 9" className={style.cls1} d="M270,175s-24.04,1.376-43-10c-18.535-11.121-32-35-32-35s31.416-4.151,50,7C263.913,148.348,270,175,270,175Z" transform="translate(0 -33.844)"/>
          <path id="シェイプ_10" data-name="シェイプ 10" className={style.cls1} d="M114,118a181.456,181.456,0,0,1,25-28c11.5-10.17,27-18,27-18" transform="translate(0 -33.844)"/>
          <path id="シェイプ_11" data-name="シェイプ 11" className={style.cls1} d="M212,36s-28.2-2.3-45,10c-18.608,13.629-26,42-26,42s27.906,1.944,47-10C213.368,62.132,212,36,212,36Z" transform="translate(0 -33.844)"/>
          <path id="シェイプ_12" data-name="シェイプ 12" className={style.cls1} d="M56,150s33.352-4.026,56,0c22.35,3.973,34,16,34,16" transform="translate(0 -33.844)"/>
          <path id="シェイプ_13" data-name="シェイプ 13" className={style.cls1} d="M187,210s-27.127,6.378-46-7c-20.555-14.571-33-52-33-52s32.484-7.252,54,8C179.584,171.465,187,210,187,210Z" transform="translate(0 -33.844)"/>
          <path id="シェイプ_14" data-name="シェイプ 14" className={style.cls1} d="M33,172s6.716-32.884,23-58c12.79-19.726,10-11,10-11" transform="translate(0 -33.844)"/>
          <path id="シェイプ_16" data-name="シェイプ 16" className={style.cls1} d="M9,227s22.306-13.859,41-19c21.154-5.817,17,1,17,1" transform="translate(0 -33.844)"/>
          <path id="シェイプ_17" data-name="シェイプ 17" className={style.cls1} d="M125,221s-27.375,20.212-48,14c-20.874-6.287-39-23-39-23-0.5-.056,21.218-33.478,40.558-17.949C107.063,216.941,125,221,125,221Z" transform="translate(0 -33.844)"/>
          <path id="シェイプ_15" data-name="シェイプ 15" className={style.cls1} d="M124,65S73.906,66.859,58,84c-20.727,24.34-15,52-15,52l5-2s16.579-16.043,37-25C112.46,96.955,124,65,124,65Z" transform="translate(0 -33.844)"/>
          <path id="シェイプ_18" data-name="シェイプ 18" className={style.cls1} d="M-4,262s-18.15-15.856-17-40c1.336-28.061,11-37,11-37" transform="translate(0 -33.844)"/>
          <path id="シェイプ_19" data-name="シェイプ 19" className={style.cls1} d="M19,125s-30.943,12.945-38,32c-7.9,21.318,2,58,2,58s21.253-25.084,29-46C19.236,149.463,19,125,19,125Z" transform="translate(0 -33.844)"/>
          <path id="シェイプ_20" data-name="シェイプ 20" className={style.cls1} d="M-12,326s10.022-20.277,24-34c13.515-13.269,15-11,15-11" transform="translate(0 -33.844)"/>
          <path id="シェイプ_22" data-name="シェイプ 22" className={style.cls1} d="M-34,308s-1.53,20.912,4,37c5.469,15.911,18,27,18,27" transform="translate(0 -33.844)"/>
          <path id="シェイプ_23" data-name="シェイプ 23" className={style.cls1} d="M-30,260s-18.816,9.527-21,27c-2.312,18.5,12,45,12,45s12.567,4.465,15-15C-21.97,300.758-30,260-30,260Z" transform="translate(0 -33.844)"/>
          <path id="シェイプ_24" data-name="シェイプ 24" className={style.cls1} d="M-3,414a125.632,125.632,0,0,0,23-32c8.853-17.473,5-19,5-19" transform="translate(0 -33.844)"/>
          <path id="シェイプ_25" data-name="シェイプ 25" className={style.cls1} d="M37,316s-19.787,10.037-23,28c-7.942,44.4,4,46,4,46s12.32,6.677,24-35C45.309,343.2,37,316,37,316Z" transform="translate(0 -33.844)"/>
          <path id="シェイプ_21" data-name="シェイプ 21" className={style.cls1} d="M10,296s7.481-36.651,24-43c25.878-9.946,37,2,37,2s-4.941,13.865-26,33C32.463,299.391,10,296,10,296Z" transform="translate(0 -33.844)"/>
        </svg>
      </div>
      <div>
        <svg id="right-bottom.svg" xmlns="http://www.w3.org/2000/svg" width="395" height="225" viewBox="0 0 395 225">
          <path id="シェイプ_6" data-name="シェイプ 6" className={style.cls1} d="M1349.67-209s58.37,94.685,6.01,246.911-248.17,106.961-248.17,106.961" transform="translate(-1005)"/>
          <path id="シェイプ_7" data-name="シェイプ 7" className={style.cls1} d="M1143.71,146.257s-41.46,23.225-73.17,19.235S1007,146.474,1007,146.474s16.54-15.662,61.4-22.348C1088.77,121.09,1143.71,146.257,1143.71,146.257Z" transform="translate(-1005)"/>
          <path id="シェイプ_8" data-name="シェイプ 8" className={style.cls1} d="M1209.58,148.871s-31.49-11.071-51.04-20.993-25.02-15.994-25.02-15.994" transform="translate(-1005)"/>
          <path id="シェイプ_9" data-name="シェイプ 9" className={style.cls1} d="M1094.5,83.894s24.05-1.375,43.03,10c18.55,11.118,32.02,34.988,32.02,34.988s-31.44,4.149-50.04-7C1100.59,110.537,1094.5,83.894,1094.5,83.894Z" transform="translate(-1005)"/>
          <path id="シェイプ_10" data-name="シェイプ 10" className={style.cls1} d="M1250.61,140.873a181.7,181.7,0,0,1-25.02,27.99c-11.51,10.167-27.02,17.994-27.02,17.994" transform="translate(-1005)"/>
          <path id="シェイプ_11" data-name="シェイプ 11" className={style.cls1} d="M1152.54,222.844s28.22,2.3,45.03-10c18.62-13.623,26.02-41.984,26.02-41.984s-27.93-1.944-47.04,10C1151.17,196.722,1152.54,222.844,1152.54,222.844Z" transform="translate(-1005)"/>
          <path id="シェイプ_12" data-name="シェイプ 12" className={style.cls1} d="M1308.64,108.885s-33.37,4.025-56.03,0c-22.37-3.972-34.03-15.994-34.03-15.994" transform="translate(-1005)"/>
          <path id="シェイプ_13" data-name="シェイプ 13" className={style.cls1} d="M1177.55,48.907s27.15-6.376,46.04,7c20.57,14.566,33.02,51.981,33.02,51.981s-32.51,7.25-54.04-8C1184.98,87.428,1177.55,48.907,1177.55,48.907Z" transform="translate(-1005)"/>
          <path id="シェイプ_14" data-name="シェイプ 14" className={style.cls1} d="M1331.66,86.893s-6.72,32.872-23.02,57.979c-12.79,19.719-10,11-10,11" transform="translate(-1005)"/>
          <path id="シェイプ_16" data-name="シェイプ 16" className={style.cls1} d="M1355.68,31.913s-22.32,13.854-41.03,18.993c-21.17,5.815-17.01-1-17.01-1" transform="translate(-1005)"/>
          <path id="シェイプ_17" data-name="シェイプ 17" className={style.cls1} d="M1239.6,37.911s27.39-20.2,48.03-13.995c20.89,6.285,39.03,22.992,39.03,22.992,0.5,0.056-21.24,33.466-40.59,17.942C1257.55,41.969,1239.6,37.911,1239.6,37.911Z" transform="translate(-1005)"/>
          <path id="シェイプ_15" data-name="シェイプ 15" className={style.cls1} d="M1240.6,193.854s50.13-1.858,66.04-18.993c20.74-24.331,15.01-51.981,15.01-51.981l-5,2s-16.59,16.037-37.03,24.991C1252.15,161.91,1240.6,193.854,1240.6,193.854Z" transform="translate(-1005)"/>
          <path id="シェイプ_18" data-name="シェイプ 18" className={style.cls1} d="M1368.69-3.074s18.16,15.851,17.01,39.986c-1.34,28.051-11.01,36.987-11.01,36.987" transform="translate(-1005)"/>
          <path id="シェイプ_19" data-name="シェイプ 19" className={style.cls1} d="M1345.67,133.876s30.96-12.941,38.03-31.988c7.9-21.311-2-57.98-2-57.98s-21.27,25.075-29.02,45.983C1345.43,109.422,1345.67,133.876,1345.67,133.876Z" transform="translate(-1005)"/>
          <path id="シェイプ_20" data-name="シェイプ 20" className={style.cls1} d="M1376.69-67.051s-10.03,20.269-24.01,33.988c-13.53,13.264-15.02,11-15.02,11" transform="translate(-1005)"/>
          <path id="シェイプ_22" data-name="シェイプ 22" className={style.cls1} d="M1398.71-49.058s1.53-20.9-4.01-36.987c-5.47-15.9-18.01-26.99-18.01-26.99" transform="translate(-1005)"/>
          <path id="シェイプ_23" data-name="シェイプ 23" className={style.cls1} d="M1394.7-1.075s18.83-9.524,21.02-26.99c2.31-18.491-12.01-44.984-12.01-44.984s-12.58-4.463-15.01,14.995C1386.67-41.819,1394.7-1.075,1394.7-1.075Z" transform="translate(-1005)"/>
          <path id="シェイプ_24" data-name="シェイプ 24" className={style.cls1} d="M1367.69-155.02a125.681,125.681,0,0,0-23.02,31.989c-8.86,17.467-5,18.993-5,18.993" transform="translate(-1005)"/>
          <path id="シェイプ_25" data-name="シェイプ 25" className={style.cls1} d="M1327.66-57.055s19.8-10.034,23.01-27.99c7.95-44.389-4-45.983-4-45.983s-12.33-6.675-24.02,34.987C1319.34-84.24,1327.66-57.055,1327.66-57.055Z" transform="translate(-1005)"/>
          <path id="シェイプ_21" data-name="シェイプ 21" className={style.cls1} d="M1354.68-37.062s-7.49,36.638-24.02,42.984c-25.9,9.942-37.03-2-37.03-2s4.95-13.86,26.02-32.988C1332.2-40.452,1354.68-37.062,1354.68-37.062Z" transform="translate(-1005)"/>
        </svg>
      </div>
    </div>
  )
}


// -------------------------------
// logo設定 /Logo
// -------------------------------

const Logo: NextPage = () => {
  return (
    <h1 title="Kana's Portfolio">
      <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 50 50">
        <a href="/">
          <path id="logo.svg" className={style.logo} d="M494,35V85h7V71l7-7,4,21h32V35H526V54h5V38h7V80H518l-7-25,9-20h-8L501,56V35h-7Zm9,37V85h6l-3-15Zm0-37V48l7-13h-7Zm21,0V56h8V40h4V78H519l-6-23Z" transform="translate(-494 -35)"/>
        </a>
      </svg>
    </h1>
  )
}


// -------------------------------
// nav設定 /Nav
// -------------------------------

const Nav: NextPage = () => {
  const [gnavi, setGnavi] = useState<any[]>([])

  useEffect(() => {
    // グローバルナビの内容
    const navi_name: string[] = ['MySelf', 'Portfolio', 'Contact']
    const li: any[] = []
    
    // liに加工してnaviへ
    navi_name.forEach((val, key) => {
      if (val === 'MySelf'){
        li.push(<li key={key}><Link href="/">{ val }</Link></li>)
      }
      else {
        li.push(<li key={key}><Link href={'/' + val}>{ val }</Link></li>)
      }
    })
    setGnavi(li)
  },[])
  
  return (
    <div>
      <input type="checkbox" id={style.menu} />
      <nav className={style.nav}>
        <ul>
          { gnavi }
        </ul>
      </nav>
    </div>
  )

}


