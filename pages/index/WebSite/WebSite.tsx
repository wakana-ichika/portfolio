import Section from "../../components/section";
import { NextPage } from "next";
import { useRef, useEffect, useState, ReactNode, SyntheticEvent } from "react";
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
  
  
  // shuffleに使う枠組みと一番下のエレメントをゲットする設定
  let element = useRef<any>(null)
  let sizer = useRef<any>(null)


  // shuffleのインスタンスを仮設定
  let shuffleInstance: Shuffle;

  // shuffleの設定
  const initShuffle = () => {
    Shuffle.ALL_ITEMS = 'All';
    shuffleInstance = new Shuffle(element.current, {
      itemSelector: '.item',
      sizer: sizer.current,
      group: 'All',
      speed: 300
    })
    

    return shuffleInstance
  }


  // 選択ジャンルをセット
  const clickSelect = (e: SyntheticEvent) => {
    
    const value: any = e.currentTarget.textContent
    shuffleInstance.filter(value)
  }


  // リストをセット
  useEffect(() => {
    let box: ReactNode[] = [];
    kind_list.map((val, key) => {
      box.push(<li onClick={ clickSelect } data-group={val} key={key}>{val}</li>)
    })
    setList(box)

    // shuffleをセット
    initShuffle()
    
  }, [])

  return (
    <Section title="WebSite" className={ style.website }>
  
      <ul className={ style.list }>
        {list}
      </ul>

      <ul ref={ element } className="item-container">
        <IACafe />
        <IAChocolate />
        <li ref={ sizer } className="sizer"></li>
      </ul>
    </Section>
    )
}


export default WebSite