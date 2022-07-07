import React from "react";
import PostItem from "./components/PostItem";
import "./styles/App.css";

function App() {

  // function status () {
  //     <div >
  //     <PostItem post = {{body: 'Статус адреса' }}/>
  //     <PostItem post = {{body: 'Статус билета' }}/>
  //     </div>
  // }

  

  return (
    <div className="App">
      <PostItem post = {{title: 'Введите данные', body: 'Адрес' }}/>
      <PostItem post = {{body: 'Policy id' }}/>
        <div>
          <button className="bttn">
          Проверить билет
          </button>
        </div>
        <div className="showStatus" id="showResult">
    <div>
        <span>Статус адреса: </span> <span id="targetDay"></span>
    </div>
     <div>
        <span>Статус билета: </span> <span id="targetRoom"></span>
     </div>
</div> 

    </div>
  );
}

export default App