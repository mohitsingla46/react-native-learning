import { StyleSheet } from 'react-native'
import { Link } from 'expo-router'
import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'
import Spacer from '../components/Spacer'

const About = () => {

    return (
        <ThemedView style={styles.container}>
            <ThemedText style={styles.title}>About Us</ThemedText>

            <Spacer height={10} />

            <Link href='/'>
                <ThemedText>Go back to Home</ThemedText>
            </Link>
        </ThemedView>
    )
}

export default About

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    }
})