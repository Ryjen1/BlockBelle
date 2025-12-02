# Internationalization Contributing Guide

This guide helps developers contribute to BlockBelle's internationalization (i18n) system.

## Quick Start for Developers

### Adding New Text

When you add new text to the application, **always use translation keys**:

```typescript
// ❌ Don't do this
<h1>Welcome to BlockBelle</h1>

// ✅ Always do this
<h1>{t('homepage.welcome')}</h1>
```

### Before You Start Development

1. **Install dependencies**: `npm install` (this will install `next-intl`)
2. **Check existing translations**: Look at `src/i18n/locales/` for reference
3. **Understand the structure**: Review `INTERNATIONALIZATION.md`

## Translation Workflow

### Step 1: Identify Translation Needs

When adding new features or text:

1. **Scan for hardcoded strings** in your new components
2. **Identify text types**: Buttons, labels, error messages, notifications
3. **Plan translation keys**: Choose descriptive, hierarchical names

### Step 2: Add Translation Keys

**Update all three language files:**

#### English (`src/i18n/locales/en.json`)
```json
{
  "feature": {
    "newFeature": "New Feature",
    "description": "This is a new feature description"
  }
}
```

#### Spanish (`src/i18n/locales/es.json`)
```json
{
  "feature": {
    "newFeature": "Nueva Característica",
    "description": "Esta es una descripción de nueva característica"
  }
}
```

#### French (`src/i18n/locales/fr.json`)
```json
{
  "feature": {
    "newFeature": "Nouvelle Fonctionnalité",
    "description": "Ceci est une description de nouvelle fonctionnalité"
  }
}
```

### Step 3: Update Components

```typescript
'use client';

import { useTranslations } from 'next-intl';

export default function NewComponent() {
  const t = useTranslations();

  return (
    <div>
      <h1>{t('feature.newFeature')}</h1>
      <p>{t('feature.description')}</p>
      <button>{t('common.getStarted')}</button>
    </div>
  );
}
```

## Translation Key Naming Guidelines

### 1. Use Descriptive Names

```typescript
// ❌ Poor naming
t('msg1')

// ✅ Good naming
t('chat.message.private.placeholder')
```

### 2. Organize Hierarchically

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
  },
  "navigation": {
    "main": {
      "home": "Home",
      "chat": "Chat",
      "groups": "Groups"
    },
    "footer": {
      "about": "About",
      "contact": "Contact"
    }
  }
}
```

### 3. Be Context-Aware

```json
{
  "chat": {
    "message": {
      "placeholder": "Type your message...",
      "send": "Send",
      "attach": "Attach File"
    },
    "status": {
      "online": "Online",
      "offline": "Offline",
      "typing": "Typing..."
    }
  }
}
```

## Common Translation Patterns

### Form Labels

```json
{
  "forms": {
    "login": {
      "email": "Email Address",
      "password": "Password",
      "submit": "Sign In"
    },
    "registration": {
      "username": "Choose Username",
      "email": "Email Address",
      "password": "Create Password",
      "submit": "Create Account"
    }
  }
}
```

### Error Messages

```json
{
  "errors": {
    "validation": {
      "required": "This field is required",
      "email": "Please enter a valid email address",
      "password": "Password must be at least 8 characters"
    },
    "network": {
      "connection": "Network connection error",
      "timeout": "Request timed out",
      "server": "Server error occurred"
    }
  }
}
```

### Success Messages

```json
{
  "success": {
    "registration": "Account created successfully!",
    "login": "Welcome back!",
    "profile": "Profile updated successfully"
  }
}
```

## Testing Your Changes

### 1. Development Testing

```bash
# Start development server
npm run dev

# Test in different languages:
# - http://localhost:3000/en
# - http://localhost:3000/es  
# - http://localhost:3000/fr
```

### 2. Language Toggle Testing

1. Click the language toggle in the header
2. Verify the URL changes (e.g., `/en` → `/es`)
3. Check that all text translates correctly
4. Ensure language preference persists on page reload

### 3. Component Testing

```typescript
import { render, screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import MyComponent from './MyComponent';

test('translates text correctly', () => {
  const messages = require('../i18n/locales/es.json');
  
  render(
    <NextIntlClientProvider locale="es" messages={messages.default}>
      <MyComponent />
    </NextIntlClientProvider>
  );

  expect(screen.getByText('Cargando...')).toBeInTheDocument();
});
```

## Adding New Languages

### Step-by-Step Process

1. **Update Routing**: Edit `src/i18n/routing.ts`
   ```typescript
   export const routing = defineRouting({
     locales: ['en', 'es', 'fr', 'de'], // Add new language
     defaultLocale: 'en'
   });
   ```

2. **Create Translation File**: Create `src/i18n/locales/de.json`

3. **Update Language Toggle**: Add language to `src/components/LanguageToggle.tsx`

4. **Test**: Verify new language works correctly

## Best Practices Checklist

### Before Submitting Changes

- [ ] All new text uses translation keys (no hardcoded strings)
- [ ] Translation keys exist in all three language files (en, es, fr)
- [ ] Translation keys follow naming conventions
- [ ] Text is contextually appropriate for each language
- [ ] Components render correctly in all languages
- [ ] Language toggle works properly
- [ ] URLs reflect selected language
- [ ] No console errors in browser

### Code Review Checklist

- [ ] Translation files are properly formatted JSON
- [ ] Translation keys are descriptive and organized
- [ ] No missing translations in any language
- [ ] Components use `useTranslations` hook correctly
- [ ] Language switching functionality works
- [ ] Tests cover translation functionality

## Common Pitfalls to Avoid

### 1. Missing Translations

```typescript
// ❌ This will cause errors if key doesn't exist
t('feature.nonexistent')

// ✅ Check if key exists first
t('feature.available') || 'Default Text'
```

### 2. Inconsistent Naming

```json
// ❌ Inconsistent
{
  "userProfile": "User Profile",
  "account_settings": "Account Settings",
  "notificationSystem": "Notifications"
}

// ✅ Consistent camelCase
{
  "userProfile": "User Profile", 
  "accountSettings": "Account Settings",
  "notificationSystem": "Notifications"
}
```

### 3. Not Considering Text Length

Some languages (like German) produce longer text:

```json
{
  "button": {
    "save": "Save",
    "cancel": "Cancel"
  }
}
```

German: "Speichern" (longer than "Save")

**Solution**: Design UI components to handle text expansion gracefully.

### 4. Ignoring Cultural Context

```json
// ❌ English-centric
{
  "greeting": "Hello {name}!"
}

// ✅ Culturally appropriate
{
  "greeting": {
    "morning": "Good morning {name}!",
    "afternoon": "Good afternoon {name}!",
    "evening": "Good evening {name}!"
  }
}
```

## Troubleshooting

### Translation Not Showing

1. Check key exists in all language files
2. Verify key name spelling
3. Ensure component is a client component
4. Check browser console for errors

### Language Toggle Not Working

1. Verify routing configuration
2. Check middleware setup
3. Ensure language files are valid JSON
4. Test with `npm run dev`

### JSON Validation Errors

```bash
# Validate JSON syntax
node -e "JSON.parse(require('fs').readFileSync('src/i18n/locales/en.json'))"
```

## Getting Help

### Resources

1. **Next.js i18n Documentation**: https://nextjs.org/docs/app/building-your-application/routing/internationalization
2. **next-intl Documentation**: https://next-intl-docs.vercel.app/
3. **Project Documentation**: `INTERNATIONALIZATION.md`

### When to Ask for Help

- Complex translation scenarios
- RTL language support
- Performance issues
- Testing strategies
- Integration problems

### Code Review

For significant i18n changes, request review from:

- Team members familiar with i18n
- Design team (for UI/UX considerations)
- Product team (for user experience)

## Continuous Improvement

### Monitor Translation Usage

- Track which keys are most used
- Identify missing translations
- Monitor translation completeness

### Update Documentation

When adding new patterns or fixing issues:

1. Update `INTERNATIONALIZATION.md`
2. Add examples to this guide
3. Document any new processes

### Performance Monitoring

- Track translation file loading times
- Monitor bundle size impact
- Check for unnecessary translations

---

**Remember**: Good internationalization is an ongoing process. Continuously improve translations and user experience across all supported languages.

*Happy translating! 🌍*