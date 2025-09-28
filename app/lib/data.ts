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

export async function fetchTheaterNamefromID(theater_id: number) {
    try {
        const data = await sql`SELECT name FROM theaters WHERE id = ${theater_id}`
        return data[0]?.name || null
    } catch (err) {
        console.error('Database Error ', err)
        throw new Error('Failed to fetch theater data')
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

export async function fetchCurrentOrNextShowtime(screen_id: number) {
    try {
        const data = await sql`
            SELECT
            s.*,
            m.title as movie_title,
            m.poster_url as movie_poster,
            m.duration as movie_duration,
            sc.screen_name
            FROM showtimes s
            JOIN movies m ON s.movie_id = m.id
            JOIN screens sc ON s.screen_id = sc.id
            WHERE s.screen_id = ${screen_id}
            AND s.is_active = TRUE
            AND s.end_time > NOW()
            ORDER BY s.start_time ASC
            LIMIT 1
        `
        return data[0] || null
    } catch (err) {
        console.error('Database Error: ', err)
        throw new Error('Failed to fetch showtime data')
    }
}

export async function fetchMovies() {
    try {
        const data = sql<Movie[]>`SELECT * FROM movies`
        return data
    } catch (err) {
        console.error('Database Error: ', err)
        throw new Error('Failed to fetch movie data')
    }
}