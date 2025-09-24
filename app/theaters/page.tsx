import { fetchTheaters } from '@/app/lib/data'

export default async function Page() {
    const theaters = await fetchTheaters()
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Theaters</h1>
            
            {/* Check if theaters exist */}
            {theaters.length === 0 ? (
                <p>No theaters found.</p>
            ) : (
                <div className="grid gap-4">
                    {theaters.map((theater) => (
                        <div key={theater.id} className="border p-4 rounded-lg shadow">
                            <h2 className="text-xl font-semibold">{theater.name}</h2>
                            <p className="text-gray-600">{theater.address}</p>
                            <p className="text-gray-600">
                                {theater.city}, {theater.state} {theater.zip_code}
                            </p>
                            <p className="text-sm text-gray-500">Phone: {theater.phone}</p>
                            <p className={`text-sm ${theater.is_active ? 'text-green-600' : 'text-red-600'}`}>
                                {theater.is_active ? 'Active' : 'Inactive'}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}