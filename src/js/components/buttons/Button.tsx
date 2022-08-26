import React, { FC, ReactElement } from 'react'

interface IButton {
  text: string;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
  color?: string;
}

const Button: FC<IButton> = (props): ReactElement => {

  const { text = "", onClick, className = "", disabled = false, color = "" } = props;

  const checkClick = () => {
    if (disabled) return
    onClick()
  }

  const name = "btn-base btn-" + color + className + (disabled ? " btn-dis" : "");

  return (
    <button
      className={name}
      onClick={checkClick}
    >
      {text}
    </button>
  )
}

export default Button