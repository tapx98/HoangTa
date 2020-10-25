import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput, Alert } from 'react-native';
import { Container, Header, Content, Tab, Tabs, List, ListItem } from 'native-base';
import Tab1 from './tabs/tab1';
import Tab2 from './tabs/tab2';
export default class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <Tabs>
          <Tab heading="Thêm user">
            <Tab1 />
          </Tab>
          <Tab heading="Danh sách users">
            <Tab2/>
          </Tab>
        </Tabs>
      </Container>
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
    padding: 10,
    borderColor: '#7a42f4',
    borderWidth: 1
  },
  submitButton: {
    backgroundColor: '#009688',
    padding: 10,
    margin: 15,
    height: 40,
    borderRadius: 4
  },
  submitButtonText: {
    color: 'white',
    textAlign: 'center',
    textTransform: 'uppercase'
  },
  containerDatastudents: {
    flex: 1
  },

  item: {
    padding: 20,
    fontSize: 16,
    backgroundColor: 'green'
  },
  textitem: {
    color: "#fff",
  },
  MainContainer: {
    alignItems: 'center',
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#fff'
  }
})