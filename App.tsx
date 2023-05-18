import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

// dp medida densidade de pixel
// Todos elementos tem display:flex   flex-1 (ocupa a tela toda, todo espaço)

export default function App() {
  return (
    <View className='bg-gray-950 flex-1 items-center justify-center'>
      <Text className='text-zinc-50 font-bold text-5xl'>RocketSeat</Text>
      <StatusBar style="light" translucent/>
    </View>
  );
}

/*
     translucent ela fica transparente a sidebar do topo    

    <View style={styles.container}>
      <Text style={styles.textColor}>Hello World!</Text>
      <StatusBar style="auto" />
    </View>

*/

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   textColor: {
//     color: '#fff',
//     fontWeight: '600',
//     fontSize: 48, //no react native não usa px somente valores numericos
//   }
// });
