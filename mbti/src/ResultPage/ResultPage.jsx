import React, { useState } from 'react';
import './ResultPage.css';

import { useLocation } from 'react-router-dom';


const ResultPage = () => {
  let location = useLocation();
    console.log("",location);
    
    const MBTI = useLocation().state.mbti;

    const showResult = () => {
    if(MBTI=='ESTP'){
      return(
      <>
      <p className="mbti">{MBTI}</p>
      <p className="name">도라</p>
      <p className="movie">천공의 성 라퓨타</p>
      
      <img className="img" src="img/ESTP.png"></img>
      
      
      </>
      )
    }
    if(MBTI=='ESTJ'){
      return(
      <>
      <p className="mbti">{MBTI}</p>
      <p className="name">에보시</p>
      <p className="movie">모노노케 히메</p>
      <img className="img" src="img/ESTJ.png"></img>
      </>
      )
    }
    if(MBTI=='ESFP'){
      return(
      <>
      <p className="mbti">{MBTI}</p>
      <p className="name">포뇨</p>
      <p className="movie">벼랑 위의 포뇨</p>
      <img className="img" src="img/ESFP.png"></img>
      </>
      )
    }
    if(MBTI=='ESFJ'){
      return(
      <>
      <p className="mbti">{MBTI}</p>
      <p className="name">메이</p>
       <p className="movie">이웃집 토토로</p>
       <img className="img" src="img/ESFJ.png"></img>
      
      </>
      )
    }
    if(MBTI=='ENFP'){
      return(
      <>
      <p className="mbti">{MBTI}</p>
      <p className="name">치히로</p>
      <p className="movie">센과 치히로의 행방불명</p>
      <img className="img" src="img/ENFP.png"></img>
      
      </>
      )
    }
    if(MBTI=='ENFJ'){
      return(
      <>
      <p className="mbti">{MBTI}</p>
      <p className="name">키키</p>
      <p className="movie">마녀배달부 키키</p>
      <img className="img" src="img/ENFJ.png"></img>
      
      </>
      )
    }
    if(MBTI=='ENTP'){
      return(
      <>
      <p className="mbti">{MBTI}</p>
      <p className="name">지지</p>
      <p className="movie">마녀배달부 키키</p>
      <img className="img" src="img/ENFP.png"></img>
      
      </>
      )
    }
    if(MBTI=='ENTJ'){
      return(
      <>
      <p className="mbti">{MBTI}</p>
      <p className="name">사츠키</p>
      <p className="movie">이웃집 토토로</p>
      <img className="img" src="img/ENTJ.png"></img>
      
      </>
      )
    }
    if(MBTI=='ISTP'){
      return(
      <>
      <p className="mbti">{MBTI}</p>
      <p className="name">산</p>
      <p className="movie">모노노케 히메</p>
      <img className="img" src="img/ISTP.png"></img>
      
      </>
      )
    }
    if(MBTI=='ISTJ'){
      return(
      <>
      <p className="mbti">{MBTI}</p>
      <p className="name">세이타</p>
      <p className="movie">반딧불이의 묘</p>
      <img className="img" src="img/ISTJ.png"></img>
      
      </>
      )
    }
    if(MBTI=='ISFP'){
      return(
      <>
      <p className="mbti">{MBTI}</p>
      <p className="name">하울</p>
      <p className="movie">하울의 움직이는 성</p>
      <img className="img" src="img/ISFP.png"></img>
      
      </>
      )
    }
    if(MBTI=='ISFJ'){
      return(
      <>
      <p className="mbti">{MBTI}</p>
      <p className="name">소피</p>
      <p className="movie">하울의 움직이는 성</p>
      <img className="img" src="img/ISFJ.png"></img>
     
      </>
      )
    }
    if(MBTI=='INFP'){
      return(
      <>
      <p className="mbti">{MBTI}</p>
      <p className="name">아시타카</p>
      <p className="movie">모노노케 히메</p>
      <img className="img" src="img/INFP.png"></img>
      
      </>
      )
    }
    if(MBTI=='INFJ'){
      return(
      <>
      <p className="mbti">{MBTI}</p>
      <p className="name">하쿠</p>
      <p className="movie">센과 치히로의 행방불명</p>
      <img className="img" src="img/INFJ.png"></img>
      
      </>
      )
    }
    if(MBTI=='INTP'){
      return(
      <>
      <p className="mbti">{MBTI}</p>
      <p className="name">톰보</p>
      <p className="movie">마녀배달부 키키</p>
      <img className="img" src="img/INTP.png"></img>
      
      </>
      )
    }
    if(MBTI=='INTJ'){
      return(
      <>
      <p className="mbti">{MBTI}</p>
      <p className="name">쉬타</p>
      <p className="movie">천공의 성 라퓨타</p>
      <img className="img" src="img/INTJ.png"></img>
      
      </>
      )
    }

  }
return(
<div className="resultPage">
  {showResult()}
</div>
)
}
export default ResultPage;