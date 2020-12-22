import './App.css';
import Hello from './components/Hello';
import ClickButton from './components/Click';

/**
 * 用来测试自己实现的组件
 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello />
        <ClickButton />
      </header>
    </div>
  );
}

export default App;
