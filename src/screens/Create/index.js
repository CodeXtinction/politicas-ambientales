import React, { Component } from 'react';
import { inject, observer } from 'mobx-react/native';
import { View, ScrollView, Text, KeyboardAvoidingView } from 'react-native';
import { screnOpts, screens } from 'utils/constants';
import { colors } from 'utils/theme';

import ListHeader from 'components/ListHeader';
import Picker from 'components/Picker';
import Input from 'components/Input';
import NextButton from 'components/NextButton';

import pickerOpts from 'data/pickerOptions';
import style from './style';

@inject('normas')
@observer
class Create extends Component {
  static navigatorStyle = {
    ...screnOpts.CREATE,
  };

  constructor(props) {
    super(props);
    this.pushComposer = this.pushComposer.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { normas } = this.props;
    normas.clearPost();
  }

  pushComposer() {
    const { navigator } = this.props;
    const { newPost } = this.props.normas;

    const isNotEmpty =
      newPost.tipo &&
      newPost.institucion &&
      newPost.principio &&
      newPost.instrumento &&
      newPost.iniciativa &&
      newPost.nombre &&
      newPost.ocupacion &&
      newPost.email &&
      newPost.telefono;

    if (!isNotEmpty) {
      this.actionMessage('Completa todos los campos', true);
      return;
    }
    navigator.push({
      ...screens.COMPOSER,
    });
  }

  handleChange(value, key) {
    const { normas } = this.props;
    normas.handleChange(key, value);
  }

  actionMessage(message, alert) {
    const { navigator } = this.props;
    const color = alert ? colors.alert : colors.success;
    navigator.showSnackbar({
      text: message,
      textColor: '#fff',
      duration: 'long',
      backgroundColor: color,
    });
  }

  render() {
    const { newPost } = this.props.normas;
    return (
      <View style={style.container}>
        <ScrollView style={style.scroll}>
          <View style={style.pickers}>
            <View style={style.sectionTitle}>
              <Text style={style.title}>Datos generales</Text>
            </View>
            <Picker
              label="Tipo "
              options={pickerOpts.tipoPolitica}
              onValueChange={this.handleChange}
              value={newPost.tipo}
              keyField="tipo"
            />
            <Picker
              label="Institución"
              options={pickerOpts.institucion}
              onValueChange={this.handleChange}
              value={newPost.institucion}
              keyField="institucion"
            />
            <Picker
              label="Principio"
              options={pickerOpts.principio}
              onValueChange={this.handleChange}
              value={newPost.principio}
              keyField="principio"
            />
            <Picker
              label="Instrumento"
              options={pickerOpts.instrumento}
              onValueChange={this.handleChange}
              value={newPost.instrumento}
              keyField="instrumento"
            />
            <Picker
              label="Iniciativa"
              options={pickerOpts.iniciativa}
              onValueChange={this.handleChange}
              value={newPost.iniciativa}
              keyField="iniciativa"
            />
          </View>
          <View style={style.info}>
            <View style={style.sectionTitle}>
              <Text style={style.title}>Datos personales</Text>
            </View>
            <Input
              label="Nombre y apellido"
              icon="user"
              handleChange={this.handleChange}
              keyField="nombre"
              value={newPost.nombre}
            />
            <Input
              label="Ocupación"
              icon="briefcase"
              handleChange={this.handleChange}
              keyField="ocupacion"
              value={newPost.ocupacion}
            />
            <Input
              label="Email"
              icon="mail"
              handleChange={this.handleChange}
              keyField="email"
              value={newPost.email}
            />
            <Input
              label="Telefono"
              icon="phone"
              handleChange={this.handleChange}
              keyField="telefono"
              value={newPost.telefono}
            />
          </View>
          <NextButton onPress={this.pushComposer} title="SIGUIENTE" color={colors.main} />
        </ScrollView>
      </View>
    );
  }
}

export default Create;
