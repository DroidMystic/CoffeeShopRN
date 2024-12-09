import { Text, View, StyleSheet, Appearance, SafeAreaView } from 'react-native'
import React, { Component } from 'react';
import { Fontisto } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Colors } from '@/constants/Colors';

export default function ContactScreen(){
  const colorScheme = Appearance.getColorScheme;
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
  const imgColor = colorScheme === 'dark' ? 'papayawhip' : '#333';
  const styles = createStyles(theme,colorScheme);
  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.imgContainer}>
        <Fontisto 
        name="coffeescript" size={250} color={imgColor}>
        </Fontisto>
      </View>

      <View style={styles.textView}>
        <Text style={styles.text}>
          <Text>555 Coffee Lane</Text>{'\n'}
          <Text>Dehradun City, UK 248171</Text>
        </Text>
      </View>
      <View style={styles.textView}>
        <Text style={styles.text}>
          Phone:{'\n'}
          <Link href="tel:7778886660" style={styles.link}>
          777-888-6660</Link>{'\n'}
          or{' '}
          <Link href="sms:7778886660" style={styles.link}>
          Click Here to Text!</Link>
        </Text>
      </View>

      <View style={styles.textView}>
        <Text style={styles.text}>
          Hours:{'\n'}
          <Text style={styles.text}>
            Open 7am to 10pm daily.
          </Text>{'\n'}
        </Text>
      </View>
    </SafeAreaView>
  );
}
function createStyles(theme, colorScheme){
  return StyleSheet.create({
  container:{
    backgroundColor:theme.background,
    paddingTop:0,
    flexGrow:1
  },
  imgContainer:{
    backgroundColor: colorScheme === 'dark' ? '#353636' : '#D0D0D0',
    height:250,
  },
  textContainer:{
    backgroundColor: theme.background,
    padding:12,
  },
  title:{
    color: theme.text,
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 32,
    marginBottom: 10,
  },
  textView:{
    marginBottom: 10,
  },
  text:{
    color:theme.text,
    fontSize: 16,
    lineHeight: 24
  },
  link:{
    textDecorationLine:'underline'
  }
})
}