import React from 'react'
import styles from './listing.module.scss';
import { listData } from '@/lib/dummy';
import Filter from '@/components/Filter/Filter';
import Card from '@/components/Card/Card';


const Listings = () => {
    const data = listData;
    return (
        <div className={styles.listPage}>
            <div className={styles.listContainer}>
                <div className={styles.wrapper}>
                    <Filter />
                    {
                        data?.map((item: any, index: any) => (
                            <Card key={index} item={item} />
                        ))
                    }
                </div>
            </div>
            <div className={styles.mapContainer}>Map</div>
        </div>
    )
}

export default Listings