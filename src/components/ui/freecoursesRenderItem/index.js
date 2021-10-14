import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
var randomColor = require("randomcolor");
import { AntDesign } from "@expo/vector-icons";
import { heightToDp } from "../../../constants/responsive";
export default function FreeCoursesRenderItem({ item, navigation }) {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: randomColor({
            luminosity: "light",
            format: "rgba",
            alpha: 0.3, // e.g. 'hsla(27, 88.99%, 81.83%, 0.6450211517512798)'
          }),
        },
      ]}
      key={item.title}
    >
      <Image source={item.img} style={styles.imageStyle} />
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.grayTextView}>
        <Text style={styles.grayText}>12 Lessons</Text>
        <Text style={styles.grayText}>5h 45m</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("PlayerScreen", {
            item: item
          });
        }}
        style={styles.playView}
      >
        <AntDesign name="playcircleo" size={heightToDp("3")} color="black" />
        <Text style={styles.playText}>Start Now</Text>
      </TouchableOpacity>
    </View>
  );
}
