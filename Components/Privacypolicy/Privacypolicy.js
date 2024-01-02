import React from 'react';
import {Text, View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

function Privacypolicy({Navigation}) {
  return (
    <>
    <ScrollView>
        
      <View style={{textAlign: 'center', flex: 1, justifyContent: 'center',backgroundColor:"green"}}>
        <Text
          style={{
            color: 'black',
            textAlign: 'center',
            fontSize: 30,
            fontWeight: '600',
            color: 'white',
          }}>
          Privacy Policy 
        </Text>

        <Text
          style={{
            color: 'black',
            textAlign: 'start',
            paddingTop: 20,
            fontSize: 15,
            color: 'white',
          }}>
          Privacy Policy Saylani Welfare Trust and Mass IT Programming are
          committed to protecting the privacy and security of your personal
          information. This Privacy Policy outlines how we collect, use,
          disclose, and safeguard your information when you use our services.
          Information Collection: We may collect personal information such as
          your name, contact details, and other relevant details when you
          interact with our services, website, or programs. This information is
          collected with your consent and is used to provide you with better
          services. Use of Information: The collected information is utilized to
          enhance our services, respond to your inquiries, and communicate
          important updates. We may also use the data to improve our programs
          and tailor them to better suit your needs. Disclosure of Information:
          We do not sell, trade, or otherwise transfer your personally
          identifiable information to outside parties. This does not include
          trusted third parties who assist us in operating our services,
          conducting our programs, or serving you, as long as those parties
          agree to keep this information confidential. Data Security: We
          implement a variety of security measures to maintain the safety of
          your personal information. Your data is stored in a secure
          environment, and access is restricted to authorized personnel only.
          Cookies and Tracking: Our website may use cookies to enhance your
          experience. These cookies are used to collect information about how
          you interact with our website and allow us to remember you. You can
          choose to disable cookies through your browser settings, but this may
          affect your ability to access certain features of our website.
          Children's Privacy: Our services are not directed towards individuals
          under the age of 13. We do not knowingly collect personal information
          from children. If you believe that a child has provided us with their
          information, please contact us, and we will take appropriate steps to
          remove such information. Updates to Privacy Policy: We may update our
          Privacy Policy from time to time. Any changes will be posted on this
          page, and the updated Privacy Policy will be effective immediately
          upon posting.
        </Text>

        <Text
          style={{
              color: 'black',
              textAlign: 'start',
              paddingTop: 20,
              fontSize: 15,
              color: 'white',
            }}>
          By using our services, you consent to the terms of this Privacy
          Policy. If you have any questions or concerns about our privacy
          practices, please contact us at contact@saylaniwelfare.org or
          info@massitprogramming.com.
        </Text>
      </View>
              </ScrollView>
    </>
  );
}

export default Privacypolicy;
