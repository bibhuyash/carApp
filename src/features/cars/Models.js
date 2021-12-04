import React, { useEffect, useCallback } from 'react';
import {
  Route,
  Link,
  useParams,
  useRouteMatch,
  useLocation,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineCloseCircle } from 'react-icons/ai';

import Section from 'components/Section';
import List from 'components/List';
import IconLink from 'components/IconLink';

import Vehicles from './Vehicles/Vehicles';

import { getModels, selectModels } from './carsSlice';
import { filterItems } from './cars.service';

const Models = () => {
  const { make } = useParams();
  const { pathname } = useLocation();
  let { path, url } = useRouteMatch();
  const dispatch = useDispatch();

  const loadModels = useCallback(() => {
    if (make) {
      dispatch(getModels(make));
    }
  }, [dispatch, make]);

  const models = useSelector(state => selectModels(state, make));
  const areModelsFetching = useSelector(state => state.cars.areModelsFetching);
  const modelsError = useSelector(state => state.cars.modelsError);

  const match = pathname.match(/models\/(.*)\/(.*)/);
  const model = match ? match[2] : null;

  useEffect(() => {
    loadModels();
  }, [loadModels]);

  return (
    <>
      <Section title="Models">
        {
          model ? (
            <IconLink
              Icon={AiOutlineCloseCircle}
              url={url}
              text={model}
            />
          ) : (
            <List
              items={models}
              isListLoading={areModelsFetching}
              renderItem={(model, className) => (
                <Link key={model} className={className} to={`${url}/${model}`}>{model}</Link>
              )}
              emptyText="No models found."
              refresh={loadModels}
              filter={filterItems}
              searhPlaceholder="Filter models"
              error={modelsError}
            />
          )
        }
      </Section>
      <Route path={`${path}/:model`}>
        <Vehicles/>
      </Route>
    </>
  )
};

export default Models;
