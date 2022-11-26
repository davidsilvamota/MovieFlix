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
  marginHorizontal?: number;
  marginVertical?: number;
};

export default function TextModel(props: TextModelProps) {
  return (
    <Text
      style={{
        maxWidth:180,
        color: props.color || "white",
        marginHorizontal: props.marginHorizontal,
        marginVertical: props.marginVertical,
      }}
      variant={props.variant || "titleMedium"}
    >
      {props.children}
    </Text>
  );
}
