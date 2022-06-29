import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, renderMatches, useNavigate } from 'react-router-dom'
import './QuestionPage.css';
import {useHistory} from 'react-router-dom';

const QuestionPage = () => {
 const qArray =["<센과 치히로의 행방불명><br/><br/>하쿠 : 잊지마, 나는 치히로 편이야 <br/> 나 : 어떻게 내 이름을 아는거야? <br/> 하쿠 : 네가 어렸을 때 부터 알고 있어 <br/>···<br/><br/> 하쿠의 말을 듣고 나의 반응은?",
                "<마녀배달부 키키><br/><br/>키키 : 전에는 아무 생각을 안해도 날았는데<br/>어떻게 해야 날았는지 지금은 전혀 모르겠어요<br/>···<br/><br/> 키키의 말을 들은 나의 반응은?",
                "<하울의 움직이는 성><br/><br/>늙어버린 몸을 이끌고 <br/>힙겹게 하울의 움직이는 성안에 들어간 나,<br/>들어가보니 말하는 불꽃 캘시퍼가 있다<br/>말이 많아 시끄러운 캘시퍼.. <br/><br/> 나의 속마음은?",
                "<이웃집 토토로><br/><br/>언니인 사츠키와 다툰 후 메이가 사라졌다 <br/> 해가 지기 전에 메이를 찾아야 할텐데..<br/><br/>어떻게 찾지?",
                "<벼랑 위의 포뇨><br/><br/>소스케 손가락에 난 상처를 핥게되어<br/>인간의 피를 먹게 된 포뇨는 점점 사람으로 변하게 된다<br/><br/>나의 반응은?",
                "<센과 치히로의 행방불명><br/><br/>아빠가 지름길이라고 예상하고 들어온 도로의 끝은<br/>석상으로 막혀있다!!<br/>엄마 아빠는 석상 뒤의 터널로 성큼성큼 들어가는데<br/><br/>여기서 나는 뭐라고 할까?",
                '<센과 치히로의 행방불명><br/><br/>고약한 냄새가 나는 오물신이 욕탕에 들어왔다<br/>코를 틀어막자 유바바가 "그만둬! 손님께 실례야!" 라며 혼을 낸다<br/><br/>나의 대답은?',
                "<하울의 움직이는 성><br/><br/>어느 날 아침 거울을 보니 내가 갑자기 늙어버렸다<br/>먼저 드는 걱정은?",
                "<바다가 들린다><br/><br/>내일은 동창회!<br/>내일 고향으로 가는 비행기를 타러가야한다<br/><br/>자기 전 내가 하는 일은?",
                "<벼랑 위의 포뇨><br/><br/>포뇨는 사람이 되고싶어 바다에서 탈출했다<br/>소스케의 집에 간 포뇨!<br/>일어났더니 해일이 밀려와서 집주변이 물에 잠겼다<br/><br/>오늘은 무엇을 할까?",
                "<마녀배달부 키키><br/><br/>나도 마녀배달부가 되었다!<br/>빗자루를 타고 택배를 배달해야하는데...<br/><br/>배달지를 내가 선택할 수 있다면?",
                "<이웃집 토토로><br/><br/>시골 마을로 이사오게 된 사츠키와 메이,<br/>이웃집 남자아이 칸타가 기웃거리는데<br/><br/>내가 사츠키라면?"]

  const aArray1=["항상 날 신경써줬구나.. 감동이야",
                 "언제부터?? 왜그러지?? 시도는 해봤어?",
                 "조용히 쉬고 싶다.. 기 빨려",
                 "메이가 갔을 법한 곳부터 내가 직접 찾아본다",
                 "물고기가 사람으로 변하다니 징그러워",
                 "그냥 얼른 돌아서 가요~~",
                 "죄송합니다..(숨을 참는다)",
                 "이렇게 계속 늙은 채로 살게 되면 어떡하지?",
                 "비행기 예약 한번 확인하고 취침",
                 "집에서 뒹굴뒹굴 거린다",
                 "매일 같은 경로로 다녀야 편안하고 안정적이지!",
                 "먼저 말을 걸어본다"]

  const aArray2=["난 널 모르는데? (경계하기 시작한다)",
                 "괜찮아 넌 할 수 있어! 잠깐 쉬었다해봐!",
                 "혼자 있으면 울적할 뻔 했는데 다행이다!",
                 "주민들과 장소를 분담하여 구석구석 찾아본다",
                 "물고기 포뇨든 사람 포뇨든 어떤 포뇨든 다 좋아!",
                 "어디가? 같이가요!!!",
                 "하지만 이건 너무 심하잖아요! (코를 계속 막는다)",
                 "가족들이 보면 놀란텐데 어떡하지?",
                 "친구들 만나면 무슨 얘기 할 지 시뮬레이션 돌리다 잠들기",
                 "포뇨가 크게 만든 장난감 배를 타고 모험을 떠난다",
                 "반복되는 일상은 싫어 이곳 저곳 돌아다녀 볼래!",
                 "먼저 말을 걸어줄 때까지 기다린다"]

  const [question, setQuestion] = useState(0);
  const [answer, setAnswer] = useState(0);
  const [progressValue, setProgressValue] = useState(10);
  const navigate = useNavigate();
  const [E,setE]=useState(0);
  const [I,setI]=useState(0);
  const [S,setS]=useState(0);
  const [N,setN]=useState(0);
  const [T,setT]=useState(0);
  const [F,setF]=useState(0);
  const [P,setP]=useState(0);
  const [J,setJ]=useState(0);
  const[Mbti,setMbti]=useState([]);
  let MBTI = "";
 
  const next = () => {
    setQuestion (question+1);
    setProgressValue (progressValue+10);
    setAnswer(answer+1);
  }

  const calculate1 = (answer) =>{
    if(answer==0) setF(F+1);
    else if(answer==1) setT(T+1);
    else if(answer==2) setI(I+1);
    else if(answer==3) setP(P+1);
    else if(answer==4) setS(S+1);
    else if(answer==5) setJ(J+1);
    else if(answer==6) setF(F+1);
    else if(answer==7) setN(N+1);
    else if(answer==8) setS(S+1);
    else if(answer==9) setI(I+1);
    else if(answer==10) setJ(J+1);
    else if(answer==11) setE(E+1);
  }
  const calculate2 =(answer)=>{
    if(answer==0) setT(T+1);
    else if(answer==1) setF(F+1);
    else if(answer==2) setE(E+1);
    else if(answer==3) setJ(J+1);
    else if(answer==4) setN(N+1);
    else if(answer==5) setP(P+1);
    else if(answer==6) setT(T+1);
    else if(answer==7) setS(S+1);
    else if(answer==8) setN(N+1);
    else if(answer==9) setE(E+1);
    else if(answer==10) setP(P+1);
    else if(answer==11) setI(I+1);
  }
  const result = () =>{
 
    if((E>I)&&(S>N)&&(T>F)&&(P>J)){
      MBTI="ESTP";
    }
    if((E>I)&&(S>N)&&(T>F)&&(P<J)){
      MBTI="ESTJ";
    }
    if((E>I)&&(S>N)&&(T<F)&&(P>J)){
      MBTI="ESFP";
    }
    if((E>I)&&(S>N)&&(T<F)&&(P<J)){
      MBTI="ESFJ";
    }
    if((E>I)&&(S<N)&&(T<F)&&(P>J)){
      MBTI="ENFP";
    }
    if((E>I)&&(S<N)&&(T<F)&&(P<J)){
      MBTI="ENFJ";
    }
    if((E>I)&&(S<N)&&(T>F)&&(P>J)){
      MBTI="ENTP";
    }
    if((E>I)&&(S<N)&&(T>F)&&(P<J)){
      MBTI="ENTJ";
    }

    if((E<I)&&(S>N)&&(T>F)&&(P>J)){
      MBTI="ISTP";
    }
    if((E<I)&&(S>N)&&(T>F)&&(P<J)){
      MBTI="ISTJ";
    }
    if((E<I)&&(S>N)&&(T<F)&&(P>J)){
      MBTI="ISFP";
    }
    if((E<I)&&(S>N)&&(T<F)&&(P<J)){
      MBTI="ISFJ";
    }
    if((E<I)&&(S<N)&&(T<F)&&(P>J)){
      MBTI="INFP";
    }
    if((E<I)&&(S<N)&&(T<F)&&(P<J)){
      MBTI="INFJ";
    }
    if((E<I)&&(S<N)&&(T>F)&&(P>J)){
      MBTI="INTP";
    }
    if((E<I)&&(S<N)&&(T>F)&&(P<J)){
      MBTI="INTJ";
    }
    console.log(MBTI);
    resultClick();
  }
  const resultClick = (e) => {
    navigate('/result', {state: { mbti: MBTI}})

  }
 
  return (
  <div className="QuestionPage" >
    <div className = "progress_container">
    <progress value={progressValue} max="120"></progress>
    </div>
    <p className="question" dangerouslySetInnerHTML={{__html: qArray[question]}}></p>
  <button className="answer" onClick={ () => {
    calculate1(answer);
    next();
    if(progressValue>110){
      result();
      
    }
  } } dangerouslySetInnerHTML={{__html: aArray1[answer]}}></button>
  <button className="answer" onClick={ () => {
    calculate2(answer);
    next();
    if(progressValue>110){
      result();
    }
  } }  dangerouslySetInnerHTML={{__html: aArray2[answer]}}></button>
  <p className="mbti" dangerouslySetInnerHTML={{__html: "MBTI:"+MBTI}}></p>
  <p dangerouslySetInnerHTML={{__html: "E개수:"+E}}></p>
  <p dangerouslySetInnerHTML={{__html: "I개수:"+I}}></p>
  <p dangerouslySetInnerHTML={{__html: "S개수:"+S}}></p>
  <p dangerouslySetInnerHTML={{__html: "N개수:"+N}}></p>
  <p dangerouslySetInnerHTML={{__html: "F개수:"+F}}></p>
  <p dangerouslySetInnerHTML={{__html: "T개수:"+T}}></p>
  <p dangerouslySetInnerHTML={{__html: "P개수:"+P}}></p>
  <p dangerouslySetInnerHTML={{__html: "J개수:"+J}}></p>

</div>
);
}

export default QuestionPage;