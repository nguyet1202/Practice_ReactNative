import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React, {useState} from 'react';


const DATA = [
  {
    id: 1,
    user_name: 'Ann Dii',
    Image:
      'https://lh3.googleusercontent.com/WIRXrOyOEN5vP519xRjbqQKdLQFmj7vFA_OmbhVlHbxEw-tj3-_KKO1y6wVWdBQkFcTgeTtHdulHPbOQXoXT7GPvaPbiSbYNkfB4AI3Pgsu8yjG09kI1hK_xWJFA8AdO6lzhVTfI9C0Pw_Nmwc2a3fDPYufFufPzTFclzVQh6_VSRrE0sAv7Y6H9WjYzr0EWmqKFUUKqP-sb7zoMEd14EgOrRDDju-BUrqBtqrlQOnWcmmhPebvb6jK_SD0T97tGTiBAxe9JAzOacZZlFXqr08ZAto5hoXWmdn6eJgkd0T_zfAB_Hpwfxo-XVdrexygz8WXXQOr98XMak4zLWlZKp9dBCC3L194Lyo5U1TZOQL5ocYos6yd5yuZB1YdcHQijQU_52JXhvjodi0k1BbKkcQGAcaKFSg1JS0uPZ1wq-GbDVxqd7oijFz7NgCRYcdyH3UrBTqtQJ_3mLPhstIaLeBIN6WyyeP0AM8sRzjuV_I9cNLxOZp8fUaYz7w1u09ptA-Bb4C19fTYWDuclkZZnVsEqN4imzJHuOVQfyJPFBHa2Ri_34SCw0cdAZsV0zzErw-oAW3sRt04tGO9yPwJrNVlwYCdgDhMVY7r6LoaZDUmm9b5ak33G1zRrqc1OnqV0Hq0jIRzb_HTrDg-gxXv4cArcrSd5ke5m2sW_TaOEOQeZIi9Wy3PaUKHjbbExU6N15cJP-sXdPMmi97vCJ5JkI2QKkBiGXRJ9KG0SDw4HNsj9tPKogcLItdAw4xjHpM3A3Ve-s6l24rgZR8WA5LEwMKkoehLr1a9c_xI2cyZsTAIReyCa79oGEAFvIM6i4cD5FhvvawXyzQDr9nH4yw35Qs6WuE2cGnO8zaQAIY0rlNn3XcN3i_op_3H7TOuau9V8im0kLa9OEueyDGGxz0UIlQrZ1ZQClvmx84D0neHhlaja-ItuUQ=w623-h830-no?authuser=0',
  },
  {
    id: 2,
    user_name: 'Nguyet',
    Image:
      'https://lh3.googleusercontent.com/WIRXrOyOEN5vP519xRjbqQKdLQFmj7vFA_OmbhVlHbxEw-tj3-_KKO1y6wVWdBQkFcTgeTtHdulHPbOQXoXT7GPvaPbiSbYNkfB4AI3Pgsu8yjG09kI1hK_xWJFA8AdO6lzhVTfI9C0Pw_Nmwc2a3fDPYufFufPzTFclzVQh6_VSRrE0sAv7Y6H9WjYzr0EWmqKFUUKqP-sb7zoMEd14EgOrRDDju-BUrqBtqrlQOnWcmmhPebvb6jK_SD0T97tGTiBAxe9JAzOacZZlFXqr08ZAto5hoXWmdn6eJgkd0T_zfAB_Hpwfxo-XVdrexygz8WXXQOr98XMak4zLWlZKp9dBCC3L194Lyo5U1TZOQL5ocYos6yd5yuZB1YdcHQijQU_52JXhvjodi0k1BbKkcQGAcaKFSg1JS0uPZ1wq-GbDVxqd7oijFz7NgCRYcdyH3UrBTqtQJ_3mLPhstIaLeBIN6WyyeP0AM8sRzjuV_I9cNLxOZp8fUaYz7w1u09ptA-Bb4C19fTYWDuclkZZnVsEqN4imzJHuOVQfyJPFBHa2Ri_34SCw0cdAZsV0zzErw-oAW3sRt04tGO9yPwJrNVlwYCdgDhMVY7r6LoaZDUmm9b5ak33G1zRrqc1OnqV0Hq0jIRzb_HTrDg-gxXv4cArcrSd5ke5m2sW_TaOEOQeZIi9Wy3PaUKHjbbExU6N15cJP-sXdPMmi97vCJ5JkI2QKkBiGXRJ9KG0SDw4HNsj9tPKogcLItdAw4xjHpM3A3Ve-s6l24rgZR8WA5LEwMKkoehLr1a9c_xI2cyZsTAIReyCa79oGEAFvIM6i4cD5FhvvawXyzQDr9nH4yw35Qs6WuE2cGnO8zaQAIY0rlNn3XcN3i_op_3H7TOuau9V8im0kLa9OEueyDGGxz0UIlQrZ1ZQClvmx84D0neHhlaja-ItuUQ=w623-h830-no?authuser=0',
  },
  {
    id: 3,
    user_name: 'Nyy Ann',
    Image:
      'https://lh3.googleusercontent.com/WIRXrOyOEN5vP519xRjbqQKdLQFmj7vFA_OmbhVlHbxEw-tj3-_KKO1y6wVWdBQkFcTgeTtHdulHPbOQXoXT7GPvaPbiSbYNkfB4AI3Pgsu8yjG09kI1hK_xWJFA8AdO6lzhVTfI9C0Pw_Nmwc2a3fDPYufFufPzTFclzVQh6_VSRrE0sAv7Y6H9WjYzr0EWmqKFUUKqP-sb7zoMEd14EgOrRDDju-BUrqBtqrlQOnWcmmhPebvb6jK_SD0T97tGTiBAxe9JAzOacZZlFXqr08ZAto5hoXWmdn6eJgkd0T_zfAB_Hpwfxo-XVdrexygz8WXXQOr98XMak4zLWlZKp9dBCC3L194Lyo5U1TZOQL5ocYos6yd5yuZB1YdcHQijQU_52JXhvjodi0k1BbKkcQGAcaKFSg1JS0uPZ1wq-GbDVxqd7oijFz7NgCRYcdyH3UrBTqtQJ_3mLPhstIaLeBIN6WyyeP0AM8sRzjuV_I9cNLxOZp8fUaYz7w1u09ptA-Bb4C19fTYWDuclkZZnVsEqN4imzJHuOVQfyJPFBHa2Ri_34SCw0cdAZsV0zzErw-oAW3sRt04tGO9yPwJrNVlwYCdgDhMVY7r6LoaZDUmm9b5ak33G1zRrqc1OnqV0Hq0jIRzb_HTrDg-gxXv4cArcrSd5ke5m2sW_TaOEOQeZIi9Wy3PaUKHjbbExU6N15cJP-sXdPMmi97vCJ5JkI2QKkBiGXRJ9KG0SDw4HNsj9tPKogcLItdAw4xjHpM3A3Ve-s6l24rgZR8WA5LEwMKkoehLr1a9c_xI2cyZsTAIReyCa79oGEAFvIM6i4cD5FhvvawXyzQDr9nH4yw35Qs6WuE2cGnO8zaQAIY0rlNn3XcN3i_op_3H7TOuau9V8im0kLa9OEueyDGGxz0UIlQrZ1ZQClvmx84D0neHhlaja-ItuUQ=w623-h830-no?authuser=0',
  },
  {
    id: 4,
    user_name: 'Nyy Nyy',
    Image:
      'https://lh3.googleusercontent.com/WIRXrOyOEN5vP519xRjbqQKdLQFmj7vFA_OmbhVlHbxEw-tj3-_KKO1y6wVWdBQkFcTgeTtHdulHPbOQXoXT7GPvaPbiSbYNkfB4AI3Pgsu8yjG09kI1hK_xWJFA8AdO6lzhVTfI9C0Pw_Nmwc2a3fDPYufFufPzTFclzVQh6_VSRrE0sAv7Y6H9WjYzr0EWmqKFUUKqP-sb7zoMEd14EgOrRDDju-BUrqBtqrlQOnWcmmhPebvb6jK_SD0T97tGTiBAxe9JAzOacZZlFXqr08ZAto5hoXWmdn6eJgkd0T_zfAB_Hpwfxo-XVdrexygz8WXXQOr98XMak4zLWlZKp9dBCC3L194Lyo5U1TZOQL5ocYos6yd5yuZB1YdcHQijQU_52JXhvjodi0k1BbKkcQGAcaKFSg1JS0uPZ1wq-GbDVxqd7oijFz7NgCRYcdyH3UrBTqtQJ_3mLPhstIaLeBIN6WyyeP0AM8sRzjuV_I9cNLxOZp8fUaYz7w1u09ptA-Bb4C19fTYWDuclkZZnVsEqN4imzJHuOVQfyJPFBHa2Ri_34SCw0cdAZsV0zzErw-oAW3sRt04tGO9yPwJrNVlwYCdgDhMVY7r6LoaZDUmm9b5ak33G1zRrqc1OnqV0Hq0jIRzb_HTrDg-gxXv4cArcrSd5ke5m2sW_TaOEOQeZIi9Wy3PaUKHjbbExU6N15cJP-sXdPMmi97vCJ5JkI2QKkBiGXRJ9KG0SDw4HNsj9tPKogcLItdAw4xjHpM3A3Ve-s6l24rgZR8WA5LEwMKkoehLr1a9c_xI2cyZsTAIReyCa79oGEAFvIM6i4cD5FhvvawXyzQDr9nH4yw35Qs6WuE2cGnO8zaQAIY0rlNn3XcN3i_op_3H7TOuau9V8im0kLa9OEueyDGGxz0UIlQrZ1ZQClvmx84D0neHhlaja-ItuUQ=w623-h830-no?authuser=0',
  },
  {
    id: 4,
    user_name: 'Nyy Nyy',
    Image:
      'https://lh3.googleusercontent.com/WIRXrOyOEN5vP519xRjbqQKdLQFmj7vFA_OmbhVlHbxEw-tj3-_KKO1y6wVWdBQkFcTgeTtHdulHPbOQXoXT7GPvaPbiSbYNkfB4AI3Pgsu8yjG09kI1hK_xWJFA8AdO6lzhVTfI9C0Pw_Nmwc2a3fDPYufFufPzTFclzVQh6_VSRrE0sAv7Y6H9WjYzr0EWmqKFUUKqP-sb7zoMEd14EgOrRDDju-BUrqBtqrlQOnWcmmhPebvb6jK_SD0T97tGTiBAxe9JAzOacZZlFXqr08ZAto5hoXWmdn6eJgkd0T_zfAB_Hpwfxo-XVdrexygz8WXXQOr98XMak4zLWlZKp9dBCC3L194Lyo5U1TZOQL5ocYos6yd5yuZB1YdcHQijQU_52JXhvjodi0k1BbKkcQGAcaKFSg1JS0uPZ1wq-GbDVxqd7oijFz7NgCRYcdyH3UrBTqtQJ_3mLPhstIaLeBIN6WyyeP0AM8sRzjuV_I9cNLxOZp8fUaYz7w1u09ptA-Bb4C19fTYWDuclkZZnVsEqN4imzJHuOVQfyJPFBHa2Ri_34SCw0cdAZsV0zzErw-oAW3sRt04tGO9yPwJrNVlwYCdgDhMVY7r6LoaZDUmm9b5ak33G1zRrqc1OnqV0Hq0jIRzb_HTrDg-gxXv4cArcrSd5ke5m2sW_TaOEOQeZIi9Wy3PaUKHjbbExU6N15cJP-sXdPMmi97vCJ5JkI2QKkBiGXRJ9KG0SDw4HNsj9tPKogcLItdAw4xjHpM3A3Ve-s6l24rgZR8WA5LEwMKkoehLr1a9c_xI2cyZsTAIReyCa79oGEAFvIM6i4cD5FhvvawXyzQDr9nH4yw35Qs6WuE2cGnO8zaQAIY0rlNn3XcN3i_op_3H7TOuau9V8im0kLa9OEueyDGGxz0UIlQrZ1ZQClvmx84D0neHhlaja-ItuUQ=w623-h830-no?authuser=0',
  },
  {
    id: 4,
    user_name: 'Nyy Nyy',
    Image:
      'https://lh3.googleusercontent.com/WIRXrOyOEN5vP519xRjbqQKdLQFmj7vFA_OmbhVlHbxEw-tj3-_KKO1y6wVWdBQkFcTgeTtHdulHPbOQXoXT7GPvaPbiSbYNkfB4AI3Pgsu8yjG09kI1hK_xWJFA8AdO6lzhVTfI9C0Pw_Nmwc2a3fDPYufFufPzTFclzVQh6_VSRrE0sAv7Y6H9WjYzr0EWmqKFUUKqP-sb7zoMEd14EgOrRDDju-BUrqBtqrlQOnWcmmhPebvb6jK_SD0T97tGTiBAxe9JAzOacZZlFXqr08ZAto5hoXWmdn6eJgkd0T_zfAB_Hpwfxo-XVdrexygz8WXXQOr98XMak4zLWlZKp9dBCC3L194Lyo5U1TZOQL5ocYos6yd5yuZB1YdcHQijQU_52JXhvjodi0k1BbKkcQGAcaKFSg1JS0uPZ1wq-GbDVxqd7oijFz7NgCRYcdyH3UrBTqtQJ_3mLPhstIaLeBIN6WyyeP0AM8sRzjuV_I9cNLxOZp8fUaYz7w1u09ptA-Bb4C19fTYWDuclkZZnVsEqN4imzJHuOVQfyJPFBHa2Ri_34SCw0cdAZsV0zzErw-oAW3sRt04tGO9yPwJrNVlwYCdgDhMVY7r6LoaZDUmm9b5ak33G1zRrqc1OnqV0Hq0jIRzb_HTrDg-gxXv4cArcrSd5ke5m2sW_TaOEOQeZIi9Wy3PaUKHjbbExU6N15cJP-sXdPMmi97vCJ5JkI2QKkBiGXRJ9KG0SDw4HNsj9tPKogcLItdAw4xjHpM3A3Ve-s6l24rgZR8WA5LEwMKkoehLr1a9c_xI2cyZsTAIReyCa79oGEAFvIM6i4cD5FhvvawXyzQDr9nH4yw35Qs6WuE2cGnO8zaQAIY0rlNn3XcN3i_op_3H7TOuau9V8im0kLa9OEueyDGGxz0UIlQrZ1ZQClvmx84D0neHhlaja-ItuUQ=w623-h830-no?authuser=0',
  },
  {
    id: 4,
    user_name: 'Nyy Nyy',
    Image:
      'https://lh3.googleusercontent.com/WIRXrOyOEN5vP519xRjbqQKdLQFmj7vFA_OmbhVlHbxEw-tj3-_KKO1y6wVWdBQkFcTgeTtHdulHPbOQXoXT7GPvaPbiSbYNkfB4AI3Pgsu8yjG09kI1hK_xWJFA8AdO6lzhVTfI9C0Pw_Nmwc2a3fDPYufFufPzTFclzVQh6_VSRrE0sAv7Y6H9WjYzr0EWmqKFUUKqP-sb7zoMEd14EgOrRDDju-BUrqBtqrlQOnWcmmhPebvb6jK_SD0T97tGTiBAxe9JAzOacZZlFXqr08ZAto5hoXWmdn6eJgkd0T_zfAB_Hpwfxo-XVdrexygz8WXXQOr98XMak4zLWlZKp9dBCC3L194Lyo5U1TZOQL5ocYos6yd5yuZB1YdcHQijQU_52JXhvjodi0k1BbKkcQGAcaKFSg1JS0uPZ1wq-GbDVxqd7oijFz7NgCRYcdyH3UrBTqtQJ_3mLPhstIaLeBIN6WyyeP0AM8sRzjuV_I9cNLxOZp8fUaYz7w1u09ptA-Bb4C19fTYWDuclkZZnVsEqN4imzJHuOVQfyJPFBHa2Ri_34SCw0cdAZsV0zzErw-oAW3sRt04tGO9yPwJrNVlwYCdgDhMVY7r6LoaZDUmm9b5ak33G1zRrqc1OnqV0Hq0jIRzb_HTrDg-gxXv4cArcrSd5ke5m2sW_TaOEOQeZIi9Wy3PaUKHjbbExU6N15cJP-sXdPMmi97vCJ5JkI2QKkBiGXRJ9KG0SDw4HNsj9tPKogcLItdAw4xjHpM3A3Ve-s6l24rgZR8WA5LEwMKkoehLr1a9c_xI2cyZsTAIReyCa79oGEAFvIM6i4cD5FhvvawXyzQDr9nH4yw35Qs6WuE2cGnO8zaQAIY0rlNn3XcN3i_op_3H7TOuau9V8im0kLa9OEueyDGGxz0UIlQrZ1ZQClvmx84D0neHhlaja-ItuUQ=w623-h830-no?authuser=0',
  },
];

const App = () => {
  const [data, setData] = useState(DATA);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.item}>
        <Image style={styles.img} source={{uri: item.Image}} />
        <View style={styles.infor}>
          <Text style={styles.name}>{item?.user_name}</Text>
          <View style={styles.inforButton}>
            <TouchableOpacity style={styles.confirmButton}>
              <Text style={{color:'white', fontSize:15,}}>Confirm</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteButton}>
              <Text style={{color:'black', fontSize:15,}}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <Text style={{color:'black', fontSize:25,}}>Friends</Text>
          <Image
            style={styles.iconSearch}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/54/54481.png',
            }}
          />
        </View>
        <View style={styles.viewBotton}>
          <TouchableOpacity style={styles.headerButton}>
            <Text style={{color:'black', fontSize:15,}}>suggestion</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerButton}>
            <Text style={{color:'black', fontSize:15,}}>Your Friends</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      ListHeaderComponent={renderHeader}
      keyExtractor={item => item.id}
      data={data}
      renderItem={renderItem}
    />
  );
};

export default App;

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
  },
  viewBotton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-around',
    width:280,
    padding:10,
  },
  img: {
    margin: 20,
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  iconSearch: {
    width: 25,
    height: 25,
  },
  item: {
    backgroundColor: 'white',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    height: 120,
    marginTop: 10,
  },
  name:{
    paddingTop:30,
    color:'black', 
    fontSize:18,
  },
  inforButton: {
    display: 'flex',
    flexDirection: 'row',
    width: 240,
    justifyContent: 'space-between',
    paddingTop:20,
  },
  headerContainer: {
    height: 120,
    backgroundColor: 'white',
  },
  headerButton: {
    borderRadius: 50,
    backgroundColor: '#E4E3E8',
    width: 120,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmButton: {
    backgroundColor: '#0077EA',
    borderRadius: 5,
    width: 115,
    height: 35,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButton: {
    backgroundColor: '#E4E3E8',
    borderRadius: 5,
    width: 115,
    height: 35,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
