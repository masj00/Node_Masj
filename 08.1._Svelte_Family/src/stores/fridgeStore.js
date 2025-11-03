import { writable } from "svelte/store";

function fridgeCustomStore() {
    const { subscribe, set, update } = writable(["write a message"]);
    return {
        subscribe,
        update,
        set,
        wipe: () => set(["write a message"])
}
};

export const fridgeMessages = writable([
  "Remember to buy milk!",
  "Eggs are running low.",
  "Don't forget the veggies.",
]);