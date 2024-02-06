import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface HeaderProps {
  title?: string;
}

const Header = ({title = 'Shopping List'}: HeaderProps) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 80,
    padding: 15,
    backgroundColor: 'darkslateblue',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    textAlign: 'center',
  },
});

export default Header;
