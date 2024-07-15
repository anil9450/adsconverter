"use client";

import { useEffect, useState } from "react";

export default function Clientcomponent() {
  const [tableContent, setTableContent] = useState(null);
  const [tableName, setTableName] = useState("table1");
  return (
    <div>
      {
        <select
          value={tableName}
          onChange={(event) => {
            setTableName(event.target.value);
          }}
        >
          <option value="table1">table1</option>
          <option value="table2">table2</option>
          <option value="table3">table3</option>
        </select>
      }
      <table>
        <thead>
          <tr>
            <th>first column</th>
            <th>second column</th>
            <th>third column</th>
          </tr>
        </thead>
      </table>
    </div>
  );
}
