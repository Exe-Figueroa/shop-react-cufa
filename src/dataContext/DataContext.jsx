import { createContext, useState } from "react";

export const DataProvider = createContext();

export function DataContextProvider({ children }) {
  //Cart products
  const [count, setCount] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);
  //Product detail modal
  const [seeProductDetail, setSeeProductDetail] = useState(false);
  const openProductDetail = () => setSeeProductDetail(true);
  const closeProductDetail = () => setSeeProductDetail(false);

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
    setTimeout(() => openCheckoutSideMenu(), 300);
  };
function removeProductToCart(e, id) {
    e.stopPropagation();
    const newArray = cartProducts.filter(item => item.id !== id);
    setCartProducts(newArray);
    setCount(count - 1);
  };
  

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
      }
    }>
      {children}
    </DataProvider.Provider>
  );
};