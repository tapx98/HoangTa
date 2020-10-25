import React, { Component } from 'react';
import { View, Text ,StyleSheet, FlatList,TouchableOpacity, TextInput, Alert} from 'react-native';
import { Container, Header, Content, Tab, Tabs, List, ListItem } from 'native-base';
export default class Tab2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: []
    }
  }

  Action_Click(id, name, email, phone_number) {
    this.props.navigation.navigate("Lane", {
      id: id,
      name: name,
      email: email,
      phone_number: phone_number
    })
  }

  componentDidMount() {
    fetch('http://192.168.56.1/tr_reactnative/getdataUsers.php')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: responseJson,
        })
      })
  }

  _renderItem = ({ item, index }) => {
    return (
      <View style={styles.item}>
      <Text
        style={styles.textitem}
        onPress={this.Action_Click.bind(this,
          item.id,
          item.name,
          item.email,
          item.phone_number
        )}
      >
        {item.name}
      </Text>
    </View>
    )
  }

  render() {
    let { dataSource } = this.state

    return (
      <View style={styles.containerDatastudents}>
      <FlatList
        data={dataSource}
        renderItem={this._renderItem}
        keyExtractor={(item, index) => index.toString()}
      >
      </FlatList>
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
