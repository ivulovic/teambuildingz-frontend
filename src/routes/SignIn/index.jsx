import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import LogoShort from "../../components/LogoShort";

export default function SignIn() {
  const handleSignIn = () => {};
  return (
    <div className="form auth">
      <LogoShort />
      <h1 className="title">Sign In</h1>
      <h2 className="subtitle">Access your Teambuildingz account</h2>
      <Input name="username" label="Username or E-mail" />
      <Input name="password" type="password" label="Password" />
      <Button onClick={handleSignIn}>Sign In</Button>
      <Link className="link" to="/sign-up">
        No account? Create one.
      </Link>
    </div>
  );
}
