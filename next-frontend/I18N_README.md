# Internationalization (i18n) Support

This document describes the i18n implementation for BlockBelle.

## Overview

The application now supports multiple languages using a custom React context-based translation system.

## Supported Languages

- English (en)
- Spanish (es)
- French (fr)

## Usage

### Using Translations in Components

```tsx
import { useI18n } from '../contexts/I18nContext';

function MyComponent() {
  const { t } = useI18n();

  return <h1>{t('common.welcome')}</h1>;
}
```

### Changing Language

```tsx
import { useI18n } from '../contexts/I18nContext';

function LanguageSelector() {
  const { setLanguage } = useI18n();

  return (
    <button onClick={() => setLanguage('es')}>
      Switch to Spanish
    </button>
  );
}
```

## Adding New Languages

1. Create a new JSON file in `src/locales/` (e.g., `de.json`)
2. Add translations for all keys
3. Import and add to `translations` object in `I18nContext.tsx`
4. Update `LanguageSwitcher.tsx` to include the new option

## File Structure

```
src/
├── locales/
│   ├── en.json
│   ├── es.json
│   └── fr.json
├── contexts/
│   └── I18nContext.tsx
└── components/
    ├── LanguageSwitcher.tsx
    └── ...
```

## Persistence

The selected language is persisted in localStorage and restored on app reload.