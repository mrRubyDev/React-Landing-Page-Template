import { checkout, bookAppointment, getUnavailableDates } from "./routes";
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

export { GetUnavailableDates, BookAppointment, checkoutSession };
