import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window'); // Get screen dimensions

export default function Index() {
  const navigation = useNavigation(); // Hook to access navigation object

  const handlePress = () => {
    navigation.navigate('SignInView'); // Use the screen name defined in your navigator
  };


  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        You suck at taking notes brother, {"\n"}you need us :)
      </Text>

      <View style={styles.cardsContainer}>
        <View style={[styles.card, styles.card1]}>
          <Text style={styles.cardTitle}>Basketball</Text>
          <Text style={styles.cardDate}>04 Jan, 2032</Text>
          <Text style={styles.cardDescription}>
            Overview of upcoming basketball games and training sessions to keep you on track.
          </Text>
        </View>

        <View style={[styles.card, styles.card2]}>
          <Text style={styles.cardTitle}>Coffee Date</Text>
          <Text style={styles.cardDate}>04 Feb, 2032</Text>
          <Text style={styles.cardDescription}>
            Recap of what was discussed at the last coffee meeting with friends.
          </Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c2c2e',
    alignItems: 'flex-start',
    paddingTop: height * 0.07, // Responsive padding top
    paddingLeft: width * 0.05, // Responsive padding left
  },
  heading: {
    color: '#FFF',
    fontSize: width * 0.12, // Responsive font size based on screen width
    fontWeight: '800',
    textAlign: 'left',
    marginBottom: height * 0.04, // Responsive margin bottom
    width: '100%',
  },
  cardsContainer: {
    width: '100%',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: width * 0.04, // Responsive padding
    width: '90%', // Use percentage for responsive width
    marginBottom: height * 0.015, // Responsive margin between cards
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.7,
    shadowRadius: 10,
    elevation: 5,
    transform: [{ rotate: '-4deg' }], // Stylistic choice to keep
  },
  card1: {
    zIndex: 2,
  },
  card2: {
    marginTop: -20, // Keeping the overlap as designed
    transform: [{ rotate: '1deg' }], // Stylistic choice to keep
  },
  cardTitle: {
    fontSize: width * 0.04, // Responsive font size
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardDate: {
    fontSize: width * 0.035, // Slightly smaller font size
    color: '#666',
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: width * 0.035, // Responsive font size for description
    color: '#333',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    padding: 20,
  },
  button: {
    backgroundColor: '#ffffff',
    borderRadius: 25,
    paddingVertical: 16, // Fixed padding vertical
    paddingHorizontal: 32, // Fixed padding horizontal
    width: '60%', // Responsive width for button
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: height * 0.1, // Responsive vertical spacing
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 3,
  },
  buttonText: {
    color: '#000',
    fontSize: width * 0.05, // Responsive button text size
    fontWeight: '600',
  },
});
