import {
	checkout,
	bookAppointment,
	getUnavailableDates,
	rejectPayment,
	approvePayment,
} from "./routes";
import { apiCall, GET, checkError, toJson } from "./apiUtils";

const GetUnavailableDates = () => {
	return GET(getUnavailableDates()).then(checkError).then(toJson);
};
const BookAppointment = payload => {
	return apiCall("POST", bookAppointment(), payload);
};

const checkoutSession = payload => {
	return apiCall("POST", checkout(), payload);
};

const rejectedPayment = payload => {
	return apiCall("POST", rejectPayment(), payload);
};
const approvedPayment = payload => {
	return apiCall("POST", approvePayment(), payload);
};

export {
	GetUnavailableDates,
	BookAppointment,
	checkoutSession,
	approvedPayment,
	rejectedPayment,
};
