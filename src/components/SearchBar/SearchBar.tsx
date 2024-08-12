import React, { useState } from 'react';
import styles from './searchBar.module.scss';
import search from '@/assets/search.png';
import Image from 'next/image';

const SearchBar = () => {

    const types = ['BUY', 'RENT'];

    const [query, setQuery] = useState({
        type: 'BUY',
        location: '',
        minPrice: 0,
        maxPrice: 0
    });

    const switchType = (type: string) => {
        setQuery({
            ...query,
            type: type
        })
    }

    return (
        <div className={styles.searchBar}>
            <div className={styles.type}>
                {types?.map((type: string, index: number) => (
                    <button onClick={() => switchType(type)} key={index} className={query?.type == type ? styles.active : ''}>
                        {type}
                    </button>
                ))}
            </div>
            <form>
                <input type='text' name='location' placeholder='City Location' />
                <input type='number' name='minPrice' min={0} max={1000000} placeholder='Min Price' />
                <input type='number' name='maxPrice' min={0} max={1000000} placeholder='Max Price' />
                <button>
                    <Image src={search} alt='search' />
                </button>
            </form>
        </div>
    )
}

export default SearchBar