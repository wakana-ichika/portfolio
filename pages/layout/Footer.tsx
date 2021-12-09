// -------------------------------
// Footerコンポーネント設定
// -------------------------------
import { NextPage } from "next";
import style from 'layout/footer.module.scss';


const Footer: NextPage = () => {
  return (
    <footer className={ style.footer }>
      <p>This website uses HTML/CSS, Next.js, TypeScript and Sass.</p>
      <p>&copy;Kana / since 2021</p>  
    </footer>
  )
}

export default Footer