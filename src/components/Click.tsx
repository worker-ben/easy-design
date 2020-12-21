import React, { useState, useEffect } from 'react';

const ClickButton: React.FC = () => {

  // 钩入 state
  const [time, setTime] = useState(0);

  // 每次由 time 触发的更新，会执行这些操作
  // 传入数组
  useEffect(() => {
    console.log(time);
  }, [time])

  return (
    <button onClick={() => { setTime(time + 1) }}>you click {time} times</button>
  );
}

export default ClickButton;