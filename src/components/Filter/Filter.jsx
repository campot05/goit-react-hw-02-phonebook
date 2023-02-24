import css from './Filter.module.css';
const Filter = ({ value, filter }) => {
  return (
    <div className={css.filter}>
      <label>
        Find contacts by name
        <input className={css.input} value={value} onChange={filter} />
      </label>
    </div>
  );
};

export default Filter;
