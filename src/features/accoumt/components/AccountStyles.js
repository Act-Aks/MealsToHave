import { Button, Text, TextInput } from "react-native-paper";
import styled from "styled-components/native";
import { colors } from "../../../infrastructure/theme/colors";

export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/home.jpg"),
})`
  flex: 1;
  background-color: #ddd;
  align-items: center;
  justify-content: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.2);
`;

export const AccountContainer = styled.View`
  padding: ${(props) => props.theme.space[4]};
  background-color: rgba(255, 255, 255, 0.6);
  margin-top: ${(props) => props.theme.space[2]};
`;

export const AuthButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[2]};
`;

export const AuthInput = styled(TextInput)`
  width: 300px;
`;

export const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.monospace};
  font-size: 30px;
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.text.inverse};
`;

export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;
