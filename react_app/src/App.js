import React, {useState} from "react";
import PostItem from "./components/PostItem";
import "./styles/App.css";

function App() {

  return (
    <div className="App">
      <PostItem post = {{title: 'Введите данные', body: 'Адрес' }}/>
      <PostItem post = {{body: 'Policy id' }}/>
      <PostItem post = {{body: 'Название' }}/>
        <div className="bttn">
          <button>Проверить билет</button>
        </div>
    </div>
  );
}

export default App;
