import React, { FC } from 'react';

export interface TabProps {
  title: string;
  active: boolean;
  onClick: () => void;
}

const Tab:FC<TabProps> = ({ title, active, onClick }) => {

  return (
    <div
      className={'tab hill clickable ' + (active ? 'tab-active' : '')}
      onClick={onClick}
    >
      {title}
    </div>
  )
}

export default Tab