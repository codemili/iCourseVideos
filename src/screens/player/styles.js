import { StyleSheet } from "react-native";
import {widthToDp, heightToDp} from '../../constants/responsive'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  innerContainer: {
    flex: 1,
    flexDirection: "row",
  },
  playerViewContainer: {
    flex: 5,
    backgroundColor: "black",
  },

  videoView: {
    width: heightToDp("100"),
    height: widthToDp("91"),
  },
  infoViewContainer: {
    flex: 2,
    flexDirection: "column",
    alignItems: "center",
  },
  infoTitleTxt: {
    marginTop: widthToDp("3"),
    fontSize: heightToDp("2.2"),
  },
  sessionsContainer: {},
  sessionHeader: {
    paddingVertical: widthToDp("1.5"),
    paddingHorizontal: widthToDp("0.5"),
    backgroundColor: "#f2f2f2",
  },
  sessionHeaderTxtTitle: {
    fontSize: heightToDp("2"),
    fontWeight: "700",
  },
  grayTxt: {
    fontSize: heightToDp("1.7"),
    color: "gray",
  },
  contentContainer: {
    flexDirection: "row",
    paddingVertical: widthToDp("2.5"),
    paddingHorizontal: widthToDp("0.5"),
    backgroundColor: "#f8f8f8",
  },
  contentTextContainer: {
    flexDirection: "column",
  },
  contentImgContainer: {},
});

export default styles;