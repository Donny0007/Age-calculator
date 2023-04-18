import { useState } from 'react'

const Age_calculator = () => {

  const [date, setDate] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [years, setYears] = useState(null);
  const [months, setMonths] = useState(null);
  const [days, setDays] = useState(null);

  const handleDateChange = (event) => {
    setDate(event.target.value);
  }

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  }

  const handleYearChange = (event) => {
    setYear(event.target.value);
  }

  const calculateAge = () => {
    const birthDate = new Date(`${year}-${month}-${date}`);
    const today = new Date();
    let yearsDiff = today.getFullYear() - birthDate.getFullYear();
    let monthsDiff = today.getMonth() - birthDate.getMonth();
    let daysDiff = today.getDate() - birthDate.getDate();

    if (monthsDiff < 0 || (monthsDiff === 0 && daysDiff < 0)) {
      yearsDiff--;
    }

    if (daysDiff < 0) {
      const prevMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
      daysDiff = prevMonth.getDate() - birthDate.getDate() + today.getDate();
      monthsDiff--;
    }

    setYears(yearsDiff);
    setMonths(monthsDiff);
    setDays(daysDiff);
  }

  return (
    <div className = 'container'>

      <div className = 'input_field'>
        <input
          type='text'
          className='form-control'
          placeholder='DD'
          value={date}
          onChange={handleDateChange}
        /><br />
      </div>
      
      <div className = 'input_field'>
        <input
          type='text'
          className='form-control'
          placeholder='MM'
          value={month}
          onChange={handleMonthChange}
        /><br />
      </div>

      <div className='input_field'>
        <input
          type='text'
          className='form-control'
          placeholder='YY'
          value={year}
          onChange={handleYearChange}
        /><br />
      </div>

      <button onClick={calculateAge}>Submit</button>
      { years != null && months != null && days != null && (
      <div>
        <p>Age: {years} years, {months} months, and {days} days</p>
      </div>
      )}
    </div>
  )
}

export default Age_calculator;
