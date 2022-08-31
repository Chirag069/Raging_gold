import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  Alert,
} from 'react-native';
import {Input, } from 'native-base';
import {Button} from 'react-native-paper';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';


//icon
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';



const CustomHeader = () => {
  const navigation=useNavigation()
    const [modalVisible, setModalVisible] = useState(false);
  return (
    <View
    style={{
      backgroundColor: '#c79248',
      paddingHorizontal: scale(10),
      flexDirection: 'row',
      justifyContent: 'space-between',
    }}>
    <View style={{flexDirection: 'row'}}>
      <Modal
        animationType="slide"
        
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.6)',
            
          }}>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: scale(15),
              paddingHorizontal: scale(40),
              paddingVertical: verticalScale(20),
              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: scale(2),
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
            }}>
            <Text
              style={{
                fontSize: moderateScale(17),
                color: 'black',
                fontWeight: 'bold',
                marginBottom:verticalScale(5)
              }}>
              Serch Any Product
            </Text>
            <Input
              autoFocus={true}
              width={scale(220)}
              variant="underlined"
              _focus={{borderColor: '#c79248'}}
              _input={{fontSize: verticalScale(15), placeholderTextColor: 'black'}}
              placeholder="Serch Product"
            />
            <View style={{flexDirection: 'row', marginTop: scale(20)}}>
              <Button
                mode="text"
                onPress={() => setModalVisible(!modalVisible)}
                contentStyle={{height: verticalScale(35),  width: scale(100),}}
                labelStyle={{fontSize:20}}
                style={{
                  borderColor: '#c79248',
                  borderWidth: scale(1),
                  borderRadius: 0,
                  justifyContent: 'center',
                  marginRight: scale(20),
                  
                }}
                buttonColor="white"
                textColor="#c79248">
                CANCEL
              </Button>
              <Button
                onPress={() => navigation.navigate('ProductList')}
                contentStyle={{height: verticalScale(35), width: scale(100),}}
                labelStyle={{fontSize:20}}
                style={{
                  borderRadius: 0,
                  justifyContent: 'center',
                  width: scale(100),
                }}
                buttonColor="#c79248"
                textColor="white">
                SERCH
              </Button>
            </View>
          </View>
        </View>
      </Modal>
      <TouchableOpacity onPress={()=>navigation.dispatch(DrawerActions.openDrawer())}>
        <Entypo name="list" size={scale(30)} color={'white'} />
      </TouchableOpacity>
      <Image
        style={{height: verticalScale(30), width: verticalScale(120), marginTop: scale(5)}}
        source={require('../../../assets/Images/Raging-Gold.png')}
      />
    </View>
    <TouchableOpacity onPress={() => setModalVisible(true)}>
      <AntDesign name="search1" size={scale(25)} color="white" />
    </TouchableOpacity>
  </View>
  )
}

export default CustomHeader