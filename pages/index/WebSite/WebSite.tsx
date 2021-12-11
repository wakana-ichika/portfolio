import Section from "../../components/section";
import { NextPage } from "next";
import I_A_cafe from "./I_A_cafe";
import I_A_chocolate from "./I_A_chocolate"
import CustomTextInput from "./components/shuffle";
import style from "index/website.module.scss"
import { useRef, useEffect, useState, ReactNode, SyntheticEvent } from "react";
import Shuffle from "shufflejs";



// -------------------------------
// リスト　＋　全体設定
// -------------------------------

// 表示したいリストの種類・選択した種類
const kind_list: string[] = ['All', 'Shop/Corp', 'React', 'Django']

const WebSite: NextPage = () => {
　
  // リストと選択ジャンルを保存する場所
  const [list, setList] = useState<ReactNode[]>([])
  const [select, setSelect] = useState<string| null>('All')
  
  // リストをセット
  useEffect(() => {
    let box: ReactNode[] = [];
    kind_list.map((val, key) => {
        box.push(<li onClick={ clickSelect } data-group={val} key={key}>{val}</li>)
    })
    setList(box)
    
  }, [])
　
  // 選択ジャンルをセット
  const clickSelect = (e: SyntheticEvent) => {
    
    setSelect(e.currentTarget.textContent);
  }



  // shuffleに使う枠組みと一番下の設定
  let element = useRef(null)
  let sizer = useRef(null)

  // shuffleの設定
  useEffect(() => {
    let shuffleInstance = new Shuffle(element.current, {
      itemSelector: '.item',
      sizer: sizer.current,
      speed: 300
    })
    Shuffle.ALL_ITEMS = 'All';
    
    switch (select) {
      case 'All':
        shuffleInstance.filter(Shuffle.ALL_ITEMS)
        break;
      
      case 'Shop/Corp':
        shuffleInstance.filter('Shop/Corp')
        break;

      case 'React':
        shuffleInstance.filter('React')
        break;

      case 'Django':
        shuffleInstance.filter('Django')
        break;
    
      default:
        shuffleInstance.filter(Shuffle.ALL_ITEMS)
        break;
    }
    //shuffleInstance.filter(Shuffle.ALL_ITEMS)
  }, [select])

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