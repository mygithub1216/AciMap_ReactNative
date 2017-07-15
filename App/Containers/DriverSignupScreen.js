import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, ScrollView } from 'react-native';
import { connect } from 'react-redux'
import UserActions from '../Redux/UserRedux'
import RoundedButton from '../Components/RoundedButton'
import { NavigationActions } from 'react-navigation'
import { Fonts, Colors, Metrics } from '../Themes/'
import t from 'tcomb-form-native'

var Form = t.form.Form;

// Avoid error on hot-reload
if (t.form.Form.stylesheet.controlLabel.normal.color !== '#ffffff') {
  t.form.Form.stylesheet.textbox.normal.color = '#ffffff';
  t.form.Form.stylesheet.textbox.normal.fontFamily = 'Avenir-Book';  
  t.form.Form.stylesheet.controlLabel.normal.color = '#ffffff';  
  t.form.Form.stylesheet.controlLabel.normal.fontFamily = 'Avenir-Book';  
}

// here we are: define your domain model
var DriverSignup = t.struct({
  fullName: t.String,
  email: t.String,
  describeYourself: t.String,
  describeYourVehicle: t.String,
  iAcceptTheTerms: t.Boolean 
});

var options = {};

class DriverSignupScreen extends Component {
  static navigationOptions = {
    title: 'Driver Signup',
  };
  onPress() {
    // call getValue() to get the values of the form
    var value = this.refs.form.getValue();
    if (value) { // if validation fails, value will be null
      console.tron.log(value); // value here is an instance of Person
      this.props.driverSignupSubmit(value, this.props.user)
    }    
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.headline}>Drive for Arcade City</Text>
        <Text style={styles.explainer}>Want to drive for Arcade City?</Text>
        <Text style={styles.explainer}>You will gain instant access as Driver. Ability to put down beacons. TRIAL driver. Noob. Level 1 Driver</Text>
        <View style={styles.formContainer}>        
          <Form
            ref="form"
            type={DriverSignup}
            options={options}
          />   
        </View>
        <TouchableHighlight style={styles.submitBtn} onPress={this.onPress.bind(this)} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>SUBMIT</Text>
        </TouchableHighlight>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  headline: {
    fontSize: 46,
    color: Colors.snow,
    alignSelf: 'center',
    fontFamily: 'Avenir-Black',
    marginVertical: 34
  },
  explainer: {
    fontSize: 20,
    color: Colors.snow,
    fontFamily: 'Avenir-Book',
    marginVertical: 5,
    paddingHorizontal: Metrics.screenWidth * .1
  },
  formContainer: {
    marginVertical: 30,
    paddingHorizontal: Metrics.screenWidth * .1
  },
  container: {
    flex: 1,
    backgroundColor: Colors.acnavy,
    paddingHorizontal: 50
  },
  submitBtn: {
    height: 56,
    backgroundColor: Colors.acturq,
    borderColor: Colors.acturq,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    width: 300
  },
  buttonText: {
    fontFamily: 'Avenir-Black',
    alignSelf: 'center',
    color: 'white',
    fontSize: 20
  }
});

const mapStateToProps = (state) => ({ 
  user: state.user
})

const mapDispatchToProps = (dispatch) => ({
  driverSignupSubmit: (formData, user) => dispatch(UserActions.driverSignupSubmit(formData, user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(DriverSignupScreen)