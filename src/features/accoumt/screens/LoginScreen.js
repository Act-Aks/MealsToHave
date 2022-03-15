import React, { useContext, useState } from "react";
import { ActivityIndicator, Colors } from "react-native-paper";
import { Spacer } from "../../../components/spacer/Spacer";
import { Text } from "../../../components/typography/Text";
import { AuthenticationContext } from "../../../services/authentication/authenticationContext";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  AuthInput,
  ErrorContainer,
  Title,
} from "../components/AccountStyles";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, isLoading, error } = useContext(AuthenticationContext);

  return (
    <AccountBackground>
      <AccountCover />
      <Title>Meals To Have</Title>
      <AccountContainer>
        <AuthInput
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => setEmail(u)}
        />
        <Spacer size="large">
          <AuthInput
            label="Password"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            // secure
            onChangeText={(p) => setPassword(p)}
          />
        </Spacer>
        {error && (
          <ErrorContainer>
            <Spacer size="large">
              <Text variant="error">{error}</Text>
            </Spacer>
          </ErrorContainer>
        )}
        <Spacer size="large">
          {!isLoading ? (
            <AuthButton
              icon="lock-open-outline"
              mode="contained"
              onPress={() => onLogin(email, password)}
            >
              Login
            </AuthButton>
          ) : (
            <ActivityIndicator animating={true} color={Colors.blue300} />
          )}
        </Spacer>
      </AccountContainer>
      <Spacer size="large">
        <AuthButton mode="contained" onPress={() => navigation.goBack()}>
          Back
        </AuthButton>
      </Spacer>
    </AccountBackground>
  );
};
