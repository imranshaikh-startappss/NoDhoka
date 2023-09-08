import Headings from 'NoDhoka/src/components/Card/Headings';
import Picture from 'NoDhoka/src/components/Card/Picture';
import ShadowCard from 'NoDhoka/src/components/Card/ShadowCard';
import ButtonHeading from 'NoDhoka/src/components/Card/ButtonHeading';
import { useTheme } from '../../hooks';
import {Alert} from 'react-native';
import LogCard from 'NoDhoka/src/components/Card1/LogCard';
import CallLog from 'NoDhoka/src/components/Card1/CallLog';


const Home = ({ navigation }: any) => {
const {
  Images,
} = useTheme();

const showAlert = () => {
      Alert.alert(
        // `${msg}`,
        'Text Button Pressed',
        'You pressed the text button!',
        [{ text: 'OK', onPress: () => console.log('OK imran ') }],
        { cancelable: false }
      );
    };
  return (
  <>
  <ShadowCard headings={<Headings />} 
  button1={<ButtonHeading action={showAlert} btnText = 'Set As Default' />}
  button2={<ButtonHeading action={showAlert} btnText = 'Dismiss' />}
  image={<Picture url={Images.sparkles.trucallerimages}/>  }/>


  {/* <LogCard name = 'Name of The contact' callType="incoming" time='time' imgSource = {Images.sparkles.callIconPng}/> */}
  <CallLog />
  </>
  );
}

export default Home;


