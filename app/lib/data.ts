import postgres from 'postgres'
import { Theater, Movie } from './definitions'

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

export async function fetchMovies() {
    try {
        const data = await sql<Movie[]>`Select * From movies`
        return data
    } catch (err) {
        console.error('Database Error: ', err)
        throw new Error('Failed to fetch movie data')
    }
}