import React,{useState} from 'react'

export default function About(props) {
    // const [style,myStyle] = useState({
    //     color:'black',
    //     backgroundColor:'white'
    // });
 let myStyle = {
  color:props.mode ==='dark'?'white':'black',
  backgroundColor:props.mode === 'dark'?'black':'white',
  borderColor : props.mode==='dark' ? ' white':'black'
 }
 
    
   
  
  return (
    <div className="container" >
 <div class="accordion" id="accordionExample" style={myStyle} >
    <div class="accordion-item" style={myStyle}>
      <h2 class="accordion-header" id="headingOne" >
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
          <strong>Analyze your Text </strong>
        </button>
      </h2>
      <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div class="accordion-body">
       TextUtils gives you a way to analyze your text quickly and efficiently.Be it word count,character count or ............
        </div>
      </div>
    </div>
    <div class="accordion-item" style={myStyle}>
      <h2 class="accordion-header" id="headingTwo">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
         <strong>  Free To Use</strong>
        </button>
      </h2>
      <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div class="accordion-body">
         TextUtils is a free character count tool that provides instant character count & word count statistics for a given text.TextUtils report the number of words and character . Thus it is suitable for writing text with word character limit
        </div>
      </div>
    </div>
    <div class="accordion-item" style={myStyle}>
      <h2 class="accordion-header" id="headingThree">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
          <strong> Browser Compatible</strong>
        </button>
      </h2>
      <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div class="accordion-body">
         This word counter software works in any web browser such as chrome,Firefox,Internet Explorer,Safari,Opera.It suits to count character in Facebook,Blog,Books,Excel,Document,Pdf,Essays etc.
        </div>
      </div>
    </div>
  </div>
  
    </div>
   
  )
}
