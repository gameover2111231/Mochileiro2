import {Modal, View, StyleSheet, Pressable, Text } from "react-native-web";
import  MaterialIcons  from "@expo/vector-icons/MaterialCommunityIcons";


export default function EmojiPicher( isVisible, children, onClose) {
    return (
        <Modal animationType= 'slide' transparent={true} Visible={isVisible}>
            <View style={styles.modalContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Chose asticher</Text>
                    <Pressable onPress={onClose}>
                        <MaterialIcons name='close' color='#fff' Size={22} />
                    </Pressable>
                </View>
                {children}
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create( {
    modalContainer: {
        height: '25%',
        width: '100%',
        backgroundColor: '#25292',
        borderTopRightRadius: 18,
        borderTopLeftRadius: 18,
        position: absolute,
        bottom: 0,
    },

    titleContainer: {
        height: '16%',
        backgroundColor: '#464c55',
        borderTopRightRadius: 18,
        borderTopLeftRadius: 18,
        paddinHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        },

        title: {
            color:'#fff',
            fontSize: 16,
        },

        pickerContainer: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            paddinHorizontal: 50,
            paddinVertical: 20,
        },
        
});