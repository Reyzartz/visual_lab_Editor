import React, { useCallback, useContext, useEffect, useState } from 'react';
import { JsContext } from '../../../shared/context/JsContext';
import TextEditor from '../TextEditor/TextEditor';
import './TextEditorTabs.css'

const TextEditorTabs = () => {
    let {docFiles,setJsValue,addNewTab,removeTab,currentTabId,changeCurrentTabHandler} = useContext(JsContext);
    let [tabIndex,setTabIndex] = useState(0);
    console.log("ran");

    const setTabIndexHandler = useCallback((id)=>{
        let ind =docFiles.findIndex(docFile=>(docFile.id===id))
        setTabIndex(ind)
    },[docFiles])
    
    const onRemoveTabHandler=(id)=>{
        if(id===currentTabId && docFiles.length>3){
            let prevTabId = tabIndex !== 2 ? docFiles[tabIndex-1].id : docFiles[3].id
            changeCurrentTabHandler(prevTabId)
            removeTab(id)
        }
        else if(docFiles.length===3){
            alert('Atleast One JS file is required to run the code')
        }
        else{
            changeCurrentTabHandler(currentTabId)
            removeTab(id)
        }
    }

    const onAddTabHandler=()=>{
        let newId = addNewTab();
        changeCurrentTabHandler(newId)
    }

    useEffect(()=>{
        setTabIndexHandler(currentTabId)
    },[currentTabId,setTabIndexHandler])

    return (
    <section className="editor-tabs">
        <div className="editor-tabs-list">
            {docFiles.length > 0 ?
                    docFiles.map((docFile,index)=>(
                        docFile.fileType==='js'?
                        <div
                            key={Math.random()}
                            draggable="true"
                            onDragLeaveCapture={(event)=>{console.log(event)}}
                            className={"editor-tab"+(tabIndex===index? " active-tab":" ")}
                           
                                ><span 
                                    className = "editor-tab-name"
                                    onClick = {()=>changeCurrentTabHandler(docFile.id)}
                                    >{docFile.displayName}.{docFile.fileType}</span> 
                                <div 
                                    className="remove-tab-btn"
                                    onClick={()=>{onRemoveTabHandler(docFile.id)}}
                                    >x</div>
                        </div>
                        :null
                    )):
                null}
            <div 
                className="new-tab-btn"
                title="Add new tab"
                onClick={onAddTabHandler}
                >+</div>
        </div>
        <div className="current-text-editor-wrapper">{ 
        docFiles[tabIndex]!==undefined?
        <TextEditor
                language = {docFiles[tabIndex].language}
                value = {docFiles[tabIndex].value}
                displayName = {docFiles[tabIndex].displayName}
                onChange = {setJsValue}
                id = {docFiles[tabIndex].id}
            />:console.log(tabIndex)
            }
            
        </div>
    </section>
    );
}
 
export default TextEditorTabs;