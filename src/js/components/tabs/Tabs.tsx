import React, { FC, ReactElement, useState } from 'react'
import Tab from './Tab';

interface TabsProps {
  titles: string[];
  children?: ReactElement[];
}

const Tabs = (props: TabsProps) => {

  // ? props
  const { titles, children } = props;

  // ? state
  const [activeIndex, setActiveIndex] = useState(0);

  const changeTab = (val: number) => setActiveIndex(val)


  return (
    <div>
      <div className="tabs p-16">
        {
          titles.map((title: string, index: number) => {
            const props = { title, active: activeIndex === index, onClick: () => changeTab(index) }
            return <Tab {...props} key={index} />
          })
        }
      </div>
      {children ? children[activeIndex] : null}
    </div>
  )
}

export default Tabs