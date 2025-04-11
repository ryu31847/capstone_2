const validYears = [2000, 2010, 2015, 2020, 2022, 2023, 2024, 2025];

function filterByYear(data, selectedYears = validYears) {
  return data.filter(item =>
    item.builtYear !== undefined && selectedYears.includes(item.builtYear)
  );
}

export { filterByYear };


// import { filterByYear } from './filterByYear';