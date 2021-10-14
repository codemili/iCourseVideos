import { StyleSheet } from "react-native";
import { heightToDp, widthToDp } from "../../../constants/responsive";

const styles = StyleSheet.create({
  container: {
  },
  header: {
    width: widthToDp("100"),
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: widthToDp("3.5"),
    paddingVertical: widthToDp("2.5"),
    alignItems: "center",
  },
  nameLogoHeader: {
    flexDirection: "row",
    justifyContent: "space-between",

    alignItems: "center",
    paddingHorizontal: widthToDp("3.5"),
  },
  startLearningTxt: {
    fontSize: heightToDp("3"),
    fontWeight: "700",
  },
  logoImg: {
    height: heightToDp("12"),
    resizeMode: "contain",
  },
  flatListStyle: {
    
  },
  learningPathTxt: {
    paddingHorizontal: widthToDp("3.5"),
    fontWeight: "700",
  },
  freeCoursesHeaderView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  freeCoursesTxt: {
    paddingHorizontal: widthToDp("3.5"),
    fontWeight: "700",
    marginTop: heightToDp("1"),
  },
  freeCoursesTxtSecond: {
    paddingHorizontal: widthToDp("3.5"),
    fontWeight: "700",
    marginTop: heightToDp("1"),
    color: 'orange'
  },
});

export default styles;
