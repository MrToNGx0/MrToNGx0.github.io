import {
  faCheckCircle,
  faExclamationCircle,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';

export const RESPONSE_TYPE = {
  Success: 'success',
  Warning: 'warning',
  Error: 'error',
};

export const API_ENDPOINTS = {
  languagePath: '/languages',
  languageJsonPath: '/assets/json/languages.json',
};

export const LOCAL_STORAGE_KEYS = {
  LANGUAGE_REFERENCE_KEY: 'IsLanguage',
  THEME_REFERENCE_KEY: 'isTheme',
};

export const DEFAULT_LANGUAGE = {
  id: 1,
  language_code: 'EN',
  language_name: 'English',
  picture_url: './assets/icon/united-kingdom.png',
};

export const NOTIFICATION_ICONS = [
  {
    label: RESPONSE_TYPE.Success,
    icon: faCheckCircle,
    class: 'text-green-500 bg-green-100 dark:bg-green-800 dark:text-green-200',
  },
  {
    label: RESPONSE_TYPE.Warning,
    icon: faExclamationCircle,
    class:
      'text-yellow-500 bg-yellow-100 dark:bg-yellow-800 dark:text-yellow-200',
  },
  {
    label: RESPONSE_TYPE.Error,
    icon: faTimesCircle,
    class: 'text-red-500 bg-red-100 dark:bg-red-800 dark:text-red-200',
  },
];

export const THEME_CODE = {
  dark: 'dark',
  light: 'light',
};
