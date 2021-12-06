import React from 'react'
import { Dimensions ,StatusBar} from "react-native"


export default useOrientation = () => {

        const [screenInfo,setScreenInfo] = React.useState(Dimensions.get('screen'));

        React.useEffect(() => {
            
            const onChange = (result) =>{
                setScreenInfo(result.screen);
            }

            const event=Dimensions.addEventListener('change',onChange);

            return () =>event.remove();

        }, []);
        const Orientation={
            isPotraite:screenInfo.height>screenInfo.width,
            height:screenInfo.height,
            width:screenInfo.width,
            unit:screenInfo.width*0.00138+ screenInfo.height *0.0006830
            
        }

        return Orientation;  

}