import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Dimensions,
  PanResponder,
  Animated,
  TouchableOpacity,
  Alert,
  Button
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

function SwipeableStackCards() {
  const [pan] = useState(new Animated.ValueXY());

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event(
      [null, { dx: pan.x, dy: pan.y }],
      { useNativeDriver: false }
    ),
    onPanResponderRelease: () => {
      Animated.spring(pan, {
        toValue: { x: 0, y: 0 },
        useNativeDriver: false
      }).start();
    }
  });

  return (
    <View style={styles.cardContainer}>
      <Animated.View 
        {...panResponder.panHandlers}
        style={[
          styles.card, 
          { 
            transform: [
              { translateX: pan.x },
              { translateY: pan.y },
              { rotate: pan.x.interpolate({
                inputRange: [-200, 0, 200],
                outputRange: ['-30deg', '0deg', '30deg']
              })}
            ]
          }
        ]}
      >
        <Text style={styles.cardTitle}>Schedule</Text>
        <Text style={styles.cardDate}>07, June 2034</Text>
        <Text style={styles.cardContent}>
          Coding Session 9am - 12noon {"\n"}
          Workout 1pm - 3pm{"\n"}
          Nap 3:30 - 5:30pm{"\n"}
          Coffee Date 6pm - 8pm{"\n"}
          Video Games 8:30 - 10pm{"\n"}
          Sleep 10pm - 7am
        </Text>
      </Animated.View>
    </View>
  );
}

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.text}>
          You suck at taking notes brother,{'\n'}
          you need us :)
        </Text>
      </View>
      <SwipeableStackCards />
<View>
  <TouchableOpacity style={styles.buttonStyle}
   onPress={() => Alert.alert('Launch Button Pressed')}>
 <Text style={styles.buttonTextStyle}>Launch</Text>
  </TouchableOpacity>
</View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#2D2B2B"
  },
  contentContainer: {
    paddingTop: 100,
    paddingHorizontal: 20,
    alignItems: "flex-start"
  },
  text: {
    fontSize: 50,
    textAlign: "left",
    fontWeight: '600',
    fontStyle: "normal",
    color: "#FFF"
  },
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 50, // Space below the cards
  },
  card: {
    width: width * 0.85,
    backgroundColor: '#F5F5F5',
    borderRadius: 20, // Rounded corners for the card
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    // Elevation for Android
    elevation: 4,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  cardDate: {
    fontSize: 14,
    color: 'gray',
    marginVertical: 5, // Spacing between title and date
  },
  cardContent: {
    fontSize: 16,
    color: '#000',
    lineHeight: 22, // Adjusts line spacing for the content text
  },
  buttonStyle: {
    height: 50,
    justifyContent: 'center',
    backgroundColor: '#62666B',
    width: 149,
    maxHeight: 49,
    borderRadius: 10,
    marginBottom: 55,
},
  buttonTextStyle: {
    fontSize: 18,
    color: '#DADADA',
    fontWeight: 600,
    width: 149,
    textAlign: 'center'
  }
});
