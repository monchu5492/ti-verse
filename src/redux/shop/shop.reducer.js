import SHOP_DATA from "../../pages/shop/shop.data";

const INITIAL_STATE = {
  collections: SHOP_DATA,
};

const shopRedudcer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopRedudcer;
