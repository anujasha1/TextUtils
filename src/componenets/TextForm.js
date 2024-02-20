import { useState } from "react"

export default function TextFrom(props) {
    const [text, setText] = useState("")
    const handleCopy = () => {
        // let text = document.getElementById("myBox");
        // text.select()
        navigator.clipboard.writeText(text)
        props.showAlert("Copied text", "success")
    }
    
    const handleExptraSpaces = () => {
        let newText = text.split(/[]+/)
        setText(newText.join("  "))
        props.showAlert("Extra spaces removed", "success")
    }

    return(
        <div style = {{ color: props.mode === 'dark' ? 'white' : '#042743'}}>
            <div className="container">
            <h1>{props.heading}</h1>

 <div className="mb-3">
  <label htmlFor="myBox" className="form-label"></label>
  <textarea className="form-control" id="myBox" rows="8" value={text} onChange={(event) => setText(event.target.value)} style={{
    backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743'}}></textarea>
</div>
<button disabled = {text.length === 0} className="btn btn-primary" onClick={() => {setText(text.toUpperCase()); props.showAlert("Converted to upper case", "success")}}>Convert to Upper case</button>
<button disabled = {text.length === 0} className="btn btn-primary mx-2 my-1" onClick={() => {setText(text.toLowerCase()); props.showAlert("Converted to lower case", "success")}}>Convert to Lower case</button>
<button disabled = {text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
<button disabled = {text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleExptraSpaces}>Remove Extra Spaces</button>
<button disabled = {text.length === 0} className="btn btn-primary mx-2 my-1" onClick={() => setText("")}> Clear Text</button>
        </div>
            <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter(e => e!= '').length} words and {text.split(" ").join("").length} characters</p>
                <p> {0.008 * text.split(" ").filter(e => e!= '').length} minutes read</p>
            <h2>Preview</h2>
            <p>{text.split(" ").join("").length > 0 ? text : "Nothing to preview"}</p>
            </div>
        </div>
    )

}

