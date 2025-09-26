import { fetchCurrentOrNextShowtime, fetchScreensByTheater, fetchTheaterNamefromID } from '@/app/lib/data'

type Props = {
    params: {
        theater_id: string
    }
}

export default async function TheaterShowtimes({ params }: Props) {
    const theater_id = parseInt(params.theater_id)

    if (isNaN(theater_id)) {
        return <div>Invalid theater ID</div>
    }

    const screens = await fetchScreensByTheater(theater_id)
    const theater_name = await fetchTheaterNamefromID(theater_id)

    const screensWithShowtimes = await Promise.all(
        screens.map(async (screen) => {
            const showtime = await fetchCurrentOrNextShowtime(screen.id)
            return { ...screen, currentShowtime: showtime}
        })
    )

    return (
        <div className="p-6">
            <h1 className="text-6xl font-bold mb-6">{theater_name} - Showtimes</h1>
            {screensWithShowtimes.length === 0 ? (
                <p>No screenings found for this theater.</p>
            ) : (
                <div className="grid gap-4">
                    <ul className="list">
                        {screensWithShowtimes.map((screen) => (
                            <li key={screen.id} className="list-row p-4 m-2 rounded-lg shadow-md">
                                <div>
                                    <h2 className="text-xl font-semibold">{screen.screen_name}</h2>
                                    <p>Total Seats: {screen.total_seats}</p>
                                </div>
                                <div className="list-col-wrap">
                                    {screen.currentShowtime ? (
                                        <div>
                                            <h3 className="font-semibold text-lg">{screen.currentShowtime.movie_title}</h3>
                                            <p className="text-sm">
                                                {new Date(screen.currentShowtime.start_time) <= new Date()
                                                    ? 'Now Playing'
                                                    : 'Next Up'
                                                }
                                            </p>
                                            <p className="text-sm">
                                                Start: {new Date(screen.currentShowtime.start_time).toLocaleTimeString([], {
                                                    hour: '2-digit',
                                                    minute: '2-digit'
                                                })}
                                            </p>
                                            <p className="text-sm">
                                                End: {new Date(screen.currentShowtime.end_time).toLocaleTimeString([], {
                                                    hour: '2-digit',
                                                    minute: '2-digit'
                                                })}
                                            </p>
                                            <p className="text-sm font-semibold">${screen.currentShowtime.price}</p>
                                        </div>
                                    ) : (
                                        <div className="mt-3 p-3">
                                            <p>No upcoming showtimes</p>
                                        </div>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}