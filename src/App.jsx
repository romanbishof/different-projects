import "./App.css";

function App() {

const changeToBlue = () => {
  let h1 = document.getElementById('App__h1')
  h1.style.color = 'blue'
}

const changeToBlack = () => {
  let h1 = document.getElementById('App__h1')
  h1.style.color = 'black'
}

const addP_Element = () => {
  let body = document.getElementById('App_text')
  let pElemnt = document.createElement('p')
  pElemnt.style.fontSize = '30px'
  pElemnt.innerHTML = "Roman Bishof"
  
  body.appendChild(pElemnt)
}

const changeColorAndFont = () => {
  let fontType = [ "Arial", "Verdana", "Helvetica", "Times New Roman","sans-serif", "Brush Script MT"];
  let num
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  num = Math.floor(Math.random()*6);
  let element = document.querySelectorAll("p");
  
  element.forEach( elm => {
    elm.style.color= '#' + randomColor
    elm.style.fontFamily = fontType[num]
  })
}
  
  return <div className="App">
    <h1 id="App__h1">Kaltura section 3</h1>

    <div className="App_btn">
      <button onClick={changeToBlue}>Change h1 color to blue</button>
      <button onClick={changeToBlack}>Change h1 color to black</button>
      <button onClick={addP_Element}>add p element to HTML</button>
      <button onClick={changeColorAndFont}>change color and font of p element random :)</button>
    </div>

    <div id="App_text" className="App_text">
      <span>This is a simple sentance</span>
    </div>
    
  </div>;
}

export default App;
