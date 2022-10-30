import { Text } from "react-native-paper";

type TextModelProps = {
  children: string;
  color?: string;
  variant?:
    | "displayLarge"
    | "displayMedium"
    | "displaySmall"
    | "headlineLarge"
    | "headlineMedium"
    | "headlineSmall"
    | "titleLarge"
    | "titleMedium"
    | "titleSmall"
    | "labelLarge"
    | "labelMedium"
    | "labelSmall"
    | "bodyLarge"
    | "bodyMedium"
    | "bodySmall"
    | undefined;
};

export default function TextModel(props: TextModelProps) {
  return (
    <Text
      style={{ color: props.color || "white" }}
      variant={props.variant || "titleMedium"}
    >
      {props.children}
    </Text>
  );
}
