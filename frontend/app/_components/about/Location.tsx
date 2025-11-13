import { Icon } from "@iconify/react/dist/iconify.js";

export function Location() {
    return (
        <div className="flex flex-row items-center content-center">
            <Icon icon="mdi:map-marker-outline" width={16} height={16} />
            <p className="text-gray-500">Seattle, WA</p>
        </div>
    )
}