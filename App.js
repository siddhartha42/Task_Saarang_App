import React, {useState} from "react";
import { ImageBackground, StyleSheet, Text, View, Image, Button, TextInput,} from "react-native";

const image = { uri: "https://i.pinimg.com/originals/20/f4/e7/20f4e7bc75ae431efef03dbe2660b9fd.jpg" };

const App = () => {
  // const [sum,setsum] = useState('0');
  // const [submitted,setsubmitted] = useState(false);
  // const incrementnum=(n)=>{
  //   setsum(sum+n);
  // };
  // const onPressHandler=()=>{
  //   setsubmitted(!submitted);
  // };
  return(
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.bgimage}>
        <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: "space-evenly"
        }}>
          <View style={styles.card1}>
            <Image
              source={{ uri: 'https://media.istockphoto.com/photos/red-tshirt-clipping-path-picture-id465485445?b=1&k=20&m=465485445&s=170667a&w=0&h=b8cvd7qhxYQzysn8DA_nC0ZImu7K9DDlY9fEFkm2SMA=' }}
              style={styles.image}
            />
            <Text style={styles.text}>price: ₹350</Text>
            <TextInput 
              style={styles.input} 
              placeholder='num: 0-5'
              //onChangeText={(value)=>incrementnum(value)}
              keyboardType="numeric"
              maxLength={1}
            />
          </View>
          <View style={styles.card2}>
            <Image
              source={{ uri: 'https://media.istockphoto.com/photos/red-tshirt-clipping-path-picture-id465485445?b=1&k=20&m=465485445&s=170667a&w=0&h=b8cvd7qhxYQzysn8DA_nC0ZImu7K9DDlY9fEFkm2SMA=' }}
              style={styles.image}
            />
            <Text style={styles.text}>price: ₹400</Text>
            <TextInput 
              style={styles.input} 
              placeholder="num: 0-5"
              keyboardType="numeric"
              maxLength={1}
            />
          </View>
        </View>
        <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: "space-evenly"
        }}>
        </View>
        <Button
          title={"submit"}
          //onPress={onPressHandler}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 5,
    justifyContent: "center",
  },
  bgimage: {
    flex: 1,
    justifyContent: "center"
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  card1:{
    marginVertical: 60,
    marginHorizontal: 20,
    width:'40%',
    height:'80%',
    backgroundColor: "white",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  card2:{
    marginVertical: 60,
    marginHorizontal: 20,
    width:'40%',
    height:'80%',
    backgroundColor: "white",
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: "Black",
    fontSize: 12,
    lineHeight: 15,
    fontWeight: "bold",
    margin: 5,
  },
  input:{
    margin: 10,
    borderWidth: 2,
    width: 100,
    borderRadius: 5,
    borderColor: "#555",
    textAlign: "center",
    fontSize: 15,
  },
});

export default App;