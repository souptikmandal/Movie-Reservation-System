'use client';
import Link from 'next/link'

export default function ShowtimeButton({theater_id}: {theater_id: number}) {
    const href_link = `/theaters/${theater_id}`
    return(<Link href={href_link} className="btn btn-accent list-col-grow rounded-lg">View Showtimes</Link>)
}