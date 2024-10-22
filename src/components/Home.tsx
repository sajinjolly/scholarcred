import React from 'react';
import { useInView } from 'react-intersection-observer';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { FaCheck, FaTimes } from 'react-icons/fa';
import styles from '../styles/Home.module.css';
import gads from '../Images/Desktopimages/google_ads-.svg';
import insta from '../Images/Desktopimages/instagram-old.svg';
import referral from '../Images/Desktopimages/referral-icon.svg';
import man1 from '../Images/Desktopimages/man-1.png';
import man2 from '../Images/Desktopimages/man-2.png';
import man3 from '../Images/Desktopimages/man-3.png';

const AnimatedSection: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { ref, inView } = useInView({
    threshold: 0.1, 
    triggerOnce: true, 
  });

  return (
    <div
      ref={ref}
      className={`${styles.animatedSection} ${inView ? styles.visible : styles.hidden}`}
    >
      {children}
    </div>
  );
};

interface UserPerformance {
  username: string;
  imageUrl: string;
  counsellingOngoing: boolean;
  identifiedUniversity: boolean;
  appliedUniversity: boolean;
  offerLetterReceived: boolean;
  financing: boolean;
  feePaymentCompleted: boolean;
  visaApproved: boolean;
  deferredStudents: boolean;
  droppedInactiveStudents: boolean;
}

const users: UserPerformance[] = [
  {
    username: 'John Doe',
    imageUrl: man1,
    counsellingOngoing: true,
    identifiedUniversity: true,
    appliedUniversity: false,
    offerLetterReceived: true,
    financing: false,
    feePaymentCompleted: true,
    visaApproved: true,
    deferredStudents: false,
    droppedInactiveStudents: false,
  },
  {
    username: 'Jane Smith',
    imageUrl: man2,
    counsellingOngoing: true,
    identifiedUniversity: false,
    appliedUniversity: true,
    offerLetterReceived: false,
    financing: true,
    feePaymentCompleted: false,
    visaApproved: true,
    deferredStudents: true,
    droppedInactiveStudents: false,
  },
  {
    username: 'Mark Lee',
    imageUrl: man3,
    counsellingOngoing: false,
    identifiedUniversity: true,
    appliedUniversity: true,
    offerLetterReceived: true,
    financing: true,
    feePaymentCompleted: true,
    visaApproved: true,
    deferredStudents: false,
    droppedInactiveStudents: true,
  }
];

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.content}>
        <Sidebar />
        <div className={styles.mainContent}>
          <AnimatedSection>
            <h1 className={styles.channelOverview}>
              STAFF <span className={styles.channelOverviewspan}>PERFORMANCE</span>
            </h1>
            <table className={styles.performanceTable}>
              <thead>
                <tr>
                  <th>Users</th>
                  <th>Counselling Ongoing</th>
                  <th>Identified University</th>
                  <th>Applied to University</th>
                  <th>Offer Letter Received</th>
                  <th>Financing</th>
                  <th>Fee Payment Completed</th>
                  <th>VISA Approved</th>
                  <th>Deferred Students</th>
                  <th>Dropped/Inactive Students</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index}>
                    <td>
                      <img src={user.imageUrl} alt={user.username} className={styles.userImage} />
                    </td>
                    <td>{user.counsellingOngoing ? <FaCheck className={styles.trueIcon} /> : <FaTimes className={styles.falseIcon} />}</td>
                    <td>{user.identifiedUniversity ? <FaCheck className={styles.trueIcon} /> : <FaTimes className={styles.falseIcon} />}</td>
                    <td>{user.appliedUniversity ? <FaCheck className={styles.trueIcon} /> : <FaTimes className={styles.falseIcon} />}</td>
                    <td>{user.offerLetterReceived ? <FaCheck className={styles.trueIcon} /> : <FaTimes className={styles.falseIcon} />}</td>
                    <td>{user.financing ? <FaCheck className={styles.trueIcon} /> : <FaTimes className={styles.falseIcon} />}</td>
                    <td>{user.feePaymentCompleted ? <FaCheck className={styles.trueIcon} /> : <FaTimes className={styles.falseIcon} />}</td>
                    <td>{user.visaApproved ? <FaCheck className={styles.trueIcon} /> : <FaTimes className={styles.falseIcon} />}</td>
                    <td>{user.deferredStudents ? <FaCheck className={styles.trueIcon} /> : <FaTimes className={styles.falseIcon} />}</td>
                    <td>{user.droppedInactiveStudents ? <FaCheck className={styles.trueIcon} /> : <FaTimes className={styles.falseIcon} />}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </AnimatedSection>

          <AnimatedSection>
            <h1 className={styles.channelOverview}>CHANNEL <span className={styles.channelOverviewspan}> OVERVIEW</span></h1>
            <div className={styles.channelsection}>
              <div className={styles.buttonContainer}>
                <div className={styles.button}>
                  <div className={styles.buttonHeader}>PAID ADS</div>
                  <div className={styles.buttonContent}>
                    <img src={gads} alt="Paid Ads" className={styles.buttonImage} />
                    <span className={styles.buttonContenttext}>Total Leads Converted</span>
                  </div>
                </div>
                <div className={`${styles.button} ${styles.socialMediaButton}`}>
                  <div className={styles.buttonHeader}>Social Media</div>
                  <div className={styles.buttonContent}>
                    <img src={insta} alt="Social Media" className={styles.buttonImage} />
                    <span className={styles.buttonContenttext}>Total Leads Converted</span>
                  </div>
                </div>
                <div className={`${styles.button} ${styles.referralButton}`}>
                  <div className={styles.buttonHeader}>REFERRAL CHANNELS</div>
                  <div className={styles.buttonContent}>
                    <img src={referral} alt="Referral Channels" className={styles.buttonImage} />
                    <span className={styles.buttonContenttext}>Total Leads Converted</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <h1 className={styles.channelOverview}>ACCOUNT<span className={styles.channelOverviewspan}> OVERVIEW</span></h1>
            <div className={styles.accountOverviewSection}>
              <div className={styles.buttononeContainer}>
                <div className={styles.buttonone}>
                  <div className={styles.buttononeHeader}>Payment Received</div>
                </div>
                <div className={styles.buttonone}>
                  <div className={styles.buttononeHeader}>Receivables/Open Invoices</div>
                </div>
                <div className={styles.buttonone}>
                  <div className={styles.buttononeHeader}>Outward Payment</div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}

export default Home;
