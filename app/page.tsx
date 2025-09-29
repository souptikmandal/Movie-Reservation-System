import Image from "next/image";
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-8xl font-bold mb-4">
            Movie Theater Management System
          </h1>
          <p className="text-lg">
            Manage theaters, movies, and reservations all in one place
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Link 
            href="/theaters"
            className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-200 hover:border-blue-300"
          >
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  Theaters
                </h2>
                <p className="text-gray-500 text-sm">
                  View and manage theater locations
                </p>
              </div>
            </div>
          </Link>
          
          <Link 
            href="/movies"
            className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-200 hover:border-green-300"
          >
            <div className="flex items-center space-x-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m3 0v16a2 2 0 01-2 2H6a2 2 0 01-2-2V4h16zM9 9h6m-6 4h6m-6 4h4" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                  Movies
                </h2>
                <p className="text-gray-500 text-sm">
                  Browse current movie listings
                </p>
              </div>
            </div>
          </Link>
          
          <Link 
            href="/reservations"
            className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-200 hover:border-purple-300"
          >
            <div className="flex items-center space-x-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                  Reservations
                </h2>
                <p className="text-gray-500 text-sm">
                  Manage bookings and tickets
                </p>
              </div>
            </div>
          </Link>
        </div>

        <div className="flex justify-center">
          <Link 
            href="/handler/signin"
            className="btn btn-accent px-8 py-3 rounded-lg font-semibold transition-colors shadow-md hover:shadow-lg"
          >
            Sign In
          </Link>
        </div>
      </div>
    </main>
  );
}