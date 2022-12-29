import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useEffect, useState} from 'react';

const UseEffectExample = () => {
  const [number, setNumber] = useState(0);
  useEffect(() => {
    console.warn('test use effect', number);
  }); // không có dependences -> useefect được tự động gọi  khi component thay đổi/ nếu có dependences thì chỉ được gọi 2 lần: 1 lần khi render components, 1 lần khi dependences thay đổi/ nếu là một mảng rỗng thì chỉ gọi 1 lần khi render components (tương đương với componentDidMount). 
  return (
    <View style={{flex: 1, marginTop: 100}}>
      <Text style={{fontSize: 70}}> {number}</Text>
      <Button
        title="update state"
        onPress={() => {
          setNumber(number+1)
        }}/>
    </View>
  );
};

export default UseEffectExample;

const styles = StyleSheet.create({});
