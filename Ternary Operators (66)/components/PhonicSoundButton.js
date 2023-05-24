import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

export default class PhonicSoundButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pressButtonIndex: '',
    };
  }
  playSound = async (soundChunk) => {
    console.log(soundChunk);
    var soundLink =
      'https://s3-whitehatjrcontent.whjr.online/phones/' + soundChunk + '.mp3';
    await Audio.Sound.createAsync(
      {
        uri: soundLink,
      },
      { shouldPlay: true }
    );
  };
  render() {
    return (
      <TouchableOpacity
        style={
          this.props.buttonIndex === this.state.pressButtonIndex
            ? [
                styles.chunkButton,
                { backgroundColor: 'purple', borderColor: 'pink' },
              ]
            : [
                styles.chunkButton,
                { backgroundColor: 'red', borderColor: 'orange' },
              ]
        }
        onPress={() => {
          this.setState({ pressButtonIndex: this.props.buttonIndex });
          this.playSound(this.props.soundChunk);
        }}>
        <Text
          style={
            this.props.buttonIndex === this.state.pressButtonIndex
              ? [styles.displayText, { color: 'pink' }]
              : [styles.displayText, { color: 'orange' }]
          }>
          {this.props.wordChunk}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  displayText: {
    textAlign: 'center',
    justfyContent: 'center',
    fontSize: 30,
    color: 'orange',
  },
  chunkButton: {
    width: '40%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    borderWidth: 4,
    margin: 5,
    backgroundColor: 'red',
  },
});
