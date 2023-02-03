import { View, Image, Text, StyleSheet, ImageBackground} from "react-native";
import Profiles from "../../assets/Profiles";
import Icons from "../../assets/Icons";
import {Themes} from "../../assets/Themes";

const Body = () => {
    return (
        <View>
            <ImageBackground 
            source={Profiles.mtl.image} 
            style={styles.image}
            imageStyle = {styles.imageStyle}
            >
                <Text style= {styles.toptext}>{Profiles.mtl.name}</Text>
                <Text style = {styles.bottomtext}>{Profiles.mtl.caption}</Text>
            </ImageBackground>

            <View style={styles.songbox}>

                <Text style= {styles.hotTake}>{"My Hottest Take"}</Text>
                
                <View style={styles.songheader}>
                    <Image 
                    source= {Icons.player.light}
                    style={styles.playerStyle}>
                    </Image>

                    <Image 
                    source= {Icons.audioWave.light}
                    style={styles.audioStyle}>
                    </Image>

                </View>
                
            </View>
        </View>
    );
};

const styles= StyleSheet.create({
    image: {
        width: "95%",
        height: undefined,
        aspectRatio: 1 / 1.1,
        justifyContent: "space-between",
        marginHorizontal: "5%",
        marginVertical: "5%",
        shadows: Themes.light.shadows,
        shadowColor: Themes.light.shadows.shadowColor,
        shadowOpacity: Themes.light.shadows.shadowOpacity,
        shadowRadius: Themes.light.shadows.shadowRadius,
        shadowOffset: Themes.light.shadows.shadowOffset,
    },
    imageStyle: {
        borderRadius: 8,
    },

    toptext: {
        padding: 8,
        color: "white",
        fontFamily: "Sydney",
        fontSize: "32",
    },

    bottomtext: {
        padding: 8,
        color: "white",
        fontFamily: "Sydney",
        fontSize: "18",
    },

    playerStyle:{
        width: 80,
        height: 80,
        resizeMode: "contain",
        padding: 8,
    },

    audioStyle:{
        width: 280,
        height: 100,
        resizeMode: "contain",
        padding: 8,
    },

    songheader: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-around",
        alignItems: "center",
    },

    songbox:{
        backgroundColor: "white",
        width: "90%",
        height: "25%",
        // justifyContent: "space-between",
        marginHorizontal: "5%",
        marginVertical: "5%",
        shadows: Themes.light.shadows,
        shadowColor: Themes.light.shadows.shadowColor,
        shadowOpacity: Themes.light.shadows.shadowOpacity,
        shadowRadius: Themes.light.shadows.shadowRadius,
        shadowOffset: Themes.light.shadows.shadowOffset,
        borderRadius: 8,
    },

    hotTake:{
        padding: 8,
        color: "black",
        fontFamily: "Sydney",
        fontSize: "32",
    }

});

export default Body;