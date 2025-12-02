# Internationalization (i18n) Implementation Guide

This document provides comprehensive information about the internationalization (i18n) implementation in BlockBelle.

## Overview

BlockBelle uses **next-intl** as the primary i18n library for React and Next.js applications. The implementation supports:

- **Languages**: English (default), Spanish, and French
- **Dynamic Language Switching**: Users can switch languages without page reload
- **URL-based Localization**: URLs include locale prefixes (`/en`, `/es`, `/fr`)
- **Server-side Rendering**: Proper server-side translation support
- **Client-side Hydration**: Smooth client-side language switching

## File Structure

```
src/
├── i18n/
│   ├── locales/
│   │   ├── en.json          # English translations
│   │   ├── es.json          # Spanish translations
│   │   └── fr.json          # French translations
│   ├── index.ts             # i18n configuration
│   └── routing.ts           # Routing configuration
├── middleware.ts            # Internationalized routing middleware
└── app/
    ├── [locale]/
    │   ├── layout.tsx       # Locale-specific layout
    │   └── page.tsx         # Locale-specific page
    └── page.tsx             # Root redirect to default locale
```

## Translation Files

Translation files are located in `src/i18n/locales/` and use JSON format. Each file contains translation keys organized by sections:

### English (`en.json`) - Default Language

```json
{
  "common": {
    "loading": "Loading...",
    "error": "Error",
    "success": "Success"
  },
  "navigation": {
    "home": "Home",
    "chat": "Chat",
    "groups": "Groups"
  }
}
```

### Spanish (`es.json`)

```json
{
  "common": {
    "loading": "Cargando...",
    "error": "Error",
    "success": "Éxito"
  },
  "navigation": {
    "home": "Inicio",
    "chat": "Chat",
    "groups": "Grupos"
  }
}
```

### French (`fr.json`)

```json
{
  "common": {
    "loading": "Chargement...",
    "error": "Erreur",
    "success": "Succès"
  },
  "navigation": {
    "home": "Accueil",
    "chat": "Chat",
    "groups": "Groupes"
  }
}
```

## Usage in Components

### Basic Translation Usage

```typescript
'use client';

import { useTranslations } from 'next-intl';

export default function MyComponent() {
  const t = useTranslations();

  return (
    <div>
      <h1>{t('homepage.welcome')}</h1>
      <p>{t('common.loading')}</p>
    </div>
  );
}
```

### Translation with Namespace

```typescript
'use client';

import { useTranslations } from 'next-intl';

export default function MyComponent() {
  const t = useTranslations('navigation');

  return (
    <nav>
      <a href="/">{t('home')}</a>
      <a href="/chat">{t('chat')}</a>
    </nav>
  );
}
```

### Pluralization

```typescript
const count = 5;
const message = t('messages.count', { count, plural: count === 1 ? 'one' : 'other' });
```

### Interpolation

```typescript
const username = 'Alice';
const message = t('greeting.name', { name: username });
```

## Language Toggle Component

The `LanguageToggle` component provides a dropdown interface for switching between languages:

```typescript
import LanguageToggle from '@/components/LanguageToggle';

// In your component
<div>
  <LanguageToggle />
</div>
```

### Customizing Language Options

Edit `src/components/LanguageToggle.tsx` to modify language options:

```typescript
const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' } // Add new language
];
```

## Adding New Languages

### 1. Add Language to Routing

Edit `src/i18n/routing.ts`:

```typescript
export const routing = defineRouting({
  locales: ['en', 'es', 'fr', 'de'], // Add new language code
  defaultLocale: 'en'
});
```

### 2. Create Translation File

Create `src/i18n/locales/de.json`:

```json
{
  "common": {
    "loading": "Lädt...",
    "error": "Fehler",
    "success": "Erfolg"
  },
  "navigation": {
    "home": "Startseite",
    "chat": "Chat",
    "groups": "Gruppen"
  }
}
```

### 3. Update Language Toggle

Add the new language to the `LanguageToggle` component.

### 4. Update Middleware

The middleware will automatically handle the new locale if it's added to the routing configuration.

## Best Practices

### 1. Key Naming Conventions

- Use **camelCase** for keys: `navigation.home`
- Group related keys: `navigation.home`, `navigation.chat`
- Be descriptive: `error.networkConnection` instead of `error.1`

### 2. Translation Organization

```json
{
  "common": {
    "actions": {
      "save": "Save",
      "cancel": "Cancel",
      "delete": "Delete"
    },
    "status": {
      "loading": "Loading...",
      "error": "Error",
      "success": "Success"
    }
  }
}
```

### 3. Avoiding Hardcoded Text

Always use translation keys instead of hardcoded strings:

```typescript
// ❌ Bad
<h1>Welcome to BlockBelle</h1>

// ✅ Good
<h1>{t('homepage.welcome')}</h1>
```

### 4. Context-Sensitive Translations

For context-dependent text, use descriptive keys:

```json
{
  "messages": {
    "new": "New",
    "edit": "Edit",
    "deleteConfirm": "Are you sure you want to delete this item?"
  }
}
```

### 5. Cultural Considerations

- Consider text length variations across languages
- Be aware of right-to-left (RTL) languages
- Handle date and number formatting
- Consider cultural differences in UI/UX

## Testing

### Manual Testing

1. Switch between languages using the language toggle
2. Check that all text is properly translated
3. Verify URL changes reflect the selected language
4. Test that language preference persists across page reloads

### Automated Testing

```typescript
import { render, screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import MyComponent from './MyComponent';

test('displays translated text', async () => {
  const messages = (await import('../i18n/locales/es.json')).default;
  
  render(
    <NextIntlClientProvider locale="es" messages={messages}>
      <MyComponent />
    </NextIntlClientProvider>
  );

  expect(screen.getByText('Cargando...')).toBeInTheDocument();
});
```

## URL Structure

- **English**: `https://yourdomain.com/` (default)
- **Spanish**: `https://yourdomain.com/es/`
- **French**: `https://yourdomain.com/fr/`
- **German**: `https://yourdomain.com/de/` (when added)

## SEO Considerations

1. **Hreflang Tags**: Automatically generated based on locales
2. **URL Structure**: Clean, readable URLs with language codes
3. **Content Indexing**: Each language version is separately indexable

## Performance Optimization

1. **Code Splitting**: Translation files are loaded on-demand
2. **Caching**: Browser and CDN caching for translation files
3. **Bundle Size**: Only necessary translations are included

## Troubleshooting

### Common Issues

1. **Translation Key Not Found**
   ```
   [next-intl] Message "key" not found for locale "en"
   ```
   - Ensure the key exists in all translation files
   - Check for typos in key names

2. **Locale Not Working**
   - Verify the locale is added to `routing.ts`
   - Check middleware configuration

3. **Component Not Re-rendering**
   - Ensure `useTranslations` hook is used correctly
   - Check that the component is a client component

### Debug Steps

1. Check browser console for translation errors
2. Verify translation files are properly formatted JSON
3. Test with `next dev` to see development errors
4. Check network tab for failed translation file requests

## Migration Guide

### From Hardcoded Text to i18n

1. **Identify Text**: Find all hardcoded strings in components
2. **Create Keys**: Define translation keys in JSON files
3. **Update Components**: Replace hardcoded text with translation calls
4. **Test**: Verify all languages display correctly
5. **Remove**: Remove unused hardcoded strings

### Example Migration

```typescript
// Before
<div>
  <h1>Welcome to BlockBelle</h1>
  <button>Get Started</button>
</div>

// After
<div>
  <h1>{t('homepage.welcome')}</h1>
  <button>{t('homepage.getStarted')}</button>
</div>
```

## Contributing

When adding new text to the application:

1. **Always use translation keys** - never hardcode text
2. **Update all language files** - ensure translations exist for EN, ES, and FR
3. **Follow naming conventions** - use descriptive, hierarchical keys
4. **Test in all languages** - verify translations display correctly
5. **Document changes** - update this guide if needed

## Future Enhancements

Planned improvements:

- [ ] RTL language support (Arabic, Hebrew)
- [ ] Dynamic language detection based on browser preferences
- [ ] Translation management dashboard
- [ ] Automated translation validation
- [ ] Support for additional languages (German, Portuguese, Chinese)
- [ ] Date and time localization
- [ ] Number and currency formatting

## Support

For questions about the i18n implementation:

1. Check this documentation first
2. Review the existing translation files
3. Test with the `next-frontend` development server
4. Contact the development team for complex issues

---

*This documentation is maintained as part of the BlockBelle project. Please keep it updated when making changes to the internationalization system.*