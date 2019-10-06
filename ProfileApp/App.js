import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from "react-native";
import { POLO_BLUE_COLOR, FOLLOW_COLOR, SEND_MESSAGE_COLOR } from "./utilities";
import { AntDesign, Ionicons, MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { imgData } from './constants/Mocks';

const { width, height } = Dimensions.get("window");



export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    const centerImgData = Math.floor(imgData.length / 2);
    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 20
          }}
        >
          <AntDesign name="arrowleft" size={27} color="gray" />
          <Ionicons name="ios-options" size={27} color="gray" />
        </View>
        <View
          style={[
            styles.userInfo,
            {
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 20,
              marginVertical: 30
            }
          ]}
        >
          <View style={{ marginRight: 15 }}>
            <Image
              source={require("./assets/avatar1.jpg")}
              style={styles.avatar}
            />
          </View>
          <View>
            <Text style={styles.userName}>Daney</Text>
            <Text style={styles.userCareer}>Developer</Text>
            <View style={[styles.row, { marginTop: 15 }]}>
              <TouchableOpacity>
                <View style={[styles.shadow, styles.followButton]}>
                  <Text style={{ color: "white" }}>Follow</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={[styles.shadow, styles.sendButton]}>
                  <Ionicons name="md-send" size={20} color="white" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View
          style={[
            styles.userFollower,
            styles.row,
            {
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 20
            }
          ]}
        >
          <View
            style={[
              styles.column,
              { justifyContent: "center", alignItems: "center" }
            ]}
          >
            <Text style={styles.followerNumber}> 210 </Text>
            <Text style={styles.following}> Photos </Text>
          </View>
          <View
            style={[
              styles.column,
              { justifyContent: "center", alignItems: "center" }
            ]}
          >
            <Text style={styles.followerNumber}> 15k </Text>
            <Text style={styles.following}> Follower </Text>
          </View>
          <View
            style={[
              styles.column,
              { justifyContent: "center", alignItems: "center" }
            ]}
          >
            <Text style={styles.followerNumber}> 605 </Text>
            <Text style={styles.following}> Following </Text>
          </View>
        </View>
        <View style={{ flex: 0.7, paddingHorizontal: 20 }}>
          <ScrollView
            contentContainerStyle={{
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <View style={styles.column}>
              {imgData.slice(0, centerImgData).map(item => {
                return (
                  <Image
                    key={item.id}
                    source={item.imgSource}
                    style={
                      item.id % 2 == true ? styles.imageBig : styles.imageSmall
                    }
                  />
                );
              })}
            </View>
            <View style={styles.column}>
              {imgData.slice(centerImgData).map(item => {
                return (
                  <Image
                    key={item.id}
                    source={item.imgSource}
                    style={
                      item.id % 2 == true ? styles.imageSmall : styles.imageBig
                    }
                  />
                );
              })}
            </View>
          </ScrollView>
        </View>
        <View
          style={[
            styles.row, {
            flex: 0.2,
            justifyContent: 'center',
            alignItems: 'center'
          }]}>
          <View>
            <MaterialCommunityIcons name="bell-ring-outline" size={25} color="#9CA1BF" />
          </View>
          <View style={{ marginHorizontal: 40 }}>
            <AntDesign name="pluscircleo" size={25} color="#9CA1BF" />
          </View>
          <View>
            <Feather name="user" size={25} color="#9CA1BF" />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 25
  },
  flex: {
    flex: 1
  },
  row: {
    flexDirection: "row"
  },
  column: {
    flexDirection: "column"
  },
  userInfo: {
    flex: 0.2
  },
  userFollower: {
    flex: 0.2,
    paddingHorizontal: 20
  },
  userImages: {
    flex: 0.6,
    backgroundColor: "green"
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  userName: {
    color: "#666E7F",
    fontSize: 20,
    marginBottom: 3
  },
  userCareer: {
    color: "#A7ABBA",
    fontSize: 16
  },
  followButton: {
    width: 100,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: FOLLOW_COLOR,
    borderRadius: 25,
    marginRight: 10,
    color: "white"
  },
  sendButton: {
    width: 50,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:SEND_MESSAGE_COLOR,
    borderRadius: 25
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  followerNumber: {
    fontSize: 18,
    color: "#39435B",
    marginBottom: 5
  },
  following: {
    fontSize: 14,
    color: "#CFD0DC"
  },
  image: {
    borderRadius: 25
  },
  imageBig: {
    width: width * 0.43,
    height: 150,
    borderRadius: 15,
    marginBottom: 10
  },
  imageSmall: {
    width: width * 0.43,
    height: 100,
    borderRadius: 15,
    marginBottom: 10
  }
});
