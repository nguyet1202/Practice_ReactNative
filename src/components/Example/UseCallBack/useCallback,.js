import React, {memo} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
const UseCallback = ({onIncrease}) => {
  console.log('re-render');
  return (
    <View>
      <TouchableOpacity onPress={onIncrease}>
        <Text>Increase</Text>
      </TouchableOpacity>
    </View>
  );
};

export default memo(UseCallback);

const styles = StyleSheet.create({});