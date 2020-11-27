import React from 'react';
import './TextEditor.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material-darker.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import { Controlled as ControlledEditor } from 'react-codemirror2';


const TextEditor = (props) => {
    const {
        language,
        value,
        onChange,
        id
    } = props

    const handleChange=(editor,data,value)=>{
        onChange(id,value)
    }

    return ( 
        <div className="text-editor-container">
            <ControlledEditor
                onBeforeChange = {handleChange}
                value={value}
                className="codemirror-wrapper"
                options={{
                    lineWrapping:true,
                    lineNumbers:true,
                    lint:true,
                    mode:language,
                    theme:'material-darker',

                }}
            />
        </div>
    );
}
 
export default TextEditor;