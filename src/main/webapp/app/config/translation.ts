import { TranslatorContext, Storage } from 'react-jhipster';

import { setLocale } from 'app/shared/reducers/locale';

TranslatorContext.setDefaultLocale('fr');
TranslatorContext.setRenderInnerTextForMissingKeys(false);

export const languages: any = {
  en: { name: 'English' },
  fr: { name: 'Français' },
  de: { name: 'Deutsch' },
  it: { name: 'Italiano' },
  'pt-br': { name: 'Português (Brasil)' },
  'pt-pt': { name: 'Português' },
  es: { name: 'Español' },
  sv: { name: 'Svenska' }
  // jhipster-needle-i18n-language-key-pipe - JHipster will add/remove languages in this object
};

export const locales = Object.keys(languages).sort();

export const registerLocale = store => {
  store.dispatch(setLocale(Storage.session.get('locale', 'fr')));
};
