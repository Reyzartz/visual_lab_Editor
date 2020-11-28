import React, { useContext, useEffect, useState } from 'react';
import { JsContext } from '../../../shared/context/JsContext';
import "./Controls.css"

const Controls = () => {
    const {setSrcDocHandler,clearSrcDoc,changeCurrentTabHandler,docFiles,currentTabId,saveFiles} = useContext(JsContext)
    const [isRunning,setIsRunning] = useState(false);
    const [autoRefresh,setAutoRefresh] = useState(false);
    const runStateHandler=(action)=>{
        switch(action){
            case "run":
                setSrcDocHandler();
                setIsRunning(true)
            break;
            case "stop":
                clearSrcDoc();
                setIsRunning(false)
            break;
            default:
            break;
        }
    }
    useEffect(()=>{
        if(autoRefresh){
            const timeout  = setTimeout(()=>{
                setSrcDocHandler();
                setIsRunning(true)
            },200)
    
            return ()=>clearTimeout(timeout)
        }
        else{
            console.log("go sleep");
        }
    },[autoRefresh,docFiles,setSrcDocHandler,setIsRunning])
    return (
        <div className="control-container">
            <div className="run-btn" onClick={()=>{runStateHandler("run")}}>
                <img src={`./assets/run-${isRunning?"fill":"nofill"}.svg`} alt="run" className="btn-img"/><br/>
                Run
            </div>
            <div className="stop-btn" onClick={()=>{runStateHandler("stop")}}>
                <img src={`./assets/stop-${isRunning?"nofill":"fill"}.svg`} alt='stop' className="btn-img"/><br/>
                Stop
            </div>
            <div className="save-btn" onClick={()=>{saveFiles()}}>
                <img src="./assets/save.svg" alt='save' className="btn-img"/><br/>
                Save
            </div>
            <div className={`refresh-btn${!autoRefresh?" refresh-btn-deactive":""}`}
                onClick={()=>{setAutoRefresh(prevState=>!prevState)}}>
                <img src="./assets/refresh.svg" alt='refresh' className="btn-img"/><br/>
                Auto Refresh
            </div>
            <div className="html-css-btn">
                <div 
                    className={`html-btn ${docFiles[0].id===currentTabId ?"html-btn-active":null }`}
                    onClick={()=>{changeCurrentTabHandler(docFiles[0].id)}}>
                    <pre className={`btn-img ${docFiles[0].id===currentTabId ?"html-btn-active":null }`}> &lt; / &gt; </pre>
                    HTML
                </div>
                <div 
                    className={`css-btn ${docFiles[1].id===currentTabId ?"css-btn-active":null }`} 
                    onClick={()=>{changeCurrentTabHandler(docFiles[1].id)}}>
                    <pre className={`btn-img ${docFiles[1].id===currentTabId ?"css-btn-active":null }`}>{"{  :  }  "}</pre>
                    CSS
                </div>
            </div>
            
        </div>
      );
}
 
export default Controls;