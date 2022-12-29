import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

const useStateExample = () => {
  function Counter({initialCount}) {
    const [count, setCount] = useState(initialCount);
    /* hàm này nhận đầu vào là giá trị khởi tạo của 1 state và trả ra 1 mảng gồm có 2 phần tử, phần tử đầu tiên là state hiện tại, 
    phần tử thứ 2 là 1 function dùng để update state (giống như hàm setState cũ vậy). 
*/
    return (
      <>
        Count: {count}
        <button onClick={() => setCount(initialCount)}>Reset</button>
        <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      </>
    );
  }
};

export default useStateExample;

const styles = StyleSheet.create({});
