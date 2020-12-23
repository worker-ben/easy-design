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

// 类型别名，取出 React 提供的 html 元素属性接口
type NativeButtonProps = ButtonProps & React.ButtonHTMLAttributes<HTMLElement>;
type NativeAnchorProps = ButtonProps & React.AnchorHTMLAttributes<HTMLElement>;
// 这样在外界在传入原生属性的时候，就不会提示不存在了
// 全部属性设置为「可选」
type FullButtonProps = Partial<NativeButtonProps & NativeAnchorProps>;

// 填入属性接口，然后就能直接展开使用了
const Button: React.FC<FullButtonProps> = (props) => {
  const {
    btnType,
    disabled,
    size,
    children,
    href,
    className,
    // 其余属性会填充到这
    ...restProps
  } = props;

  // 动态赋予不同属性的样式
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
        {...restProps} // 展开其它属性
      >
        ❄️🎄{children}🎄❄️
      </a>
    );
  } else {
    return (
      <button
        className={classes}
        disabled={disabled}
        {...restProps}
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