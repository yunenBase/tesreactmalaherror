import { Link } from "react-router-dom";

const AuthLayouts = (props) => {
  const { children, title, type } = props;
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-xs border rounded-3xl border-slate-300 p-8">
        <h1 className="text-3xl font-bold mb-2 text-cyan-600">{title}</h1>
        <p className="font-medium mb-8 text-slate-600">Wellcome Wir</p>
        {children}
        <p className="text-sm mt-5 text-center">
          {type === "login"
            ? "Don't have an account?  "
            : "Already have an account?  "}
          {type === "login" && (
            <Link to="/Register" className="font-bold text-cyan-600">
              Register
            </Link>
          )}
          {type === "register" && (
            <Link to="/Login" className="font-bold text-cyan-600">
              Login
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthLayouts;
