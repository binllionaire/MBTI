import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import './StartPage.css';

const StartPage = () => {

  const navigate = useNavigate();
  const startClick = (e) => {
    navigate("/q1");
  }

  return (
    <div className="startPage" >

    <div className="StartPage_Title">
    <p className="subTitle">내가 지브리 캐릭터라면 ?</p>
    <p className="title">지브리 캐릭터 MBTI 테스트</p>
    </div>
   
    <button className="startBtn" onClick={startClick} >시작하기</button>
  </div>
  );
}

export default StartPage;