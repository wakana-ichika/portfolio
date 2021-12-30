import Section from "../../component/section";
import { NextPage } from "next";
import { useEffect, useState, ReactNode, SyntheticEvent } from "react";
import Shuffle from "shufflejs";
import IACafe from "./IACafe";
import IAChocolate from "./IAChocolate"
import style from "index.module.scss"




// -------------------------------
// リスト　＋　全体設定
// -------------------------------

// 表示したいリストの種類・選択した種類
const kind_list: string[] = ['All', 'Shop/Corp', 'React', 'Django']

const WebSite: NextPage = () => {
  // リストと選択ジャンルを保存する場所
  const [list, setList] = useState<ReactNode[]>([])
  
  // リストをセット
  useEffect(() => {

    let element: any = document.querySelector('.item-container')
    let sizer: any = document.querySelector('.sizer')
    let ShuffleInstance = new Shuffle(element, {
      itemSelector: '.item',
      sizer: sizer,
      group: 'All',
      speed: 300
    })
    Shuffle.ALL_ITEMS = 'All'

    const clickSelect = (e: SyntheticEvent) => {
      const value: any = e.currentTarget.textContent
        ShuffleInstance.filter(value)
    }

    let box: ReactNode[] = [];
    kind_list.map((val, key) => {
      box.push(<li onClick={ clickSelect } data-group={val} key={key}>{val}</li>)
    })
    setList(box)

  }, [])


  return (
    <Section title="WebSite" className={ style.website }>
  
      <ul className={ style.list }>
        {list}
      </ul>

      <ul className="item-container">
        <IACafe />
        <IAChocolate />
        <li className="sizer"></li>
      </ul>
    </Section>
    )
}


export default WebSite