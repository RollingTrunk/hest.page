import React from 'react';
import classNames from 'classnames';
import styles from './IconOverlay.module.css';

type IconType = 'calendar' | 'tasks' | 'meals' | 'records';

interface IconOverlayProps {
  type: IconType;
  position: 'left' | 'right';
}

export default function IconOverlay({ type, position }: IconOverlayProps) {
  const renderIcon = () => {
    switch (type) {
      case 'calendar':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`${styles.icon} ${styles.calendarIcon}`}
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
            <rect x="7" y="14" width="2" height="2" fill="currentColor" opacity="0.2" className={styles.calDay} style={{ animationDelay: '0s' }} />
            <rect x="11" y="14" width="2" height="2" fill="currentColor" opacity="0.2" className={styles.calDay} style={{ animationDelay: '0.4s' }} />
            <rect x="15" y="14" width="2" height="2" fill="currentColor" opacity="0.2" className={styles.calDay} style={{ animationDelay: '0.8s' }} />
          </svg>
        );
      case 'tasks':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`${styles.icon} ${styles.taskIcon}`}
          >
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
            <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
            
            {/* List items with checks */}
            <path d="M9 12h6" className={styles.linePath} />
            <path d="M9 16h6" className={styles.linePath} style={{ animationDelay: '0.2s' }} />
          </svg>
        );
      case 'meals':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`${styles.icon} ${styles.mealsIcon}`}
          >
            {/* Steam lines */}
            <path d="M6 4c0-1 2-2 2-2" className={styles.steam1} />
            <path d="M12 4c0-1 2-2 2-2" className={styles.steam2} />
            <path d="M18 4c0-1 2-2 2-2" className={styles.steam3} />
            
            {/* Bowl */}
            <path d="M4 10h16v2a8 8 0 0 1-8 8h0a8 8 0 0 1-8-8v-2z" />
          </svg>
        );
      case 'records':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`${styles.icon} ${styles.recordsIcon}`}
          >
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
            {/* Additional folder shape implying stack or open state */}
             <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" className={styles.folderFront} opacity="0.5" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className={classNames(styles.overlay, styles[`overlay-${position}`])}>
      {renderIcon()}
    </div>
  );
}
