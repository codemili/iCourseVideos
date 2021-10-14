import { StyleSheet } from "react-native";
import { heightToDp, widthToDp } from "../../../constants/responsive";
// import the script

const styles = StyleSheet.create({
  container: {
    width: widthToDp("60"),
    height: heightToDp("31"),
    margin: heightToDp("1.5"),
    borderRadius: widthToDp("4"),
  },
  imageStyle: {
    width: widthToDp("60"),
    height: heightToDp("15"),
    borderTopLeftRadius: widthToDp("4"),
    borderTopRightRadius: widthToDp("4"),
  },
  title: {
    fontWeight: "700",
    fontSize: heightToDp("2.5"),
    marginTop: heightToDp("1"),
    paddingHorizontal: widthToDp("3.5"),
  },
  startLearningTxt: {
    fontSize: heightToDp("1.5"),
    fontWeight: "700",
    color: "orange",
    marginTop: heightToDp("1"),
  },
  grayTextView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: widthToDp("3.5"),
  },
  grayText: {
    fontSize: heightToDp("1.5"),
    fontWeight: "700",
    color: "gray",
    marginTop: heightToDp("1"),
  },
  playView: {
     flexDirection: 'row',
     paddingHorizontal: widthToDp('3.5'),
     paddingTop: widthToDp('1.5')
  },
  playText: {
     color: 'black',
     fontSize: heightToDp('2'),
     paddingLeft: widthToDp('1.5'),
     fontWeight: '700'
  }
});

export default styles;
