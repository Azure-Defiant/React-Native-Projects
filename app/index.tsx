import ScreenWrapper from "../components/ScreenWrapper"
import { StyleSheet , Text , View, Image, TouchableOpacity, Button} from "react-native"
import React from "react"
import { useRouter } from 'expo-router'
import { useFonts } from 'expo-font';
import { StatusBar } from "expo-status-bar"
import { wp } from '../helpers/common'
import { hp } from '../helpers/common'


const index = () => {

     const router = useRouter()

    const [loaded] = useFonts({
        'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    })

    return (
     <ScreenWrapper bg="white">
       <StatusBar style="dark"/>
        <View style={styles.container}>
           {/* Welcome Image */}
           <Image style={styles.welcomeImage} resizeMode="cover" source={require('../assets/images/MojoGram Logo.png')} />  
           <Image style={styles.imageSocialContainer} resizeMode="contain" source={require('../assets/images/imageSocial.png')} />  

         
          <View style={styles.textContainer}>
             {/* Title */}
           
            <Text style={styles.punchLine}>Unleash your vibe, capture your moments,{"\n"} and share your story one snap at a time!</Text>

             {/* Sign In Button */}
              <TouchableOpacity style={styles.button} onPress={() => router.push('/SignIn')}>
                <Text style={styles.textButton}>
                 SignIn 
                </Text>
             </TouchableOpacity>

          </View>
          
        </View>
        
       
      
     </ScreenWrapper>
    )
}

export default index

const styles = StyleSheet.create({
    
    container:{ 
        flex:1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        paddingHorizontal: wp(4)
        
    },
    welcomeImage:{
        height: hp(30),
        width: wp(100),
        alignSelf: 'center'
    },
    imageSocialContainer:{
        height: hp(50),  
        width: wp(80),  
        marginTop: -hp(44), 
        alignSelf: 'center', 
    },
    textContainer:{

        alignItems: 'center',
        justifyContent: 'center', 
        gap: 20,
        marginTop: hp(1)

    },
    punchLine:{
        fontSize: 14,
        justifyContent: 'center',
        textAlign: 'center',
        fontFamily: 'Poppins-Regular',

    },
    button:{
      width: wp(50),
      height: hp(6),
      backgroundColor: 'gray',
      justifyContent: 'center',
      alignSelf: 'center',
      borderRadius: 10,
      marginTop: hp(1),
      
    },
    textButton:{
      fontSize: 20,
      color: 'white',
      alignSelf: 'center',
      justifyContent: 'center',
      textAlign: 'center',

    }
})


