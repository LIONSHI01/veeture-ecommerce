import React, { useState, useEffect } from "react";
import { authOptions } from "./api/auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth/next";
import { toast } from "react-toastify";
import { useSession } from "next-auth/react";

import { updateAccount } from "../lib/authRequest";

import {
  Wrapper,
  PageHeader,
  AccountDetails,
  AddressDetails,
  OrderDetails,
} from "../pages_styles/account.styles";

import { Button, FormInput, Meta, OrderItem } from "../components";

const INITIAL_FORM_STATE = {
  streetAddress: "",
  streetAddress2: "",
  city: "",
  state: "",
  postal: "",
};

const AccountPage = ({ sessionData }) => {
  // CONFIGURATION
  const { data: session } = useSession();
  const { user } = sessionData;

  // STATE MANAGEMENT
  const [formFields, setFormFields] = useState(INITIAL_FORM_STATE);
  const { streetAddress, streetAddress2, city, state, postal } = formFields;
  const [orders, setOrders] = useState(null);
  // HANDLERS
  const onChangeFormfields = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const onSubmtHandler = async (e) => {
    e.preventDefault();
    const res = await updateAccount(formFields, "address");
    if (res.status === 200) {
      toast.success("Update ADDRESS successfully!");
    }
  };

  useEffect(() => {
    setOrders(session?.profile?.orders);
  }, [session]);

  return (
    <>
      <Meta title="Account" />
      <Wrapper>
        <PageHeader>
          <div className="heading">
            <h1>My account</h1>
            <p>
              Welcome back,&nbsp; <span> {user?.name}</span>
            </p>
          </div>
        </PageHeader>
        <AccountDetails>
          <OrderDetails>
            <h2>My Orders</h2>

            {orders ? (
              <div className="orders">
                {orders?.map((order) => (
                  <OrderItem key={order.id} order={order} />
                ))}
              </div>
            ) : (
              <div className="empty-orders">
                <p>You have no order at the moment.</p>
              </div>
            )}
          </OrderDetails>
          <div className="address">
            <AddressDetails>
              <h2>My Address</h2>
              <form onSubmit={onSubmtHandler}>
                <FormInput
                  label="Street Address"
                  name="streetAddress"
                  value={streetAddress}
                  onChange={onChangeFormfields}
                />
                <FormInput
                  label="Street Address Line 2"
                  name="streetAddress2"
                  value={streetAddress2}
                  onChange={onChangeFormfields}
                />
                <div className="stateAndPostal">
                  <FormInput
                    label="State"
                    name="state"
                    value={state}
                    onChange={onChangeFormfields}
                  />
                  <FormInput
                    label="City"
                    name="city"
                    value={city}
                    onChange={onChangeFormfields}
                  />
                </div>
                <FormInput
                  label="Postal"
                  name="postal"
                  value={postal}
                  onChange={onChangeFormfields}
                />
                <Button bgType="solid" width="25rem" height="5rem">
                  Update address
                </Button>
              </form>
            </AddressDetails>
          </div>
        </AccountDetails>
      </Wrapper>
    </>
  );
};

export const getServerSideProps = async ({ req, res }) => {
  const session = await unstable_getServerSession(req, res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }
  const sessionData = JSON.parse(JSON.stringify(session));

  return { props: { sessionData } };
};

export default AccountPage;
