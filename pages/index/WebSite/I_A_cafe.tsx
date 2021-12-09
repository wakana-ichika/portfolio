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
// 各Webサイト表示設定/ I_A_cafe
// -------------------------------


const I_A_cafe:NextPage = () => {

  return (
    <li>
      
      <WebImage src="/index/web01.jpg" alt="I.A.cafe's photo" width={455} height={348} />
      <div>
        <WebTitleExplain title="I.A.cafe">
          <p>樹木の多い住宅街にあるカフェ</p>
        </WebTitleExplain>
        <WebExplain title="配色イメージ">
          <p>
            コーヒーを連想させる茶色。<br />
            dlトーンを一番濃く配色することで大きなコントラストを避けました。<br />
            店内に入った時の暖かさやホッと力の抜ける空間をイメージしています。
          </p>
        </WebExplain>
        <WebExplain title="ツール・使用言語">
          <p>
            Illustrator・PhotoShop・DreamWeaver・HTML/CSS・JavaScript・jQuery
          </p>
        </WebExplain>
        <Button name="Webサイト" className="btn btn-g" href="http://my.internetacademy.jp/~a32007113/cafe02/index.html" />
      </div>

    </li>
  )
}


export default I_A_cafe
