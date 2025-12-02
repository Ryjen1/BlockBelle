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

Translation files are located in `src/i18n/locales/` and use JSON format. Each file contains translation keys organized by sections.

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

## Language Toggle Component

The `LanguageToggle` component provides a dropdown interface for switching between languages:

```typescript
import LanguageToggle from '@/components/LanguageToggle';

// In your component
<div>
  <LanguageToggle />
</div>
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

Create `src/i18n/locales/de.json` with translation keys.

### 3. Update Language Toggle

Add the new language to the `LanguageToggle` component.

## Best Practices

### 1. Key Naming Conventions

- Use **camelCase** for keys: `navigation.home`
- Group related keys: `navigation.home`, `navigation.chat`
- Be descriptive: `error.networkConnection` instead of `error.1`

### 2. Avoiding Hardcoded Text

Always use translation keys instead of hardcoded strings:

```typescript
// ❌ Bad
<h1>Welcome to BlockBelle</h1>

// ✅ Good
<h1>{t('homepage.welcome')}</h1>
```

## URL Structure

- **English**: `https://yourdomain.com/` (default)
- **Spanish**: `https://yourdomain.com/es/`
- **French**: `https://yourdomain.com/fr/`
- **German**: `https://yourdomain.com/de/` (when added)

## Troubleshooting

### Common Issues

1. **Translation Key Not Found**
   - Ensure the key exists in all translation files
   - Check for typos in key names

2. **Locale Not Working**
   - Verify the locale is added to `routing.ts`
   - Check middleware configuration

3. **Component Not Re-rendering**
   - Ensure `useTranslations` hook is used correctly
   - Check that the component is a client component

## Contributing

When adding new text to the application:

1. **Always use translation keys** - never hardcode text
2. **Update all language files** - ensure translations exist for EN, ES, and FR
3. **Follow naming conventions** - use descriptive, hierarchical keys
4. **Test in all languages** - verify translations display correctly

---

*This documentation is maintained as part of the BlockBelle project.*