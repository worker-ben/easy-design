import './App.css';
import Hello from './components/Hello';
import ClickButton from './components/Click';
import Button from './components/Button';

/**
 * 用来测试自己实现的组件
 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button> Hello Button </Button>
        <Button btnType={'link'} href={'https://www.baidu.com/'} > Hello Link </Button>
        <Button disabled > Disabled Button </Button>
      </header>
    </div>
  );
}

export default App;
