import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        title="Nama Lengkap"
        label="name"
        type="text"
        placeholder="nama lengkap"
        name="name"
      />
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
      <InputForm
        title="Konfirmasi Password"
        label="password"
        type="password"
        placeholder="*****"
        name="password"
      />
      <Button variant="bg-green-700 w-full">Regist wir</Button>
    </form>
  );
};

export default FormRegister;
