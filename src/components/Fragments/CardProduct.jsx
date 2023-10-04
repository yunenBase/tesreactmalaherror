import Button from "../Elements/Button";

const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow mx-2 my-2 flex flex-col justify-between">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { image } = props;
  return (
    <a href="#">
      <img src={image} alt="product" className="p-8 rounded-t-lg" />
    </a>
  );
};

const Body = (props) => {
  const { children, title } = props;
  return (
    <div className="px-5 pb-5 h-full">
      <a href="">
        <h5 className="text-xl font-semibold tracking-tight text-white">
          {title}
        </h5>
        <p className="text-s text-white">{children}</p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { harga } = props;
  return (
    <div>
      <div className="flex justify-between items-center px-5 py-5">
        <span className="text-xl font-bold text-white">{harga}</span>
        <Button variant="bg-green-600">Beli</Button>
      </div>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
