import React from 'react'
import { StyleSheet, Text, View ,FlatList,Image,TouchableOpacity,Switch} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import useOrientation from '../Components/useOrientation';
import Colors from '../Components/Color';
import SplashScreen from 'react-native-splash-screen';

export default function HomeMain(props) {

    const [ isEnabled , setIsEnabled] = React.useState(false);
    function toggleSwitch(){
        setIsEnabled(!isEnabled);
    }
    const Orientation=useOrientation();
    const styles = StyleSheet.create({
        container:{
            flex:1,
            backgroundColor:'white'
        },
        header:{
           flex:0.3,
           backgroundColor:isEnabled?Colors.blue:Colors.lightblue,
           borderBottomLeftRadius:50*Orientation.unit,
           borderBottomRightRadius:50*Orientation.unit,
           alignItems:'center',
           justifyContent:'center',
        },
        title:{
            fontSize:35*Orientation.unit,
            fontWeight:'700',
            color:Colors.white,
           
        },
        body:{
            flex:1,
            flexGrow :1,
        },
        mainListView:{
            flex:Orientation.isPotraite?0.5: 0.333,
        },
        subListView:{
            flex:1,
            flexDirection:'row',
            backgroundColor:Colors.white,
            marginHorizontal:10*Orientation.unit,
            marginVertical:10*Orientation.unit,
            paddingRight:80*Orientation.unit,
            height:80*Orientation.unit,
            borderRadius:10*Orientation.unit,
            alignItems:'center',
            shadowColor: Colors.lightblue,
            shadowOffset: {width: -2, height: 4},
            shadowOpacity: 0.5,
            shadowRadius: 4,
            elevation: 15*Orientation.unit,
        },
        imageView:{
            marginHorizontal:5*Orientation.unit,
            height:60*Orientation.unit,
            width:60*Orientation.unit,
            borderRadius:30*Orientation.unit,
        },
        listViewTitle:{
            fontSize:18*Orientation.unit,
            fontWeight:'500',
            color:Colors.black,
        },
    })

    //Variable & Hooks

    const data=[
        {key: '1',title:'Mercedes',imageURL:require('../Assets/hondacity.jpg')},
        {key: '2',title:'B.M.W',imageURL:require('../Assets/verna.jpg')},
        {key: '3',title:'Skoda Rapid',imageURL:require('../Assets/verna.jpg')},
        {key: '4',title:'Creta',imageURL:require('../Assets/hondacity.jpg')},
        {key: '5',title:'Honda City',imageURL:require('../Assets/verna.jpg')},
        {key: '6',title:'Verna',imageURL:require('../Assets/hondacity.jpg')},
        {key: '7',title:'Fortuner',imageURL:require('../Assets/verna.jpg')},
        {key: '8',title:'Swift',imageURL:require('../Assets/verna.jpg')},
        {key: '9',title:'XUV700',imageURL:require('../Assets/hondacity.jpg')},
        {key: '10',title:'Harrier',imageURL:require('../Assets/verna.jpg')},
        {key: '11',title:'scorpio',imageURL:require('../Assets/hondacity.jpg')},
        {key: '12',title:'Nexon',imageURL:require('../Assets/verna.jpg')},
        
      ]
      React.useEffect(() => {
            SplashScreen.hide();
      }, []);

    //Functions
        
       function onPressListView(index){
           props.navigation.navigate('BookingForm',{name:data[index]['title']});
       }
      
    return (
        <SafeAreaView style={styles.container}> 

            <View style={styles.header}>
               <Text style={styles.title}>Book The Car</Text>
            </View>
            <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? Colors.blue : Colors.lightblue}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
            <View style={styles.body}>
            <FlatList
                key={Orientation.isPotraite?1:2}
                marginVertical={10*Orientation.unit}
                data={data}
                numColumns={Orientation.isPotraite? 2:3}
                renderItem={({item,index}) =>
                    <View style={styles.mainListView}>
                        <TouchableOpacity style={styles.subListView}
                          onPress={() => onPressListView(index)}> 

                            <Image source={item.imageURL}  style={styles.imageView}/>

                            <View>
                                <Text style={styles.listViewTitle}>{item.title}</Text>
                            </View>

                        </TouchableOpacity>
                    </View>

                }
            />
            </View>
        </SafeAreaView>
    )
    
}


