import React, { useEffect, useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Section from 'components/Section';
import List from 'components/List';
import Vehicle from './Vehicle';

import { selectVehicles, getVehicles } from '../carsSlice';
import { filterVehicles } from '../cars.service';

import styles from './Vehicles.module.css';

const Vehicles = () => {
  let { make, model } = useParams();
  const dispatch = useDispatch();

  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const vehicles = useSelector(state => selectVehicles(state, make, model));
  const areVehiclesFetching = useSelector(state => state.cars.areVehiclesFetching);
  const vehiclesError = useSelector(state => state.cars.vehiclesError);

  const loadVehicles = useCallback(() => {
    if (make && model) {
      dispatch(getVehicles({ make, model }));
    }
  }, [dispatch, make, model]);

  useEffect(() => {
    loadVehicles();
  }, [loadVehicles]);

  return (
    <Section className={styles.vehiclesSection} title="Vehicles">
      {selectedVehicle ? (
        <div className={styles.selectedVehicleContainer}>
          <Vehicle isSelected vehicle={selectedVehicle} onSelect={setSelectedVehicle} />
        </div>
      ) : (
        <List
          isVirtual
          items={vehicles}
          isListLoading={areVehiclesFetching}
          renderItem={(vehicle) => (
            <Vehicle
              key={vehicle.id}
              onSelect={setSelectedVehicle}
              vehicle={vehicle}
            />
          )}
          emptyText="No vehicles found."
          refresh={loadVehicles}
          filter={filterVehicles}
          searhPlaceholder="Filter vehicles"
          error={vehiclesError}
          listItemSize={100}
        />
      )}
    </Section>
  )
};

export default Vehicles;
