import React, { Component } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './styles'
import * as ScreenOrientation from "expo-screen-orientation";
import { Video } from "expo-av";
import VideoPlayer from "expo-video-player";
export default class PlayerScreen extends Component {
    constructor(props){
      super(props);
      this.state = {
        dbSessionsData: this.props.route.params.item.sessions,
      };
    }
   changeScreenOrientation = async () => {
       await ScreenOrientation.lockAsync(
         ScreenOrientation.OrientationLock.LANDSCAPE
       );
   }
  componentDidMount(){
      this.changeScreenOrientation();
  }
   render() {
     var { sessions = [] } = {
       sessions: this.props.route.params.item.sections,
     };
      return (
        <SafeAreaView style={styles.container}>
          <View style={styles.innerContainer}>
            <View style={styles.playerViewContainer}>
              <VideoPlayer
                style={styles.videoView}
                defaultControlsVisible={true}
                videoProps={{
                  shouldPlay: true,
                  resizeMode: Video.RESIZE_MODE_STRETCH,
                  // ❗ source is required https://docs.expo.io/versions/latest/sdk/video/#props
                  source: {
                    uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                  },
                }}
              />
            </View>
            <View style={styles.infoViewContainer}>
              <Text style={styles.infoTitleTxt}>Course Content</Text>
              <ScrollView showsVerticalScrollIndicator={false}>
                {/* session */}
                {sessions.map((item, index) => (
                  <View style={styles.sessionsContainer}>
                    <View style={styles.sessionHeader}>
                      <Text style={styles.sessionHeaderTxtTitle}>
                        Section {index + 1} : {item.title}
                      </Text>
                      <Text style={styles.grayTxt}>3 / 5 Unit * 14min</Text>
                    </View>
                    {/* content */}
                    {item.lessons.map((sItem, sIndex) => (
                      <View style={styles.contentContainer}>
                        <View style={styles.contentTextContainer}>
                          <Text style={styles.contentTxtTitle}>{sItem.title}</Text>
                          <Text style={styles.grayTxt}>3 / 5 Unit * 14min</Text>
                        </View>
                        <View style={styles.contentImgContainer}></View>
                      </View>
                    ))}
                  </View>
                ))}
              </ScrollView>
            </View>
          </View>
        </SafeAreaView>
      );
   }
}
