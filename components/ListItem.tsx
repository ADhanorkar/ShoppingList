import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface ListItemProps {
  item: {id: string; text: string};
  handleDelete: (id: string) => void;
}

const ListItem = ({item, handleDelete}: ListItemProps) => {
  const handleClick = () => {
    handleDelete(item.id);
  };

  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>{item.text}</Text>
        {/* <Button title={'Delete'} onPress={handleClick} /> */}
        <Icon
          name="remove"
          size={20}
          color={'firebrick'}
          onPress={handleClick}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItemText: {fontSize: 18},
});

export default ListItem;
