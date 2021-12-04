import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { BiSearchAlt } from 'react-icons/bi';
import styles from './SearchInput.module.css';
import useDebounce from 'hooks/useDebounce';

const SearchInput = ({ onSearch, placeholder }) => {
  const [searchText, setSearchText] = useState('');
  const debouncedSearchText = useDebounce(searchText, 500);

  useEffect(() => {
    onSearch(debouncedSearchText);
  }, [onSearch, debouncedSearchText]);

  return (
    <div className={styles.search}>
      <input
        type="text"
        value={searchText}
        placeholder={placeholder}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <BiSearchAlt size="20" className={styles.icon}/>
    </div>
  );
};

SearchInput.propTypes = {
  onSearch: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default SearchInput;
