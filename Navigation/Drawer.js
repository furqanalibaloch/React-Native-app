import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screen/home/Home.js';
// import Splash_Screen from '../Components/Splash_Screen/splash_screen';
import DrawerContent from './DrawerContent.js';
import About from '../screen/About/About.js';
import Setting from '../screen/Setting/Setting.js';
import Request from '../screen/request/Request.js'
import Donate from '../screen/request/Donate.js'
import Media from '../screen/media/Media.js';
import Terms from '../Components/Terms/Terms.js';
import PrivacyPolicy from '../Components/Privacypolicy/Privacypolicy.js';


const Drawers = createDrawerNavigator()


function Home_Darwer(){
    return(
        <Drawers.Navigator drawerContent={props =><DrawerContent {...props} />}>
            <Drawers.Screen name='Home' component={Home}
            />
            <Drawers.Screen name='About' component={About}/>
             
            <Drawers.Screen name='Request' component={Request}/>

            <Drawers.Screen name='Donate' component={Donate}/>

            <Drawers.Screen name='Setting' component={Setting}/>

            <Drawers.Screen name='Terms' component={Terms}/>
            
            <Drawers.Screen name='Privacypolicy' component={PrivacyPolicy}/>


            <Drawers.Screen name='Media' component={Media}/>



            
         
            


        </Drawers.Navigator>

    )
}

export default Home_Darwer