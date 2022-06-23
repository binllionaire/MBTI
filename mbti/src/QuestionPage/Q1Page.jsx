import React, { useState } from 'react';
import { Link, renderMatches, useNavigate } from 'react-router-dom'
import './QuestionPage.css';

const Q1Page = () => {

 const qArray =["<센과 치히로의 행방불명><br/><br/>하쿠 : 잊지마, 나는 치히로 편이야 <br/> 나 : 어떻게 내 이름을 아는거야? <br/> 하쿠 : 네가 어렸을 때 부터 알고 있어 <br/>···<br/><br/> 하쿠의 말을 듣고 나의 반응은 ?",
                "<마녀배달부 키키><br/><br/>키키 : 전에는 아무 생각을 안해도 날았는데<br/>어떻게 해야 날았는지 지금은 전혀 모르겠어요<br/>···<br/><br/> 나는 방법을 잊어 슬퍼하는 키키, 어떻게 위로해줄까?",
                "<하울의 움직이는 성><br/><br/>늙어버린 몸을 이끌고 <br/>힙겹게 하울의 움직이는 성안에 들어간 나,<br/>들어가보니 말하는 불꽃 캘시퍼가 있다<br/>말이 많아 시끄러운 캘시퍼.. <br/><br/> 나의 속마음은?",
                "<이웃집 토토로><br/><br/>언니인 사츠키와 다툰 후 메이가 사라졌다 <br/> 해가 지기 전에 메이를 찾아야 할텐데..<br/><br/>어떻게 찾지?"
              
              ]

  const aArray1=["항상 날 신경써줬구나.. 감동이야",
                 "산책을 하거나 낮잠을 자거나 아무것도 안하다보면 <br/> 넌 어느 순간 다시 날 수 있을거야!",
                 "조용히 쉬고 싶다.. 기 빨려",
                 "메이가 갔을 법한 곳부터 찾아본다"
  ]
  const aArray2=["난 널 모르는데? (경계하기 시작한다)",
                 "아니야 넌 할 수 있어! 계속 노력해보자 내가 도와줄게",
                 "혼자 있으면 울적할 뻔 했는데 다행이다!",
                 "주민들에게 도움을 요청하여 구석구석 찾아본다"
]

  const [question, setQuestion] = useState(0);
  const [answer, setAnswer] = useState(0);
  const [progressValue, setProgressValue] = useState(10);


  const navigate = useNavigate();

  const next = () => {
    setQuestion (question+1);
    setProgressValue (progressValue+10);
    setAnswer(answer+1);
  }

  /*
   return (
    <div className="Q1Page" >
      <div className = "progress_container">
    <progress value="10" max="100">10%</progress>
    </div>
    <p className="question">하쿠 : 잊지마, 나는 치히로 편이야 <br/>
                            나 : 어떻게 내 이름을 아는거야? <br/> 
                            하쿠 : 네가 어렸을 때 부터 알고 있어 <br/>
                            ···<br/>
                            하쿠의 말을 들었을 때 나의 반응은 ?
                            </p>
    <div >
    <button className="answer" onClick={next} >항상 날 신경써줬구나.. 감동이야</button>
    <button className="answer" onClick={next} >난 널 모르는데? (경계하기 시작한다)</button>
    
    </div>
   
    
  </div>
  );
*/

return (
  <div className="Q1Page" >
    <div className = "progress_container">
    <progress value={progressValue} max="100">10%</progress>
    </div>
    <p className="question" dangerouslySetInnerHTML={{__html: qArray[question]}}></p>
  <button className="answer" onClick={next} dangerouslySetInnerHTML={{__html: aArray1[answer]}}></button>
  <button className="answer" onClick={next} dangerouslySetInnerHTML={{__html: aArray2[answer]}}></button>
</div>
);
}

export default Q1Page;