import { fetchTheaters } from '@/app/lib/data'
import ShowtimeButton from './ShowtimeButton'

export default async function Page() {
    const theaters = await fetchTheaters()
    return (
        <div className="p-6">
            <h1 className="text-6xl font-bold mb-6">Theaters</h1>
            
            {/* Check if theaters exist */}
            {theaters.length === 0 ? (
                <p>No theaters found.</p>
            ) : (
                <div className="grid gap-4">
                    <ul className="list">
                        {theaters.map((theater) => (
                            <li key={theater.id} className="list-row p-4 m-2 rounded-lg shadow-md">
                                <div>
                                    <h2 className="text-xl font-semibold">{theater.name}</h2>
                                    <p>{theater.address}</p>
                                    <p>{theater.city}, {theater.state} {theater.zip_code}</p>      
                                </div>
                                <div className="list-col-wrap">
                                    <p className="text-sm">Phone: {theater.phone}</p>
                                    <p className={`text-sm ${theater.is_active ? 'text-green-600' : 'text-red-600'}`}>
                                        {theater.is_active ? 'Active' : 'Inactive'}
                                    </p>
                                </div>
                                <div>
                                    <ShowtimeButton theater_id={theater.id}/>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}