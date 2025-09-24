export type Theater = {
    id: number;
    name: string;
    address: string;
    city: string;
    state: string;
    zip_code: string;
    phone: string;
    is_active: boolean;
}

export type Movie = {
    id: number;
    title: string;
    description: string;
    duration: number;
    rating: string;
    genre: string;
    release_date: string;
    is_active: boolean;
}

export type Screen = {
    id: number;
    theater_id: number;
    screen_name: string;
    total_seats: number;
    is_active: boolean;
}

export type Showtime = {
    id: number;
    movie_id: number;
    screen_id: number;
    start_time: string;
    end_time: string;
    price: number;
}

export type Seat = {
    id: number;
    screen_id: number;
    seat_number: string;
    row_letter: string;
    seat_in_row: number;
    is_available: boolean;
}

export type Reservation = {
    id: number;
    user_id: string;
    showtime_id: number;
    total_price: number;
    status: "pending" | "confirmed" | "cancelled";
    created_at: string;
    payment_id: string;
}