import PropTypes from 'prop-types';
import css from './Sections.module.css';

export const Section = ({ title, children }) => {
  return (
    <section className={css.title}>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};