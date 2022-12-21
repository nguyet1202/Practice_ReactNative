import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Button,
  Alert,
} from 'react-native';
import React, {useState} from 'react';

const Example = () => {
  const [loading, setloading] = useState(false);

  const StartLoading = () => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 3000);
  };
  return (
    <ScrollView style={styles.container}>
      <Text style={{color:'black', fontSize:30,}}> eSports news </Text>
      <View>
        <Image
          style={styles.image}
          source={{
            uri: 'https://i.pinimg.com/564x/20/2e/6d/202e6d60967b4ac69d09e7d27617e3d0.jpg',
          }}
        />
        <Text>
          T1’s record-breaking undefeated 18-0 record tops the LCK Spring Split
          2022
        </Text>
        {loading ? (
          <ActivityIndicator color="#00ff00" size="large" />
        ) : (
          <View style={styles.seemore}>
            <TouchableOpacity
              style={styles.button}
              title="StartLoading"
              onPress={StartLoading}>
              <Text style={styles.text}> See more </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      <View>
        <TextInput style={styles.input} defaultValue="input here" />
        <Button disabled title="send" style={styles.buttonsend}>
          <Text style={styles.text}> comment </Text>
        </Button>
        <TouchableOpacity
          onPress={() => {
            Alert.alert('đã comment nhaaa');
          }}>
          <Image
            style={styles.imageButtonStyle}
            source={{
              uri: 'https://www.transparentpng.com/thumb/click-here-button/Gaezhb-click-here-button-images-png.png',
            }}></Image>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Example;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingLeft: 25,
    paddingRight: 25,
  },
  image: {
    width: '100%',
    height: 200,
    flex: 1,
    marginTop: 15,
    marginBottom: 15,
    justifyContent: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  title: {
    textAlign: 'center',
    fontSize: 25,
    color: '#36B1BF',
  },
  input: {
    marginTop: 10,
    marginBottom: 10,
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
  },
  seemore: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    margin: 10,
    width: 150,
    height: 30,
    backgroundColor: '#D96941',
    color: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  imageButtonStyle: {
    width: 70,
    height: 70,
  },
  text: {
    color: 'white',
  },
  buttonsend: {},
});
