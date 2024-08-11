import Link from 'next/link';
import styles from './Navbar.module.scss';
import Image from 'next/image';
import logo from '@/assets/logo.png'
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.left}>
                <div className={styles.logo}>
                    <Image src={logo} alt={'logo'} width={60} height={40} />
                    <p>Realtify</p>
                </div>
                <Link href={'/'}>Home</Link>
                <Link href={'/about'}>About</Link>
                <Link href={'/contact'}>Contact</Link>
                <Link href={'/agents'}>Agents</Link>
            </div>
            <div className={styles.right}>
                <Link href={'/'}>Login</Link>
                <Link href={'/'} className={styles.register}>Sign Up</Link>
                <div className={styles.hamburger}>
                    <RxHamburgerMenu style={{ fontSize: "25px" }} />
                </div>
            </div>
        </nav>
    )
}

export default Navbar