import { StyleSheet, View } from "react-native";
import { colors } from "../../constants/colors";

export default function LoadingOverlay() {
  return <View style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  text: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.WHITE,
  },
});
