import './App.css';
import Button from './components/Button';

/**
 * 用来测试自己实现的组件
 */
function App() {
  return (
    <div className="App">
      <Button> Default Button </Button>
      <Button btnType={'primary'}> Primary Button </Button>
      <Button btnType={'danger'}> Danger Button </Button>
      <Button btnType={'link'} href={'https://www.baidu.com/'} > Hello Link </Button>
      <Button disabled > Disabled Button </Button>
    </div>
  );
}

export default App;
