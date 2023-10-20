import React, { useState } from "react";
import { TextInput, StyleSheet } from "react-native";

export const AuthInput = ({
  value,
  placeholder,
  secureTextEntry = false,
  onChangeText,
}) => {
  const [isOnFocus, setIsOnFocus] = useState(false);

  const handleOnFocus = () => setIsOnFocus(true);
  const handleOnBlur = () => setIsOnFocus(false);

  const inputStyles = [styles.input, isOnFocus && styles.inputFocus];

  return (
    <TextInput
      value={value}
      style={inputStyles}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
      autoCapitalize={"none"}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    position: "relative",
    width: "100%",
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    padding: 16,
    fontSize: 16,
    color: "#212121",
    fontWeight: "400",
    lineHeight: 18,
  },
  inputFocus: {
    backgroundColor: "#FFFFFF",
    borderColor: "#FF6C00",
  },
});
