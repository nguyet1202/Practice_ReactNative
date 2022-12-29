import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import useCountingTime from '../hooks/useCountingTime';
const CountTime = () => {
  const {currentDate} = useCountingTime();
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.textStyle}>Current Date Time</Text>
          <Text style={styles.textStyle}>{currentDate}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: 10,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 18,
    color: 'black',
  },
});

export default CountTime;
