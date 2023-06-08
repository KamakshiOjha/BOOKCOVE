import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    const upperclick= ()=>{
        console.log("handle upper click");
        let newText = text.toUpperCase();
        setText(newText);

    }
    const lowerclick= ()=>{
        console.log("handle lower click");
        let newText = text.toLowerCase();
        setText(newText);

    }
    const clearclick= ()=>{
        console.log("handle clear click");
        let newText = " ";
        setText(newText);

    }
    const onchange = (event)=>{
        console.log("handle on change");
        setText(event.target.value);
    }

  return (
    <div className="body_textform">
        <h2>{props.heading}</h2>
        <div className="mb-3 my-3">
        <textarea className="form-control" value= {text} onChange={onchange} id="exampleFormControlTextarea1" rows="6"></textarea>
        </div>
        <button type="button" className="btn btn-primary mx-2" onClick={upperclick} >To Uppercase</button>
        <button type="button" className="btn btn-primary mx-2 " onClick={lowerclick}>To Lowercase</button>
        <button type="button" className="btn btn-primary mx-2 " onClick={clearclick}>To clear</button>
        <div className="container my-3">
            <h3>your text has</h3>
            <p>{text.split(" ").length} word  and {text.length} characters</p>
        </div>
        <div className="container my-3">
            <h3>you can read this text in</h3>
            <p>{0.008 * text.split(" ").length} minutes</p>
        </div>

        <div className="container my-3">
            <h3>Preview</h3>
            <p>{text}</p>
        </div>

 </div>
  )
}
