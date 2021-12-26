import { NextPage } from "next"
import Link from "next/link"
import WebImage from "./components/WebImage"
import WebExplain from "./components/WebExplain"
import Button from "../../components/Button"
import style from "index.module.scss"



/* 
WebImage
src => src
alt => alt
width => width={}
height => height={}

Button
name => 表示する文字
href => アドレス
className => ベースはbtn　グラデボタンはbtn-g
*/


// -------------------------------
// 各Webサイト表示設定/ I_A_cafe
// -------------------------------


const IACafe:NextPage = () => {

  return (
    <li data-groups='["All", "Shop/Corp"]' className="item">
      <Link href="/index/WebSite/IACafeDetail">
      <WebImage src="/index/web01.jpg" alt="I.A.cafe's photo" width={455} height={348} />
      </Link>
      <div>
          <div  className={ style['web-title-explain'] }>
            <h3>
              <Link href="/index/WebSite/IACafeDetail">
                <a>
                  I.A.cafe
                </a>
              </Link>
            </h3>
            <p>樹木の多い住宅街にあるカフェ</p>
          </div>
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
        <Button name="Webサイト" className="btn--g" href="http://my.internetacademy.jp/~a32007113/cafe02/index.html" />
      </div>

    </li>
  )
}


export default IACafe
