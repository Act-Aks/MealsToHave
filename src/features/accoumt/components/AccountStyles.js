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
  background-color: rgba(255, 255, 255, 0.7);
  margin-top: ${(props) => props.theme.space[2]};
`;

export const AuthButton = styled.Button.attrs({
  color: colors.brand.primary,
})`

`;
