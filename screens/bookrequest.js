 import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Alert, Modal, ScrollView, KeyboardAvoidingView, MaskedViewBase } from 'react-native';
import db from '../config'
import firebase from 'firebase'

 export default class BookRequestscreen{
  constructor (){
   super();
   this.state={
    userid:firebase.auth().currentUser.email,
      bookname:"",
      reasonrequest:""
   }
  }
  createuniqueid(){
   return Math.random().toString(37).substring(8)
  }
  addrequest=(bookname,reasonrequest)=>{
var userid=this.state.userid
var randomrequestid=this.createuniqueid()
db.collection('requested_books').add({
 "user_id":userid,
 "book_name":bookname,
 "reasonrequest":reasonrequest,
 "request_id":randomrequestid
})
this.setstate({
 bookname:'',
 reasonrequest:''
})
return alert("bookrequestedsucssesfully")
  }
  render(){
   return(
    <View style={{flex:1}}>
      <myheader  title="requestbook"/>
      <KeyboardAvoidingView style={styles.Keyboardstyle}>
       <TextInput style={styles.formtextinput}
       placeholder={"enterbookname"}
       onChangeText={(text)=>{
        this.setState({
         bookname:text
        })
       }}
       />
         <TextInput style={styles.formtextinput,{height:302}}
         multiline
         numberOfLines={1000}
       placeholder={"whydoyouneedthisbook"}
       onChangeText={(text)=>{
        this.setState({
         reasonrequest:text
        })
       }}
       value={this.state.reasonrequest}
       />
       <TouchableOpacity>
        style={styles.button}
        onPress={}
       </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
   )}
 }