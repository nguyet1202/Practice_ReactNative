import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Item from '../components/PageUser/Items';
import {DATA} from '../components/PageUser/data/index';

const Users = () => {
  const [realdata, setrealData] = useState(DATA);
  useEffect(() => {
    setrealData(DATA);
  }, []);
  const renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <Text style={{color: 'black', fontSize: 25}}>Đề xuất cho bạn</Text>
          <Image
            style={styles.iconSearch}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/54/54481.png',
            }}
          />
        </View>
        <View style={styles.viewBotton}>
          <TouchableOpacity style={styles.headerButton}>
            <Text style={{color: 'black', fontSize: 15}}>suggestion</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerButton}>
            <Text style={{color: 'black', fontSize: 15}}>Your Friends</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  const renderEmpty = () => {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyMessageStyle}>Empty</Text>
      </View>
    );
  };

  return (
    <FlatList
      ListHeaderComponent={renderHeader}
      ListEmptyComponent={renderEmpty}
      contentContainerStyle={styles.contentContainer}
      keyExtractor={item => item.id}
      data={realdata}
      renderItem={({item}) => {
        return <Item item={item} />;
      }}
    />
  );
};

export default Users;

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  emptyMessageStyle: {
    textAlign: 'center',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
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
  viewBotton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 280,
    padding: 10,
  },
  iconSearch: {
    width: 25,
    height: 25,
  },
});
