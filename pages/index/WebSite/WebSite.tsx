import Section from "../../components/section";
import { NextPage } from "next";
import { useRef, useEffect, useState, ReactNode, SyntheticEvent } from "react";
import Shuffle from "shufflejs";
import I_A_cafe from "./I_A_cafe";
import I_A_chocolate from "./I_A_chocolate"
import style from "index/website.module.scss"




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
    let box: ReactNode[] = [];
    kind_list.map((val, key) => {
        box.push(<li onClick={ clickSelect } data-group={val} key={key}>{val}</li>)
    })
    setList(box)
    
  }, [])
  


  // shuffleに使う枠組みと一番下のエレメントをゲットする設定
  let element = useRef<any>(null)
  let sizer = useRef<any>(null)


  // shuffleのインスタンスを仮設定
  let shuffleInstance: Shuffle;

  // shuffleの設定
  const initShuffle = () => {
    shuffleInstance = new Shuffle(element.current, {
      itemSelector: '.item',
      sizer: sizer.current,
      speed: 300
    })
    Shuffle.ALL_ITEMS = 'All';

    return shuffleInstance
  }

  // useEffectにshuffleをセット
  useEffect(() => {
    initShuffle()
  }, [])

  // 選択ジャンルをセット
  const clickSelect = (e: SyntheticEvent) => {
    
    const value: any = e.currentTarget.textContent
    shuffleInstance.filter(value)
  }


  return (
    <Section title="WebSite" className={ style.website }>
  
      <ul className={ style.list }>
        {list}
      </ul>

      <ul ref={ element } className="item-container">
        <I_A_cafe />
        <I_A_chocolate />
        <li ref={ sizer } className="sizer"></li>
      </ul>
    </Section>
    )
}


export default WebSite