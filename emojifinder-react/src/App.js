import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";

var userName = "Raaji"
var outputDiv = document.querySelector("#output");

var emojiDictionary = {
    "😀" : 'Smiling',
    "😍" : 'Love',
    "😭" : 'Crying',
    "😔" : 'Sad',
    "😡" : 'Angry',
    "🥳" : 'Party Mood',
    "🤒" : "Not Feeling well"
};
 
var emojiList = Object.keys(emojiDictionary);

function App() {

  // const [userInput, setuserInput] = useState('');
  const [meaning, setMeaning] = useState('');

  // function clickHandler() {
  //     var newLikeCounter = likeCounter + 1;
  //     setLikeCounter(newLikeCounter);
  // }

  function onChangeHandler (event) {
   
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if(meaning === undefined) {
      meaning = 'Dont have the meaning to this in our database';
    }


    setMeaning(meaning)

   
  }

  function emojiClickHandler(emoji) {

    var meaning = emojiDictionary[emoji];

    setMeaning(meaning);
  }

  return (
    <div className="App">
      
      <h2>Input the emoji below  👇 </h2>

      <input placeholder={"Input your favorite emoji and find the description of it"} onChange = {onChangeHandler} ></input> 
      <h1> {meaning}</h1>

      {/* <button onClick = {clickHandler}>Click Me</button> {likeCounter} */}


    <div id ={"output"}>
    <h2>Emojis List We Have</h2>
      {emojiList.map(emoji => {
        return (
          <span 
            onClick = {() => emojiClickHandler(emoji)}
            style = {{fontSize: "2rem", padding: "0.5rem 0.5rem", cursor: 'pointer'}}  key = {emoji}>
            {emoji} {" "}
          </span>
        )
      })}
    </div>
     
      
    </div>
  );
}

export default App;
