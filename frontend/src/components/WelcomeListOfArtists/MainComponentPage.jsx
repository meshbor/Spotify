import React from "react"
import "./MainComponentPage.css"
import { avatar } from "./AvatarList/AvatarList"
import { useState } from "react"
import {ArtistImage} from './AvatarList/ArtistImage'

export const MainComponentPage = () => {
  const [hoverFlag, setHoverFlag] = useState(true)
  const [counter, setCounter] = useState(0)
  console.log(avatar)
  console.log("counter>>>>", counter)
  return (
    <>
      <div className="full-screen-for-choose-artists">
        <h3 className="full-screen-header onboarding-screen-artists-header ">
          Помогите нам подобрать идеальный плейлист
        </h3>
        <div className="onboarding-screen-artists-sub-title">
          Кто вам нравится больше всего? Выберите не менее трех исполнителей,
          чтобы помочь нам лучше угадать ваше настроение
        </div>
        <div className="onboarding-screen-grid">
          {avatar.map((ava) => (
            <ArtistImage ava={ava}/>
            
          ))}
        </div>
      { console.log('массив объектов after >>>,',avatar)}
        {/* {avatar.forEach(el=> (el.hide ? setCounter(counter+1) : setCounter(counter))) } */}
        {/* {counter >= 3 ? ( */}
          <div className="choosenList">
            <a href="/MainPlayList" className="btn btn-green btn-lg">
              Продолжить
            </a>
          </div>
        {/* ) : (
          <div> </div>
        )} */}
      </div>
    </>
  )
}
