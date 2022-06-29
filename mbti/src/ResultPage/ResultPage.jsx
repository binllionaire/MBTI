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
      <div className='intro'>
      <p className="type">
        외로움을 많이 타요<br/>
        대충 살고 눈치도 안보는 편!<br/>
        공감 능력이 조금 부족하고 솔직해요 <br/>
        나설 생각은 없었지만 정신차려 보면 내가 조장 <br/>
        표현을 아끼지 않아요<br/>
      </p> 
      </div>
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
      <div className='intro'>
      <p className="type">
        현실적이고 직설적이에요<br/>
        확실하게 딱딱 떨어지는게 좋아요<br/>
        사람 많은 것을 은근 싫어해요 <br/>
        지적 당하는 걸 싫어해요<br/>
        공감능력이 부족해요<br/>
      </p> 
      </div>
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
      <div className='intro'>
      <p className="type">
        성격이 급해요<br/>
        하지만 귀찮은 일은 미루고 미뤄요<br/>
        고집이 엄청 세요<br/>
        사람이 너무 좋고 정적을 못 참아요<br/>
        자존감이 높고 모든 것이 내 위주에요<br/>
      </p> 
      </div>
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
       <div className='intro'>
      <p className="type">
        새로운 사람과의 술자리를 좋아해요<br/>
        남 눈치를 많이 봐요<br/>
        인간관계가 틀어지면 스트레스를 많이 받아요 <br/>
        배려심이 강해요<br/>
        어색한 것을 못참아서 먼저 말을 걸어요<br/>
      </p> 
      </div>
      
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
      <div className='intro'>
      <p className="type">
        감정기복이 심해요<br/>
        호불호가 극명해요<br/>
        산만하다는 말을 종종 들어요 <br/>
        새로운 친구 사귀는 걸 좋아해요<br/>
        남을 챙겨주는 것에서 행복을 느껴요<br/>
      </p> 
      </div>
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
      <div className='intro'>
      <p className="type">
        단순하고 멘탈이 강해요<br/>
        사람들에게 잘 맞춰주는 성격<br/>
        센스있고 눈치가 빨라요 <br/>
        계획이 조금이라도 달라지면 화가나요<br/>
        말이 많아요<br/>
      </p> 
      </div>
      </>
      )
    }
    if(MBTI=='ENTP'){
      return(
      <>
      <p className="mbti">{MBTI}</p>
      <p className="name">지지</p>
      <p className="movie">마녀배달부 키키</p>
      <img className="img" src="img/ENTP.png"></img>
      <div className='intro'>
      <p className="type">
        변덕이 심해요<br/>
        독립심이 강하고 혼자서 잘 돌아다녀요<br/>
        끈기부족 의지부족 <br/>
        다른 사람이 나를 어떻게 생각하는 지 신경안써요<br/>
        나한테 잘해주는 사람에게 두배로 잘해줘요<br/>
      </p> 
      </div>
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
      <div className='intro'>
      <p className="type">
        열등감을 잘 안느껴요<br/>
        약간의 관종끼가 있어요<br/>
        피해주는 거 피해 받는 것을 싫어해요<br/>
        남이 이래라 저래라 하는 거 싫어해요<br/>
        공감보다는 해결책을 찾아주는 스타일<br/>
      </p> 
      </div>
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
      <div className='intro'>
      <p className="type">
        만사가 귀찮아요<br/>
        마이웨이!<br/>
        남한테 관심 없고 내 얘기도 잘 안해요<br/>
        노력절약형, 효율적이에요<br/>
        간섭 받는 거 싫어해요<br/>
      </p> 
      </div>
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
      <div className='intro'>
      <p className="type">
        원리원칙적, 계획적이에요<br/>
        약속시간을 꼭 지키려고 노력해요<br/>
        사람 많은 곳에 가면 기 빨려요<br/>
        딱딱하단 소리를 자주 들어요<br/>
        내 얘기를 잘 안하고 들어주는 것도 힘들어요<br/>
      </p> 
      </div>
      
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
      <div className='intro'>
      <p className="type">
        귀찮고 무기력하지만 한번 할 때 제대로 해요<br/>
        완전 집순이<br/>
        배려형 개인주의에요<br/>
        갈등, 불화를 싫어해요<br/>
        남한테 속마음 얘기를 잘 안해요<br/>
      </p> 
      </div>
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
      <div className='intro'>
      <p className="type">
        게으른 완벽주의자!<br/>
        외로움은 많이 타지만 사람 많은 건 싫어요<br/>
        하자고 하면 다 해주는 성격<br/>
        남이 볼 땐 노잼인생이지만 스스로는 매우 만족해요<br/>
        겉으론 무덤덤하지만 속으론 온갖 생각을 다해요<br/>
      </p> 
      </div>
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
      <div className='intro'>
      <p className="type">
        너무 게을러서 매번 벼락치기를 해요<br/>
        관심 받고 싶지만 관심받으면 어색해요<br/>
        남이 나를 어떻게 생각하는지 고민을 많이 해요<br/>
        멀티가 잘 안돼요<br/>
        남한테 의지하는 것에 서툴러요<br/>
      </p> 
      </div>
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
      <div className='intro'>
      <p className="type">
        낯가림이 심한데 눈치는 빨라요<br/>
        할건 미리미리 해치우는 편!<br/>
        혼자 생각을 정리할 시간이 필요해요<br/>
        마음 맞는 친구와 단 둘이 노는게 좋아요<br/>
        친해지고 싶은 사람이 있어도 먼저 다가와주길 바래요<br/>
      </p> 
      </div>
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
      <div className='intro'>
      <p className="type">
        자발적 아웃사이더에요<br/>
        진지충이라는 소리를 자주 들어요<br/>
        감수성이 풍부해요<br/>
        인간관계에 계산적이에요<br/>
        상처를 잘 안받아요<br/>
      </p> 
      </div>
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
      <div className='intro'>
      <p className="type">
        감정에 휘둘리는 걸 싫어해요<br/>
        굉장한 개인주의자에요<br/>
        사람 얼굴, 이름을 잘 기억 못해요<br/>
        자신이 특이하다고 생각하지만 남이 그렇게 말하면 싫어요<br/>
        좋아하는 것에 집착이 심해요<br/>
      </p> 
      </div>
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