// TemplateImage.js
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const imageMapping = {
    template1: require('../assets/template1.png'),
    template2: require('../assets/template2.png'),
    template3: require('../assets/template3.png'),
    template4: require('../assets/template4.png'),
    template5: require('../assets/template5.png'),
  };

const TemplateImage = ({ templateName, style }) => {
  const imageSource = imageMapping[templateName];

  if (!imageSource) {
    // Optionally handle the case where the image source is not found
    return null;
  }

  return <Image source={imageSource} style={[styles.image, style]} />;
};

TemplateImage.propTypes = {
  templateName: PropTypes.string.isRequired,
  style: PropTypes.object,
};

const styles = StyleSheet.create({
  image: {
    width: 343,
    height: 201,
    resizeMode: 'contain',
  },
});

export default TemplateImage;
