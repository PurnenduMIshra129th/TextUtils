import React,{useState} from 'react'

export default function TextForm(props) {
    const [text,setText] = useState('');
    const handelUpClick =()=>{
      
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted To UpperCase","success");
    }
    const handelLowerClick =()=>{
        
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted To LowerCase","success");
    }
    const handelClearText =()=>{
        
        let newText = '';
        setText(newText)
        props.showAlert("Text Cleared Successfully","success");
    }
    const handelCopy = ()=>{
      var text = document.getElementById('myBox');
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text Copied To Clipboard Successfully","success");
     

    }
    const handelExtraSpace = ()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Extra Space Remove Successfully","success");
    }
    const handelOnChange = (event)=>{
        console.log('fuck u');
        setText(event.target.value);
    }
    // due to this event parametere the default value of text + user text is its now value
    //so we can write in it
  return (
    <>
   <div className="container" style = {{color:props.mode==='dark'?'white':'grey'}}>
   <div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">{props.heading}</label>
  <textarea className="form-control" id="myBox" rows="3" value={text} onChange ={handelOnChange} style =
  {{backgroundColor:props.mode==='dark'?'black':'light'}}></textarea>
  <button className="btn btn-primary mx-2 mt-2" onClick={handelUpClick}>Convert To Upper Case</button>
  <button className="btn btn-primary mx-2 mt-2" onClick={handelLowerClick}>Convert To LowerCase Case</button>
  <button className="btn btn-primary mx-2 mt-2" onClick={handelClearText}>Clear Text</button>
  <button className="btn btn-primary mx-2 mt-2" onClick={handelCopy}>Copy To Clip Board</button>
  <button className="btn btn-primary mx-2 mt-2" onClick={handelExtraSpace}>Remove Extra Space</button>
</div>
   </div>
   <div className="container" style = {{color:props.mode==='dark'?'white':'gray'}}>
    <h1>Your text summary</h1>
    <p>{text.split(" ").length} Words and {text.length} Characters</p>
    <p>{0.008*text.split(" ").length} Minutes Read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:'Enter Something To Preview Here'}</p>
   </div>

</>
  )
}
