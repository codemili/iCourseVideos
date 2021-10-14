import React from 'react'
import { Image, Text, View } from 'react-native'
import styles from './styles'
var randomColor = require('randomcolor');
export default function LearningPathRenderItem({item}) {
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
       <Image source={item.img} style={styles.imageStyle}/>
       <Text style={styles.title}>{item.title}</Text>
       <Text style={styles.startLearningTxt}>Start Learning</Text>
     </View>
   );
}
