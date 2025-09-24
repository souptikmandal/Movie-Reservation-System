import { fetchScreensByTheater } from '@/app/lib/data'

type Props = {
    params: {
        theater_id: string
    }
}

export default async function TheaterShowtimes({ params }: Props) {
    const theater_id = parseInt(params.theater_id)
    const screens = await fetchScreensByTheater(theater_id)

    return (
        <div className="p-6">
            <h1 className="text-6xl font-bold mb-6">Theater Showtimes</h1>
            {screens.length === 0 ? (
                <p>No screenings found</p>
            ) : (
                <div className="grid gap-4">
                    <ul className="list">
                        {screens.map((screen) => (
                            <li key={screen.id} className="list-row p-4 m-2 rounded-lg shadow-md">
                                <div>
                                    <h2 className="text-xl font-semibold">{screen.screen_name}</h2>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}