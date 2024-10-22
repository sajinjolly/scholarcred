import React, { useState, useEffect, useRef } from 'react';
import { FaBell, FaEnvelope } from 'react-icons/fa';
import styles from '../styles/Navbar.module.css';
import mainlogo from '../Images/Desktopimages/logo.svg';
import usericon from '../Images/Desktopimages/user-icon.svg';

const Navbar: React.FC = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const usernames = ['Sajin']; 

    const toggleDropdown = () => {
        setDropdownVisible(prev => !prev);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setDropdownVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className={styles.navbar}>
            <div className={styles.navContainer}>
                <div className={styles.logo}>
                    <img onClick={() => alert('Home')} src={mainlogo} alt="ScholarCred Logo" className={styles.logoImage} />
                    {usernames.map((username, index) => (
                        <div key={index} className={styles.username}>Hi "{username}"</div>
                    ))}
                </div>
                <div className={styles.userArea}>
                    <FaBell className={styles.icon} />
                    <FaEnvelope className={styles.icon} />
                    <div className={styles.userDropdown} ref={dropdownRef}>
                        <img 
                            src={usericon} 
                            alt="User" 
                            className={`${styles.userIcon} ${dropdownVisible ? styles.iconActive : ''}`} 
                            onClick={toggleDropdown} 
                        />
                        {dropdownVisible && (
                            <div className={styles.dropdownContent}>
                                <p onClick={() => alert('Profile Clicked')}>Profile</p>
                                <p onClick={() => alert('Logout Clicked')}>Logout</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
