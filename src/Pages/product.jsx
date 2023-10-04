import { Fragment, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";

const products = [
  {
    id: 1,
    title: "tempe",
    harga: 200000,
    ket: `Tempe goreng adalah keajaiban dunia nomor sembilan dan merupakan
  makanan khas yang sangat nikmat bila disajikan dengan nasi putih,
  sambal terasi, dan teh es`,
    image: "./img/tempe.jpg",
  },
  {
    id: 2,
    title: "Tempe Juga",
    harga: 100000,
    ket: `Tahu goreng adalah keajaiban dunia nomor sembilan dan merupakan
  makanan khas yang sangat nikmat bila disajikan dengan nasi putih,
  sambal terasi, dan teh es`,
    image: "./img/tempe.jpg",
  },
];

const email = localStorage.getItem("email");

const ProductPage = () => {
  const [cart, setCart] = useState([
    {
      title: "tempe",
      qty: 1,
    },
  ]);

  const HandleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/Login";
  };
  return (
    <Fragment>
      <div className="flex justify-end h-20 bg-blue-700 text-white items-center px-10">
        {email}
        <Button variant="ml-5 bg-black" onClick={HandleLogout}>
          Log Out
        </Button>
      </div>
      <div className="flex justify-center py-5">
        <div className="w-3/4 flex flex-wrap">
          {products.map((produk) => (
            <CardProduct key={produk.id}>
              <CardProduct.Header image={produk.image}></CardProduct.Header>
              <CardProduct.Body title={produk.title}>
                {produk.ket}
              </CardProduct.Body>
              <CardProduct.Footer harga={produk.harga} />
            </CardProduct>
          ))}
        </div>
        <div className="w-1/4">
          <h1 className="text-3xl font-bold text-blue-600">Cart</h1>
          <ul>
            {cart.map((item) => (
              <li key={item.title}>{item.title}</li>
            ))}
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductPage;
