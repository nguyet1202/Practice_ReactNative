import React, {useMemo} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const UseMemoExample = () => {
  const [val, setVal] = React.useState();
  const [number, setNumber] = React.useState([]);
  const handleIncrease = () => {
    setNumber([...number, val]);
    console.log('here you are');
  };
  const total = useMemo(() => {
    const result = number.reduce((re, value) => {
      console.log('tinh toan lai ...');
      return re + parseInt(value);
    }, 0);
    return result;
  }, [number]);
  return (
    <View>
      <TextInput onChangeText={text => setVal(text)} />
      <TouchableOpacity
        onPress={() => {
          handleIncrease();
        }}>
        <Text>Add</Text>
      </TouchableOpacity>
      {number.map(value => {
        return <Text>{value}</Text>;
      })}
      <Text>Total: {total}</Text>
    </View>
  );
};

export default UseMemoExample;

const styles = StyleSheet.create({});

//useMemo tránh trường hợp re-render không cần thiết, useMemo trả về giá trị, useCallback trả về function