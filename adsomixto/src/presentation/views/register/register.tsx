import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Image, TextInput, Button, ToastAndroid, Touchable, TouchableOpacity, ScrollView } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';
import { useNavigation } from '@react-navigation/native';
import { Picker } from "@react-native-picker/picker";
import useViewModel from './viewModel';
import { CustomTextInput } from '../../components/CusatomTextInput';
import styles from './styles'

export const RegisterScreen = () => {
    const { id_documento, nombre, apellido, telefono, direccion, correo, password, centro_formacion, ficha_aprendiz, id_tipo_documento, rol_id, onChange, register, errorMessage } = useViewModel();
    // Para saber si la variable ya tiene establecido un valor 

    useEffect(() => {
        if(errorMessage !== ''){
            ToastAndroid.show(errorMessage, ToastAndroid.LONG)
        }
    }, [errorMessage]);

    return (
        <View style={styles.container}>
            <Image
                source={require('../../../../assets/chef.jpg')}
                style={styles.ImageBackground}
            />
            <View style={styles.logoContainer}>
                <Image
                    source={require('../../../../assets/user_image.png')}
                    style={styles.logoImage}
                />
                <Text style={styles.logoText}>SELECCIONA UNA IMAGEN</Text>
            </View>


            <View style={styles.form}>
                <ScrollView>
                    <Text style={styles.formText}>REGISTRARSE</Text>


                    <CustomTextInput
                        image={require('../../../../assets/user.png')}
                        placeholder='Nro de documento'
                        keyboardType='default'
                        property='id_documento'
                        onChangeText={onChange}
                        value={id_documento}
                    />
                    <CustomTextInput
                        image={require('../../../../assets/user.png')}
                        placeholder='Nombres'
                        keyboardType='default'
                        property='nombre'
                        onChangeText={onChange}
                        value={nombre}
                    />

                    <CustomTextInput
                        image={require('../../../../assets/my_user.png')}
                        placeholder='Apellidos'
                        keyboardType='default'
                        property='apellido'
                        onChangeText={onChange}
                        value={apellido}
                    />

                    <CustomTextInput
                        image={require('../../../../assets/user.png')}
                        placeholder='telefono'
                        keyboardType='numeric'
                        property='telefono'
                        onChangeText={onChange}
                        value={telefono}
                    />

                    <CustomTextInput
                        image={require('../../../../assets/user.png')}
                        placeholder='Direccion'
                        keyboardType='default'
                        property='direccion'
                        onChangeText={onChange}
                        value={direccion}
                    />

                    <CustomTextInput
                        image={require('../../../../assets/email.png')}
                        placeholder='Correo Electronico'
                        keyboardType='email-address'
                        property='correo'
                        onChangeText={onChange}
                        value={correo}
                    />
                    <CustomTextInput
                        image={require('../../../../assets/phone.png')}
                        placeholder='Centro de formacion'
                        keyboardType='default'
                        property='centro_formacion'
                        onChangeText={onChange}
                        value={centro_formacion}
                    />

                    <CustomTextInput
                        image={require('../../../../assets/password.png')}
                        placeholder='Contraseña'
                        keyboardType='default'
                        property='password'
                        onChangeText={onChange}
                        value={password}
                        secureTextEntry={true}
                    />

                    <CustomTextInput
                        image={require('../../../../assets/confirm_password.png')}
                        placeholder='ficha aprendiz'
                        keyboardType='numeric'
                        property='ficha_aprendiz'
                        onChangeText={onChange}
                        value={ficha_aprendiz}
                    />

                    <Picker
                        selectedValue={id_tipo_documento}
                        onValueChange={(itemValue) => onChange('id_tipo_documento', itemValue)}
                    >
                        <Picker.Item label="Selecciona tu documento" value="" />
                        <Picker.Item label="Cedula de ciudadania" value="1" />
                        <Picker.Item label="Cedula de extranjeria" value="2" />
                        <Picker.Item label="Tarjeta de identidad" value="3" />
                    </Picker>
                    <Picker 
                    selectedValue={rol_id}
                    onValueChange={(itemValue) => onChange('rol_id', itemValue)}
                    >
                        <Picker.Item label="Selecciona tu rol" value="" />
                        <Picker.Item label="Administrador" value="1" />
                        <Picker.Item label="Vigilante" value="2" />
                        <Picker.Item label="Usuario" value="3" />
                    </Picker>


                    <View style={{ marginTop: 30 }}>
                        <RoundedButton text='CONFIRMAR' onPress={() => register()}></RoundedButton>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

