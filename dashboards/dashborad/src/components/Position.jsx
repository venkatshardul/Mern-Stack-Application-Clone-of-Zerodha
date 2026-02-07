import React, { useState, useEffect } from 'react'
import axios from 'axios';
const Position = () => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3002/positions')
      .then(response => {
        console.log('Positions data:', response.data);
        setPositions(response.data);
      })
      .catch(error => {
        console.error('Error fetching positions:', error);
      });
  }, []);
  // Calculate average value
  const avgValue = positions.length > 0 
    ? (positions.reduce((sum, stock) => sum + stock.avg, 0) / positions.length).toFixed(2)
    : 0;

  return (
    <div>
      <h3 className='title'>Positions ({positions.length})</h3>
      <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#f9f9f9', borderRadius: '6px' }}>
        <p style={{ margin: '0', fontSize: '0.9rem', color: '#666' }}>Average Price:</p>
        <h4 style={{ margin: '5px 0 0 0', fontSize: '1.5rem', color: '#333' }}>₹ {avgValue}</h4>
      </div>
      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {positions.map((stocks, index) => {
              const curVal = stocks.qty * stocks.price;
              const totalCost = stocks.qty * stocks.avg;
              const isProfit = curVal - totalCost;
              const profitClass = isProfit >= 0 ? 'profit' : 'loss';
              
              return (
                <tr key={index}>
                  <td>{stocks.name}</td>
                  <td>{stocks.qty}</td>
                  <td>₹ {stocks.avg}</td>
                  <td>₹ {stocks.price}</td>
                  <td>₹ {curVal.toFixed(2)}</td>
                  <td className={profitClass}>₹ {isProfit.toFixed(2)}</td>
                  <td className={profitClass}>{stocks.net}</td>
                  <td className={profitClass}>{stocks.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default React.memo(Position)
