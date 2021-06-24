import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
/* eslint-disable */
function App() {

  let [글제목,글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','연남 고기 맛집',]);
  let [따봉, 따봉변경] = useState(0);

  let[modal, modal변경] = useState(false);

  let posts = '광명 고기 맛집';
/*
  function 제목바꾸기(){
    var newArray = [...글제목];
    newArray[0] = '여자 코트 추천';
    //newArray.sort();
    글제목변경( newArray );
  }
  <button onClick={ 제목바꾸기 }>하이</button>
*/


  return (
    <div className="App">
      <div className="nav_bar">
        <div>개발 blog</div>
      </div>

  
      <div className="list">
        <h3> { 글제목[0] } <span onClick={() => { 따봉변경(따봉 + 1) }}>👍</span> {따봉} </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3> { 글제목[1] } </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3> { 글제목[2] } </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>

      <button onClick={() => {  modal변경(!modal) }}>버튼</button>
      {
      
      modal === true
      ? <Modal />
      : null

      }
    
    </div>
  );
}

function Modal(){
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;