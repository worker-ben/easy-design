import React from 'react';
import cx from 'classnames';
import './index.css';

// 列举的时候，用枚举
enum ButtonSize {
  Large = 'lg',
  Small = 'sm',
}

enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link',
}

interface ButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  children: React.ReactNode; // a 标签要用 children
  href?: string;
}


// 填入属性接口，然后就能直接展开使用了
const Button: React.FC<ButtonProps> = (props) => {
  const {
    btnType,
    disabled,
    size,
    children,
    href,
  } = props;

  const classes = cx('btn', {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabled': disabled
  })

  // 如果 type 是 link，返回 a 标签的东西
  if (btnType === ButtonType.Link && href) {
    return (
      <a
        className={classes}
        href={href}
      >
        ❄️🎄{children}🎄❄️
      </a>
    );
  } else {
    return (
      <button
        className={classes}
        disabled={disabled}
      >
        ❄️🎄{children}🎄❄️
      </button>
    )
  }


}

// 最重要的默认属性
Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default,
}

export default Button;