import { NextPage } from "next";
import Layout from "../../layout/Layout";
import PageTitle from "../../component/pagetitle";
import WebImage from "./components/WebImage";
import WebTitleExplain from "./components/WebTitleExplain";
import WebExplain from "./components/WebExplain";
import style from "index.module.scss"




const IACafeDetail: NextPage = () => {
  return (
    <Layout title="Kana's Portfolio| I.A.cafe" className={ style.detail }>
      <PageTitle title="I.A.cafe" />
      <div>
        <WebImage src="/index/I.A.cafe.jpg" alt="Web page image" width={ 435 } height={ 1374 } />
        <div>
          <WebTitleExplain title="ターゲット">
            <p>
              家事やパートの合間、夫や子供がいない間の息抜き・ママ友との交流が目的の30代〜40代女性
            </p>
          </WebTitleExplain>
          <WebExplain title="工夫">
            <ul className={ `${style.kufu} ${style['kufu--iaCafe']}` }>
              <li><span>ゴシック体</span><p>身近さと気軽さを意識</p></li>
              <li><span>予約ボタン</span><p>コントラストを一番強く</p></li>
              <li><span>カレンダー</span><p>店の予定が分かるよう</p></li>
              <li><span>1stビュー</span><p>店の特異性と温度感を意識</p></li>
            </ul>
          </WebExplain>
          <WebExplain title="反省点">
            <ul className={ style.hansei }>
              <li>カレンダーのCSSの上書き</li>
              <li>全体的に四角く整頓された感じがあり単調になる可能性がある</li>
              <li>店内の雰囲気が分かるようなギャラリーがあると良い</li>
              <li>以上を踏まえてSNSなどでデザインの引き出しを増やすよう意識する</li>
            </ul>
          </WebExplain>
        </div>
      </div>
    </Layout>
  )
}

export default IACafeDetail