import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { selectUser } from "../../store/slice/userSlice"; // Import the selectUser function from your user slice

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dev.altoservices.net/api",

    prepareHeaders: (headers, { getState }) => {
      const user = selectUser(getState());

      console.log("User:", user);
      const token = user?.token;
      console.log("Token:", token);

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),

  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body,
      }),
      onError: (error) => {
        console.error("Login mutation error:", error);
      },
      onSuccess: (response) => {
        console.log("Login mutation success:", response);
      },
    }),
    register: builder.mutation({
      query: (body) => ({
        url: "/auth/register",
        method: "POST",
        body,
      }),
    }),

    verifyUser: builder.mutation({
      query: (body, userId) => ({
        url: `/auth/${userId}/verify`,
        method: "PATCH",
        body,
      }),
    }),

    resendOtp: builder.mutation({
      query: (userId) => ({
        url: `/auth/${userId}/resend-otp`, // Adjust the endpoint URL as needed
        method: "POST",
      }),
    }),

    requestPasswordReset: builder.mutation({
      query: (body) => ({
        url: "/auth/password/reset-request",
        method: "POST",
        body,
      }),
    }),

    resetPassword: builder.mutation({
      query: (body) => ({
        url: "/auth/password/reset",
        method: "PATCH",
        body,
      }),
    }),

    getDashboardData: builder.query({
      query: () => ({
        url: "/v1/admin/dashboard",
        method: "GET",
      }),
      onError: (error) => {
        console.error("Get Dashboard Data error:", error);
      },
      onSuccess: (response) => {
        console.log("Get Dashboard Data success:", response);
      },
    }),

    getDashboard: builder.query({
      query: ({ page = 1, perPage = 25 }) => ({
        url: `v1/admin/users?page=${page}&per_page=${perPage}`,
        method: "GET",
      }),
    }),

    getPromoCodes: builder.query({
      query: () => ({
        url: "/v1/admin/discounts", // Adjust the endpoint URL as needed
        method: "GET",
      }),
    }),

    createPromotion: builder.mutation({
      query: (body) => ({
        url: "/v1/admin/discounts", // Adjust the endpoint URL as needed
        method: "POST",
        body,
      }),
      onError: (error) => {
        console.error("Create Promotion mutation error:", error);
      },
      onSuccess: (response) => {
        console.log("Create Promotion mutation success:", response);
      },
    }),

    getPromoCodeById: builder.query({
      query: (id) => `/admin/discounts/${id}`, // Assuming you only want to retrieve data
    }),

    updatePromoCode: builder.mutation({
      query: ({ id, data }) => ({
        url: `/v1/admin/discounts/${id}`,
        method: "PATCH", // Use 'PUT' if that's how your API updates data
        body: data, // The updated data
      }),
    }),

    deleteAdminPromoCode: builder.mutation({
      query: (id) => ({
        url: `/v1/admin/discounts/${id}`, // Update the endpoint URL as needed
        method: "DELETE",
      }),
      onError: (error) => {
        console.error("Delete User mutation error:", error);
      },
      onSuccess: (response) => {
        console.log("Delete User mutation success:", response);
      },
    }),

    getFAQs: builder.query({
      query: () => ({
        url: "/v1/admin/faq", // Adjust the endpoint URL as needed
        method: "GET",
      }),
    }),

    createFAQ: builder.mutation({
      query: (body) => ({
        url: "/v1/admin/faq/create", // Adjust the endpoint URL as needed
        method: "POST",
        body,
      }),
      onError: (error) => {
        console.error("Create FAQ mutation error:", error);
      },
      onSuccess: (response) => {
        console.log("Create FAQ mutation success:", response);
      },
    }),

    getUserDetails: builder.query({
      query: (user_id) => ({
        // url: `/v1/admin/riders/${riderId}/details`,
        url: `/v1/admin/users/${user_id}`,
        method: "GET",
      }),
      onError: (error) => {
        console.error("Error fetching rider details:", error);
      },
      onSuccess: (response) => {
        console.log("Rider details fetched successfully:", response);
      },
    }),

    // Add this to your existing api setup
    createUser: builder.mutation({
      query: (body) => ({
        url: "/v1/admin/users/create", // Adjust the endpoint URL as needed
        method: "POST",
        body,
      }),
      onError: (error) => {
        console.error("Create User mutation error:", error);
      },
      onSuccess: (response) => {
        console.log("Create User mutation success:", response);
      },
    }),

    verifyUser: builder.mutation({
      query: ({ type, otp, device_name }, userId) => ({
        url: `/auth/${userId}/verify`,
        method: "PATCH",
        body: { type, otp, device_name },
      }),
      onError: (error) => {
        console.error("Verify User mutation error:", error);
      },
      onSuccess: (response) => {
        console.log("Verify User mutation success:", response);
      },
    }),

    activateUser: builder.mutation({
      query: (userId) => ({
        url: `v1/admin/users/${userId}/activate`,
        method: "PATCH",
      }),
      onError: (error) => {
        console.error("Activate User mutation error:", error);
      },
      // Handle a successful activation if needed
      onSuccess: (response) => {
        console.log("Activate User mutation success:", response);
      },
    }),

    deleteUser: builder.mutation({
      query: (userId) => ({
        url: `v1/admin/users/${userId}/delete`,
        method: "DELETE",
      }),
      onError: (error) => {
        console.error("Delete User mutation error:", error);
      },
      onSuccess: (response) => {
        console.log("Delete User mutation success:", response);
      },
    }),

    getDisputes: builder.query({
      query: () => ({
        url: "/v1/admin/disputes", // Adjust the endpoint URL as needed
        method: "GET",
      }),
    }),

    getAdminDisputeById: builder.query({
      query: (dispute_id) => ({
        url: `/v1/admin/disputes/${dispute_id}`,
        method: "GET",
      }),
      onError: (error) => {
        console.error("Get Admin Dispute by ID error:", error);
      },
      onSuccess: (response) => {
        console.log("Get Admin Dispute by ID success:", response);
      },
    }),

    bookOrder: builder.mutation({
      query: (body) => ({
        url: "/v1/customer/order/book",
        method: "POST",
        body,
      }),
      onError: (error) => {
        console.error("Book Order mutation error:", error);
      },
      onSuccess: (response) => {
        console.log("Book Order mutation success:", response);
      },
    }),

    wallet: builder.query({
      query: () => ({
        url: "/v1/wallet", // Adjust the endpoint URL as needed
        method: "GET",
      }),
    }),


    makeCardPayment: builder.mutation({
      query: (body) => ({
        url: "v1/customer/order/pay",
        method: "PATCH",
        body,
      }),
      onError: (error) => {
        console.error("Card Payment error:", error);
      },
      onSuccess: (response) => {
        console.log("Card Payment success:", response);
      },
    }),

    getCustomerDelivery: builder.query({
      query: () => ({
        url: "/v1/customer/delivery",
        method: "GET",
      }),
      onError: (error) => {
        console.error("Get Customer Delivery error:", error);
      },
      onSuccess: (response) => {
        console.log("Get Customer Delivery success:", response);
      },
    }),

    createDispute: builder.mutation({
      query: (body) => ({
        url: "/v1/customer/order/dispute", // Endpoint for creating a dispute
        method: "POST",
        body,
      }),
      onError: (error) => {
        console.error("Create Dispute mutation error:", error);
      },
      onSuccess: (response) => {
        console.log("Create Dispute mutation success:", response);
      },
    }),

    getSupportData: builder.query({
      query: () => ({
        url: "/v1/support", // Endpoint for getting support data
        method: "GET",
      }),
      onError: (error) => {
        console.error("Get Support Data error:", error);
      },
      onSuccess: (response) => {
        console.log("Get Support Data success:", response);
      },
    }),

    getRidersVerification: builder.query({
      query: () => ({
        url: "/v1/admin/riders/verification",
        method: "GET",
      }),
      onError: (error) => {
        console.error("Get Riders Verification error:", error);
      },
      onSuccess: (response) => {
        console.log("Get Riders Verification success:", response);
      },
    }),

    getTrackingOrders: builder.query({
      query: () => ({
        url: "/v1/customer/tracking/orders",
        method: "GET",
      }),
      onError: (error) => {
        console.error("Get Tracking Orders error:", error);
      },
      onSuccess: (response) => {
        console.log("Get Tracking Orders success:", response);
      },
    }),

    getSavedCards: builder.query({
      query: () => ({
        url: "/v1/customer/saved-cards",
        method: "GET",
      }),
      onError: (error) => {
        console.error("Get Saved Cards error:", error);
      },
      onSuccess: (response) => {
        console.log("Get Saved Cards success:", response);
      },
    }),

   
//
//
//
// *****savecard endpoint******//
//
    saveCard: builder.mutation({
      query: () => ({
        url: '/v1/customer/saved-cards/add',
        method: 'GET',
      }),
      onError: (error) => {
        console.error('Save Card error:', error);
      },
      onSuccess: (response) => {
        console.log('Save Card success:', response);
      },
    }),

    getCardList: builder.query({
      query: () => ({
        url: "/v1/customer/saved-cards",
        method: "GET"
      }),
      onError: (error) => {
        console.error("Get Saved Card:", error);
      },
      onSuccess: (response) => {
        console.log("Get Card List:", response)
      }
    }),
    getDeleteSavedCards: builder.query({
      query: () => ({
        url: "/v1/customer/saved-cards/remove",
        method: "DELETE",
      }),
      onError: (error) => {
        console.error("Delete Saved Cards:", error)
      },
      onSuccess: (response) => {
        console.log("Delete Saved Cards:", response)
      }
    }),

    rateOrder: builder.mutation({
      query: (body) => ({
        url: "/v1/customer/order/rating",
        method: "POST",
        body,
      }),
      onError: (error) => {
        console.error("Rate Order mutation error:", error);
      },
      onSuccess: (response) => {
        console.log("Rate Order mutation success:", response);
      },
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useVerifyUserMutation,
  useResendOtpMutation,
  useRequestPasswordResetMutation,
  useResetPasswordMutation,
  useGetDashboardDataQuery,
  useGetDashboardQuery,
  useGetPromoCodesQuery,
  useCreatePromotionMutation,
  useGetFAQsQuery,
  useCreateFAQMutation,
  useGetUserDetailsQuery,
  useLazyGetUserDetailsQuery,
  useCreateUserMutation,
  useActivateUserMutation,
  useDeleteUserMutation,
  useGetPromoCodeByIdQuery,
  useUpdatePromoCodeMutation,
  useGetSupportDataQuery,
  useGetDisputesQuery,
  useLazyGetAdminDisputeByIdQuery,
  useBookOrderMutation,
  useWalletQuery,
  useMakeCardPaymentMutation,
  useGetCustomerDeliveryQuery,
  useCreateDisputeMutation,
  useDeleteAdminPromoCodeMutation,
  useGetRidersVerificationQuery,
  useLazyGetRidersVerificationQuery,
  useGetTrackingOrdersQuery,
  useSaveCardMutation,
  useGetSavedCardsQuery,
  useGetCardListQuery,
  useGetDeleteSavedCardsQuery,
  useRateOrderMutation,
} = api;

export default api;
