import React from 'react';

// 基本可以说是 TS+React 的官方用法了
// 好处：自动补全，外部使用可以类型检验
interface HelloProps {
  message?: string;
}
// 过时写法
// const Hello = (props: any) => {
//   return (
//     <h1>{props.message}</h1>
//   )
// }


// 新的函数组件写法 FC<props> 其实会返回一个自定义 + 默认混合的 props
const Hello: React.FC<HelloProps> = (props) => {
  // props.children = props.children || [];
  return <div>{props.message}</div>;
}

// 还提供了默认参数功能
Hello.defaultProps = {
  message: "Hello Default"
}

export default Hello;