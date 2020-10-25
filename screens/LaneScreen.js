import React from 'react';
import { View, Text ,StyleSheet, FlatList,TouchableOpacity, TextInput, Alert} from 'react-native';
export default class Lane extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      TextInputId: '',
      TextInputName: '',
      TextInputEmail: '',
      TextInputPhoneNumber: ''
    }
  }

  componentDidMount(){    
    this.setState({
      TextInputId : this.props.route.params.id,
      TextInputName : this.props.route.params.name,
      TextInputEmail : this.props.route.params.email,
      TextInputPhoneNumber : this.props.route.params.phone_number
    })
  }

  UpdateUser= () =>{
    fetch('http://192.168.56.1/tr_reactnative/update.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id : this.state.TextInputId,
        name : this.state.TextInputName,
        email : this.state.TextInputEmail,
        phone_number : this.state.TextInputPhoneNumber
      })
    }).then((response) => response.json())
      .then((responseJson) => {
        Alert.alert(responseJson);
      }).catch((error) => {
        console.error(error);
      });
  }

  DeleteUser= () =>{
    fetch('http://192.168.56.1/tr_reactnative/delete.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id : this.state.TextInputId
      })
    }).then((response) => response.json())
      .then((responseJson) => {
        Alert.alert(responseJson);
      }).catch((error) => {
        console.error(error);
      });
  }
  render(){
    return (
      <View style={styles.container,{flex:1}}>
        <View style={{flex:1, justifyContent:'center', flexDirection:'column'}}> 
        <TextInput
              style={styles.input}
              placeholder = "Username..."
              placeholderTextColor = "#9a73ef"
              onChangeText={ TextInputValue => this.setState({ TextInputName : TextInputValue }) }
              value={this.state.TextInputName}
          />

          <TextInput
              style={styles.input}
              placeholder = "Email..."
              placeholderTextColor = "#9a73ef"
              onChangeText={ TextInputValue => this.setState({ TextInputEmail : TextInputValue }) }
              value={this.state.TextInputEmail}
          />
          <TextInput
              style={styles.input}
              placeholder = "Phone Number..."
              placeholderTextColor = "#9a73ef"
              onChangeText={ TextInputValue => this.setState({ TextInputPhoneNumber : TextInputValue }) }
              value={this.state.TextInputPhoneNumber}
          />
          <TouchableOpacity
              style = {styles.submitButton}
              onPress={this.UpdateUser}
              >
              <Text style={ styles.submitButtonText}>Update</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style = {styles.submitButton}
              onPress={this.DeleteUser}
              >
              <Text style={ styles.submitButtonText}>Delete</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style = {styles.submitButton}
              onPress={() => this.props.navigation.goBack()}              >
              <Text style={ styles.submitButtonText}>Back</Text>
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
