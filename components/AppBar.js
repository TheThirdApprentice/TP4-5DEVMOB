import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function AppBar({ title }) {
  const { logout } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <TouchableOpacity onPress={logout}>
        <Text style={styles.logout}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: "#6200EE",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    elevation: 4,
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  logout: {
    color: "white",
    fontSize: 16,
  },
});
