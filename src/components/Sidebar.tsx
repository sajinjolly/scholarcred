import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from '../styles/Sidebar.module.css';

const Sidebar: React.FC = () => {
  const [selected, setSelected] = useState('Dashboard');
  const navigate = useNavigate();

  const menuItems = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'All Students', path: '/students' },
    { name: 'Team Management', path: '/team-management' },
    { name: 'Accounts', path: '/accounts' },
    { name: 'Campaigns', path: '/campaigns' },
    { name: 'Tickets', path: '/tickets' },
    { name: 'Escalations', path: '/escalations' },
  ];

  const handleItemClick = (itemName: string, itemPath: string) => {
    setSelected(itemName);
    navigate(itemPath);
  };

  return (
    <motion.div 
      className={styles.sidebar}
      initial={{ x: '-100%' }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ul>
        {menuItems.map((item, index) => (
          <motion.li
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${styles.menuItem} ${selected === item.name ? styles.active : ''}`}
            onClick={() => handleItemClick(item.name, item.path)}
          >
            {item.name}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

export default Sidebar;
