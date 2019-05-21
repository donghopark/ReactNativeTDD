import React, {Component} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  default: {
    backgroundColor: 'white'
  },
  completed: {
    backgroundColor: 'red'
  }
})

export default class ToDoItem extends Component {

  onCompleted = () => {
    const { onCompleted, index } = this.props;
    onCompleted(index);
  }
 
  onDeleted = () => {
    const { onDeleted, index } = this.props;
    onDeleted(index);
  }
  render() {

    const {item} = this.props;

    return (
      <View style={item.completed?styles.completed:styles.default}>
        <Text testID={item.completed?"completed":"uncompleted"}>{item.text}</Text>
        <Button testID="completeButton" title="C" onPress={this.onCompleted}/>
        <Button testID="deleteButton" title="D" onPress={this.onDeleted}/>
      </View>
    );
  }
}