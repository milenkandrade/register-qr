import React from 'react';
import { View } from 'react-native';
import NavigationButton from '@/components/buttons/NavigatorButton';

const NavigationButtons = () => {
  return (
    <View>
      <View>
        <NavigationButton label={'Asistencia'} route={'asistencia'} />
      </View>
    </View>
  );
};

export default NavigationButtons;
