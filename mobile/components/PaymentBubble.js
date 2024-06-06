import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import CustomText from './CustomText';

const images = {
  'Bank BCA': require('../assets/icon/bca.png'),
  'Bank BNI': require('../assets/icon/bni.png'),
  'OVO': require('../assets/icon/ovo.png'),
  'GoPay': require('../assets/icon/gopay.png'),
};

const PaymentBubble = ({ type, desc, selected, onPress }) => {
  const imageSource = images[type];
  return (
    <TouchableOpacity onPress={onPress} style={[styles.cardContainer, selected && styles.selectedCard]}>
      <View style={[styles.flexrow, { gap: 10, alignItems: 'center' }]}>
        <Image source={imageSource} style={styles.profileImage} />
        <View>
          <CustomText fontWeight="700" fontSize={16}>{type}</CustomText>
          <CustomText fontWeight="400" fontSize={12}>{desc}</CustomText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    borderRadius: 20,
    padding: 20,
    elevation: 10,
  },
  selectedCard: {
    borderColor: '#008edb',
    borderWidth: 2,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 15,
  },
  flexrow: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export default PaymentBubble;
