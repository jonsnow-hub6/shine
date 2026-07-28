const KEY = "shine_sound_enabled";

export function getSoundPreference() {
  return localStorage.getItem(KEY) === "true";
}

export function setSoundPreference(enabled: boolean) {
  localStorage.setItem(KEY, String(enabled));
}
