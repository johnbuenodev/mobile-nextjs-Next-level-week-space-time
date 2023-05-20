import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Text, Touchable, TouchableOpacity, View } from 'react-native';

// dp medida densidade de pixel
// Todos elementos tem display:flex   flex-1 (ocupa a tela toda, todo espaço)

//No react native precisa importar font por font
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/roboto';

import {
  BaiJamjuree_700Bold
} from '@expo-google-fonts/bai-jamjuree';

import  bgBlur  from './src/assets/bg-blur.png'; //'./src/assets/bg-blur.png';
import NLWLogo from './src/assets/nlw-spacetime-logo.svg';

export default function App() {
  // Parei em 53:00 no react 

  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold
  });
  /*
       <Text className='text-gray-50 text-5xl font-alt'>RocketSeat</Text>
      <Text className='text-gray-50 text-5xl font-body'>RocketSeat</Text>
      <Text className='text-gray-50 text-5xl font-title'>RocketSeat</Text>
  */

  //Enquanto as fonts não carregam o app return null na renderização
  if(!hasLoadedFonts) {
   return null;
  }
 //imageStyle permite estilizar o elemento ImageBackground
 //parei em 1:00:00
 //https://app.rocketseat.com.br/events/nlw-spacetime/ignite/aula-2
  return ( 
    <ImageBackground source={bgBlur} 
                     className='bg-gray-900 flex-1 items-center relative px-8 py-10' 
                     imageStyle={{position: 'absolute', left:'-100%'}}>

      <View className='flex-1 items-center justify-center gap-6'>
        <NLWLogo />
       

        <View className='space-y-2'>
          <Text className='text-center font-title text-2xl leading-tight text-gray-50'>
           Sua Cápsula do tempo
          </Text>
          <Text className='text-center font-body text-base leading-relaxed text-gray-100'>
            Colecione momentos marcantes da sua jornada e compartilhe (se quiser) com o mundo!
          </Text>
        </View>

        <TouchableOpacity activeOpacity={0.7} className='rounded-full bg-green-500 px-5 py-2'>
          <Text className='font-alt text-sm uppercase text-black'>Cadastrar Lembrança</Text>
        </TouchableOpacity>

      </View>

      <Text className='text-center font-body text-sm leading-relaxed text-gray-200'>Feito com 💜 no NLW da Rocketseat</Text>

      <StatusBar style="light" translucent/>
    </ImageBackground>
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
