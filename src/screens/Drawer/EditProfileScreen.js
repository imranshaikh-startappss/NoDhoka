import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from 'react-native';
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { ScrollView } from 'react-native-gesture-handler';
import DialogBox from './DialogBox';

const EditProfileScreen = () => {
  const [open, setOpen] = React.useState(false);

  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    phone: Yup.string()
      .min(10, 'Must be 10 digit')
      .max(10, 'Must be 10 digit')
      .matches(/^[0]?[6789]\d{9}$/, 'Not a valid no')
      .required('Required'),
  });

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{ margin: 20 }}>
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              phone: '',
              email: '',
            }}
            validationSchema={SignupSchema}
          >
            {({
              values,
              errors,
              touched,
              handleSubmit,
              handleChange,
              setFieldTouched,
              isValid,
            }) => (
              <View style={{ alignItems: 'center' }}>
                <TouchableOpacity
                  onPress={() => {
                    setOpen(!open);
                  }}
                >
                  <View
                    style={{
                      height: 100,
                      width: 100,
                      borderRadius: 15,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <ImageBackground
                      source={{
                        uri: 'https://parspng.com/wp-content/uploads/2022/10/camerapng.parspng.com-11.png',
                      }}
                      style={{
                        height: 100,
                        width: 100,
                      }}
                      imageStyle={{ borderRadius: 15 }}
                    ></ImageBackground>
                  </View>
                </TouchableOpacity>

                <View style={styles.action}>
                  <TextInput
                    placeholder="First Name"
                    placeholderTextColor="#666666"
                    style={styles.textInput}
                    value={values.firstName}
                    onChangeText={handleChange('firstName')}
                  />
                  {errors.firstName && <Text>{errors.firstName}</Text>}
                </View>
                <View style={styles.action}>
                  <TextInput
                    placeholder="Last Name"
                    placeholderTextColor="#666666"
                    style={styles.textInput}
                    value={values.lastName}
                    onChangeText={handleChange('lastName')}
                  />
                  {errors.lastName && <Text>{errors.lastName}</Text>}
                </View>
                <View style={styles.action}>
                  <TextInput
                    placeholder="Phone"
                    keyboardType="number-pad"
                    placeholderTextColor="#666666"
                    style={styles.textInput}
                    value={values.phone}
                    onChangeText={handleChange('phone')}
                  />
                  {errors.phone && <Text>{errors.phone}</Text>}
                </View>
                <View style={styles.action}>
                  <TextInput
                    placeholder="Email id"
                    keyboardType="email-address"
                    placeholderTextColor="#666666"
                    style={styles.textInput}
                    value={values.email}
                    onChangeText={handleChange('email')}
                  />
                  {errors.email && <Text>{errors.email}</Text>}
                </View>
                <TouchableOpacity style={styles.commandButton}>
                  <Text style={styles.panelButtonTitle}>Submit</Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
        </View>
      </View>
      {open && <DialogBox />}
    </ScrollView>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
});
