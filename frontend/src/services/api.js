const BASE_URL = "http://localhost:8081/api";

export async function createBooking(booking) {
  const response = await fetch(`${BASE_URL}/bookings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(booking),
  });

  if (!response.ok) {
    throw new Error("Booking Failed");
  }

  return response.json();
}

export async function getBookings() {
  const response = await fetch(`${BASE_URL}/bookings`);

  if (!response.ok) {
    throw new Error("Unable to fetch bookings");
  }

  return response.json();
}

export async function getBooking(id) {
  const response = await fetch(`${BASE_URL}/bookings/${id}`);

  if (!response.ok) {
    throw new Error("Booking not found");
  }

  return response.json();
}

export async function deleteBooking(id) {
  const response = await fetch(`${BASE_URL}/bookings/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Unable to delete booking");
  }

  return true;
}