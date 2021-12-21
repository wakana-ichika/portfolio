import { NextPage } from "next";
import { useEffect } from "react";
import Section from "../components/section";
import style from 'myself/skill.module.scss'



/* 
Section
title => h2
className => className
*/

const Skill: NextPage = () => {

  useEffect(() => {
      const target = document.querySelectorAll(`.${style.graph}`)
      
      let options = {
          root: null,
          rootMargin: '-10% 0',
          threshold: 0
      }

      const classToggle = (entries: IntersectionObserverEntry[]) => {
        entries.forEach(entry => {
          if(entry.isIntersecting) {
            entry.target.classList.add(`${style['graph--active']}`)
          }
          else {
            entry.target.classList.remove(`${style['graph--active']}`)
          }
        })
      }

      const observer = new IntersectionObserver(classToggle, options)
      
      target.forEach(trg => {
        observer.observe(trg)
      })


  }, [])

  return (
    <Section title="Skill" className={ style.skill } >
      <table>
        <tbody>
          <tr>
            <th><p>Ps</p><p>Ai</p></th>
            <td><div className={ style.graph }></div></td>
          </tr>
          <tr>
            <th><p>Html</p><p>CSS</p><p>Sass</p></th>
            <td><div className={ style.graph }></div></td>
          </tr>
          <tr>
            <th><p>JS</p><p>Py</p></th>
            <td><div className={ style.graph }></div></td>
          </tr>
        </tbody>
      </table>
      
      <ul>
        <li>gifアニメーション作成</li>
        <li>Reactでportfolio作成</li>
        <li>Djangoでカート作成</li>
      </ul>
    </Section>
  )
} 

export default Skill