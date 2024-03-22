import {
  Alert,
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useCallback} from 'react';
import Colors from '../constants/colors.ts';
import {COLORS, ROUTES} from '../constants';
import SecondButton from '../components/UI/SecondButton.tsx';

type OpenURLButtonProps = {
  url: string;
};

export default function Home({navigation}: {navigation: any}) {
  const OpenURLButton = ({url}: OpenURLButtonProps) => {
    const handlePress = useCallback(async () => {
      // Checking if the link is supported for links with custom URL scheme.
      const supported = await Linking.canOpenURL(url);

      if (supported) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    }, [url]);

    return (
      <SecondButton onPress={handlePress} txt={'자세히 보기'} style={{}} />
    );
  };

  return (
    <ScrollView style={styles.screen} alwaysBounceVertical={false}>
      <View style={styles.container}>
        <Image
          style={styles.banner}
          source={require('../assets/banner1.png')}
        />
        <View style={styles.summaryContainer}>
          <Text style={styles.summaryTitle}>Ghost Extract</Text>
          <Text style={[styles.summaryTxt, styles.mb20]}>
            <Text style={styles.txtRed}>Ghost 보드게임</Text>은 2인용
            심리게임으로
          </Text>
          <Text style={[styles.summaryTxt, styles.txtBlue, styles.mb10]}>
            * 승리조건 *
          </Text>
          <Text style={[styles.summaryTxt, styles.bgW]}>
            1. 상대방의 파란 유령말 4개를 모두 잡기
          </Text>
          <Text style={[styles.summaryTxt]}>
            단, 빨간 유령말 4개를 모두 잡아내면 패배하는 게임입니다.
          </Text>
          <Text style={[styles.summaryTxt, styles.bgW]}>
            2. 나의 파랑 유령말이
          </Text>
          <Text style={[styles.summaryTxt, styles.bgW]}>
            상대방의 화살표 밖으로 벗어나면 승리
          </Text>
        </View>
        <OpenURLButton url={'https://brainterrace.tistory.com/88'} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.white,
    // backgroundColor: Colors.grayLight,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
  },
  bannerContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  banner: {
    flex: 1,
    marginTop: 30,
    width: '100%',
    borderRadius: 10,
    height: 250,
  },
  summaryContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
    width: '100%',
  },
  summaryTitle: {
    fontSize: 21,
    textAlign: 'center',
    color: COLORS.gray,
    fontWeight: 'bold',
    width: '100%',
    marginBottom: 20,
  },
  summaryTxt: {
    fontSize: 16,
    textAlign: 'center',
    color: COLORS.gray,
    fontWeight: '600',
  },
  text: {
    textAlign: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  mb10: {
    marginBottom: 10,
  },
  mb20: {
    marginBottom: 20,
  },
  txtRed: {
    color: COLORS.danger,
  },
  txtBlue: {
    color: COLORS.blue,
  },
  bgW: {
    backgroundColor: COLORS.txtBg,
  },
});
