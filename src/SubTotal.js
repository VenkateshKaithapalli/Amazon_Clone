import React from "react";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import { StateValue } from "./StateProvider";
import "./SubTotal.css";
const SubTotal = () => {
  const [{ basket },] = StateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              SubTotal({basket.length} items):<strong>{`${value}`}</strong>
            </p>
            <small className="subtoatl_gift">
              <input type="checkbox" />
              This Order Contains a gift
            </small>
          </>
        )}
        decimalScale={2}
       value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      <button>Proceed to checkOut</button>
    </div>
  );
};

export default SubTotal;
