import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Button from './components/Button';
import ImageViewer from './components/ImageViewer';

import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

import CircleButton from './components/CircleButton';
import IconButton from './components/IconButton';

import EmojiPicher from './components/EmojiPicker';
const PlaceholderImage = require('./assets/images/background-image.png');

export default function App() {
  const [isModalVisible, setModalVisible] = useState(false);
  const[showAppOptions, setShowAppOptions] = useState(false);
  const [selectedImage, setSelectImage] = useState(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert('Você não selecionou nenhuma imagem.');
    }
  };

  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    setModalVisible(true);
  };
  const onModalClose = () => {
    setModalVisible(false);
  };

  const onSaveImageAsync = async () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer
         placeholderImageSource={PlaceholderImage} 
         selectedImage={selectedImage}
        />
      </View>
      {showAppOptions ? (
        <View style={styles.optionsContainer}> 
          <View style={styles.optionsRow}>
            <IconButton icon='refresh' label='Reset' onPress={onReset} />
            <CircleButton onPress={onAddSticker}/>
            <IconButton icon='save-alt' label='Save' onPress={onSaveImageAsync} />
          </View>
        </View> 
      ) : (
        
          <View style={styles.footerContainer}>
            <Button label={'Escolha uma foto'} theme={"primary"} onPress={pickImageAsync} />
            <Button label={'Use esta foto'} onPress={() => setShowAppOptions(true)} />
          </View>
        )
      } 
      <EmojiPicher isVisible={isModalVisible} onClose={onModalClose}>
        { }
      </EmojiPicher>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center', 
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
})