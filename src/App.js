// src/App.js

import { useState } from 'react';
import YearEraFilter from './components/YearEraFilter';

function App() {
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');

  return (
    <div className="App">
      <h1>시대별 필터</h1>
      <YearEraFilter
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
      />
      <p>선택된 연도: {selectedYear}</p>
      <p>선택된 월: {selectedMonth}</p>
    </div>
  );
}

export default App;

