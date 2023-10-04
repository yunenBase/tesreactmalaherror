import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

const FormLogin = () => {
  const AksiLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("email", e.target.email.value);
    localStorage.setItem("password", e.target.password.value);
    window.location.href = "/product";
  };
  return (
    <form onSubmit={AksiLogin}>
      <InputForm
        title="Email"
        label="email"
        type="email"
        placeholder="exmp@gmail.com"
        name="email"
      />
      <InputForm
        title="Password"
        label="password"
        type="password"
        placeholder="*****"
        name="password"
      />
      <Button variant="bg-green-700 w-full" type="submit">
        Masuk wir
      </Button>
    </form>
  );
};

export default FormLogin;
