import React, { useContext } from 'react';
import { JsContext } from '../../../shared/context/JsContext';

const PreviewFrame = () => {

    const {srcDoc} = useContext(JsContext)
    return (         
        <iframe
            className="preview-frame"
            title="output"
            id="preview-frame"
            sandbox = "allow-scripts allow-same-origin"
            width="100%"
            height="100%"
            srcDoc={srcDoc}
        />
     );
}
 
export default PreviewFrame;