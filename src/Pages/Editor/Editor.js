import React from 'react';
import "./Editor.css"
import Logo from "../../shared/UI/Logo/Logo"
import Controls from './Controls/Controls';
import TextEditorTabs from './TextEditorTabs/TextEditorTabs';
import PreviewFrame from './PreviewFrame/PreviewFrame';


const Editor = () => {

    return ( 
    <main className="editor-page">
        <header className="editor-page-header">
            
            <div className="back-btn">
                <a href="/home">
                    <img src="./assets/back-btn.png" alt="home"/>
                </a>
            </div>
            <Logo/>
            <div>
            </div>
            
        </header>
            
        <div className="editor-container">
            
            <section className="controls-wrapper">
                <Controls/>
            </section>
            <section className="text-editor-wrapper">
                <TextEditorTabs/>
            </section>
            <section className="preview-frame-wrapper">
                <PreviewFrame/>
            </section>
        </div>
    </main> );
}
 
export default Editor;
