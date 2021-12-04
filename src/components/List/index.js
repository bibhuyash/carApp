import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaCarCrash } from 'react-icons/fa';
import { GiHomeGarage } from 'react-icons/gi';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList } from 'react-window';
import { BiSearchAlt } from 'react-icons/bi';

import ListAlert from './ListAlert';
import styles from './List.module.css';

import Spinner from '../Spinner';
import SearchInput from '../SearchInput';

const List = ({
  isListLoading,
  items,
  renderItem,
  refresh,
  filter,
  error,
  emptyText,
  isVirtual,
  searhPlaceholder,
  listItemSize,
}) => {
  const [searchText, setSearchText] = useState('');

  if (isListLoading) {
    return <Spinner/>;
  }
  if (items?.length === 0) {
    return  (
      <ListAlert
        Icon={GiHomeGarage}
        text={(
          <>
            <span>Garage empty.</span>
            {emptyText && <span>{emptyText}</span>}
            <span>We are working on expanding our database.</span>
          </>
        )}
      />
    );
  }

  if (error) {
    return  (
      <ListAlert
        Icon={FaCarCrash}
        iconClassName={styles.crashIcon}
        text={(
          <>
            <span>An error occurred on the server.</span>
            <span> Press <button className={styles.refreshButton} onClick={refresh}>here</button> to try again.</span>
          </>
        )}
      />
    );
  }

  if (items) {
    let filteredItems = searchText && filter ? items.filter(item => filter(item, searchText)) : items;
    return (
      <>
        {filter && <SearchInput placeholder={searhPlaceholder} onSearch={setSearchText} />}
        {filteredItems?.length === 0 ? (
          <ListAlert
            Icon={BiSearchAlt}
            text={emptyText}
          />
        ): (
          isVirtual ? (
            <div className={styles.virtualListContainer}>
              <AutoSizer>
                {({ height, width }) => (
                  <FixedSizeList
                    width={width}
                    height={height}
                    itemCount={filteredItems.length}
                    itemSize={listItemSize}
                  >
                    {({ index, style }) => <div style={style}>{renderItem(filteredItems[index], styles.listItem)}</div>}
                  </FixedSizeList>
                )}
              </AutoSizer>
            </div>
          ) : (
            <ul className={styles.list}>
              {filteredItems.map((item) => renderItem(item, styles.listItem))}
            </ul>
          )
        )}
      </>
    );
  }

  return null;
};

List.propTypes = {
  isListLoading: PropTypes.bool.isRequired,
  items: PropTypes.array,
  renderItem: PropTypes.func.isRequired,
  refresh: PropTypes.func.isRequired,
  error: PropTypes.object,
  emptyText: PropTypes.string,
  isVirtual: PropTypes.bool,
  filter: PropTypes.func,
  searhPlaceholder: PropTypes.string,
  listItemSize: PropTypes.number,
};

export default List;
