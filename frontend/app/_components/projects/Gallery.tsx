'use client'
import { useState, useEffect } from "react"
import Image from "next/image"
import { Image as ProjectImage } from "@/frontend/app/_utils/type"
import { Carousel, Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react"

export function Gallery({ images }: { images: ProjectImage[] }) {
	const [open, setOpen] = useState(false)
	const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
		const handleEsc = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				setOpen(false)
			}
		}
		if (open) {
			document.addEventListener('keydown', handleEsc)
		}
		return () => document.removeEventListener('keydown', handleEsc)
	}, [open])

	const handleImageClick = (index: number) => {
		setCurrentIndex(index)
		setOpen(true)
	}

	return (
		<article className="mt-6">
			<h2>Gallery</h2>

			<div className="min-h-[70vw] md:min-h-auto w-full max-w-4xl mx-auto aspect-video relative">
				<Carousel slide={false} theme={{
                    control: {
                        base: "bg-pink-500/60 group-hover:bg-pink-500/90 group-focus:ring-pink-500/30 dark:bg-pink-500/60 dark:group-hover:bg-pink-500/90 dark:group-focus:ring-pink-500/30",
                    },
                    indicators: {
                        "active": {
                            "off": "bg-pink-500/50 hover:bg-pink-500 dark:bg-pink-500/50 dark:hover:bg-pink-500",
                            "on": "bg-pink-500 dark:bg-pink-500"
                        },
                    },
                }}>
					{images.slice(1).map((image, index) => (
						<div key={index} className="relative w-full h-full cursor-pointer" onClick={() => handleImageClick(index)}>
							<Image
								src={image.url}
								alt={image.alt}
								fill
								className="object-contain"
								sizes="(max-width: 768px) 100vw, 600px"
							/>
						</div>
					))}
				</Carousel>
			</div>

			<Modal
                show={open}
                onClose={() => setOpen(false)}
                size="7xl"
                position="center"
            >
                <ModalHeader />
                <ModalBody>
                    <div className="relative w-full min-h-[50vh] h-auto">
                        <Image
                            src={images[currentIndex + 1].url}
                            alt={images[currentIndex + 1].alt}
                            width={1920}
                            height={0}
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </ModalBody>
                <ModalFooter className="flex justify-between items-center w-full gap-4">
                    {currentIndex > 0 ? (
                        <button
                            onClick={() => setCurrentIndex((i) => i - 1)}
                            aria-label="Previous image"
                        >
                            <span className="text-2xl">&#8592;</span>
                        </button>
                    ) : (
                        <div className="w-10" />
                    )}

                    <span className="text-center text-sm text-gray-600 dark:text-gray-400 flex-1">
                        {images[currentIndex + 1].alt}
                    </span>

                    {currentIndex < images.length - 2 ? (
                        <button
                            onClick={() => setCurrentIndex((i) => i + 1)}
                            aria-label="Next image"
                        >
                            <span className="text-2xl">&#8594;</span>
                        </button>
                    ) : (
                        <div className="w-10" />
                    )}
                </ModalFooter>
            </Modal>
		</article>
	)
}