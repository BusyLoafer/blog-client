import React, { FC, ReactElement } from 'react'

interface IButton {
  text: string;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
  color?: string;
}

const Button: FC<IButton> = (props): ReactElement => {

  const { text = "", onClick, className = "", disabled = false, color = "orange" } = props;

  const checkClick = () => {
    if (disabled) return
    onClick()
  }

  const name = "btn-base btn-" + color + className + (disabled ? " btn-dis" : "");

  return (
    <div
      className={name}
      onClick={checkClick}
    >
      {text}
    </div>
  )
}

export default Button