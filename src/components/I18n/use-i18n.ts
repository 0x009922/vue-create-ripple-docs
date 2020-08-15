import { inject, ComputedRef, readonly, computed } from "vue";
import { ProvideI18nSymbol, ProvideValue } from "./shared";

export interface UseI18N {
  <T extends Record<string, string>>(langs: Record<string, T>): {
    t: ComputedRef<Partial<T>>;
  } | never
}

const useI18n: UseI18N = (langs) => {
  const i18n = inject<ProvideValue>(ProvideI18nSymbol);

  if (!i18n) {
    throw new Error('i18n not provided. Make sure that you use it inside <i18n-container>');
  }

  return {
    t: readonly(
      computed(() => {
        if (i18n.lang) {
          return langs[i18n.lang] || {}
        }

        return {};
      })
    )
  }
}

export default useI18n;
