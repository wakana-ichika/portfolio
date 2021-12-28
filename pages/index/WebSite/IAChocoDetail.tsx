import { NextPage } from "next";
import Layout from "../../layout/Layout";
import PageTitle from "../../../components/pagetitle";
import WebImage from "./components/WebImage";
import WebTitleExplain from "./components/WebTitleExplain";
import WebExplain from "./components/WebExplain";
import style from "index.module.scss"




const IAChocoDetail: NextPage = () => {
  return (
    <Layout title="Kana's Portfolio| I.A.chocolate" className={ style.detail }>
      <PageTitle title="I.A.chocolate" />
      <div>
        <WebImage src="/index/kana-chocolate.png" alt="Web page image" width={ 435 } height={ 1067 } />
        <div>
          <WebTitleExplain title="ターゲット">
            <p>
              仕事帰りやバレンタインなどのイベントでちょっとした贅沢、自分へのご褒美に購入する20代〜30代女性
            </p>
          </WebTitleExplain>
          <WebExplain title="工夫">
            <ul className={ `${style.kufu} ${style['kufu--iaChoco']}` }>
              <li><span>明朝体</span><p>曲線が特徴的で高級感を演出</p></li>
              <li><span>検索ボタン</span><p>特定商品を検索したい人の為上に設置</p></li>
              <li><span>並び順</span><p>購買意欲が刺激されるであろうジャンルの順に並べる</p></li>
              <li><span>購入ボタン</span><p>商品情報を見てから購入できるようあえて入れない</p></li>
            </ul>
          </WebExplain>
          <WebExplain title="反省点">
            <ul className={ style.hansei }>
              <li>パティシエのイベント活動など店のこだわりや背景があるとリアリティがあるかも？</li>
              <li>お店の紹介があっても良いかも知れない</li>
              <li>商品説明の余白に少し違和感を感じる</li>
              <li>以上を踏まえてもう少し、差別化について考えてみる</li>
            </ul>
          </WebExplain>
        </div>
      </div>
    </Layout>
  )
}

export default IAChocoDetail