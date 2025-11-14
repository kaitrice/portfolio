export function Tools({ tools }: { tools: string[] }) {
    return (
        <span className="flex flex-row flex-wrap gap-2 text-sm text-gray-500 dark:text-gray-400">
            {tools.map((tool, index) => (
                <span key={index} className="flex gap-2">
                    <span>{tool}</span>
                    {index < tools.length - 1 && (
                        <span>&bull;</span>
                    )}
                </span>
            ))}
        </span>
    )
}