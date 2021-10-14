import { StyleSheet } from "react-native";
import { heightToDp, widthToDp } from "../../../constants/responsive";
 // import the script

const styles = StyleSheet.create({
  container: {
    width: widthToDp("30"),
    height: heightToDp("18"),
    margin: heightToDp("1.5"),
    borderRadius: widthToDp("4"),
    paddingLeft: widthToDp("3.5"),
    paddingTop: widthToDp("3.5"),
  },
  imageStyle: {
    width: widthToDp("13"),
    height: widthToDp("13"),
  },
  title: {
    fontWeight: "600",
    fontSize: heightToDp("1.7"),
    marginTop: heightToDp("1"),
  },
  startLearningTxt: {
     fontSize: heightToDp('1.5'),
     fontWeight: '700',
     color: 'orange',
     marginTop: heightToDp('1')
  }
});


export default styles;