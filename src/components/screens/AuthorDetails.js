import { View, Text, StyleSheet , Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import StarIcon from '../../assets/images/Star.svg';

export default function AuthorDetails({ navigation,route }) {

  const { authorName,authorImage } = route.params; 
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require("../../assets/images/Back-arrow.png")} style={styles.backArrow} />
        </TouchableOpacity>
        <Text style={styles.detailText}>Detail Author</Text>
        <TouchableOpacity>
          <Image source={require("../../assets/images/More2.png")} style={styles.moreImage} />
        </TouchableOpacity>
      </View>
      <View style={styles.authorContainer}>
        <Image source={authorImage} style={styles.authorImage} />
        <View style={styles.authorDetails}>
          <Text style={styles.authorName}>{authorName}</Text>
          <View style={styles.ratingContainer}>
            <StarIcon width={16} height={16} />
            <Text style={styles.ratingText}>4.4/5</Text>
          </View>
        </View>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed sit amet justo ipsum.</Text>
      </View>
      <View style={styles.bottomLineContainer}>
        <View style={styles.bottomLineInnerContainer}></View>
      </View>
      <View style={styles.followContainer}>
          <View style={styles.leftContainer}>
            <Text style={styles.backCount}>10</Text>
            <Text style={styles.backText}>Back</Text>
          </View>
          <View style={styles.middleContainer}>
            <Text style={styles.followersCount}>239</Text>
            <Text style={styles.followersText}>Followers</Text>
          </View>
          <TouchableOpacity style={styles.buttonContainer}>
            <View style={styles.buttonInnerContainer}>
              <Text style={styles.buttonText}>Follow</Text>
            </View>
          </TouchableOpacity>
       </View>
       <View style={styles.comicContainer}>
          <View style={styles.comicTopContainer}>
            <Text style={styles.sideText}>Comic</Text>
            <TouchableOpacity style={styles.moreImageContainer}>
              <Image source={require("../../assets/images/More.png")} style={styles.comicMoreImage} />
            </TouchableOpacity>
          </View>
       </View>
       <ScrollView showsVerticalScrollIndicator={false} style={styles.comicListContainer}>
          <View style={styles.comicRow}>
              <TouchableOpacity style={styles.comicListItem}>
                <Image source={require("../../assets/images/Comic2.jpg")} style={styles.comicImage} />
                <Text style={styles.comicName}>Star Martial Gold</Text>
                <Text style={styles.comicUpdate}>Technique</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.comicListItem}>
                <Image source={require("../../assets/images/Comic5.jpg")} style={styles.comicImage} />
                <Text style={styles.comicName}>Virtual World: Close</Text>
                <Text style={styles.comicUpdate}>Good Afternoon</Text>
              </TouchableOpacity>
          </View>
          <View style={styles.comicRow}>
              <TouchableOpacity style={styles.comicListItem}>
                <Image source={require("../../assets/images/Comic4.jpg")} style={styles.comicImage} />
                <Text style={styles.comicName}>Virtual World: Close</Text>
                <Text style={styles.comicUpdate}>Good Afternoon</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.comicListItem}>
                <Image source={require("../../assets/images/Comic3.jpg")} style={styles.comicImage} />
                <Text style={styles.comicName}>Star Martial Gold</Text>
                <Text style={styles.comicUpdate}>Technique</Text>
              </TouchableOpacity>
          </View>
       </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 23,
    paddingVertical: 25,
  },
  backArrow: {
    width: 25,
    height: 25,
  },
  detailText: {
    fontSize: 21,
    color: "#000",
    fontFamily: 'Ubuntu-Medium',
  },
  moreImage: {
    width: 25,
    height: 25,
  },
  authorContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 23,
    paddingVertical: 20,
  },
  authorImage: {
    width: 77,
    height: 77,
    borderRadius: 40,
    marginRight: 27,
  },
  authorDetails: {
  },
  authorName: {
    fontSize: 23,
    fontFamily: 'Ubuntu-Bold',
    color: "#000",
    marginBottom: 3,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    marginLeft: 9,
    fontSize: 12,
    color: "#334148",
    fontFamily: 'Ubuntu-Medium',
  },
  descriptionContainer: {
    marginTop: 8,
    paddingHorizontal: 21,
    marginBottom: 15,
  },
  descriptionText: {
    fontSize: 12,
    fontWeight: "600",
    color: "gray"
  },
  bottomLineContainer: {
    marginTop: 10,
    marginBottom: 26,
    paddingHorizontal: 23,
  },
  bottomLineInnerContainer: {
    backgroundColor: "lightgray",
    height: 1,
  },
  followContainer: {
    flexDirection: "row",
    paddingHorizontal: 43,
  },
  leftContainer: {
    marginRight: 30,
  },
  backCount: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000",
    marginBottom: 7,
  },
  backText: {
    fontSize: 12,
    color: "#808080",
    fontFamily: 'Ubuntu-Bold',
  },
  middleContainer: {
  },
  followersCount: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000",
    marginBottom: 7,
  },
  followersText: {
    fontSize: 12,
    color: "#808080",
    fontFamily: 'Ubuntu-Bold',
  },
  buttonContainer: {
    marginLeft: 65,
  },
  buttonInnerContainer: {
    backgroundColor: "#F08080",
    paddingHorizontal: 44,
    paddingVertical: 10,
    borderRadius: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: 'Ubuntu-Medium',
  },
  comicContainer: {
  },
  comicTopContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 25,
    paddingVertical: 23,
  },
  sideText: {
    fontSize: 16,
    color: "#000",
    fontFamily: 'Ubuntu-Bold',
  },
  moreImageContainer: {
  },
  comicMoreImage: {
    width: 15,
    height: 15,
  },
  comicListContainer: {
    flex: 1,
    paddingHorizontal: 23,
  },
  comicRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 26,
  },
  comicListItem: {
  },
  comicImage: {
    width: 156,
    height: 192,
    borderRadius: 13,
  },
  comicName: {
    marginTop: 12,
    fontSize: 15,
    fontFamily: 'Ubuntu-Bold',
    color: "#000",
    marginBottom: 6,
  },
  comicUpdate: {
    fontSize: 12,
    color: "#808080",
    fontFamily: 'Ubuntu-Medium',
  },
})