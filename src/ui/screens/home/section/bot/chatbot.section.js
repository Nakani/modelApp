import React, { Component } from 'react';
import Bot from 'react-native-chatbot';
import { stepsWelcome } from './steps.section'
export class ChatBot extends Component {
  render() {
    return (

      <Bot
        headerTitle="Speech Synthesis"
        speechSynthesis={{ enable: true, lang: 'en' }}
        steps={stepsWelcome}
        // Avatar do Bot e do usuário //
        botAvatar='https://thumb.lovemondays.com.br/image/e892883c3c6542aa84011b758d383dc9/logos/a215a0/4all.png'
        userAvatar='https://i.imgur.com/6sm2DYv.png'
        // Cores dos diálogos //
        botFontColor={'#FFFDF8'}
        userFontColor={'#FFFDF8'}
        botBubbleColor={'#e08c00'}
        userBubbleColor={'#FFC286'}
        // Cores do fundo do chat //
        style={{ backgroundColor: '#FFFDF8', marginTop: 2 }}
        contentStyle={{ backgroundColor: '#FFFDF8' }}
        // Estilo do Rodapé (Footer) //
        footerStyle={{ backgroundColor: '#fff', margin: 5, padding: 1, borderRadius: 7, elevation: 2, }}
        submitButtonStyle={{ backgroundColor: '#e08c00', borderRadius: 4, width: 63, margin: 2 }}
      />
    );
  }
}
