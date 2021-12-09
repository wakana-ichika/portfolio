import { NextPage } from "next";
import { BaseSyntheticEvent, ReactNode, useEffect, useState } from "react";
import style from 'index/website.module.scss'



// -------------------------------
// ジャンルリスト設定/ List
// -------------------------------

// 表示したいリストの種類・選択した種類
const kind_list: string[] = ['All', '店舗/企業', 'React', 'Django']


const List: NextPage = () => {
    
  // リストと選択ジャンルを保存する場所
  const [list, setList] = useState<ReactNode[]>([])
  const [select, setSelect] = useState<string>('all')
　　
  // リストをセット
  useEffect(() => {
    let box: ReactNode[] = [];
    kind_list.forEach((val, key) => {
      box.push(<li onClick={ groupSelect } key={key}>{val}</li>)
    })
    setList(box)
    
  }, [])

  //　クリック関数
  const groupSelect = (e: BaseSyntheticEvent) => {

    //クリックしたところを特定、ジャンルにselectに保存
    let group_key: string = e.target.outerText

    switch (group_key) {
      case 'All':
        setSelect('all')
        break;

      case '店舗/企業':
        setSelect('shop')
        break;
      
      case 'React':
        setSelect('react')
        break;

      case 'Django':
        setSelect('django')
        break;

      default:
        break;
    }
  }

  return(
    <ul className={ style.list }>
      {list}
    </ul>
  )
}


export default List