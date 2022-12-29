import React, {useEffect, useRef, useState} from 'react';
import {Button, Text, View} from 'react-native';

export default function MyFunction() {
  const intervalRef = useRef();
  const [count, setCount] = useState(0);

  useEffect(() => {
    intervalRef.current = setInterval(() => setCount(count => count + 1), 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <View>
      <Text style={{fontSize: 120}}>{count}</Text>
      <Button
        title="Stop"
        onPress={() => {
          clearInterval(intervalRef.current);
        }}
      />
    </View>
  );
}