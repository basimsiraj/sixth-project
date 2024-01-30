import { View, Text, StyleSheet,TouchableOpacity,Image } from 'react-native';
import React from 'react';
import { Badge } from 'react-native-elements';
import MenuIcon from '../../assets/images/Menu.svg';

export default function Header({ navigation }) {
  return (
    <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.logoContainer} onPress={() => navigation.navigate('Profile')}>
            <View style={styles.logoImageContainer}>
                <Image source={require("../../assets/images/Logo.jpg")} style={styles.logoImage} />
                <Badge value="1" containerStyle={styles.badgeContainer} badgeStyle={styles.customBadgeStyle} textStyle={styles.customBadgeTextStyle} />
            </View>
            <View style={styles.logoInnerContainer}>
                <Text style={styles.update}>Good Afternoon</Text>
                <Text style={styles.name}>Mira Suxi</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rightContainer}>
            <View style={styles.menuContainer}>
                <MenuIcon width={24} height={24} />
            </View>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 23,
        paddingVertical: 26,   
    },
    logoContainer: {
        flexDirection: "row",  
    },
    logoImageContainer: {
        position: 'relative',
    },
    logoImage: {
        width: 48,
        height: 48,
        borderRadius: 25,
    },
    badgeContainer: {
        position: 'absolute',
        top: -3,
        right: -5,
    },
    customBadgeStyle: {
        width: 20, 
        height: 20,
        backgroundColor: "red",
    },
    customBadgeTextStyle: {
        color: "#000",
        fontWeight: "700",
    },
    logoInnerContainer: {
        marginLeft: 33,   
    },
    update: {
        fontSize: 12,
        fontFamily: 'Ubuntu-Regular' 
    },
    name: {
        fontSize: 20,
        fontFamily: 'Ubuntu-Medium',
        color: "#000",
        marginTop: 5,  
    },
    rightContainer: {
    },
    menuContainer: {
        backgroundColor: "#fff",
        paddingHorizontal: 8,
        paddingVertical: 8,
        borderRadius: 20,  
    },

})