import { fetchMovies } from '@/app/lib/data'

export default async function Page() {
    const movies = await fetchMovies()
    return (
        <div className="p-6">
            <h1 className="text-6xl font-bold">Current Movies</h1>
            {movies.length === 0 ? (
                <p>No movies showing in theaters.</p>
            ) : (
                <div className="carousel">
                    {movies.map((movie) => (
                        <div className="carousel-item" key={movie.id}>
                            <div className="hero min-h-screen">
                                <div className="hero-content flex-col lg:flex-row">
                                    <img
                                        src={movie.poster_url}
                                        className="max-w-sm rounded-lg shadow-2xl"
                                    />
                                    <div className="m-4">
                                        <h1 className="text-5xl font-bold">{movie.title}</h1>
                                        <p className="py-6">{movie.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}