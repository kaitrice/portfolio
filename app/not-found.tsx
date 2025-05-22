'use client'
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function NotFound() {
  const router = useRouter()

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("/")
    }, 5000) // Redirect after 5 seconds
    return () => clearTimeout(timeout)
  }, [router])

  return (
    <main className="flex flex-col items-center justify-center min-h-[80vh] text-center p-6">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      
      <p className="mb-1 text-lg text-gray-600">The page you&apos;re looking for doesn&apos;t exist.</p>
      <p className="mb-6 text-lg text-gray-600">Redirecting to homepage...</p>
      
      <button
        onClick={() => router.push("/")}
        className="px-4 py-2 text-pink-600 outline outline-pink-600 hover:text-white hover:bg-pink-700 rounded"
      >
        Go Home
      </button>
    </main>
  )
}
