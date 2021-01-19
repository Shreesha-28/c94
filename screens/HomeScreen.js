import React, { Component } from 'react';
import { StyleSheet, Text, View,TouchableOpacity,TextInput,Modal,ScrollView,KeyboardAvoidingView,Image,Button} from 'react-native';
import db from'../config';
import firebase from 'firebase';
import {RFValue} from 'react-native-responsive-fontsize'

export default class HomeScreen extends Component{
    state = {
        curTime: null,
        electricity:''
    }
    fetchElectricityDetails=async(text)=>{
        
         alert(this.state.curTime)
        const electricityRef=await db.collection("electricity").where("month","==",text).get()
        electricityRef.docs.map((doc)=>{
            
            var electricity=doc.data().electricity
            this.setState({
                electricity:electricity
            })
        })
        //alert(this.state.electricity)
       
    }
    fetchWaterDetails=async(text)=>{
        
        //alert(this.state.curTime)
       const WaterRef=await db.collection("Water").where("month","==",text).get()
       WaterRef.docs.map((doc)=>{
          alert(doc.data()) 
           var Water=doc.data().Water
           this.setState({
            Water:Water
           })
       })
       //alert(this.state.electricity)
      
   }
    showCurrentDate=()=>{
       
    }
    componentDidMount(){ 
        //this.showCurrentDate()
        var month=new Date().getMonth()+1
        this.setState({
            curTime:month
        })
    }
    
    render(){
       
        return(
            <View style={styles.container}>
                <View>
               <Button title="press me" onPress={()=>{this.fetchElectricityDetails(this.state.curTime)}}/>
                </View>
                <View>
               <Button title="press me" onPress={()=>{this.fetchWaterDetails(this.state.curTime)}}/>
                </View>
                <View style={{justifyContent:'flex-start'}}>
                <Text style={styles.title}>Resource Management System</Text>
            </View>
            <View>
                <Text >{this.state.curTime}</Text>
              <Text>{this.state.electricity}</Text>
            </View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    title:{
        flex:0.2,
        justifyContent:'flex-start',
        alignItems:'center',
        fontSize:65,
        borderWidth:5,
        backgroundColor:'orange'
    },
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'flex-start',

    }
})