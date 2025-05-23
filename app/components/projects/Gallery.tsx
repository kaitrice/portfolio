import { ProjectImage } from '@/app/type/project.type'
import Image from 'next/image'

export function Gallery({ images }: { images: ProjectImage[] }) {
    return (
        <div className="mt-6">
            <h2 className="text-2xl font-bold">Gallery</h2>
            <div className="flex flex-wrap gap-1 items-center text-xs text-gray-500 mb-4">
                {images.slice(1).map((image, index) => (
                    <Image
                        key={index}
                        src={image.url}
						alt={image.alt}
                        width={24}
                        height={24}
                        className="rounded shadow"
                        loading="lazy"
                    />
                ))}
            </div>
        </div>
    )
}