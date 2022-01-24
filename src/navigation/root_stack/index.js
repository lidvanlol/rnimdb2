import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeStack from './HomeStack';
import SearchStack from './SearchStack';


import ShowStack from './ShowsStack';
import DetailsStack from "./DetailsStack";

import {ROUTES} from '../../core/constants/routes';

const {Screen, Navigator} = createNativeStackNavigator();
const BottomTabStack = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      
      <Screen name={ROUTES.home_stack} component={HomeStack} />
      <Screen name={ROUTES.search_stack} component={SearchStack} />
     
     
      <Screen name={ROUTES.shows_stack} component={ShowStack} />
      <Screen name={ROUTES.details_stack} component={DetailsStack} />
    </Navigator>
  );
};

export default BottomTabStack;
