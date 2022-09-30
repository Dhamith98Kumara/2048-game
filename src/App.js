import React, {useState} from "react";

function App() {

  const [data, setData] = useState([
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
  ])

  //Initialize

  //AddNumber - Add an item

  //Swipe - right, left , up, down

  //check gameover

  //reset

  return (
    <div style={{
      background : "linear-gradient( 150.26deg, rgba(23, 85, 83, 0.7) 1.7%, rgba(67, 217, 173, 0.091) 81.82%)", 
      width : "max-content",
      margin : "auto",
      padding : 5,
      borderRadius: 5,
      margginTop :10,
    }}>
        {data.map((row,oneIndex) =>{
          return (
            <div style={{display:"flex"}} key={oneIndex}>
              {row.map((digit,index) => (
                <Block num={digit} key={index}/>
              ))}
            </div>
          );
        })}
    </div>
  );
}



const Block = ({ num }) => {
  const {blockStyle} = style;
  return <div style={{
    ...blockStyle,
    // background: getColors(num),
    color : num === 2 || num === 4 ? "#645B52" : "#685F52"}}>
    
    {num}

    </div>;
}

const style = {
  blockStyle : {
    height : 80,
    width : 80,
    background : "lightgray",
    margin : 3,
    display : "flex",
    justifyContent : "center",
    alignItems:"center",
    fontSize : 45,
    fontWeight: "800",
    color:"white",
  },
}

export default App;
