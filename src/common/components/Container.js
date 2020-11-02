import React, {useState} from 'react';
import { useDataFetcher } from './DataFetcher';
import Select from './Select';

const options = [
  "sales", 
  "subscriptions"
];

export default function Container() {
  const [value, setValue] = useState("sales")
  const url = `${process.env.REACT_APP_BASE_URL}/${value}`
  const data = useDataFetcher(url)
  console.log(data)
  return (
    <>
      <Select name="chart" label="Please select a chart" onChange={event => setValue(event.target.value)}>
        {options.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
        </Select>
      <ul>
      {data?.[0].map(data => (
        <li key={data.timestamp}>{data.timestamp} - {data.amount}</li>
      ))}
        </ul>

    </>
  )
}
