const API_HOST = process.env.REACT_APP_API_HOST;

const checkout = () => [API_HOST, "api", "checkout"].join("/");
const bookAppointment = id =>
	[API_HOST, "api", "app", "appointments", "book", id].join("/");
const getUnavailableDates = () =>
	[API_HOST, "api", "app", "doctor", "all", "unavailable"].join("/");

export { checkout, bookAppointment, getUnavailableDates };
