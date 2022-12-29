import React, {createContext, useEffect, useState} from 'react';
import { View } from 'react-native';
export const PracticeContext = createContext();
export const PracticeProvider = ({children}) => {
  const [number, setNumber] = useState(1);
  const SetNumbers = ()=>{
    setNumber(number+1)
  }
  return (
    <PracticeContext.Provider value={{number,setNumber,SetNumbers}}>
      <View>
    
      </View>
    </PracticeContext.Provider>
  );
};
export {PracticeContext,PracticeProvider}
