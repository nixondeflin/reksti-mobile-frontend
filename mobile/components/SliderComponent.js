// SliderComponent.js
import React, { useRef } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import TemplateImage from './TemplateImage';

const { width: viewportWidth } = Dimensions.get('window');

const SliderComponent = () => {
  const carouselRef = useRef(null);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <TemplateImage templateName={item} style={styles.cardImage} />
      <Text style={styles.label}>{`Template ${item.replace('template', '')}`}</Text>
    </View>
  );

  return (
    <Carousel
      ref={carouselRef}
      data={['template1', 'template2', 'template3', 'template4', 'template5']}
      renderItem={renderItem}
      sliderWidth={viewportWidth}
      itemWidth={viewportWidth * 0.8}
      layout={'default'}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginLeft: 25,
    marginRight: 25,
  },
  cardImage: {
    width: 200,
    height: 200,
  },
  label: {
    marginTop: 10,
    fontSize: 16,
  },
});

export default SliderComponent;
