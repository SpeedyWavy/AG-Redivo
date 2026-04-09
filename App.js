import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import AddTaskScreen from "./components/AddTaskScreen";
import TarefasScreen from "./components/TarefasScreen";

export default function App() {
  const [screen, setScreen] = useState("list");

  const handleGoToAdd = () => setScreen("add");
  const handleGoToList = () => setScreen("list");

  return (
    <>
      {screen === "list" ? (
        <TarefasScreen onAddPress={handleGoToAdd} />
      ) : (
        <AddTaskScreen onBackPress={handleGoToList} onSavePress={handleGoToList} />
      )}
      <StatusBar style="auto" />
    </>
  );
}
