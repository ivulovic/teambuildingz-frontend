import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import LogoShort from "../../components/LogoShort";

export default function SignUp() {
  const handleSignUp = () => {};
  return (
    <div className="form auth">
      <LogoShort />
      <h1 className="title">Sign Up</h1>
      <h2 className="subtitle">Open your Teambuildingz account</h2>
      <Input name="username" label="Username" />
      <Input name="email" label="E-mail" />
      <Input name="password" type="password" label="Password" />
      <Input name="confirmPassword" type="password" label="Confirm password" />
      <Button onClick={handleSignUp}>Sign Up</Button>
      <Link className="link" to="/sign-in">
        Already have an account? Sign in.
      </Link>
    </div>
  );
}
