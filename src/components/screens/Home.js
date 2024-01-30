import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput, ScrollView } from 'react-native';
import React, { useState } from 'react';
import FilterIcon from '../../assets/images/Filter.svg';
import Header from '../includes/Header';

export default function Home({ navigation }) {

    const [comics,setComics] = useState([
        {
            id: 1,
            comicImages: require('../../assets/images/Comic2.jpg'),
            comicName: 'Trending Comic',
            description: 'Good Afternoon',
        },
        {
            id: 2,
            comicImages: require('../../assets/images/Comic5.jpg'),
            comicName: 'Trending Comic',
            description: 'Good Afternoon',
        },
        {
            id: 3,
            comicImages: require('../../assets/images/Comic4.jpg'),
            comicName: 'Trending Comic',
            description: 'Good Afternoon',
        },
        {
            id: 4,
            comicImages: require('../../assets/images/Comic3.jpg'),
            comicName: 'Trending Comic',
            description: 'Good Afternoon',
        },
        {
            id: 5,
            comicImages: require('../../assets/images/Comic1.jpg'),
            comicName: 'Trending Comic',
            description: 'Good Afternoon',
        },
    ]);

    const renderComic = () => (
        comics.map((comic) => (
            <TouchableOpacity key={comic.id} style={styles.comicListItem}>
                <Image source={comic.comicImages} style={styles.comicImage} />
                <Text style={styles.comicName}>{comic.comicName}</Text>
                <Text style={styles.comicParagraph}>{comic.description}</Text>
            </TouchableOpacity>
        ))
    );
  
    const [authors,setAuthors] = useState([
        {
            id: 1,
            image: require('../../assets/images/Author1.jpg'),
            name: 'Jahyan',   
        },
        {
            id: 2,
            image: require('../../assets/images/Author3.jpg'),
            name: 'Jahyan',
        },
        {
            id: 3,
            image: require('../../assets/images/Author5.jpg'),
            name: 'Jahyan',
        },
        {
            id: 4,
            image: require('../../assets/images/Author4.jpg'),
            name: 'Jahyan',
        },
        {
            id: 5,
            image: require('../../assets/images/Author2.jpg'),
            name: 'Jahyan',
        },
    ]);

    const renderAuthors = () => (
        authors.map((author) => (
            <TouchableOpacity key={author.id} style={styles.authorListItem} onPress={() => navigation.navigate('Detail Author',{authorName: author.name,authorImage: author.image})}>
                <Image source={author.image} style={styles.authorImage} />
                <Text style={styles.authorName}>{author.name}</Text>
            </TouchableOpacity>
        ))
    );

   return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.mainContainer}>
        <Header navigation={navigation} />
        <View style={styles.searchContainer}>
            <View style={styles.formContainer}>
                <View style={styles.formInnerContainer}>
                    <Image source={require("../../assets/images/search.png")} style={styles.searchImage} />
                    <TextInput placeholder="Search Comic.." style={styles.searchInput}  />
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Filter')}>
                    <FilterIcon width={23} height={23} />
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.comicContainer}>
            <View style={styles.comicTopContainer}>
                <Text style={styles.textName}>Trending Comic</Text>
                <TouchableOpacity style={styles.moreContainer}>
                    <Image source={require("../../assets/images/More.png")} style={styles.moreImage} />
                </TouchableOpacity>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.comicListContainer}>
                {renderComic()}
            </ScrollView>
        </View>
        <View style={styles.authorContainer}>
            <View style={styles.lineContainer}>
                <View style={styles.lineInnerContainer}></View>  
            </View>
            <View style={styles.authorTopContainer}>
                <Text style={styles.textName}>Top Author</Text>
                <TouchableOpacity style={styles.moreContainer}>
                    <Image source={require("../../assets/images/More.png")} style={styles.moreImage} />
                </TouchableOpacity>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.authorListContainer}>
                {renderAuthors()}
            </ScrollView>
        </View>
        <View style={styles.continueReadingContainer}>
            <View style={styles.lineContainer}>
                <View style={[styles.lineInnerContainer,{backgroundColor: "#fff"}]}></View>  
            </View>
            <View style={styles.continueReadingTopContainer}>
                <Text style={[styles.textName,{color: "lightgray"}]}>Continue reading</Text>
                <TouchableOpacity style={styles.moreContainer}>
                    <Image source={require("../../assets/images/More.png")} style={styles.moreImage} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.profileContainer}>
                <View style={styles.profileLeftContainer}>
                    <View style={styles.profileInnerContainer}>
                        <Image source={require("../../assets/images/Author4.jpg")} style={styles.profileImage} />
                        <View style={styles.profileDetailsContainer}>
                            <Text style={styles.profileName}>Martin peak</Text>
                            <Text style={styles.profileDescription}>Chapter 201</Text>
                        </View>
                    </View>
                    <View style={styles.arrowContainer}> 
                        <Image source={require("../../assets/images/Right-arrow.png")} style={styles.rightArrowImage} />
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    searchContainer: {
        borderRadius: 1,
        backgroundColor: "#F5F5F5",
        borderRadius: 25,
        marginHorizontal: 23,
    },
    formContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 24,
    },
    formInnerContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    searchImage: {
        width: 20,
        height: 20,
        marginRight: 20,
    },
    searchInput: {
        fontSize: 15,
        fontFamily: 'Ubuntu-Regular',
    },
    comicContainer: {
        paddingVertical: 35,
    },
    comicTopContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 25,
    },
    textName: {
        fontSize: 15,
        fontFamily: 'Ubuntu-Medium',
        color: "#000",
    },
    moreContainer: {
        alignItems: "center",
    },
    moreImage: {
        width: 15,
        height: 15,
    },
    comicListContainer: {
        paddingLeft: 25,
        marginTop: 22,
    },
    comicListItem: {
        marginRight: 18,
    },
    comicImage: {
        width: 130,
        height: 160,
        borderRadius: 16,
    },
    comicName: {
        fontSize: 15,
        color: "#000",
        marginTop: 11,
        fontFamily: 'Ubuntu-Bold',
        marginBottom: 6,
    },
    comicParagraph: {
        fontSize: 12,
        fontFamily: 'Ubuntu-Medium',
    },
    authorContainer: {
        backgroundColor: "#fff",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    lineContainer: {
        paddingTop: 20,
        alignSelf: "center",
    },
    lineInnerContainer: {
        width: 22,
        height: 5,
        borderRadius: 10,
        backgroundColor: "lightgray",
    },
    authorTopContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 25,
        paddingVertical: 25,
    },
    authorListContainer: {
        paddingHorizontal: 25,
        paddingBottom: 15,
    },
    authorListItem: {
        marginRight: 23,
    },
    authorImage: {
        width: 70,
        height: 70,
        borderRadius: 40,
    },
    authorName: {
        marginTop: 8,
        textAlign: "center",
        fontFamily: 'Ubuntu-Medium',
    },
    continueReadingContainer: {
        flex: 1,
        backgroundColor: "#F08080",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    continueReadingTopContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        marginTop: 25,
    },
    profileContainer: {
        marginTop: 25,
        paddingHorizontal: 20,
        paddingBottom: 30,
    },
    profileLeftContainer: {
        backgroundColor: "#fff",
        paddingHorizontal: 22,
        paddingVertical: 15,
        borderRadius: 40,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    profileInnerContainer: {
        flexDirection: "row",
    },
    profileImage: {
        width: 43,
        height: 43,
        borderRadius: 30,
        marginRight: 13,
    },
    profileDetailsContainer: {
    },
    profileName: {
        fontSize: 15,
        fontFamily: 'Ubuntu-Bold',
        color: "#000",
        marginBottom: 5,
    },
    profileDescription: {
        fontSize: 11,
        fontFamily: 'Ubuntu-Medium',
    },
    arrowContainer: {
    },
    rightArrowImage: {
        width: 22,
        height: 22,
    },
})