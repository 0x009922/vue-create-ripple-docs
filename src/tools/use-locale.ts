import { ref, watchEffect, watch } from "vue";

export interface UseLocaleOptions {
  available: string[];
  default: string;
}

export default function useLocale(opts: UseLocaleOptions) {
  const KEY = 'locale';
  const initial = localStorage.getItem(KEY);

  // Язык браузера ('en-US' -> 'en')
  const browser = navigator.language.slice(0, 2);

  const lang = ref<string>(initial ?? browser);
  
  watchEffect(() => {
    // Сброс только к доступным, режим mandatory
    if (!opts.available.includes(lang.value)) {
      lang.value = opts.default;
    }

    // Сохранение в localStorage
    localStorage.setItem(KEY, lang.value);
  });


  return { lang };
}