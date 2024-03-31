import {
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';
import colors from '../../constants/colors.ts';
import Input from '../UI/Input.tsx';
import SwitchToggle from '../UI/SwitchToggle.tsx';
import {COLORS} from '../../constants';

export default function CreateRoom({
  modalVisible,
  setModalVisible,
}: {
  modalVisible: boolean;
  setModalVisible: any;
}) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.mainContainer}>
            <Title txt="게임방 만들기" />
            <View style={styles.hr} />
            <View style={styles.inputContainer}>
              <Text style={styles.label}>방 제목</Text>
              <Input placeholder="방 이름" style={styles.input} />
            </View>
            <View style={styles.switchContainer}>
              <SwitchToggle isEnabled={isEnabled} toggleSwitch={toggleSwitch} />
            </View>
            {isEnabled && (
              <View style={styles.inputContainer}>
                <Text style={styles.label}>패스워드</Text>
                <Input placeholder="패스워드" style={styles.input} />
              </View>
            )}
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.6}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>확인</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.6}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>취소</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

function Title({txt}: {txt: string}) {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.modalTitle}>{txt}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  modalView: {
    backgroundColor: colors.primary,
    width: '90%',
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    padding: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  mainContainer: {
    backgroundColor: colors.white,
    borderRadius: 15,
    width: '100%',
    paddingVertical: 20,
    alignItems: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  label: {
    color: COLORS.gray,
  },
  input: {
    height: 40,
    marginTop: 5,
  },
  modalTitle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primary,
  },
  switchContainer: {
    width: '90%',
  },
  switchTxt: {
    color: colors.gray,
  },
  inputContainer: {
    width: '90%',
    marginTop: 10,
  },
  hr: {
    borderBottomColor: colors.grayLight,
    borderBottomWidth: 2,
    paddingVertical: 10,
    width: '90%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    gap: 10,
    height: 40,
  },
  button: {
    width: 100,
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.gradientForm,
    borderRadius: 5,
    backgroundColor: colors.gradientForm,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
