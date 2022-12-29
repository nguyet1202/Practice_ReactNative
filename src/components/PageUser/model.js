import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
const HEIGHT_MODAL = 120;
const WIDTH_MODAL= Dimensions.get('window').width;
const NewModel = (props) => {
  const closeModal =(bool,data)=>{
    props.changeModalVisible(bool);
    props.setData(data);
  }
  return (
      <TouchableOpacity disabled={true} style={styles.container}>
        <View style={styles.modal}>
          <View style={styles.textView}>
            <Text style={styles.text}>
            Bạn có chắc chắn muốn xóa ?
            </Text>
          </View>
          <View style={styles.buttonView}>
          <TouchableOpacity style={styles.TouchableOpacity} onPress={()=>closeModal(false,'Cancel')}>
            <Text style={styles.text}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.TouchableOpacity}>
            <Text style={styles.text}>OK</Text>
          </TouchableOpacity>
        </View>
        </View>
      </TouchableOpacity>
  );
};

export default NewModel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
  },
  modal: {
    height: HEIGHT_MODAL,
    width:WIDTH_MODAL -80,
    paddingTop: 10,
    backgroundColor: '#F2F2F2',
    borderRadius: 20,
  },
  text:{
    margin:5,
    fontSize:16,
    fontWeight:'bold',
    color:'#0077EA',
  },
  TouchableOpacity:{
    flex:1,
    paddingVertical:10,
    alignItems:'center',
  },
  textView:{
    flex:1,
    alignItems:'center',
  },
  buttonView:{
    width:'100%',
    flexDirection:'row',
  }
});
