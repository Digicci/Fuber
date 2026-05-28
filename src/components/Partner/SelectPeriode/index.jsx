import React from 'react'
import {Select} from './atoms'

function SelectPeriod({ period, setPeriod }) {
  const periods = [
    { label: "Tout", value: "all" },
    { label: "Mois en cours", value: "current_month" },
    { label: "7 derniers jours", value: "last_7_days" },
    { label: "Semaine en cours", value: "current_week" },
    { label: "6 mois", value: "six_months" },
    { label: "1 an", value: "one_year" },
  ];

  return (
    <Select
      value={period}
      onChange={(e) => setPeriod(e.target.value)}
    >
      {periods.map((p) => (
        <option key={p.value} value={p.value}>
          {p.label}
        </option>
      ))}
    </Select>
  );
}

export default SelectPeriod;