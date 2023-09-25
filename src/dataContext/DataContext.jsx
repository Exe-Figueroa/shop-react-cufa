import { createContext, useEffect, useState } from "react";

const api = 'https://api.escuelajs.co/api/v1/products';

export const DataProvider = createContext();

export function DataContextProvider({ children }) {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch(api)
      .then(res => res.json())
      .then(data => {
        setProducts(data.slice(0, 40));
      });
  }, []);

  //Cart products
  const [count, setCount] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);
  //orders
  const [order, setOrder] = useState([]);

  //Product detail modal
  const [seeProductDetail, setSeeProductDetail] = useState(false);
  const openProductDetail = () => setSeeProductDetail(true);
  const closeProductDetail = () => setSeeProductDetail(false);

  //totalPrice
  const [totalPrice, setTotalPrice] = useState(0);

  const [productToShow, setProductToShow] = useState({
    title: "",
    price: "",
    description: "",
    images: [],
  });
  //Checkout side menu modal
  const [seeCheckoutSideMenu, setSeeCheckoutSideMenu] = useState(false);
  const openCheckoutSideMenu = () => setSeeCheckoutSideMenu(true);
  const closeCheckoutSideMenu = () => setSeeCheckoutSideMenu(false);

  function addProductToCart(e, product) {
    e.stopPropagation();
    setCount(count + 1);
    setCartProducts([...cartProducts, product]);
    closeProductDetail();

    setTotalPrice(totalPrice + product.price);
    setTimeout(() => openCheckoutSideMenu(), 300);
  };
  function removeProductToCart(e, id) {
    e.stopPropagation();
    const newArray = cartProducts.filter(item => item.id !== id);
    setCartProducts(newArray);
    setCount(count - 1);
    const priceItem = cartProducts.find(item => item.id === id).price;
    setTotalPrice(totalPrice - priceItem);
  };

  //Search product
  const [searchedProduct, setSearchedProduct] = useState('');

  return (
    <DataProvider.Provider value={
      {
        count,
        setCount,
        seeProductDetail,
        openProductDetail,
        closeProductDetail,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        seeCheckoutSideMenu,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        addProductToCart,
        removeProductToCart,
        setTotalPrice,
        totalPrice,
        order,
        setOrder,
        products,
        searchedProduct,
        setSearchedProduct
      }
    }>
      {children}
    </DataProvider.Provider>
  );
};