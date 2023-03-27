import React, { useEffect, useState } from "react";

export default function Dashboard() {
  const [data, setDAta] = useState([]);

  const getCovidData = async () => {
    const res = await fetch("https://data.covid19india.org/data.json");
    const actualData = await res.json();
    console.log(actualData);
    setDAta(actualData.statewise);
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      <h1 className="heading">
        {" "}
        <span> INDIA </span> COVID-19 Dashboard
      </h1>
      <div className="dashboard-area">
        <div className="dashboard-area-wrapper">
          <table>
            <thead>
              <tr>
                <th>State</th>
                <th>Confirmed</th>
                <th>Recovered</th>
                <th>Deaths</th>
                <th>Active</th>
                <th>Updated</th>
              </tr>
            </thead>
            <tbody>
              {data.map((curElem, index) => {
                return (
                  <tr key={index}>
                    <th>{curElem.state}</th>
                    <td>{curElem.confirmed}</td>
                    <td>{curElem.recovered}</td>
                    <td>{curElem.deaths}</td>
                    <td>{curElem.active}</td>
                    <td>{curElem.lastupdatedtime}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
