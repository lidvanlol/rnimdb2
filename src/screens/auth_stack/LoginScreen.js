import React, {useRef, useState} from 'react';
import {TextInput, Title} from 'react-native-paper';
import {
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
} from 'react-native';

import {SPACINGS} from '../../core/theme';
import {IMAGES} from '../../core/constants/images';
import {ROUTES} from '../../core/constants/routes';

import PrimaryButton from '../../components/common/PrimaryButton';
import VerticalSpacer from '../../components/common/VerticalSpacer';
import LabelledCheckbox from '../../components/common/LabelledCheckbox';

const LoginScreen = ({navigation}) => {
 
  const onLoginPressed = () => {
    navigation.replace(ROUTES.root_stack);
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}
      keyboardShouldPersistTaps="handled">
      <KeyboardAvoidingView behavior="position">
       
        <PrimaryButton label="Log in" onPress={onLoginPressed} />
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default LoginScreen;

const size = Dimensions.get('window').width;

const styles = StyleSheet.create({
  logo: {
    height: size * 0.4,
    resizeMode: 'contain',
    alignSelf: 'center',
  },

  contentContainer: {
    padding: SPACINGS.md,
    paddingTop: SPACINGS.xxxl,
  },

  txtLogin: {
    textAlign: 'center',
  },
});
