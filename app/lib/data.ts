import postgres from 'postgres'
import { Theater, Movie, Screen, Showtime } from './definitions'

const sql = postgres(process.env.POSTGRES_URL!, {ssl: 'require'})

export async function fetchTheaters() {
    try {
        const data = await sql<Theater[]>`SELECT * FROM theaters`
        return data
    } catch (err) {
        console.error('Database Error: ', err)
        throw new Error('Failed to fetch theater data.')
    }
}

export async function fetchScreensByTheater(theater_id: number) {
    try {
        const data = await sql<Screen[]>`SELECT * FROM screens WHERE theater_id = ${theater_id} AND is_active = TRUE`
        return data
    } catch (err) {
        console.error('Database Error: ', err)
        throw new Error('Failed to fetch movie data')
    }
}

export async function fetchShowtimesByScreen(screen_id: number) {
    try {
        const data = await sql<Showtime[]>`SELECT * FROM showtimes WHERE screen_id = ${screen_id}`
        return data
    } catch (err) {
        console.error('Database Error: ', err)
        throw new Error('Failed to fetch showtime data')
    }
}