import socials from "../data/social.json"
import { Social } from "../type/social.type"

export function getSocials(): Social[] {
	return socials
}