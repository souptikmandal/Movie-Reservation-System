import { fetchMovies } from '@/app/lib/data'

export default async function Page() {
    const movies = await fetchMovies()
    return (
        <div className="p-6">
            <h1 className="text-6xl font-bold mb-6">Current Movies</h1>
        </div>
    )
}