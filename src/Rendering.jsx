<div className="filter-panel">
  {yearOptions.map((year) => (
    <div key={year} style={{ marginBottom: '10px' }}>
      <button
        onClick={() => {
          setSelectedYear(year);
          setSelectedMonth('');
        }}
        style={{
          backgroundColor: selectedYear === year ? '#007bff' : '#e0e0e0',
          color: selectedYear === year ? 'white' : 'black',
          padding: '8px',
          width: '100%',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        {year}년
      </button>

      {selectedYear === year && monthOptionsByYear[year] && (
        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
          style={{ marginTop: '5px', width: '100%' }}
        >
          <option value="">전체</option>
          {monthOptionsByYear[year].map((month) => (
            <option key={month} value={month}>{month}</option>
          ))}
        </select>
      )}
    </div>
  ))}
</div>
