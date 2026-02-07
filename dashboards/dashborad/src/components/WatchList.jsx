import React from 'react'
import{Tooltip,Grow} from  '@mui/material'
// import {KeyboardArrowDown,KeyboardArrowUp} from '@mui/icons-material'
import { watchlist } from '../data/data'
const WatchList = () => {
  return (
    <div className='watchlist-container'>
      <div className="search-container">
        <span className="icon">&#128269;</span>
        <input type="text"  id="search-input" placeholder='Search stocks, ETFs, funds etc.' className='search-input'/>
        <span className="count">{watchlist.length}</span>
      </div>
      <ul className="watchlist-items">
        {watchlist.map((stock,index)=>(

          <WatchListItem item={stock} key={index}/>
        ))}

  </ul>

    </div>
  )
}

export default React.memo(WatchList);

const WatchListItem=({item})=>{
  const [showWatchlistItem,setShowWatchlistItem]=React.useState(false);
  const handleMouseEnter=(e)=>{
    setShowWatchlistItem(true);
  }
  const handleMouseLeave=(e)=>{
    setShowWatchlistItem(false);
  }
return(
  <li className='watchlist-item' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
    <div className="item">
      <p className={item.isDown?"down":"up"}>{item.name}</p>
      <p className="company-name">{item.companyName}</p>
   <div className="iteminfo">
    <span className='percent'>{item.percent}</span>
    {/* {item.isDown ?<KeyboardArrowDown className='down'/>:<KeyboardArrowUp className='up'/>} */}
    {/* <span className='price'>{item.price}</span> */}.
    <span className='price'>{item.price}</span>

   </div>
    </div>
    {showWatchlistItem && <WatchListAcitinon show={showWatchlistItem} uuid={item.id}/>}
  </li>
)
}
const WatchListAcitinon=({show,uuid})=>{
  return(
    <span className='action'>
      <span>
        <Tooltip title="Buy" placement="top" arrow="true" TransitionComponent={Grow}>
        
          <button className='buy'>Buy</button>
          <button className='sell'>Sell</button>
        </Tooltip>
        <Tooltip 
        title="Analyitcs (A)"
        placement='top'
        arrow
        ></Tooltip>
      </span>
      <span>
        <Tooltip title="Sell">&#128184;</Tooltip>
      </span>
    </span>
  )
}