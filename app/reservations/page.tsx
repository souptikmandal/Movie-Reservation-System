import { stackServerApp } from '@/stack/server'
import { redirect } from 'next/navigation'

export default async function Page() {
    const user = await stackServerApp.getUser()

    if (!user) {
        redirect('/handler/signin')
    }

    return (<div>Welcome, {user.displayName}</div>)
}