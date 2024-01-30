import { View, Text, StyleSheet,Image,TouchableOpacity } from 'react-native';
import React , { useState }  from 'react';
import DownArrowIcon from '../../assets/images/Down-Arrow.svg'

export default function Profile({ navigation }) {

  const [activeItem, setActiveItem] = useState(null);

  const handleListItemPress = (index) => {
    setActiveItem(index);
  };

  const listItems = [
    { 
      name: 'Explore Comic', 
      image: require('../../assets/images/Settings.png') 
    },
    { 
      name: 'Favorite', 
      image: require('../../assets/images/Favorite.png') 
    },
    { 
      name: 'Author', 
      image: require('../../assets/images/Settings.png') 
    },
    { 
      name: 'Night mode', 
      image: require('../../assets/images/Logout.png') 
    },
    { 
      name: 'Donate', 
      image: require('../../assets/images/Blank-page.png') 
    },
    { 
      name: 'Settings', 
      image: require('../../assets/images/Settings.png') 
    },
    { 
      name: 'Sign out', 
      image: require('../../assets/images/Logout.png') 
    },
  ];

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.profileContainer} onPress={() => navigation.navigate('Home')}>
          <View style={styles.leftContainer}>
            <Image source={require("../../assets/images/Logo.jpg")} style={styles.logoImage}  />
            <View style={styles.detailsContainer}>
              <Text style={styles.profileName}>Mira Suxi</Text>
              <Text style={styles.profileText}>Mira-gfsdgddsds</Text>
            </View>
          </View>
          <View style={styles.arrowContainer}>
              <DownArrowIcon width={30} height={30} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.listContainer}>
      {listItems.map((item, index) => (
          <TouchableOpacity key={index} style={[styles.listItemContainer,activeItem === index && styles.activeListItem,]} onPress={() => handleListItemPress(index)}>
            <Image source={item.image} style={[styles.itemImage,activeItem === index && styles.activeItemImage,]} />
            <Text style={[styles.listName,activeItem === index && styles.activeListName,]}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  headerContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  profileContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingBottom: 6,
    borderRadius: 20,
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoImage: {
    width: 35,
    height: 35,
    borderRadius: 20,
    marginRight: 18,
  },
  detailsContainer: {
  },
  profileName: {
    fontSize: 20,
    color: "#000",
    fontFamily: 'Ubuntu-Bold',
    marginBottom: 4,
  },
  profileText: {
    fontSize: 13,
    color: "gray",
    fontFamily: 'Ubuntu-Medium',
  },
  arrowContainer: {
  },
  listContainer: {
    paddingHorizontal: 40,
    paddingTop: 18,
  },
  listItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  activeListItem: {
    backgroundColor: 'darkblue',
    paddingLeft: 15,
    paddingVertical: 7,
    borderRadius: 30,
  },
  activeItemImage: {
    tintColor: "#fff",
  },
  activeListName: {
    fontFamily: 'Ubuntu-Regular',
    color: "#fff",
  },
  itemImage: {
    width: 22,
    height: 22,
    marginRight: 15,
  },
  listName: {
    fontSize: 21,
    fontFamily: 'Ubuntu-Regular',
    color: "#000",
  },
})