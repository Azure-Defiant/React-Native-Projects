import ScreenWrapper from "../components/ScreenWrapper"
import { StyleSheet , Text , View, Image, TouchableOpacity} from "react-native"
import React from "react"
import { useRouter } from 'expo-router'
import { useFonts } from 'expo-font';
import { StatusBar } from "expo-status-bar"
import { wp } from '../helpers/common'
import { hp } from '../helpers/common'
import CustomButton from "@/components/Button";

const index = () => {
     const router = useRouter()

    const [loaded] = useFonts({
        'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
        'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    })

    return (
     <ScreenWrapper bg="white">
       <StatusBar style="dark"/>
        <View style={styles.container}>
           {/* Welcome Image */}
           <Image style={styles.welcomeImage} resizeMode="cover" source={require('../assets/images/MojoGram Logo.png')} />  
           <Image style={styles.imageSocialContainer} resizeMode="contain" source={require('../assets/images/imageSocial.png')} />  

          <View style={styles.textContainer}>
            <Text style={styles.punchLine}>Unleash your vibe and capture {"\n"} your moments.</Text>
          </View>

          <View style={styles.buttonContainer}>
            <CustomButton 
              title="Getting Started" 
              onPress={() => router.push('/SignIn')}
              backgroundColor= "#3A3B3C"
              width={300}
              height={60}
              fontFamily="Poppins-Bold"
              fontSize={20}
            />

            <View style={styles.loginTextContainer}>
              <Text style={styles.alreadyAccountText}>Already have an account? </Text>
              <TouchableOpacity onPress={() => router.push('/SignIn')}>
                <Text style={styles.loginText}>SignIn</Text>
              </TouchableOpacity>
            </View>
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
        marginTop: -hp(40), 
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
        marginTop: hp(1)
    },
    buttonContainer: {
        alignItems: 'center',
        gap: 15
    },
    loginTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    alreadyAccountText: {
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        color: '#666'
    },
    loginText: {
        fontFamily: 'Poppins-Bold',
        fontSize: 14,
        color: '#3A3B3C',
        textDecorationLine: 'underline'
    }
})