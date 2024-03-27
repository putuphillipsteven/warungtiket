import axios from 'axios';

export const getEventById = async (id, setEvent, setTickets, setCarts) => {
	try {
		const res = await axios.get(`http://localhost:8000/event/${id}`);
		const event = res?.data?.data;
		await setEvent(event);
		const tickets = res?.data?.data?.tickets;
		await setTickets(tickets);
		const newTickets = tickets?.map((ticket) => {
			return {
				id: ticket.id,
				ticketName: ticket.ticketName,
				ticketPrice: +ticket.ticketPrice,
				qty: 0,
				totalPrice: 0,
			};
		});
		await setCarts(newTickets);
		return res?.data?.data;
	} catch (err) {
		throw err;
	}
};
