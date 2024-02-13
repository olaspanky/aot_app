"use client";
import React from "react";
import Layout from "../../shared/Layout3";
import map from "../../../../public/map.png";
import triple from "../../../assets/triple.png";
import Image from "next/image";
import { useState, useEffect } from "react";
import delv1 from "../../../assets/delv1.png";
import delv2 from "../../../assets/delv2.png";
import bike from "../../../assets/delv3.png";
import car from "../../../assets/car.png";
import truck from "../../../assets/truck.png";
import Map from "@/app/components/webapp/Map";
import ProtectedRoute2 from "../../components/Protectapp";
import { useBookOrderMutation } from "@/app/api/apiSlice";
import { useDispatch } from 'react-redux';
import { setOrderStatus } from "@/store/slice/orderSlice";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
  Loader,
} from "@react-google-maps/api";
import Payment from "../../components/webapp/Payments";

// Modal component for cash on delivery

const page = () => {
  const [formCompleted, setFormCompleted] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null); // Define errorMessage state
  const [paymentResponse, setPaymentResponse] = useState(null);
  const dispatch = useDispatch();


  // ...

  // Inside your error handling logic, set the errorMessage state when an error occurs

  const handleOriginPlaceChanged = async (autocomplete) => {
    const place = autocomplete.getPlace();
    const originLatLng = place.geometry.location.toJSON();

    setPickupDetails({
      ...pickupDetails,
      sender_address: place.formatted_address,
      origin: {
        latitude: originLatLng.lat,
        longitude: originLatLng.lng,
      },
    });

    // Call the Google Maps Distance Matrix API to get the duration
    if (pickupDetails.sender_address && deliveryDetails.recipient_address) {
      const distanceMatrixService =
        new window.google.maps.DistanceMatrixService();
      distanceMatrixService.getDistanceMatrix(
        {
          origins: [pickupDetails.sender_address],
          destinations: [deliveryDetails.recipient_address],
          travelMode: "DRIVING", // You can change this mode if needed
        },
        (response, status) => {
          if (status === "OK") {
            const duration = response.rows[0].elements[0].duration.text;
            setDuration(duration);
            setPickupDetails({
              ...pickupDetails,
              estimated_time: duration,
            });
          } else {
            console.error("Error fetching distance:", status);
          }
        }
      );
    }
  };

  // Function to handle the change in destination place for autocomplete
  const handleDestinationPlaceChanged = async (autocomplete) => {
    const place = autocomplete.getPlace();
    const destinationLatLng = place.geometry.location.toJSON();

    setDeliveryDetails({
      ...deliveryDetails,
      recipient_address: place.formatted_address,
      destination: {
        latitude: destinationLatLng.lat,
        longitude: destinationLatLng.lng,
      },
    });

    // Call the Google Maps Distance Matrix API to get the duration
    if (pickupDetails.sender_address && deliveryDetails.recipient_address) {
      const distanceMatrixService =
        new window.google.maps.DistanceMatrixService();
      distanceMatrixService.getDistanceMatrix(
        {
          origins: [pickupDetails.sender_address],
          destinations: [deliveryDetails.recipient_address],
          travelMode: "DRIVING", // You can change this mode if needed
        },
        (response, status) => {
          if (status === "OK") {
            const duration = response.rows[0].elements[0].duration.text;
            setDuration(duration);
            setPickupDetails({
              ...pickupDetails,
              estimated_time: duration,
            });
          } else {
            console.error("Error fetching distance:", status);
          }
        }
      );
    }
  };

  const handleMapDataChange = (data) => {
    // Define the functionality to handle map data change here
    console.log("Map data changed:", data);
    // Perform any necessary actions with the received data
  };

  const [originAutocomplete, setOriginAutocomplete] = useState(null);

  const handleOriginAutocompleteLoad = (autocomplete) => {
    setOriginAutocomplete(autocomplete);
  };

  const [bookOrderMutation, { isError }] = useBookOrderMutation();

  // Handle the "Proceed to Pay" button click
  const handleProceedToPay = async () => {
    try {
      // Prepare the data to be sent with the mutation
      const orderDetails = {
        sender_name: pickupDetails.sender_name,
        sender_phone_number: pickupDetails.sender_phone_number,
        item_category: pickupDetails.item_category,
        quantity: parseInt(pickupDetails.quantity),
        delivery_description: pickupDetails.delivery_description,
        recipient_name: deliveryDetails.recipient_name,
        recipient_phone_number: deliveryDetails.recipient_phone_number,
        recipient_address: deliveryDetails.recipient_address,
        sender_address: pickupDetails.sender_address,
        origin: {
          latitude: pickupDetails.origin.latitude,
          longitude: pickupDetails.origin.longitude,
        },
        destination: {
          latitude: deliveryDetails.destination.latitude,
          longitude: deliveryDetails.destination.longitude,
        },
        vehicle: selectedVehicle,
        estimated_time: pickupDetails.estimated_time,
      };

      console.log("Origin Latitude:", pickupDetails.origin.latitude);
      console.log("Origin Longitude:", pickupDetails.origin.longitude);
      console.log(
        "Destination Latitude:",
        deliveryDetails.destination.latitude
      );
      console.log(
        "Destination Longitude:",
        deliveryDetails.destination.longitude
      );

      // Call the mutation hook with the data
      const result = await bookOrderMutation(orderDetails);
      console.log("Data to be submitted:", orderDetails);

      // Check if there is an error in the result and if it has data property
      if (result.error && result.error.data) {
        console.log("Order placement failed:", result.error.data.message);
        setPaymentResponse(result.error.data.message);
      } else {
        // Handle the success response (result)
        console.log("Order placed successfully:", result);
        dispatch(setOrderStatus(result));
        setUiState("proceedToPay");
      }

      // Optionally, you can navigate the user to the payment page or handle other actions
    }
    
    catch (error) {
      // Handle the error response
      console.error("Error placing order:", error);
    }

  };

  const [destinationAutocomplete, setDestinationAutocomplete] = useState(null);

  const handleDestinationAutocompleteLoad = (autocomplete) => {
    setDestinationAutocomplete(autocomplete);
  };

  const [directionResponse, setDirectionResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  // other state variables and functions related to map data

  const handleMapData = (data) => {
    // Update state based on the received map data
    setDirectionResponse(data.directionResponse);
    setDistance(data.distance);
    setDuration(data.duration);
    // Update other state variables as needed
  };

  const [pickupDetails, setPickupDetails] = useState({
    sender_name: "",
    sender_phone_number: "",
    item_category: "",
    quantity: "",
    delivery_description: "",
    sender_address: "",
    origin: { latitude: "", longitude: "" },
    vehicle: "",
    estimated_time: "",
  });

  const [deliveryDetails, setDeliveryDetails] = useState({
    recipient_name: "",
    recipient_phone_number: "",
    recipient_address: "",
    destination: { latitude: "", longitude: "" },
  });

  const [pickupDropdownVisible, setPickupDropdownVisible] = useState(false);
  const [deliveryDropdownVisible, setDeliveryDropdownVisible] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const handleVehicleClick = (vehicleType) => {
    // Update the selected vehicle when one is clicked
    setSelectedVehicle(vehicleType);
  };

  const getVehicleStyles = (vehicleType) => {
    // Return styles based on the selected vehicle
    return {
      backgroundColor: selectedVehicle === vehicleType ? "#ff7d00" : "white",
    };
  };

  const [uiState, setUiState] = useState("home");

  const handleRequestClick = () => {
    // Toggle the state when the button is clicked
    setUiState("requestPickup");
  };

  const handleBackClick = () => {
    // Switch to the previous state when the back button is clicked
    if (uiState === "requestPickup") {
      setUiState("home");
    } else if (uiState === "proceedToPay") {
      setUiState("requestPickup");
    }
  };

  const isDataComplete = () => {
    const { sender_name, sender_phone_number, sender_address } = pickupDetails;
    const { recipient_name, recipient_phone_number, recipient_address } =
      deliveryDetails;
    return (
      sender_name !== "" &&
      sender_phone_number !== "" &&
      sender_address !== "" &&
      recipient_name !== "" &&
      recipient_phone_number !== "" &&
      recipient_address !== "" &&
      selectedVehicle !== ""
    );
  };

  // Disable the button if the form is incomplete or if it hasn't been submitted successfully
  // const isButtonDisabled = !isDataComplete() || !formCompleted;
  const isButtonDisabled = !isDataComplete();

  return (
    <ProtectedRoute2>
      <Layout>
        {uiState === "requestPickup" && (
          // New UI
          <div>
            <div className="">
              <div className="relative">
                <div class="flex-grow h-auto ">
                  <Map
                    recipientAddress={deliveryDetails.recipient_address}
                    senderAddress={pickupDetails.sender_address}
                    onMapDataChange={handleMapDataChange}
                  />
                </div>

                <div className="grid grid-cols-1 absolute top-0 w-full h-[80%] ml-5 mr-5">
                  <div className="mt-5  h-12 bg-white col-span-1 border border-gray-200  rounded-lg flex items-center p-7 justify-between">
                    <h1 className=" text-sm md:text-xl font-bold ">
                      Request Pickup{" "}
                    </h1>
                    <div className="rounded-full p-3 bg-slate-200 ">pix</div>
                  </div>
                  <div className="grid md:grid-cols-12">
                    <div className="md:col-span-8 "></div>
                    <div className="md:col-span-4 col-span-12 ">
                      <div className="bg-white p-8 rounded-lg w-full h-[80vh] overflow-scroll mt-5 ">
                        <div className="flex-grow flex py-3 flex-col gap-9  ">
                          <div className="">
                            <div className="flex flex-col gap-3">
                              <div className="w-full  grid grid-cols-12  space py-2 px-5 rounded-sm around bg-[#d4d4d4]">
                                <div className="col-span-1">
                                  <Image src={delv1} />
                                </div>
                                <div
                                  className="col-span-11 flex justify-between font-bold"
                                  onClick={() => {
                                    setPickupDropdownVisible(
                                      (prevPickupDropdownVisible) => {
                                        if (prevPickupDropdownVisible) {
                                          return false; // Close the pickup dropdown if it's open
                                        }
                                        setDeliveryDropdownVisible(false); // Close the delivery dropdown
                                        return true; // Open the pickup dropdown
                                      }
                                    );
                                  }}
                                >
                                  <h1>Pickup Details</h1>
                                  <p className="text-md lg:text-[24px] text-[#FF7D00">
                                    {pickupDropdownVisible ? "-" : "+"}
                                  </p>
                                </div>
                              </div>

                              {pickupDropdownVisible && (
                                <div className="bg-[#d4d4d4] px-5 py-2">
                                  {/* Render editable pickup details form */}
                                  <form>
                                    <div className="grid grid-cols-12 w-full gap-2 py-3">
                                      <label className="col-span-3 text-sm font-semibold">
                                        Name:
                                      </label>
                                      <input
                                        type="text"
                                        value={pickupDetails.sender_name}
                                        onChange={(e) =>
                                          setPickupDetails({
                                            ...pickupDetails,
                                            sender_name: e.target.value,
                                          })
                                        }
                                        className="rounded-md col-span-9 p-2"
                                        placeholder="Sender Name"
                                      />
                                    </div>
                                    <div className="grid grid-cols-12 w-full gap-2 py-3">
                                      <label className="col-span-3 text-sm font-semibold">
                                        Phone:
                                      </label>
                                      <input
                                        type="tel"
                                        value={
                                          pickupDetails.sender_phone_number
                                        }
                                        onChange={(e) =>
                                          setPickupDetails({
                                            ...pickupDetails,
                                            sender_phone_number: e.target.value,
                                          })
                                        }
                                        className="rounded-md col-span-9 p-2"
                                        placeholder="Sender Phone no."
                                      />
                                    </div>
                                    <div className="grid grid-cols-12  w-full gap-2 py-3">
                                      <label className="col-span-3 text-sm font-semibold">
                                        Category:
                                      </label>
                                      <input
                                        type="text"
                                        value={pickupDetails.item_category}
                                        onChange={(e) =>
                                          setPickupDetails({
                                            ...pickupDetails,
                                            item_category: e.target.value,
                                          })
                                        }
                                        className="rounded-md col-span-9 p-2"
                                        placeholder="Item Category"
                                      />
                                    </div>
                                    <div className="grid grid-cols-12  w-full gap-2 py-3">
                                      <label className="col-span-3 text-sm font-semibold">
                                        Quantity:
                                      </label>
                                      <input
                                        type="number"
                                        value={pickupDetails.quantity}
                                        onChange={(e) =>
                                          setPickupDetails({
                                            ...pickupDetails,
                                            quantity: e.target.value,
                                          })
                                        }
                                        className="rounded-md col-span-9 p-2"
                                        placeholder="Quantity"
                                      />
                                    </div>
                                    <div className="grid grid-cols-12  w-full gap-2 py-3">
                                      <label className="col-span-3 text-sm font-semibold">
                                        Sender Address:
                                      </label>
                                      <div className="col-span-9">
                                        <Autocomplete
                                          cla
                                          onLoad={handleOriginAutocompleteLoad}
                                          onPlaceChanged={() =>
                                            handleOriginPlaceChanged(
                                              originAutocomplete
                                            )
                                          }
                                        >
                                          <input
                                            type="text"
                                            value={pickupDetails.sender_address}
                                            onChange={(e) =>
                                              setPickupDetails({
                                                ...pickupDetails,
                                                sender_address: e.target.value,
                                              })
                                            }
                                            className="rounded-md col-span-9 w-full p-3"
                                          />
                                        </Autocomplete>

                                        <h1>estimated Time: {duration}</h1>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              )}

                              <div className="w-full px-5 grid grid-cols-12 flex space py-2 rounded-sm around bg-[#d4d4d4]">
                                <div className="col-span-1">
                                  <Image src={delv2} />
                                </div>
                                <div
                                  className="col-span-11 flex justify-between font-bold"
                                  onClick={() => {
                                    setDeliveryDropdownVisible(
                                      (prevDeliveryDropdownVisible) => {
                                        if (prevDeliveryDropdownVisible) {
                                          return false; // Close the delivery dropdown if it's open
                                        }
                                        setPickupDropdownVisible(false); // Close the pickup dropdown
                                        return true; // Open the delivery dropdown
                                      }
                                    );
                                  }}
                                >
                                  <h1>Delivery Details</h1>
                                  <p className="text-[24px] text-[#FF7D00">
                                    {deliveryDropdownVisible ? "-" : "+"}
                                  </p>
                                </div>
                              </div>

                              {deliveryDropdownVisible && (
                                <div className="bg-[#d4d4d4] px-5 py-2">
                                  {/* Render editable delivery details form */}
                                  <form>
                                    <div className="grid grid-cols-12  w-full gap-2 py-3">
                                      <label className="col-span-3 text-sm font-semibold">
                                        Name:
                                      </label>
                                      <input
                                        type="text"
                                        value={deliveryDetails.recipient_name}
                                        onChange={(e) =>
                                          setDeliveryDetails({
                                            ...deliveryDetails,
                                            recipient_name: e.target.value,
                                          })
                                        }
                                        className="rounded-md col-span-9 p-2"
                                        placeholder="Recipient Name"
                                      />
                                    </div>
                                    <div className="grid grid-cols-12  w-full gap-2 py-3">
                                      <label className="col-span-3 text-sm font-semibold">
                                        Phone:
                                      </label>
                                      <input
                                        type="tel"
                                        value={
                                          deliveryDetails.recipient_phone_number
                                        }
                                        onChange={(e) =>
                                          setDeliveryDetails({
                                            ...deliveryDetails,
                                            recipient_phone_number:
                                              e.target.value,
                                          })
                                        }
                                        className="rounded-md col-span-9 p-2"
                                        placeholder="Recipient Phone no."
                                      />
                                    </div>
                                    <div className="grid grid-cols-12  w-full gap-2 py-3">
                                      <label className="col-span-3 text-sm font-semibold">
                                        Recipient Address:
                                      </label>
                                      <div className="col-span-9">
                                        <Autocomplete
                                          onLoad={
                                            handleDestinationAutocompleteLoad
                                          }
                                          onPlaceChanged={() =>
                                            handleDestinationPlaceChanged(
                                              destinationAutocomplete
                                            )
                                          }
                                        >
                                          <input
                                            type="text"
                                            value={
                                              deliveryDetails.recipient_address
                                            }
                                            onChange={(e) =>
                                              setDeliveryDetails({
                                                ...deliveryDetails,
                                                recipient_address:
                                                  e.target.value,
                                              })
                                            }
                                            className="rounded-md w-full p-2 "
                                          />
                                        </Autocomplete>
                                      </div>
                                    </div>
                                    {paymentResponse && (
                                      <div className="alert">
                                        <span
                                          className="closebtn"
                                          onClick={() => setPaymentResponse("")}
                                        >
                                          &times;
                                        </span>
                                        <strong>Payment Response:</strong>{" "}
                                        {paymentResponse}
                                      </div>
                                    )}
                                  </form>
                                </div>
                              )}

                              <div className="w-full px-5 grid grid-cols-12  space py-2 rounded-sm around bg-[#d4d4d4]">
                                <div className="col-span-1">
                                  <Image src={delv2} />
                                </div>
                                <div className="col-span-11 flex justify-between font-bold">
                                  <h1>Select Delivery Vehicles</h1>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/*icons */}
                          <div className=" flex flex-wrap  justify-around px-5 place-content-center space-between">
                            <div
                              className={` h-[120px] w-[90px] border grid place-content-center`}
                              style={getVehicleStyles("bike")}
                              onClick={() => handleVehicleClick("bike")}
                            >
                              <Image src={bike} alt="" width="" height="" />
                            </div>
                            <div
                              className={` h-[120px] w-[90px] border grid place-content-center`}
                              style={getVehicleStyles("car")}
                              onClick={() => handleVehicleClick("car")}
                            >
                              <Image src={car} alt="" width="" height="" />
                            </div>
                            <div
                              className={` h-[120px] w-[90px] border grid place-content-center`}
                              style={getVehicleStyles("truck")}
                              onClick={() => handleVehicleClick("truck")}
                            >
                              <Image src={truck} alt="" width="" height="" />
                            </div>
                          </div>
                        </div>

                        <div className="footer mt-48 w-full  grid place-content-center">
                          <button
                            onClick={handleProceedToPay}
                            disabled={isButtonDisabled}
                            className="  grid grid-cols-12 items-center  bottom-2 m-3 rounded-lg border bg-[#ff7d00] py-3 px-2 md:px-9 lg:px-20 text-md text-white text-center"
                          >
                            <h1 className="col-span-11">Proceed to Pay</h1>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {uiState === "home" && (
          <div>
            <div className="">
              <div className="relative">
                <div class="flex-grow h-auto ">
                  <Map
                    recipientAddress={deliveryDetails.recipient_address}
                    senderAddress={pickupDetails.sender_address}
                    onMapDataChange={handleMapDataChange}
                  />
                </div>

                <div className="grid grid-cols-1 absolute top-0 w-full h-[80%] ">
                  <div className="mt-5  h-12 bg-white col-span-1 border border-gray-200 ml-5 mr-5 rounded-lg flex items-center p-7 justify-between">
                    <h1 className="text-xl font-bold ">Home</h1>
                    <div className="rounded-full p-3 bg-slate-200 ">pix</div>
                  </div>
                  <div className="mt-[70vh]">
                    <div className=" w-full  grid place-content-center">
                      <button
                        onClick={handleRequestClick}
                        className="relative overflow-hidden w-96 grid grid-cols-12 items-center bottom-2 m-3 rounded-lg border bg-[#FF7D00] p-5 text-[16px] text-white text-center"
                        style={{
                          position: "relative",
                          overflow: "hidden",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          border: "none",
                          borderRadius: "0.5rem",
                          backgroundColor: "#FF7D00",
                          padding: "1rem",
                          color: "white",
                          fontSize: "16px",
                          cursor: "pointer",
                        }}
                      >
                        <div className="col-span-1 animate-slide">
                          <Image
                            src={triple}
                            width={32}
                            height={32}
                            alt="Triple"
                          />
                        </div>
                        <h1 className="col-span-11">Request Pickup</h1>
                        <style jsx>{`
                          @keyframes slide {
                            0% {
                              transform: translateX(-300%);
                            }
                            100% {
                              transform: translateX(70%);
                            }
                          }

                          .animate-slide {
                            animation: slide 5s linear infinite;
                          }
                        `}</style>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {uiState === "proceedToPay" && (
          // New UI
          <div>
            <div className="">
              <div className="relative">
                <div class="flex-grow h-auto ">
                  <Map
                    recipientAddress={deliveryDetails.recipient_address}
                    senderAddress={pickupDetails.sender_address}
                    onMapDataChange={handleMapDataChange}
                  />
                </div>

                <div className="grid grid-cols-1 absolute top-0 w-full h-[80%] ">
                  <div className="mt-5  h-12 bg-white col-span-1 border border-gray-200 ml-5 mr-5 rounded-lg flex items-center p-7 justify-between">
                    <h1
                      onClick={handleBackClick}
                      className="text-xl font-bold  "
                    >
                      Wallet
                    </h1>
                    <div className="rounded-full p-3 bg-slate-200 ">pix</div>
                  </div>

                  <div className="grid grid-cols-12">
                    <div className="col-span-8 "></div>
                    <div className="col-span-4 p-5 ">
                      {paymentResponse ? (
                        <div className="alert bg-white flex flex-col flex-grow h-auto p-5 rounded-md">
                          <span
                            className="closebtn"
                            onClick={() => setPaymentResponse("")}
                          >
                            &times;
                          </span>
                          <strong>{paymentResponse}</strong>
                        </div>
                      ) : (
                        <div>
                          <Payment />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {errorMessage && (
                  <div className="error-message">Error: {errorMessage}</div>
                )}
              </div>
            </div>
          </div>
        )}
      </Layout>
    </ProtectedRoute2>
  );
};

export default page;
