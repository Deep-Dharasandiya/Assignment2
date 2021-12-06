import React from 'react'
import { StyleSheet, Text, View ,TouchableOpacity,TextInput,Modal, ScrollView} from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/FontAwesome5';
import useOrientation from './useOrientation';
import  Colors  from '../Components/Color';
import DateTimePicker from '@react-native-community/datetimepicker';
import Spinner from 'react-native-loading-spinner-overlay';

export function Title(props) {
    const Orientation=useOrientation();
    const styles = StyleSheet.create({
       title:{
        fontSize: 25*Orientation.unit,
        color:Colors.white,
        fontWeight:'600',
        textAlign:'center',
        fontFamily:'Lato-BlackItalic'
       }
    })
    return (
      <Text style={styles.title} >
        {props.title}
      </Text>

    )
}
export function SubTitle(props) {
    const Orientation=useOrientation();
    const styles = StyleSheet.create({
       title:{
        fontSize: 20*Orientation.unit,
        color:Colors.black,
        fontFamily:'georgiaz',
        fontWeight:'600',
        marginTop:15*Orientation.unit,
       }
    })
    return (
      <Text style={styles.title} >
        {props.subtitle}
      </Text>

    )
}


export function TextField(props) {
    const Orientation=useOrientation();
    const styles = StyleSheet.create({
        textFeildView:{
            flexDirection: 'row',
            paddingRight: 10*Orientation.unit,
            marginTop: 10*Orientation.unit,
            borderRadius: 10*Orientation.unit,
            fontSize: 15*Orientation.unit,
            backgroundColor: Colors.blurblue,
        },
        icon:{
            marginHorizontal: 20*Orientation.unit,
            alignSelf: 'center',
            justifyContent: 'center'
        },
        textinput:{
            flex: 1,
            color:Colors.black
        }
    });
    return (
      <View style={styles.textFeildView}>
      <Icon
        style={styles.icon}
        name={props.iconname}
        color={Colors.gray}
        size={22*Orientation.unit}
      />
      <TextInput
        style={styles.textinput}
        keyboardType={props.keypadtipe}
        maxLength={props.maxlength}
        placeholder={props.lable}
        fontSize={20*Orientation.unit}
        multiline={props.ismultipleline}
        placeholderTextColor={Colors.gray}
        onChangeText={text => props.fn(text)}
        defaultValue={props.value}
      />
    </View>
    )
    
  }

  export function RoundedBorderButton(props) {
    const Orientation=useOrientation();
    const styles = StyleSheet.create({
       btnStyle:{
           flex:0.49,
           height:props.height,
           borderRadius:10*Orientation.unit,
           alignItems:'center',
           marginTop:10*Orientation.unit,
           backgroundColor:Colors.blurblue,
           flexDirection:'row'
       },
       btnText:{
           fontSize: 20*Orientation.unit,
           fontWeight:'600',
           color:Colors.gray
       },
       icon:{
        marginHorizontal: 20*Orientation.unit,
        alignSelf: 'center',
        justifyContent: 'center'
       },
    });
   return (
     <TouchableOpacity
     onPress={() => props.fn()}
     style={styles.btnStyle}
     >
         <Icon
        style={styles.icon}
        name={props.iconname}
        color={Colors.gray}
        size={22*Orientation.unit}
      />
          <Text style={styles.btnText}>
            {props.lable}
          </Text>
     </TouchableOpacity>
   )
}
export function SubmitButton(props) {
    const Orientation=useOrientation();
    const styles = StyleSheet.create({
       btnStyle:{
           flex:1,
           height:props.height,
           borderRadius:10*Orientation.unit,
           alignItems:'center',
           justifyContent:'center',
           marginVertical:20*Orientation.unit,
           backgroundColor:Colors.lightblue,
           flexDirection:'row'
       },
       btnText:{
           fontSize: 23*Orientation.unit,
           fontWeight:'600',
           color:Colors.white
       },
       icon:{
        marginHorizontal: 10*Orientation.unit,
        alignSelf: 'center',
        justifyContent: 'center'
       },
    });
   return (
     <TouchableOpacity
     onPress={() => props.fn()}
     style={styles.btnStyle}
     >
         <Icon
        style={styles.icon}
        name={props.iconname}
        color={Colors.white}
        size={22*Orientation.unit}
      />
          <Text style={styles.btnText}>
            {props.lable}
          </Text>
     </TouchableOpacity>
   )
}

export function DatePiker(props) {
    return (
        <DateTimePicker
        testID="dateTimePicker"
        minimumDate={new Date()}
        value={props.value}
        mode="date"
        is24Hour={true}
        display="calendar"
        onChange={props.fn}
      />
    )
    
  }
  export function TimePiker(props) {
    return (
        <DateTimePicker
            testID="TimePicker"
            value={props.value}
            mode="time"
            is24Hour={true}
            display="clock"
            onChange={props.fn}
          />

    )
    
  }

  export function RadioBtn(props) {
    const Orientation=useOrientation();
    const styles = StyleSheet.create({
       radioButtonView:{
        flexDirection:'row',
       },
       outerCircle:{
        height: 24*Orientation.unit,
        width: 24*Orientation.unit,
        borderRadius: 12*Orientation.unit,
        borderWidth: 2*Orientation.unit,
        borderColor: Colors.lightblue,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:10,
       },
       innerCircle:{
        height: 12*Orientation.unit,
        width: 12*Orientation.unit,
        borderRadius: 6*Orientation.unit,
        backgroundColor: Colors.lightblue,
       },
       lable:{
        color:Colors.black,
        fontSize:20*Orientation.unit,
        marginLeft:20*Orientation.unit,
       }
    });
    return (
      <TouchableOpacity
        onPress={() => props.fn(props.value)}
        style={styles.radioButtonView}
      >
      <View style={styles.outerCircle}>
        {
          props.selectedvalue == props.value?
            <View style={styles.innerCircle}/>
            : null
        }
      </View>
      <Text style={styles.lable}>{props.lable}</Text>
      
   </TouchableOpacity>
  )
}

export function Checkbox(props) {
    const Orientation=useOrientation();
    const styles = StyleSheet.create({
        checkBoxView:{
            flexDirection:'row',
            marginTop:20*Orientation.unit
        },
        lable:{
            color:Colors.black,
            fontSize:20*Orientation.unit
        }
    });
    return (
      <View style={styles.checkBoxView}>
      
      <CheckBox
      disabled={false}
      tintColors={{ true: Colors.lightblue, false: Colors.lightblue }}
      value={props.checkvalue}
      onValueChange={(newValue) => props.fn()}
    />
    <Text style={styles.lable}>{props.lable}</Text>
   </View>
    )
  }

  export function DropDown(props) {
    const Orientation=useOrientation();
    const styles = StyleSheet.create({
       btnStyle:{
           flex:0.49,
           height:props.height,
           borderRadius:10*Orientation.unit,
           alignItems:'center',
           marginTop:10*Orientation.unit,
           backgroundColor:Colors.blurblue,
           flexDirection:'row'
       },
       btnText:{
           fontSize: 20*Orientation.unit,
           fontWeight:'600',
           color:Colors.gray
       },
       icon:{
        marginHorizontal: 20*Orientation.unit,
        alignSelf: 'center',
        justifyContent: 'center'
       },
       container:{
         padding:20*Orientation.unit,
         marginVertical:50*Orientation.unit,
        width:Orientation.width*0.8,
        backgroundColor:Colors.white,
        borderRadius:10*Orientation.unit,
        shadowColor: Colors.black,
            shadowOffset: {width: -2, height: 4},
            shadowOpacity: 0.5,
            shadowRadius: 4,
            elevation: 20*Orientation.unit,
        
        justifyContent:'center'
       },
       title:{
        fontSize: 20*Orientation.unit,
        color:Colors.black,
        fontWeight:'600',
        marginBottom:15*Orientation.unit,
       },
       optionView:{
         backgroundColor:Colors.blurblue,
         marginVertical:5*Orientation.unit,
         padding:10*Orientation.unit,
         borderRadius:5*Orientation.unit,
       }
    });

    const [isModalVisible , setIsModalVisible] = React.useState(false);

    const option =(props.data).map((item,index) =>{
      return (
        <TouchableOpacity
           key={item.value}
           style={styles.optionView}
          onPress={() => {
            props.fn(item.value);
            setIsModalVisible(false);
          }}
          >
            <Text>{item.value}</Text>
          </TouchableOpacity>
      )
    })
    return (
      <View>
          <TouchableOpacity
          onPress={() => setIsModalVisible(true)}
          style={styles.btnStyle}
          >
              <Icon
              style={styles.icon}
              name={props.iconname}
              color={Colors.gray}
              size={22*Orientation.unit}
            />
            <Text style={styles.btnText}>
              {props.value?props.value:props.lable}
            </Text>
            <Icon
              style={styles.icon}
              name="caret-down"
              color={Colors.gray}
              size={22*Orientation.unit}
            />
          </TouchableOpacity>

          <Modal
            transparent={true}
            animationType='none'
            visible={isModalVisible}
            nRequestClose={()=>setIsModalVisible(false)}>
              <TouchableOpacity
          onPress={() => setIsModalVisible(false)}
          style={{flex:1,alignItems:'center',justifyContent:'center'}}
          >
            <View style={styles.container}>
              <ScrollView>
              <Text style={styles.title} >
               {props.lable}
              </Text>
                {option}
                </ScrollView>
              </View>
            </TouchableOpacity>

          </Modal>
      </View>
    )
  }

  export function Loader(props) {
    const Orientation=useOrientation();
    const styles = StyleSheet.create({
      loaderText:{
        color:Colors.lightblue,
        fontSize:25*Orientation.unit
      }
    })
    return (
      <Spinner 
      visible={props.visible} 
      cancelable={true}
      color={Colors.lightblue}
      textContent="Please Wait"
      textStyle={styles.loaderText}
      />

    )
    
  }