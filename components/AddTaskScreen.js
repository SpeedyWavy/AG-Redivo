import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function AddTaskScreen({ onBackPress, onSavePress }) {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [erros, setErros] = useState({});

  const validar = () => {
    const novosErros = {};
    const nomeTrim = nome.trim();

    if (!nomeTrim) {
      novosErros.nome = "Informe o nome da tarefa.";
    } else if (nomeTrim.length < 3) {
      novosErros.nome = "O nome precisa ter pelo menos 3 caracteres.";
    }

    if (descricao.length > 120) {
      novosErros.descricao = "A descrição deve ter no máximo 120 caracteres.";
    }

    setErros(novosErros);
    return Object.keys(novosErros).length === 0;
  };

  const handleSave = () => {
    if (validar()) {
      onSavePress();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Adicionar Tarefa</Text>
      </View>

      <View style={styles.campos}>
        <Text style={styles.label}>Nome da Tarefa</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome da Tarefa"
          placeholderTextColor="#6b6b6b"
          value={nome}
          onChangeText={setNome}
          onBlur={validar}
        />
        {!!erros.nome && <Text style={styles.erroTexto}>{erros.nome}</Text>}
        <Text style={styles.label}>Descrição</Text>
        <TextInput
          style={[styles.input, styles.descInput]}
          placeholder="Adicione uma Descrição (opcional)"
          placeholderTextColor="#6b6b6b"
          value={descricao}
          onChangeText={setDescricao}
          onBlur={validar}
          multiline
        />
        {!!erros.descricao && <Text style={styles.erroTexto}>{erros.descricao}</Text>}
      </View>

      <View style={styles.botoes}>
        <TouchableOpacity style={[styles.botao, styles.save]} activeOpacity={0.8} onPress={handleSave}>
          <Text style={styles.saveTexto}>Salvar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} activeOpacity={0.8} onPress={onBackPress}>
          <Text style={styles.botaoTexto}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#0051ff",
    width: "100%",
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    color: "#fff",
    fontFamily: "Arial",
    fontSize: 30,
    fontWeight: "700",
  },
  campos: {
    width: "80%",
    alignSelf: "center",
    marginTop: "15%",
  },
  label: {
    marginTop: "5%",
    marginBottom: "2%",
    fontFamily: "Arial",
    fontSize: 16,
  },
  input: {
    width: "100%",
    height: 40,
    borderRadius: 10,
    backgroundColor: "rgba(190, 190, 190, 0.25)",
    paddingHorizontal: 10,
    fontFamily: "Arial",
  },
  descInput: {
    height: 80,
    textAlignVertical: "top",
    paddingTop: 10,
  },
  botoes: {
    width: "80%",
    height: 96,
    marginTop: "10%",
    alignSelf: "center",
    justifyContent: "space-between",
  },
  botao: {
    width: "100%",
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d9d9d9",
  },
  botaoTexto: {
    fontSize: 20,
    fontFamily: "Arial",
  },
  save: {
    backgroundColor: "#4D7fe1",
  },
  saveTexto: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "Arial",
    fontWeight: "700",
  },
  erroTexto: {
    marginTop: 6,
    color: "#c40000",
    fontSize: 14,
    fontFamily: "Arial",
  },
});
