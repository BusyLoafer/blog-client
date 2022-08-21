import React, { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Home = () => {

  const [date, setDate] = useState(new Date());

  return (
    <div>
      <Calendar
        onChange={setDate}
        value={date}
        locale="ru"
      />
    </div>
  );
}

export default Home;