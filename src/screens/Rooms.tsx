import {
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import Button from '../components/UI/Button.tsx';
import {COLORS, ROUTES} from '../constants';
import Popover from '../components/modal/Popover.tsx';
import CreateRoom from '../components/modal/CreateRoom.tsx';

export default function Rooms({navigation}: {navigation: any}) {
  const [modalVisible, setModalVisible] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Popover
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          content={
            <CreateRoom
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
            />
          }>
          <TouchableOpacity
            style={[styles.button, styles.buttonOpen]}
            activeOpacity={0.8}
            onPress={() => setModalVisible(true)}>
            <Text style={styles.textStyle}>방생성</Text>
          </TouchableOpacity>
        </Popover>
      ),
    });
  }, [modalVisible, navigation]);

  return (
    <View>
      <Text>Rooms</Text>
      <Button
        onPress={() => navigation.navigate(ROUTES.WAITING_ROOM)}
        text={'Waiting Room'}
        colors={['red', 'red']}
      />
      <Button
        onPress={() => navigation.navigate(ROUTES.PLAY)}
        text={'play'}
        colors={['red', 'red']}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    elevation: 2,
    justifyContent: 'center',
    paddingHorizontal: 10,
    height: 30,
    position: 'relative',
    right: 10,
    top: Platform.select({ios: '-50%', android: '-30%'}),
  },
  buttonOpen: {
    backgroundColor: COLORS.primary,
  },
  textStyle: {
    color: 'white',
  },
});
