import postgres from 'postgres'
import { Theater } from './definitions'

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