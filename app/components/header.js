import {View, Text, StyleSheet, Image, Dimensions} from "react-native";
import Icons from "../../assets/Icons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Header = () => {
    return (
        <View style={styles.header}>
            <Image source={Icons.menu.light} style = {styles.headerIcons}/>
            <Text style={styles.title}>ensom</Text>
            <Image source={Icons.sun} style = {styles.headerIcons}/>
        </View>
    );
};

const styles = StyleSheet.create({
    headerIcons: {
        height: windowWidth * 0.1,
        width: windowWidth * 0.1,
    },

    title:{
        fontFamily: "Sydney-Bold",
        fontSize: 32,
    },

    header: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-around",
    },
});

export default Header;