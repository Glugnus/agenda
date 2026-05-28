import { useSignMutation } from "../../store/api/authApi";
import AuthForm from "./AuthForm";

export default function Login({ navigation }) {
  const [signIn, { data, isLoading, error }] = useSignMutation();
  const navigateToSignup = () => {
    navigation.replace("Signup");
  };
  const submitFormHandler = (values) => {
    signIn({
      email: values.email,
      password: values.password,
      endpoint: "signInWithPassword",
    });
  };
  console.log(data);

  return (
    <AuthForm
      loginScreen
      navigate={navigateToSignup}
      submitFormHandler={submitFormHandler}
      isLoading={isLoading}
    />
  );
}
