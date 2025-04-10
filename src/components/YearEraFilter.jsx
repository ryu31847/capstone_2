// src/components/YearEraFilter.jsx

const yearOptions = ['2000', '2010', '2015', '2020', '2022', '2023', '2024', '2025'];
const monthOptionsByYear = {
  '2025': ['1월', '3월'],
};

export default function YearEraFilter({ selectedYear, setSelectedYear, selectedMonth, setSelectedMonth }) {
  return (
    <div>
      <label>연도 선택</label>
      <select value={selectedYear} onChange={(e) => {
        setSelectedYear(e.target.value);
        setSelectedMonth('');
      }}>
        <option value="">전체</option>
        {yearOptions.map((year) => (
          <option key={year} value={year}>{year}년</option>
        ))}
      </select>

      {selectedYear in monthOptionsByYear && (
        <>
          <label>월 선택</label>
          <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
            <option value="">전체</option>
            {monthOptionsByYear[selectedYear].map((month) => (
              <option key={month} value={month}>{month}</option>
            ))}
          </select>
        </>
      )}
    </div>
  );
}
