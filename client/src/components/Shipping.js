import React, { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";
import usaStates from "../data/usaStates";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveShippingAddress } from "../redux/actionts/orderActions";

const Shipping = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { shippingAddress } = useSelector((state) => state.order);

  const [address, setAddress] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");

  useEffect(() => {
    shippingAddress.address
      ? setAddress(shippingAddress.address)
      : setAddress("");
    shippingAddress.address2
      ? setAddress2(shippingAddress.address2)
      : setAddress2("");
    shippingAddress.city ? setCity(shippingAddress.city) : setCity("");
    shippingAddress.state ? setState(shippingAddress.state) : setState("");
    shippingAddress.zip ? setZip(shippingAddress.zip) : setZip("");
  }, [shippingAddress]);

  // event handlers
  const handleSubmit = (event) => {
    event.preventDefault();

    const shippingData = {
      address,
      address2,
      city,
      state,
      zip,
    };

    dispatch(saveShippingAddress(shippingData));
    navigate("/payment");
  };

  return (
    <section>
      <div className="jumbotron p-1">
        <h5>
          <ProgressBar step1 />
        </h5>
      </div>

      <div className="container border py-4">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h6 className="font-weight-bold mb-4">Shipping Details</h6>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="inputAddress">Address</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Address"
                  value={address}
                  onChange={(event) => setAddress(event.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="inputAddress2">Address 2</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Apartment number, suite, unit, etc"
                  value={address2}
                  onChange={(event) => setAddress2(event.target.value)}
                />
              </div>

              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="inputCity">City</label>
                  <input
                    type="text"
                    className="form-control "
                    value={city}
                    onChange={(event) => setCity(event.target.value)}
                  />
                </div>
                <div className="form-group col-md-4">
                  <label htmlFor="inputState">State</label>

                  <select
                    className="form-control"
                    value={state}
                    onChange={(event) => setState(event.target.value)}
                  >
                    <option>Choose...</option>
                    {usaStates.map((state) => (
                      <option
                        key={state.abbreviation}
                        value={state.abbreviation}
                      >
                        {state.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group col-md-2">
                  <label htmlFor="inputZip">Zip</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Address"
                    value={zip}
                    onChange={(event) => setZip(event.target.value)}
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-primary">
                Continue
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shipping;
