import React, { useState } from "react";
import { Rating } from "@mantine/core";
import { useRateOrderMutation } from "@/app/api/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import { Textarea } from "@mantine/core";

export default function Ratings() {
  const orderStatus = useSelector((state) => state.orderData.orderStatus);
  const orderID = orderStatus?.data?.data?.orderId;
  const [rating, setRating] = useState(0);

  const orderRatingMutation = useRateOrderMutation();

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleRateOrder = () => {
    orderRatingMutation.mutate({
      order_id: orderID,
      rating: rating,
      review: "a",
    });
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-5 justify-center items-center">
      <h2>Rate your Delivery</h2>
      <Rating
        defaultValue={1}
        size="xl"
        count={5}
        onChange={handleRatingChange}
      />
      </div>
       <Textarea
      label="Input label"
      description="Input description"
      placeholder="Input placeholder"
    />
      <button
        onClick={handleRateOrder}
        className="w-full rounded-lg text-white p-3 text-[16px] bg-[#FF7D00] text-center"
      >
        <h1>Sign in</h1>
      </button>
    </div>
  );
}
