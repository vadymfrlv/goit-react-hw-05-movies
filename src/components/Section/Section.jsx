import PropTypes from 'prop-types';
import styles from './Section.module.css';

const Section = ({ children }) => <div className={styles.section}>{children}</div>;

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Section;
