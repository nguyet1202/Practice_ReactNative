import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import UseCallback from './useCallback,';
const Counter = () => {
  const [value, setValue] = React.useState(0);
  const handleIncrease = React.useCallback(() => {
    setValue(preValue => preValue + 1);
  }, []);
  return (
    <View>
      <Text>Counter</Text>
      <Text style={{fontSize: 32}}>{value}</Text>
      <UseCallback onIncrease={handleIncrease} />
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({});