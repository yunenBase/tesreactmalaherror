import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex justify-center min-h-screen items-center flex-col">
      <h1 className="text-3xl font-bold">Waduhh Masbroo</h1>
      <p className="my-5 text-xl">
        Keknya ada yang salah deh, coba cek lagi kodingannya!
      </p>
      <p>{error.statusText || error.massage}</p>
    </div>
  );
};

export default ErrorPage;
