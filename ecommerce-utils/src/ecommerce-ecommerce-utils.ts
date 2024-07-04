import axios, { AxiosRequestConfig } from "axios";

const CART = "cart";

const createHttpClient = (baseURL: string) => {
  const axiosInstance = axios.create({
    baseURL,
    timeout: 5000,
    headers: { "Content-Type": "application/json" },
  });

  const post = async <B, R>(
    url: string,
    body: B,
    config?: AxiosRequestConfig
  ): Promise<R> => {
    return await axiosInstance
      .post(url, body, config)
      .then((res) => res.data as R);
  };

  const get = async <R>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> => {
    return await axiosInstance.get(url, config).then((res) => res.data as R);
  };

  const put = async <B, R>(
    url: string,
    body: B,
    config?: AxiosRequestConfig
  ): Promise<R> => {
    return await axiosInstance
      .put(url, body, config)
      .then((res) => res.data as R);
  };

  const patch = async <B, R>(
    url: string,
    body: B,
    config?: AxiosRequestConfig
  ): Promise<R> => {
    return await axiosInstance
      .patch(url, body, config)
      .then((res) => res.data as R);
  };

  const del = async <R>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> => {
    return await axiosInstance.delete(url, config).then((res) => res.data as R);
  };

  return { get, post, put, patch, del };
};

const getItemLocalStorage = (key: string) => {
  return localStorage.getItem(key);
};

const addItemLocalStorage = (key: string, item: string) => {
  localStorage.setItem(key, item);
};

const removeItemLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};

const getCart = () => {
  const cart = getItemLocalStorage(CART);
  return cart ? JSON.parse(cart) : [];
};

const addItem = (item) => {
  const newCart = getCart();

  if (newCart === null || newCart.length === 0) {
    newCart.push(item);
  }

  if (newCart !== null && newCart.length !== 0) {
    const existingItem = newCart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      existingItem.quantity = (existingItem.quantity || 1) + 1;
    } else {
      newCart.push({ ...item, quantity: 1 });
    }
  }

  addItemLocalStorage(CART, JSON.stringify(newCart));
};

const removeItem = (id: number) => {
  let newCart = getCart();

  if (newCart === null || newCart.length === 0) {
    return;
  }

  const index = newCart.findIndex((item) => item.id === id);

  if (index !== -1) {
    newCart.splice(index, 1);
  }

  addItemLocalStorage(CART, JSON.stringify(newCart));
};

const decrementItem = (id: number) => {
  let newCart = getCart();

  if (newCart === null || newCart.length === 0) {
    return;
  }

  const index = newCart.findIndex((item) => item.id === id);

  if (index !== -1) {
    if (newCart[index].quantity > 1) {
      newCart[index].quantity -= 1;
    } else {
      newCart.splice(index, 1);
    }

    addItemLocalStorage(CART, JSON.stringify(newCart));
  }
};

const getCartTotalItems = () => {
  return getCart().length;
};

const getCartIds = () => {
  return getCart().map((item) => item.id);
};

export const utils = {
  createHttpClient,
  cartStore: {
    addItem,
    getCart,
    decrementItem,
    removeItem,
    getCartTotalItems,
    getCartIds,
  },
  localStorage: {
    get: getItemLocalStorage,
    add: addItemLocalStorage,
    remove: removeItemLocalStorage,
  },
};
