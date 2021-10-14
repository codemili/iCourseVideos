import React, { Component } from "react";
import { View, Text, Pressable, Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import { EvilIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { heightToDp, widthToDp } from "../../../constants/responsive";
import { LOGO_IMG } from "../../../../assets/images";
import { learningPathData } from "../../../data/learningPathData";
import LearningPathRenderItem from "../../../components/ui/learningPathRenderItem";
import { Feather } from "@expo/vector-icons"; 
import FreeCoursesRenderItem from "../../../components/ui/freecoursesRenderItem";
import { freeCoursesData } from "../../../data/freecoursesData";
import * as ScreenOrientation from "expo-screen-orientation";
const startLeadingTxt = "Start\nLearning";
export default class HomeScreen extends Component {
  changeScreenOrientation = async () => {
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
  };

  componentDidMount(){
    this.props.navigation.addListener("focus", this._onFocus);
  }
  componentWillUnmount() {
    this.props.navigation.removeListener("focus", this._onFocus);
  }

  _onFocus = () => {
    this.changeScreenOrientation();
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/* Navigation Header */}
        <View style={styles.header}>
          <Pressable
            onPress={() => {
              this.props.navigation.toggleDrawer();
            }}
          >
            <EvilIcons name="navicon" size={heightToDp("5")} color="black" />
          </Pressable>
          <Ionicons name="search" size={heightToDp("4")} color="black" />
        </View>
        {/* Name and Logo */}
        <View style={styles.nameLogoHeader}>
          <Text style={styles.startLearningTxt}>{startLeadingTxt}</Text>
          <Image style={styles.logoImg} source={LOGO_IMG} />
        </View>
        {/* Learning Path */}
        <Text style={styles.learningPathTxt}>Learning Path</Text>
        <FlatList
          style={styles.flatListStyle}
          data={learningPathData}
          renderItem={({ item, index }) => (
            <LearningPathRenderItem
              key={item.title.toString()}
              item={item}
              index={index}
            />
          )}
          horizontal
        />
        {/* Free Courses */}
        <View style={styles.freeCoursesHeaderView}>
          <Text style={styles.freeCoursesTxt}>Free Courses</Text>
          <Text style={styles.freeCoursesTxtSecond}>
            View all free courses{" "}
            <Feather name="arrow-right" size={widthToDp("4")} color="orange" />
          </Text>
        </View>
        <FlatList
          style={styles.flatListStyle}
          data={freeCoursesData}
          renderItem={({ item, index }) => (
            <FreeCoursesRenderItem
              navigation={this.props.navigation}
              key={item.title.toString()}
              item={item}
              index={index}
            />
          )}
          horizontal
        />
      </SafeAreaView>
    );
  }
}
