useEffect(() => {
    // 이후 수정
    fetch(`/api/places?year=${selectedYear}&month=${selectedMonth}`)
      .then(res => res.json())
      .then(data => {
        setMarkers(data);
      });
  }, [selectedYear, selectedMonth]);
  