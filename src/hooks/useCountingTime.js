import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';

const useCountingTime = () => {
  const [currentDate, setCurrentDate] = useState('');
  useEffect(() => {
    let setTime = setInterval(() => {
      let hours = new Date().getHours(); 
      let min = new Date().getMinutes(); 
      let sec = new Date().getSeconds(); 
      setCurrentDate(hours + ':' + min + ':' + sec);
    }, 1000);
    return () => {
      clearInterval(setTime);
    };
  }, []);
  // console.log('hhmm', currentDate);
  return {
    currentDate
  };
};

export default useCountingTime;

const styles = StyleSheet.create({});
