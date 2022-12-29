import React, {useState} from 'react';
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import NewModel from './model';

const Item = ({item}) => {
  const [choosedata, setchoosedata] = useState();

  const [isModalVisible, setisModalVisible] = useState(false);
  const changeModalVisible = bool => {
    setisModalVisible(bool);
  };
  const setData = data => {
    setchoosedata(data);
  };
  return (
    <TouchableOpacity style={styles.item}>
      <Image style={styles.img} source={{uri: item.Image}} />
      <View style={styles.infor}>
        <Text style={styles.name}>{item?.user_name}</Text>
        <View style={styles.inforButton}>
          <TouchableOpacity style={styles.confirmButton}>
            <Text style={{color: 'white', fontSize: 15}}>Confirm</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => changeModalVisible(true)}>
            <Text style={{color: 'black', fontSize: 15}}>Delete</Text>
          </TouchableOpacity>
          <Modal
            transparent={true}
            animationType="fade"
            visible={isModalVisible}
            nRequestClose={() => changeModalVisible(false)}>
            <NewModel
              changeModalVisible={changeModalVisible}
              setData={setData}
            />
          </Modal>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Item;

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    height: 120,
    marginTop: 10,
  },
  img: {
    margin: 20,
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  name: {
    paddingTop: 30,
    color: 'black',
    fontSize: 18,
  },
  inforButton: {
    display: 'flex',
    flexDirection: 'row',
    width: 240,
    justifyContent: 'space-between',
    paddingTop: 20,
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
