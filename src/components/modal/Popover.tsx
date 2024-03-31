import {Modal, StyleSheet, View} from 'react-native';
import React from 'react';
import colors from '../../constants/colors.ts';

type PopoverProps = {
  content: any;
  children: any;
  modalVisible: boolean;
  setModalVisible: any;
};

export default function Popover({
  content,
  children,
  modalVisible,
  setModalVisible,
}: PopoverProps) {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        {content}
        <View style={styles.background} />
      </Modal>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  background: {
    backgroundColor: colors.black,
    opacity: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 0,
  },
});
