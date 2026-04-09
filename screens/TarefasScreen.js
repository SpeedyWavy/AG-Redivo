import React from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function TarefasScreen({ onAddPress }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Lista de Tarefas</Text>
        <TouchableOpacity
          style={styles.addButton}
          activeOpacity={0.8}
          onPress={onAddPress}
          accessibilityLabel="Adicionar tarefa"
        >
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tarefas}>
        <View style={styles.tarefa}>
          <View style={styles.tarefaText}>
            <Text style={styles.tarefaTitulo}>Estudar React Native</Text>
            <Text style={styles.tarefaDescricao}>Revisar Hooks e Navegação</Text>
          </View>
          <View style={styles.uiIcon} />
        </View>

        <View style={styles.tarefa}>
          <View style={styles.tarefaText}>
            <Text style={styles.tarefaTitulo}>Comprar Mantimentos</Text>
            <Text style={styles.tarefaDescricao}>Leite, Pão, ovos</Text>
          </View>
          <View style={styles.uiIcon} />
        </View>

        <View style={styles.tarefa}>
          <View style={styles.tarefaText}>
            <Text style={styles.tarefaTitulo}>Academia</Text>
            <Text style={styles.tarefaDescricao}>treino de perna</Text>
          </View>
          <View style={styles.uiIcon} />
        </View>

        <Text style={styles.final}>Nenhuma Tarefa</Text>
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  headerTitle: {
    color: "#fff",
    fontFamily: "Arial",
    fontSize: 24,
    fontWeight: "700",
  },
  addButton: {
    width: "15%",
    height: "70%",
    borderRadius: 9999,
    backgroundColor: "#008cff",
    alignItems: "center",
    justifyContent: "center",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 48,
    fontFamily: "Arial",
    lineHeight: 52,
  },
  tarefas: {
    width: "90%",
    alignSelf: "center",
    marginTop: "5%",
  },
  tarefa: {
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.06)",
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 25,
    marginBottom: "3%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
  },
  tarefaText: {
    flex: 1,
    paddingLeft: "5%",
  },
  tarefaTitulo: {
    fontFamily: "Arial",
    fontSize: 20,
    fontWeight: "700",
  },
  tarefaDescricao: {
    marginTop: 4,
    fontFamily: "Arial",
    fontSize: 16,
  },
  uiIcon: {
    width: 48,
    height: 48,
    backgroundColor: "#cf6363",
    borderRadius: 9999,
    marginRight: 17,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  final: {
    textAlign: "center",
    marginTop: "15%",
    color: "rgba(0, 0, 0, 0.39)",
    fontStyle: "italic",
    fontSize: 20,
    fontFamily: "Arial",
  },
});
