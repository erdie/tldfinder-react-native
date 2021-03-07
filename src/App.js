import React from 'react';
import {
    View, 
    Text, 
    Image, 
    StyleSheet, 
    TextInput, 
    Dimensions, 
    ScrollView, 
    SafeAreaView
} from 'react-native'
import logo from './assets/img/tld-finder.png'
import icon from './assets/icons/search.png'

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Image source={logo} style={styles.logoHeader}/>
            <Text style={styles.textHeader}>
                Find the top-level domains in the world and the organizations who manage it.
            </Text>
            <View style={styles.inputWrapper}>
                <TextInput style={styles.textInput}>
                    Search Domain
                </TextInput>
                <Image source={icon} style={styles.searchIcon}/>
            </View>
            <ScrollView style={styles.wrapper}>
                <View style={styles.card}>
                    <Text style={styles.textTitle}>.id</Text>
                    <Text style={styles.textCard}>Perkumpulan Pengelola Nama Domain Internet Indonesia (PANDI)</Text>
                    <Text style={styles.textLabel}>country code</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.textTitle}>.id</Text>
                    <Text style={styles.textCard}>Perkumpulan Pengelola Nama Domain Internet Indonesia (PANDI)</Text>
                    <Text style={styles.textLabel}>country code</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.textTitle}>.id</Text>
                    <Text style={styles.textCard}>Perkumpulan Pengelola Nama Domain Internet Indonesia (PANDI)</Text>
                    <Text style={styles.textLabel}>country code</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.textTitle}>.id</Text>
                    <Text style={styles.textCard}>Perkumpulan Pengelola Nama Domain Internet Indonesia (PANDI)</Text>
                    <Text style={styles.textLabel}>country code</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.textTitle}>.id</Text>
                    <Text style={styles.textCard}>Perkumpulan Pengelola Nama Domain Internet Indonesia (PANDI)</Text>
                    <Text style={styles.textLabel}>country code</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.textTitle}>.id</Text>
                    <Text style={styles.textCard}>Perkumpulan Pengelola Nama Domain Internet Indonesia (PANDI)</Text>
                    <Text style={styles.textLabel}>country code</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.textTitle}>.id</Text>
                    <Text style={styles.textCard}>Perkumpulan Pengelola Nama Domain Internet Indonesia (PANDI)</Text>
                    <Text style={styles.textLabel}>country code</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.textTitle}>.id</Text>
                    <Text style={styles.textCard}>Perkumpulan Pengelola Nama Domain Internet Indonesia (PANDI)</Text>
                    <Text style={styles.textLabel}>country code</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.textTitle}>.id</Text>
                    <Text style={styles.textCard}>Perkumpulan Pengelola Nama Domain Internet Indonesia (PANDI)</Text>
                    <Text style={styles.textLabel}>country code</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.textTitle}>.id</Text>
                    <Text style={styles.textCard}>Perkumpulan Pengelola Nama Domain Internet Indonesia (PANDI)</Text>
                    <Text style={styles.textLabel}>country code</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const fullWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1C1C1E',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1
    },
    logoHeader: {
        marginTop: 30
    },
    textHeader: {
        color: '#ffffff',
        textAlign: 'center',
        marginVertical: 25,
        marginHorizontal: 5,
        lineHeight: 25,
        fontSize: 16
    },
    inputWrapper: {
        width: '100%',
        position: 'relative',
        alignItems: 'center',
        marginBottom: 10
    },
    textInput: {
        borderWidth: 0,
        borderRadius: 5,
        width: '94%',
        paddingVertical: 15,
        paddingRight: 15,
        paddingLeft: 40,
        fontSize: 18,
        backgroundColor: '#3A3A3C',
        color: 'white',
        position: 'relative',
    },
    searchIcon: {
        width: 18,
        height: 18,
        position: 'absolute',
        left: 25,
        top: 18
    },
    card: {
        backgroundColor: '#2C2C2E',
        marginVertical: 7,
        padding: 10,
        borderRadius: 5,
        flex: 1,
        position: 'relative'
    },
    textTitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#525252',
        borderStyle: 'solid'
    },
    textCard: {
        color: 'white',
        paddingTop: 10,
        borderTopWidth: 1,
        borderTopColor: 'white',
        borderStyle: 'solid'
    },
    textLabel: {
        position: 'absolute',
        right: 15,
        top: 15,
        color: 'white',
        backgroundColor: 'red',
        paddingHorizontal: 10,
        paddingTop: 2,
        paddingBottom: 3,
        fontWeight: '600',
        fontSize: 13,
        borderRadius: 5
    },
    wrapper: {
        marginTop: 15
    }
});

export default App;
