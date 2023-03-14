
import './App.css';
import Cell from './component/Cell';

function App() {
  const data = [
      {
          "image": "../asset/Images/nike-black.jpg", 
          "description" : "Nike Air Force 1 jester", 
          "price" : " 150$",
          "name" : "Nike-Air-Force-1-Jester.png"
      } , 
      {
          "image": "C:/Users/prath/OneDrive/Desktop/Step Up Website/images", 
          "description" : "Air Force Blue White", 
          "price" : " 180$",
          "name" : "BW.png"
      } ,
      {
           
          "description" : "Air Jordan 1", 
          "price" : " 170$",
          "name" : "Jordan.png"
      } ,
      {
           
          "description" : "Air Force 1 Travis Scott", 
          "price" : " 100$",
          "name" : "TravisScott.png"
      },
      {
        
        "description" : "Air Force 1 Script Woosh", 
        "price" : " 200$",
        "name" : "Scriptwoosh.png"
    } , 
    {
       
      "description" : "Air Force 1 Low", 
      "price" : " 190$",
      "name" : "low.png"
  } ,
  {
    "image": "../asset/Images/nike-black.jpg", 
    "description" : "Nike Air Force 1 jester", 
    "price" : " 150$",
    "name" : "Nike-Air-Force-1-Jester.png"
} , 
{
    "image": "C:/Users/prath/OneDrive/Desktop/Step Up Website/images", 
    "description" : "Air Force Blue White", 
    "price" : " 180$",
    "name" : "BW.png"
} ,
{
     
    "description" : "Air Jordan 1", 
    "price" : " 170$",
    "name" : "Jordan.png"
} ,  

  ]
  const images = data.map((shoe) => require("./assets/" + shoe.name))
  
  
  return (
    <div className='App bg'>
      <h1>New and Featured</h1>
      <h3> Nike Collection </h3>
      <div  className="cells">
      
      { data.map((shoe, index) => (<Cell key={shoe.name
      } shoe={shoe} image={images[index]}/>))}
      </div>
    </div>
  );
}

export default App;
