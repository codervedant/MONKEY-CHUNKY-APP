import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Header } from 'react-native-elements';
import db from './localdb';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      chunks: [],
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={'#9c8210'}
          centerComponent={{
            text: 'Monkey Chunky',
            style: { color: '#39FF14', fontSize: 20.5, fontWeight: 'bold' },
          }}
        />

        <Image
          style={styles.imageIcon}
          source={{
            uri:
              'https://www.shareicon.net/data/128x128/2015/08/06/80805_face_512x512.png',
          }}
        />

        <TextInput
          style={styles.inputBox}
          onChangeText={text => {
            this.setState({ text: text });
          }}
          value={this.state.text}
        />
        <TouchableOpacity
          style={styles.goButton}
          onPress={() => {
            this.setState({ chunks: db[this.state.text].chunks });
          }}>
          <Text style={styles.buttonText}>GO</Text>
        </TouchableOpacity>
        <View>
          {this.state.chunks.map(item => {
            return (
              <TouchableOpacity
              style={styles.chunkButton}
              >
              <Text style={styles.displayText}>{item}</Text>
              </TouchableOpacity>
              );
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  inputBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  goButton: {
     backgroundColor: '#39FF14',
    justifyContent: 'center',
    width: 100,
    height: 70,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
    borderWidth: 4,
    borderRadius: 20,
    borderColor: '#9c8210'
  },
  buttonText: {
    color: '#9c8210',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Arial',
  },
  displayText: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white'
  },
  imageIcon: {
    width: 150,
    height: 150,
    marginLeft: 100,
  },
  chunkButton:{
    width: '60%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    margin: 5,
    backgroundColor: 'red'
  }
});
