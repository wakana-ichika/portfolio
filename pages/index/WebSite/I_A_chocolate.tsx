import { NextPage } from "next"
import WebImage from "./components/WebImage"
import WebTitleExplain from "./components/WebTitleExplain"
import WebExplain from "./components/WebExplain"
import Button from "../../components/Button"



/* 
WebImage
src => src
alt => alt
width => width={}
height => height={}

WebTitleExplain, WebExplain
title =>  h3, h4
children => それぞれの説明内容

Button
name => 表示する文字
href => アドレス
className => ベースはbtn　グラデボタンはbtn-g
*/


// -------------------------------
// 各Webサイト表示設定/ I_A_chocolate
// -------------------------------


const I_A_chocolate:NextPage = () => {

  return (
    <li data-groups='["All", "Django"]' className="item">
      
      <WebImage src="/index/web02.jpg" alt="I.A.chocolate's photo" width={455} height={287} />
      
      <div>
        <WebTitleExplain title="I.A.chocolate">
          <p>オフィス街にあるチョコレート専門店</p>
        </WebTitleExplain>
        <WebExplain title="配色イメージ">
          <p>
            食欲を促進する赤橙系のdpトーンの茶色・路考茶・黒の配色で高級感のある扉や家具を通りぬけ、
            飾られたチョコレートをイメージしています。
          </p>
        </WebExplain>
        <WebExplain title="ツール・使用言語・ライブラリ・フレームワーク">
          <p>
            PhotoShop・VisualStudioCode・HTML/CSS・JavaScript・jQuery・Python・Django
          </p>
        </WebExplain>
        <Button name="Webサイト" className="btn--g" href="https://kana-chocolate.herokuapp.com" />
      </div>
    </li>
  )
}


export default I_A_chocolate
