import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

export default function Index() {
  const [task,setTask] = useState<string>('')
  const[myTask,setMyTasks] = useState<string[]>([])
  
  function handleAddTask(){
  if(task.trim()!==''){
    setMyTasks( oldState =>[...oldState,task])
    setTask('')
  }
  }

  function handleRemoveTask(taskToRemove:string){
    setMyTasks(oldStates => oldStates.filter(task=>task!==taskToRemove) )
  }
  return (
    <View style={styles.container}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
      >
      <Text style={styles.title}>Bem-vindo Eliel</Text>

      <TextInput
        placeholder="Ex:Comprar pão"
        placeholderTextColor='#555'
        style={styles.input}
        value={task}
        onChangeText={setTask}
      />

      <TouchableOpacity
        activeOpacity={.5}
        style={styles.button}
        onPress={handleAddTask}
      >
        <Text
          style={styles.buttonText}
        >
          Adicionar
        </Text>
      </TouchableOpacity>

      <Text style ={[styles.title,{marginVertical:30}]} >Afazeres</Text>

      {
          myTask.map((item,index) =>(<TouchableOpacity
            key={index} 
            style={styles.buttonTask}
            onPress={()=>handleRemoveTask(item)}
          >
             
              <Text 
                style={styles.textTask}
              > 
                  {item}
              </Text>
            </TouchableOpacity>))
        }

    
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 40,
    backgroundColor: '#121015'
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 25
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#fff',
    fontSize: 18,
    padding: 15,
    borderRadius: 10,
    marginTop: 20
  },
  button: {
    backgroundColor: '#A37CF7',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17
  },
  buttonTask:{
    backgroundColor: '#1F1E25',
    padding:15,
    alignItems: 'center',
    borderRadius:18,
    marginBottom:10
  },
  textTask:{
    color:'#fff',
    fontSize: 22,
    fontWeight:'bold'

  }})