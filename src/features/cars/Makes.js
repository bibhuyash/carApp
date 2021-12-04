import React, { useEffect, useCallback } from 'react';
import { Route, Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineCloseCircle } from 'react-icons/ai';

import Section from 'components/Section';
import List from 'components/List';
import IconLink from 'components/IconLink';

import Models from './Models';
import { getMakes, selectMakes } from './carsSlice';
import { filterItems } from './cars.service';

const Makes = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const makes = useSelector(selectMakes);
  const areMakesFetching = useSelector(state => state.cars.areMakesFetching);
  const makesError = useSelector(state => state.cars.makesError);

  const match = pathname.match(/models\/([\w\s]*)/);
  const make = match ? match[1] : null;

  const loadMakes = useCallback(() => {
    dispatch(getMakes());
  }, [dispatch]);

  useEffect(() => {
    loadMakes();
  }, [loadMakes]);

  return (
    <>
      <Section title="Makes">
        {
          make
            ? (
              <IconLink
                Icon={AiOutlineCloseCircle}
                url="/"
                text={make}
              />
            )
            : (
              <List
                items={makes}
                isListLoading={areMakesFetching}
                getKey={(make) => make}
                renderItem={(make, className) => (
                  <Link key={make} className={className} to={`/models/${make}`}>{make}</Link>
                )}
                emptyText="No makes found."
                refresh={loadMakes}
                filter={filterItems}
                searhPlaceholder="Filter makes"
                error={makesError}
              />
            )
        }
      </Section>
      <Route path="/models/:make">
        <Models/>
      </Route>
    </>
  )
};

export default Makes;
