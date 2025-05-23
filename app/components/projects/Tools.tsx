export function Tools({ tools }: { tools: string[] }) {
    return (
        <div className="flex flex-wrap gap-1 text-xs text-gray-400 dark:text-gray-500">
            {tools.map((tool, index) => (
                <span key={index}>
                    {tool}
                    {index < tools.length - 1 &&
                        <span className="leading-none px-1">&bull;</span>
                    }
                </span>
            ))}
        </div>
    )
}