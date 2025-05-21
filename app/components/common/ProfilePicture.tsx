import Image from 'next/image'

export function ProfilePicture({
    width,
    src = "/images/headshot.avif",
    alt = "Portrait of Kaitlyn"
}: {
    width: number
    src?: string
    alt?: string
}) {
    return (
        <Image src={src} alt={alt} width={width} height={width} className="rounded-full drop-shadow-md dark:drop-shadow-gray-900" />
    )
}