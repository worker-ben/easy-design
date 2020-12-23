import './App.css';
import Button from './components/Button';

/**
 * 用来测试自己实现的组件
 */
function App() {
  return (
    <div className="App">
      {/* 支持原生属性了 */}
      <Button onClick={() => { console.log('Default Button') }} > Default Button </Button>
      <Button onClick={() => { console.log('Primary Button') }} size={'sm'} btnType={'primary'}> Primary Button </Button>
      <Button onClick={() => { console.log('Danger Button') }} size={'lg'} btnType={'danger'}> Danger Button </Button>
      <Button btnType={'link'} href={'https://www.baidu.com/'} target='_blank' > Hello Link </Button>
      <Button disabled > Disabled Button </Button>
    </div>
  );
}

export default App;
