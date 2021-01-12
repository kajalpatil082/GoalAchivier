import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  TextInput,
  AlertIOS,Button,Image,ActivityIndicator,Alert,AsyncStorage
} from 'react-native';

import { db } from './config';

let addItem = (name,number,password) => {
   
  db.ref('/items').push({
    name: name,
    number: number,
    password: password
  });
};

export default class AddItem extends Component {
  state = {
    name: '',
    number:'',
    password:'',
    isLoading: false
  };

  handleChange = e => {
    this.setState({
      name: e.nativeEvent.text
    });
  };
  handleChange1 = e => {
    this.setState({
      number: e.nativeEvent.text
    });
  };
  handleChange2 = e => {
    this.setState({
      password: e.nativeEvent.text
    });
  };
  handleSubmit = async () => {
    if(this.state.name === '' && this.state.number === '') 
    {
        Alert.alert('Enter details to signup!')
      } 
      else {
        this.setState({
          isLoading: true,
        })
    
   addItem(this.state.name,this.state.number,this.state.password);
   await AsyncStorage.setItem('isFirstTime',  'true');
    alert('Registaration  successfully');
    this.props.navigation.navigate('Dashboard')
    
      }
  };

  render() {
    if(this.state.isLoading){
        return(
          <View style={styles.preloader}>
            <ActivityIndicator size="large" color="#9E9E9E"/>
          </View>
        )
      }    
    return (
        <View style={styles.container}>  
        <View style={{ alignItems: "center",
    alignContent: "center"}}>
        <Image
          source={require("../app-assets/splash2.png")}
          resizeMode={'center'}
          style={{ width:200,height:200 }}
        />
        <Text style={{ fontSize: 23, fontWeight: "bold", color: "#FFFFFF" }}>
        Goal Achiever Academy
        </Text>
        <Text style={{ fontSize: 18, color: "#FFFFFF" }}>
          {" "}
       Quality Never Compromise{" "}
        </Text>
      </View>
        <TextInput
          style={styles.inputStyle}
          placeholder="Full Name"
          value={this.state.name}
          onChange={this.handleChange}
        />      
        <TextInput
          style={styles.inputStyle}
          placeholder=" Number"
          value={this.state.email}
          onChange={this.handleChange1}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Qualification"
          value={this.state.password}
          onChange={this.handleChange2}
          maxLength={15}
          
        />   
        <Button
          color="#3740FE"
          title="Signup"
          onPress={this.handleSubmit}
        />
        </View>
    //   <View style={styles.main}>
    //     <Text style={styles.title}>Add Item</Text>
    //     <TextInput
    //       style={styles.inputStyle}
    //       placeholder="Name"
    //       value={this.state.name}
    //       onChange={this.handleChange}
    //     />   
    //     <TextInput
    //       style={styles.inputStyle}
    //       placeholder="Name"
    //       value={this.state.name}
    //       onChange={this.handleChange}
    //     />       
    //     <TextInput style={styles.itemInput} placeholder='Name' onChange={this.handleChange} />
    //     <TextInput style={styles.itemInput} placeholder='Number' onChange={this.handleChange1} />
    //     <TextInput style={styles.itemInput}  placeholder='Password' onChange={this.handleChange2} />
    //     <TouchableHighlight
    //       style={styles.button}
    //       underlayColor="white"
    //       onPress={this.handleSubmit}
    //     >
            
    //       <Text style={styles.buttonText}>Add</Text>
    //     </TouchableHighlight>
    //   </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 35,
        backgroundColor: '#fff'
      },
  main: {
    flex: 1,
    padding: 30,
    flexDirection: 'column',
    justifyContent: 'center',
   // backgroundColor: '#6565fc'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center'
  },
  itemInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    color: 'gray'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  inputStyle: {
    width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#000",
    borderBottomWidth: 1
  },
  loginText: {
    color: '#3740FE',
    marginTop: 25,
    textAlign: 'center'
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
});