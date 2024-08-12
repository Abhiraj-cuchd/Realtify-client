import React from 'react'
import styles from './home.module.scss';
import Image from 'next/image';
import bg from '@/assets/bg.png';
import SearchBar from '@/components/SearchBar/SearchBar';

const HomePage = () => {
    return (
        <div className={styles.homePage}>
            <div className={styles.textContainer}>
                <div className={styles.wrapper}>
                    <h1 className={styles.title}>Find Real Estate & Get Your Dream Place.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis tenetur accusamus nobis, vel, dolor itaque ipsa aliquam illum soluta voluptate facere doloremque saepe autem explicabo reprehenderit sequi. Eos quos iure maiores tempora velit sed cumque, laudantium et culpa at sit excepturi fuga esse nesciunt quae illo temporibus optio? Quo, deleniti.</p>
                    <SearchBar />
                    <div className={styles.boxes}>
                        <div className={styles.box}>
                            <h1>16+</h1>
                            <h2>Years of Experience</h2>
                        </div>
                        <div className={styles.box}>
                            <h1>16+</h1>
                            <h2>Years of Experience</h2>
                        </div>
                        <div className={styles.box}>
                            <h1>16+</h1>
                            <h2>Years of Experience</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.imgContainer}>
                <Image src={bg} alt='bg' />
            </div>
        </div>

    )
}

export default HomePage 