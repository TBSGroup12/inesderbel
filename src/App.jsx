import * as react from "react";
/* const title= "react";
function App() {
  return (
    <div>
      <><><h1> hello {title} </h1>
      <label htmlfor="search">search: </label>
      <input id="search" type="text" /> 
    </div>
  );
}
export default App;</></> */
/* const welcome ={
  greeting: "hey",
  title: "react" ,
};
function App() {
  return(
    <div>
      <h1>
        {welcome.greeting} {welcome.title}
      </h1>
      <label htmlfor="search">search: </label>
      <input id="search" type="text" />
    </div>
  );
}
export default App; */
import * as react from "react";
function getTitle(title) {
  return title;
}
function App(){
  return (
    <div>
      <h1>hello {getTitle("React")}</h1>
      <label htmlfor="search">search: </label>
      <input id="search" type="text" />
    </div>
  )
}
export default App; 