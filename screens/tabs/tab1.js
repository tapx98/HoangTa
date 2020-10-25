import React, { Component } from 'react';
import { View, Text ,StyleSheet, FlatList,TouchableOpacity, TextInput, Alert} from 'react-native';
export default class Tab1 extends Component {
    state = {
        username: '',
        email: '',
        phone:''
      }
      handleName = (text) => {
          this.setState({ username: text })
      }
      handleEmail = (text) => {
          this.setState({ email: text })
      }
      handlePhone = (text) => {
        this.setState({ phone: text })
      }
       login = (username, email, phone) => {
        fetch('http://192.168.56.1/tr_reactnative/insert.php',{
          method:'POST',
          headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
          },
          body: JSON.stringify({
            name: username,
            email: email,
            phone_number:phone
          }),        
        }).then((response) => response.json())
        .then((responseJson) => {
          Alert.alert(responseJson);
        }).catch((error) =>{
          console.error(error);
        })
    }
      render(){
        return (
          <View style={styles.container,{flex:1}}>
            <View style={{flex:1, justifyContent:'center', flexDirection:'column'}}> 
            <TextInput
                  style={styles.input}
                  underlineColorAndroid = "transparent"
                  placeholder = "Username..."
                  placeholderTextColor = "#9a73ef"
                  autoCapitalize = "none"
                  onChangeText = {this.handleName}
              />
    
              <TextInput
                  style={styles.input}
                  underlineColorAndroid = "transparent"
                  placeholder = "Email..."
                  placeholderTextColor = "#9a73ef"
                  autoCapitalize = "none"
                  onChangeText = {this.handleEmail}
              />
              <TextInput
                  style={styles.input}
                  underlineColorAndroid = "transparent"
                  placeholder = "Phone Number..."
                  placeholderTextColor = "#9a73ef"
                  autoCapitalize = "none"
                  onChangeText = {this.handlePhone}
              />
              <TouchableOpacity
                  style = {styles.submitButton}
                  onPress={
                    () => this.login(this.state.username, this.state.email, this.state.phone)
                  }
                  >
                  <Text style={ styles.submitButtonText}>SAVE</Text>
              </TouchableOpacity>
            </View>
    
          </View>
          
        );
      }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 23
    },
    input: {
        margin: 15,
        height: 40,
        padding:10,
        borderColor: '#7a42f4',
        borderWidth: 1
    },
    submitButton: {
        backgroundColor: '#009688',
        padding: 10,
        margin: 15,
        height: 40,
        borderRadius:4
    },
    submitButtonText: {
        color: 'white',
        textAlign:'center',
        textTransform:'uppercase'
    },
    containerDatastudents:{
      flex:1,
      paddingTop:20,
      marginLeft:5,
      marginRight:5
    },

    item:{
      padding:10,
      borderBottomWidth:1,
      borderBottomColor:'#ddd'
    },

    MainContainer: {
      alignItems: 'center',
      flex: 1,
      paddingTop: 30,
      backgroundColor: '#fff'
    }
  })
