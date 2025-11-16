import { readable } from "svelte/store";

export const BASE_URL = readable("http://localhost:8080"); //readable er en svelte store der kun kan læses fra ikke skrives til ift. writable som kan begge dele
