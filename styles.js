import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    paperClip: {
        marginTop: 8,
        marginHorizontal: 5,
        transform: [{rotateY: '180deg'}],
    },
    sendButton: {marginBottom: 10, marginRight: 10},
    sendContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    chatFooter: {
        shadowColor: '#1F2687',
        shadowOpacity: 0.37,
        shadowRadius: 8,
        shadowOffset: {width: 0, height: 8},
        elevation: 8,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.18)',
        flexDirection: 'row',
        padding: 5,
        backgroundColor: 'blue'
    },
    fileContainer: {
        flex: 1,
        maxWidth: 300,
        marginVertical: 2,
        borderRadius: 15,
    },
    fileText: {
        marginVertical: 5,
        fontSize: 16,
        lineHeight: 20,
        marginLeft: 10,
        marginRight: 5,
    },
    textTime: {
        fontSize: 10,
        color: 'gray',
        marginLeft: 2,
    },
    buttonFooterChat: {
        width: 35,
        height: 35,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        borderColor: 'black',
        right: 3,
        top: -2,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
    },
    buttonFooterChatImg: {
        width: 35,
        height: 35,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        borderColor: 'black',
        left: 66,
        top: -4,
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
    },
    textFooterChat: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'gray',
    },
});
