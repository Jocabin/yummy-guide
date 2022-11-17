import { writable } from 'svelte/store';

export const cookie = writable(false);
export const storage = writable(false);