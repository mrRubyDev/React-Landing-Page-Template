const API_HOST = process.env.REACT_APP_API_HOST;

const checkout = () => [API_HOST, "api", "app", "checkout"].join("/");
const bookAppointment = () =>
	[API_HOST, "api", "app", "appointments", "book"].join("/");
const getUnavailableDates = () =>
	[API_HOST, "api", "app", "doctor", "all", "unavailable"].join("/");
const approvePayment = () =>
	[API_HOST, "api", "app", "appointments", "approved"].join("/");
const rejectPayment = () =>
	[API_HOST, "api", "app", "appointments", "rejected"].join("/");

export {
	checkout,
	bookAppointment,
	getUnavailableDates,
	approvePayment,
	rejectPayment,
};
