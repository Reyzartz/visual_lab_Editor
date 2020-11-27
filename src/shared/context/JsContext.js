import React,{useState,createContext} from 'react';
import { InitilJsVal } from '../../Pages/Editor/Editor_func';

export const JsContext = createContext();

export const JsProvider = (props) => {

    const [docFiles,setdocFiles] = useState([...InitilJsVal]);            
    const [srcDoc,setSrcDoc] = useState('')
    let [currentTabId,setCurrentTabId] = useState(docFiles[2].id)

    const addNewTab = () =>{
        let prevdocFiles = [...docFiles]
        let id=Math.random()
        setdocFiles([...prevdocFiles,{
            id:id,
            displayName:'Untitled',
            value:'',
            language:'javascript',
            fileType:'js'
        }])
        return id
    }

    const removeTab = (id) =>{
        let prevdocFiles = [...docFiles]
        let index = docFiles.findIndex(docFile =>(docFile.id===id))
        prevdocFiles.splice(index,1);
        setdocFiles(prevdocFiles)
    }
    const setJsValue = (id,value) =>{
        let prevdocFiles = []
        docFiles.forEach( j => {
            if(j.id!==id){
                prevdocFiles.push({...j})
            }
            else{
                prevdocFiles.push({
                    ...j,
                    value,

                })
            }
        });
        setdocFiles(prevdocFiles)
    }
    const changeCurrentTabHandler=(id)=>{
        if(currentTabId!==id){
            setCurrentTabId(id)
        }
    }
    const setSrcDocHandler=()=>{
        let htmlSrcDoc='',cssSrcDoc='',jsSrcDoc='';
        docFiles.forEach(file=>{
            if(file.fileType==='js'){
                jsSrcDoc+=file.value;
            }
            else if(file.fileType==='html'){
                htmlSrcDoc+=file.value
            }
            else if(file.fileType==='css'){
                cssSrcDoc+=file.value
            }
        })
        jsSrcDoc = `<script>${jsSrcDoc}</script>`
        cssSrcDoc = `<style>${cssSrcDoc}</style>`
        let tempSrcDoc =`${htmlSrcDoc}
                        ${jsSrcDoc}
                        ${cssSrcDoc}`
        setSrcDoc(tempSrcDoc)        
    }
    const clearSrcDoc=()=>{
        setSrcDoc("")
    }
    
    return ( 
        <JsContext.Provider value={{
                                        docFiles,
                                        setJsValue,
                                        addNewTab,
                                        removeTab,
                                        srcDoc,
                                        setSrcDocHandler,
                                        clearSrcDoc,
                                        currentTabId,
                                        changeCurrentTabHandler
                                    }}>
            {props.children}
        </JsContext.Provider>
     );
}