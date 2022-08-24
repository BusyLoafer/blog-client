import React, { FC, ReactElement } from 'react';

type IconType = {
  title: string,
  func: () => any,
  show: boolean
}


interface IInfo {
  icons: IconType[];
}

const Info: FC<IInfo> = (props): ReactElement => {

  const {icons} = props;

  return (
    <div
      className='info-panel'
    >
      {
        icons.map((icon: IconType, index: number) => {
          const {title, func, show} = icon
          return <i
            className={'icon-' + title + (show ? "" : " info-hidden")}
            onClick={func}
            key={index}
          />
        })
      }
    </div>
  )
}

export default Info