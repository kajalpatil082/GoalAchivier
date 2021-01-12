import React from "react";
import { View, StyleSheet, StatusBar,Modal,TextInput,TouchableHighlight, Text, SafeAreaView } from "react-native";

import { Button, ButtonContainer } from "../components/Button";
import { Alert } from "../components/Alert";
import { db } from './config';

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#36B1F0",
    flex: 1,
    paddingHorizontal: 20
  },
  text: {
    color: "#fff",
    fontSize: 25,
    textAlign: "center",
    letterSpacing: -0.02,
    fontWeight: "600"
  },
  safearea: {
    flex: 1,
    marginTop: 100,
    justifyContent: "space-between"
  },
  modalView: {
    // width:'80%',
    // height:400,
    // //margin: 20,
    // marginTop:30,
    backgroundColor: "white",
    borderRadius: 10,
   //padding: 35,
  //  alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  modalView2: {
    width:'80%',
    height:300,
    margin: 20,
    marginTop:30,
    backgroundColor: "white",
    borderRadius: 10,
   //padding: 35,
  //  alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop:50,
  width:"50%",
  alignItems:'center',
  alignSelf:'center',
  alignContent:"center"
  },
  centeredView: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // marginTop: 15
  },
  centeredView2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15
  },
  input: {
    marginLeft: 15,
    marginRight:15,
    marginTop:10,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
 },
 btnSection:
 {
  marginLeft: 15,
  marginRight:15,
  marginTop:10,
  height: 40,
  borderColor: 'gray',
  borderWidth: 1
 }
});

class Quiz extends React.Component {
  state = {
    correctCount: 0,
    totalCount: this.props.navigation.getParam("questions", []).length,
    activeQuestionIndex: 0,
    answered: false,
    answerCorrect: false,
    modalVisible:true,
    result:0,
    name:'',
    subject:''
  };
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }
  handleSubject = (text) => {
    this.setState({ subject: text })
 };
 handleName = (text) => {
  this.setState({ name: text })
}

  answer = correct => {
    this.setState(
      state => {
        const nextState = { answered: true };

        if (correct) {
          nextState.correctCount = state.correctCount + 1;
          nextState.answerCorrect = true;
        } else {
          nextState.answerCorrect = false;
        }

        return nextState;
      },
      () => {
        setTimeout(() => this.nextQuestion(), 1000);
      }
    );
  };

  nextQuestion = () => {
    this.setState(state => {
      const nextIndex = state.activeQuestionIndex + 1;

      if (nextIndex >= state.totalCount) {
       
   
          db.ref('/result').push({
            name:this.state.name,
            subject:this.state.subject,
            result: this.state.correctCount
          });
        
        //alert("Your Correct Answer is " + this.state.correctCount+ " Out of " +this.state.totalCount);
        alert("congratulations your test is submited sucessfully.....");
        return this.props.navigation.popToTop();
      }

      return {
        activeQuestionIndex: nextIndex,
        answered: false
      };
    });
  };

  render() {
    const questions = this.props.navigation.getParam("questions", []);
    const question = questions[this.state.activeQuestionIndex];

    return (
      <View
        style={[
          styles.container,
          { backgroundColor: this.props.navigation.getParam("color") }
        ]}
      >
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.safearea}>
          <View>
          <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert("Modal has been closed.");
          }}
        >
          <View style={styles.centeredView2}>
            <View style={styles.modalView2}>
              <Text style={[styles.modalText,{fontWeight:'bold',fontSize:20,padding:10}]}>All the best.....</Text>
              <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Enter Your Full Name"
               placeholderTextColor = "#000"
               autoCapitalize = "none"
               onChangeText = {this.handleName}/>
            
                 
         <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Enter Test Subject"
               placeholderTextColor = "#000"
               autoCapitalize = "none"
               onChangeText = {this.handleSubject}/>
                 
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#0A2D44" }}
                onPress={() => {
                 this.setModalVisible(!this.state.modalVisible);
              
                }}
              >

                <Text style={{fontSize:20,color:'#fff',textAlign:'center'}}>Submit</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
            <Text style={styles.text}>{question.question}</Text>

            <ButtonContainer>
              {question.answers.map(answer => (
                <Button
                  key={answer.id}
                  text={answer.text}
                  onPress={() => this.answer(answer.correct)}
                />
              ))}
            </ButtonContainer>
          </View>

          {/* <Text style={styles.text}>
            {`${this.state.correctCount}/${this.state.totalCount}`}
          </Text>
          <Text style={styles.text}>
            Total Correct-
            {`${this.state.correctCount}`}
          </Text>
          <Text style={styles.text}>
            Total-
            {this.state.totalCount}
          </Text> */}
        </SafeAreaView>
        {/* <Alert
          correct={this.state.answerCorrect}
          visible={this.state.answered}
        /> */}
      </View>
    );
  }
}

export default Quiz;
