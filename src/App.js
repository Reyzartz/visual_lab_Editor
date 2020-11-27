import './App.css';
import Editor from './Pages/Editor/Editor';
import {JsProvider } from './shared/context/JsContext';

function App() {
  return (
    <div className="App">
      <JsProvider>
        <Editor/>
      </JsProvider>    
    </div>
  );
}

export default App;
