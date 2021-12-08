import React from 'react'
import { StyleSheet, View ,ScrollView, Platform,Image,Modal} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Title ,SubTitle,TextField,RoundedBorderButton,DatePiker,TimePiker,RadioBtn,Checkbox,SubmitButton,DropDown,Loader} from '../Components/Utils';
import Colors from '../Components/Color';
import useOrientation from '../Components/useOrientation';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';


export default function BookingForm(props) {
    const [name , setName]= React.useState('');
    const [email , setEmail]= React.useState('');
    const [contact , setContact]= React.useState('');
    const [address , setAddress]= React.useState('');
    const [destination , setDestination]= React.useState('');
    const [selectedDate , setSelectedDate] = React.useState(new Date());
    const [date , setDate] = React.useState("YYYY-MM-DD");
    const [isDatePiker , setIsDatePiker] = React.useState(false);
    const [selectedTime , setSelectedTime] = React.useState(new Date());
    const [time , setTime] = React.useState("HH:MM");
    const [isTimePiker , setIsTimePiker] = React.useState(false);
    const [idType , setIdType] = React.useState("");
    const [imageUri, setImageUri] =React.useState('');
    const [paymentMethod, setPaymentMethod] =React.useState('');
    const [termAndCondition, setTermAndCondition] =React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);

    let idTypeData = [{
        value: 'Adhar Card',
      }, {
        value: 'Driving Licence',
      }, {
        value: 'Election Card',
      }];
    
    const Orientation=useOrientation();
    const styles = StyleSheet.create({
        container:{
            flex:1,
            backgroundColor:'white'
        },
        header:{
           flex:Orientation.isPotraite?0.3:0.4,
           backgroundColor:Colors.lightblue,
           borderBottomLeftRadius:50*Orientation.unit,
           borderBottomRightRadius:50*Orientation.unit,
           alignItems:'center',
           justifyContent:'center',
        },
        body:{
            flex:1,
            marginHorizontal:15*Orientation.unit,
            marginBottom:15*Orientation.unit,
        },
        imageButtonView:{
            flexDirection:'row',justifyContent:'space-between'
        },
        imgstyle:{
            alignSelf:'center',
         marginTop:20,
          height: 100,
          width: 100,
          borderWidth: 1,
          borderColor: 'black',
          }
    })

    function onChangeName(name){
        setName(name);
    }
    function onChangeEmail(email){
        setEmail(email);
    }
    function onChangeContact(contact){
        setContact(contact);
    }
    function onChangeAddress(address){
        setAddress(address);
    }
    function onChangeDestination(destination){
        setDestination(destination);
    }
    function openDatePiker(){
        setIsDatePiker(true);
     }
    function onChangeDate(event,selectedDate){
        setIsDatePiker(false)
        
            setSelectedDate(selectedDate);
            const tempdate=new Date(selectedDate);
            var date = tempdate.getDate();
            var month = tempdate.getMonth() + 1;
            var year = tempdate.getFullYear();
            setDate(year + '-' + month + '-' + date);
        
        
    }
    function openTimePiker(){
        setIsTimePiker(true);
     }
    function onChangeTime(event,selectedTime){
        setIsTimePiker(false)
    
            setSelectedTime(selectedTime);
        
            const temptime=new Date(selectedTime);
            var hours = temptime.getHours();
            var min = temptime.getMinutes();
            setTime(hours + ':' + min );
        
        
    }
    const options = {
        storageOptions: {
          path: 'images',
          mediaType: 'photo',
        },
        includeBase64: false,
      };
    function onChangeCameraImage(){
        launchCamera(options, response => {
            if (response.didCancel) {
            //handle 
            } else if (response.error) {
            aleart('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
             //handle 
            } else {
                setImageUri(response.assets[0]['uri']);
            }
          });
    }
    function onChangeGelleryImage(){
        launchImageLibrary(options, response => {
            if (response.didCancel) {
           //handle
            } else if (response.error) {
            aleart('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
            //handle
            } else {
                setImageUri(response.assets[0]['uri']);
           
            }
            });
    }
    function onChangePaymentMethod(mehod){
        setPaymentMethod(mehod);
    }
    function onChangeTermAndCondition(){
        setTermAndCondition(!termAndCondition);
    }
    function onChangeIdType(value){
        setIdType(value);
    }
    function EmailValidator(email){
        if(email.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)){
            return true;
        }else{
            alert("You have entered an invalid Email Address!");
            return false;
        }
        return true
    }
    function ContactValidator(contact){
        const phoneno = '[1-9]{1}[0-9]{9}';
        if(contact.match(phoneno)){
            return true;
        }else{
            alert("You have entered an invalid Contact Number!");
            return false;
        }
    }
    function onSubmit(){
      if(name !='' && email !='' && contact !='' && 
      address !='' && destination !='' && date !='' && time !='' && 
      idType !='' && imageUri !='' && paymentMethod !='' && termAndCondition !=''){
          if(EmailValidator(email)){
            if(ContactValidator(contact)){
                setIsLoading(true);
                setTimeout(() => {
                    setIsLoading(false);
                    alert(`Successfully Booked ${props.route.params.name}`)
                    props.navigation.goBack();
                  }, 5000);
                  
            }
          }
      }else{
        alert("Please Fill the All Details!");
        
      }
    }
    function onPressShowDetails(index){
        props.navigation.navigate('WebPage',{name:props.route.params.name});
    }
    
  

    return (
         <SafeAreaView style={styles.container}> 
           <Loader
              visible={isLoading} 
           />
            <View style={styles.header}>
                <Title
                        title={`Fill The Details for Book\n${props.route.params.name}`}
                    />
            </View>

         <ScrollView style={styles.body}>
         <SubTitle
               subtitle="Show Detais:"
            />
            <RoundedBorderButton
               height={50*Orientation.unit}
               lable="Click Here"
               iconname="calendar-day"
               fn={onPressShowDetails}
            />
            <SubTitle
               subtitle="Name:"
            />
            <TextField
                lable="Name"
                iconname="user-alt"
                ismultipleline={false}
                fn={onChangeName}
                value={name}
            />
            <SubTitle
               subtitle="Email:"
            />
            <TextField
                lable="Email"
                iconname="mail-bulk"
                ismultipleline={false}
                fn={onChangeEmail}
                value={email}
            />

            <SubTitle
               subtitle="Contact Number:"
            />
            <TextField
                lable="XXXXXXXXXX"
                iconname="mobile-alt"
                ismultipleline={false}
                keypadtipe={Platform.OS=='android'?"number-pad":"name-phone-pad"}
                maxlength={10}
                fn={onChangeContact}
                value={contact}
            />

            <SubTitle
               subtitle="Address:"
            />
            <TextField
                lable="Address"
                iconname="venus"
                ismultipleline={true}
                fn={onChangeAddress}
                value={address}
            />
            
            <SubTitle
               subtitle="Destination:"
            />
            <TextField
                lable="Destination"
                iconname="venus"
                ismultipleline={true}
                fn={onChangeDestination}
                value={destination}
            />

             <SubTitle
               subtitle="Pick Up Date:"
            />

            <RoundedBorderButton
               height={50*Orientation.unit}
               lable={date}
               iconname="calendar-day"
               fn={openDatePiker}
            />
            {Platform.OS=='android' ?
            <View>
                {isDatePiker &&(
                        <DatePiker
                            fn={onChangeDate}
                            value={selectedDate}
                        />
                )}
            </View>:
           <Modal
           style={{alignItems:'center',justifyContent:'center',height:Orientation.height/2}}
           transparent={true}
           animationType='fade'
           visible={isDatePiker}
            onRequestClose={()=>setIsDatePiker(false)}>
                    <DatePiker
                            fn={onChangeDate}
                            value={selectedDate}
                        />
               </Modal>}
            

             <SubTitle
               subtitle="Pick Up Time:"
            />
            
            <RoundedBorderButton
               height={50*Orientation.unit}
               lable={time}
               iconname="clock"
               fn={openTimePiker}
            />
            {Platform.OS=='android' ?
            <View>
                {isTimePiker &&(
                        <TimePiker
                        fn={onChangeTime}
                        value={selectedTime}
                    />
                )}
            </View>:
           <Modal
           style={{alignItems:'center',justifyContent:'center',height:Orientation.height/2}}
           transparent={true}
           animationType='fade'
           visible={isTimePiker}
            onRequestClose={()=>setIsTimePiker(false)}>
                   <TimePiker
                    fn={onChangeTime}
                    value={selectedTime}
                />
               </Modal>}
    
             <SubTitle
               subtitle="ID Type:"
            />
            <DropDown
              height={50*Orientation.unit}
              iconname="book"
              value={idType}
              lable="Select ID:"
              data={idTypeData}
              fn={onChangeIdType}
            />
            
            <SubTitle
               subtitle="Upload ID:"
            />

            <View style={styles.imageButtonView}>
                <RoundedBorderButton
                height={50*Orientation.unit}
                lable="Camera"
                iconname="camera"
                fn={onChangeCameraImage}
                />
                <RoundedBorderButton
                height={50*Orientation.unit}
                lable="Gellery"
                iconname="folder-open"
                fn={onChangeGelleryImage}
                />
            </View>
            
            {imageUri != '' && (
                <Image
                source={{uri:imageUri}}
                style={styles.imgstyle} />
            )}

            <SubTitle
               subtitle="Payment Method:"
            />
            <RadioBtn
                fn={onChangePaymentMethod}
                value={"Cash On Delivery"}
                selectedvalue={paymentMethod}
                lable="Cash On Delivery"
            />
            <RadioBtn
                fn={onChangePaymentMethod}
                value={"Google Pay"}
                selectedvalue={paymentMethod}
                lable="Google Pay"
            />
            <RadioBtn
                fn={onChangePaymentMethod}
                value={"Paytm"}
                selectedvalue={paymentMethod}
                lable="Paytm"
            />

            <SubTitle
               subtitle={`Tearm & Condition:`}
            />
            <Checkbox
             fn={onChangeTermAndCondition}
             checkvalue={termAndCondition}
             lable="term and condition xyz... "
            />
            
            <SubmitButton
               height={50*Orientation.unit}
               lable="Submit"
               iconname="check-circle"
               fn={onSubmit}
            />
         </ScrollView>
     </SafeAreaView>
    )
}

