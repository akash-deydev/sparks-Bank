import { useState } from "react";
import { useGetAllCustomersQuery } from "../services/customers";
import { useParams, useNavigate } from "react-router-dom";
import { useHandleFundTransferMutation } from "../services/customers";
import toast, { Toaster } from "react-hot-toast";

const initialValue = "Select a customer account to transfer money";
const initialAmount = "";

const Transfer = ({ setIsTransfer, user, refetchCustomer }) => {
  const [value, setValue] = useState(initialValue);
  const [amount, setAmount] = useState(initialAmount);
  const { data, isLoading, refetch } = useGetAllCustomersQuery();
  const { id } = useParams();
  const navigate = useNavigate();

  const [fundTransfer] = useHandleFundTransferMutation();

  var format = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
  });

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleResetBtn = (e) => {
    e.preventDefault();
    if (amount || value) {
      setAmount(initialAmount);
      setValue(initialValue);
      toast.success("Reset Successfully");
    } else {
      return;
    }
  };

  // Handler fun for Cancel Button
  const handleCancelBtn = (e) => {
    e.preventDefault();
    setIsTransfer(false);
  };

  // Handler for Fund Transfer Button
  const handlePaymentBtn = async (e) => {
    e.preventDefault();

    if (value === initialValue) {
      toast.error("Choose a customers account to transfer money.");
      return;
    }

    if (Number(amount) == "") {
      toast.error("Amount field is required");
      return;
    }
    if (Number(amount) < 10) {
      toast.error("Amount should be greater than ₹10");
      return;
    }

    if (value === id) {
      toast.error("You cannot choose your own account.");
      return;
    }

    if (Number(amount) > user.balance) {
      toast.error("Insufficient fund.");
      return;
    }

    const transactionDetails = {
      sender: id,
      receiver: value,
      amount: Number(amount),
    };

    await fundTransfer(transactionDetails);
    {
      setValue(initialValue);
      setAmount(initialAmount);
      setIsTransfer(false);
      refetchCustomer();
      refetch();
      toast.success("Fund Transfer Successful");
    }
  };

  return (
    <div className="container text-center">
      <Toaster />
      <div className="row">
        <div className="col">
          <select
            value={value}
            onChange={handleChange}
            className="form-select form-select-sm"
          >
            <option>Select a customer to transfer money</option>
            {isLoading ? (
              <option>Loading...</option>
            ) : (
              data?.users &&
              data?.users.map((u) => {
                return (
                  <option key={u._id} value={u._id}>
                    {u.name} {format.format(u.balance)}
                  </option>
                );
              })
            )}
          </select>
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control form-control-sm"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
      </div>
      <div className="row-sm">
        <button
          className="btn btn-sm btn-success mt-3 me-3"
          onClick={handlePaymentBtn}
        >
          Make Payment
        </button>

        <button
          className="btn btn-sm btn-primary mt-3 me-3"
          onClick={handleResetBtn}
        >
          Reset
        </button>

        <button
          className="btn btn-sm btn-danger mt-3 me-3"
          onClick={handleCancelBtn}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Transfer;
