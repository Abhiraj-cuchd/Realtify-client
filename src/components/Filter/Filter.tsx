import React from 'react'
import styles from './filter.module.scss';

const Filter = () => {
  return (
    <div className={styles.filter}>
      <h1>Search results for <b>Chandigarh</b></h1>
      <div className={styles.top}>
        <div className={styles.item}>
          <label htmlFor="city">Location</label>
          <input type='text' id='city' placeholder='City Location' />
        </div>

      </div>
      <div className={styles.bottom}>
        <div className={styles.item}>
          <label htmlFor="type">Type</label>
          <select name='type' id='type'>
            <option value="">Any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent"</option>
          </select>
        </div>
        <div className={styles.item}>
          <label htmlFor="property">Location</label>
          <select name='property' id='property'>
            <option value="">Any</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="condo">Condo</option>
            <option value="land">Land</option>
          </select>
        </div>
        <div className={styles.item}>
          <label htmlFor="minPrice">Min Price</label>
          <input type='number' id='minPrice' placeholder='any' />
        </div>
        <div className={styles.item}>
          <label htmlFor="maxPrice">Max Price</label>
          <input type='text' id='maxPrice' placeholder='Max Price' />
        </div>
        <div className={styles.item}>
          <label htmlFor="bedrooms">Bedrooms</label>
          <input type='text' id='bedrooms' placeholder='Bed Room' />
        </div>
      </div>
    </div>
  )
}

export default Filter