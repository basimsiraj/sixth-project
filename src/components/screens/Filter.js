import { View, Text, StyleSheet,TouchableOpacity,Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Badge } from 'react-native-elements';
import MenuIcon from '../../assets/images/Menu.svg';
import DownArrowIcon from '../../assets/images/Down-Arrow.svg';
import CloudIcon from '../../assets/images/Cloud.svg';
import CloudFillIcon from '../../assets/images/Cloud-fill.svg'

export default function Filter({ navigation }) {
  const [comicItem,setComicItem] = useState([
    {
        id: 1,
        image: require('../../assets/images/Comic1.jpg'),
        title: 'The beginning after in the end',
        writtenBy: 'By tesghcdy',
        name: 'Next Chapter 46',
        count: '45k view',
    },
    {
        id: 2,
        image: require('../../assets/images/Comic3.jpg'),
        title: 'The beginning after in the end',
        writtenBy: 'By tesghcdy',
        name: 'Next Chapter 46',
        count: '45k view',
    },
    {
        id: 3,
        image: require('../../assets/images/Comic4.jpg'),
        title: 'The beginning after in the end',
        writtenBy: 'By tesghcdy',
        name: 'Next Chapter 46',
        count: '45k view',
    },
    {
        id: 4,
        image: require('../../assets/images/Comic5.jpg'),
        title: 'The beginning after in the end',
        writtenBy: 'By tesghcdy',
        name: 'Next Chapter 46',
        count: '45k view',
    }, 
  ]);

  const renderComicItem = () => (
    comicItem.map((comic) => (
        <TouchableOpacity key={comic.id} style={styles.comicListItemContainer}>
            <Image source={comic.image} style={styles.comicImage} />
            <View style={styles.detailsContainer}>
                <View style={styles.detailsTopContainer}>
                    <View style={styles.itemTopContainer}>
                        <Text style={styles.comicTitle}>{comic.title}</Text>
                    </View>
                    <View style={styles.cloudContainer}>
                        {comic.id === 2 || comic.id === 4 ? (
                            <CloudFillIcon width={25} height={25} /> 
                        ): (
                            <CloudIcon width={25} height={25} /> 
                        )}
                    </View>
                </View>
                <View style={styles.writtenContainer}>
                    <Text style={styles.writtenByText}>{comic.writtenBy}</Text>
                </View>
                <View style={styles.chapterContainer}>
                    <Text style={styles.chapterName}>{comic.name}</Text>
                    <Text style={styles.viewsCount}>{comic.count}</Text>
                </View>
            </View>
        </TouchableOpacity>
    ))
  );

  return (
    <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
            <TouchableOpacity style={styles.logoContainer} onPress={() => navigation.goBack('Home')}>
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
        <View style={styles.dropDownContainer}>
            <TouchableOpacity style={styles.dropDownInnerContainer}>
                <Text style={styles.leftText}>All comic</Text>
                <DownArrowIcon width={26} height={26} />
            </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.comicContainer}>
            {renderComicItem()}
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
        marginTop: 2,
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
    dropDownContainer: {
        paddingHorizontal: 21,
        marginTop: 5,
    },
    dropDownInnerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#F5F5F5",
        borderWidth: 1,
        borderColor: '#F5F5F5',
        borderRadius: 40,
        paddingHorizontal: 17,
        paddingVertical: 13,
    },
    leftText: {
        fontSize: 17,
        fontFamily: 'Ubuntu-Regular',
    },
    comicContainer: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        marginBottom: 28,
    },
    comicListItemContainer: {
        backgroundColor: "#fff",
        flexDirection: "row",
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 20,
        marginBottom: 17,
    },
    comicImage: {
        width: 60,
        height: 100,
        borderRadius: 10,
        marginRight: 10,
    },
    detailsContainer: {
    },
    detailsTopContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    itemTopContainer: {
        width: "71%",
    },
    comicTitle: {
        fontSize: 16,
        fontFamily: 'Ubuntu-Bold',
        color: "#000",
        marginBottom: 9,
    },
    cloudContainer: {
    },
    writtenContainer: {
    },
    writtenByText: {
        fontSize: 12,
        marginBottom: 10,
        fontFamily: 'Ubuntu-Regular',
    },
    chapterContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    chapterName: {
        fontSize: 12,
        fontFamily: 'Ubuntu-Regular',
    },
    viewsCount: {
        fontSize: 12,
        fontFamily: 'Ubuntu-Regular',
    },
})