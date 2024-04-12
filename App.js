import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState, useRef } from 'react';

export default function App() {
  const [relogio, setRelogio] = useState(0.0);
  const [btnIniciar, setBtnIniciar] = useState('INICIAR');
  const interval = useRef(null);

  function iniciar() {
    if (btnIniciar === 'INICIAR') {
      setBtnIniciar('PARAR');
      interval.current = setInterval(() => {
        setRelogio((cronometroAtual) => cronometroAtual + 0.1);
      }, 100);
    } else {
      clearInterval(interval.current);
    }
  };

  function limpar() {
    setBtnIniciar('INICIAR');
    setRelogio(0);
    clearInterval(interval.current);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CRONÔMETRO</Text>

      <Image source={require('./src/cronometro.png')} style={styles.cronometro} />
      <Text style={styles.timer}>{relogio.toFixed(1)}</Text>

      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.btn} onPress={iniciar}>
          <Text style={styles.btnTexto}>{btnIniciar}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={limpar}>
          <Text style={styles.btnTexto}>LIMPAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    margin: 20,
  },
  btnArea: {
    flexDirection: 'row'
  },
  btn: {
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 15,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    margin: 20,
  },
  btnTexto: {
    fontSize: 16,
    color: '#00aeef',
  },
  cronometro: {
    margin: 10,
    width: 200,
    height: 250,
  },
  timer: {
    color: '#FFF',
    fontSize: 60,
    fontWeight: 'bold',
    marginTop: -155,
    marginBottom: 80,
  }
});
