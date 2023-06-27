import { useState } from "react";
import _ from "lodash";

const useShoppingCart = (ticketTypes) => {
  const [shoppingCart, setShoppingCart] = useState({
    bandId: null,
    tickets: new Map(),
  });

  const setBand = (bandId) => {
    if (shoppingCart.bandId !== bandId) {
      var newShoppingCart = _.cloneDeep(shoppingCart);
      newShoppingCart = {
        bandId: bandId,
        tickets: new Map(),
      };
      setShoppingCart(newShoppingCart);
    }
  };

  const updateTicketAmount = (type, cost, number) => {
    // TODO... Add validation
    // - Is {cost} an integer greater than zero?
    // - Is {number} an integer greater than zero?
    
    var newShoppingCart = _.cloneDeep(shoppingCart);

    newShoppingCart.tickets.set(type, {
      cost: cost,
      number: number
    });
    setShoppingCart(newShoppingCart);
  };

  const getTotalCost = () => {
    var totalCost = 0;
    shoppingCart.tickets.forEach((value) => {
      totalCost += value.cost * value.number;
    });

    return {
      numItems: shoppingCart.tickets.size,
      cost: totalCost
    };
  };

  return { shoppingCart, setBand, updateTicketAmount, getTotalCost};
};

export default useShoppingCart;