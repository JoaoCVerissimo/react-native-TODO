import React, { useLayoutEffect } from 'react';
import {
  Text,
  View,
  FlatList,
  Pressable,
} from 'react-native';
import Footer from "../../components/footer";
import styles from "./home.style";
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../redux/todoSlice';

function HomeScreen({ navigation }) {
  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const currentDate = new Date();
  let monthDay = currentDate.getDate();
  let weekName = week[currentDate.getDay()];
  let monthName = month[currentDate.getMonth()];

  const dispatch = useDispatch();

  const DATA = useSelector(state => state.todos); // Para ir buscar os dados à store com o nome "todos"

  useLayoutEffect(() => {
    navigation.setOptions({
      title: `${monthName}`,
      headerLeft: () => (<></>),
    });
  }, [navigation]);

  const Item = ({ title, description, completed }) => (
    <View style={styles.item}>
      <Text>{completed ? "Completed" : "Uncompleted"}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.title}>{description}</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    // Aqui vou mudar o estado do completed com um dispatch <Pressable onPress={() => !item.completed}>
    <Pressable>
      <Item title={item.title} description={item.description} completed={item.completed} />
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <View style={[styles.topContainer, styles.centerText]}>
        <Text style={styles.title}>{monthDay}</Text>
        <Text style={styles.title}>{weekName}</Text>
      </View>
      <View style={[styles.middleContainer]}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
      <Footer onClick={() => navigation.push('Todo')} text={"ADD"} />
    </View>
  );
}

export default HomeScreen;
