# Localization

## Add a new language

Available languages are defined in file `apps/app/i18n.js`

Example to add `French` language support with code `fr`:

```ts
export const translations = {
  // ...
  fr: require('./locales/fr.json'),
}

export const translationsLanguages = {
  // ...,
  fr: 'Français
}
```

Once the new language is defined, copy `apps/app/locales/en.json` to `apps/app/locales/[langCode].json`

For instance, `apps/app/locales/fr.json`.

Then, you can edit the file and translate the keys.

## Send the new translations

Send a Pull Request on Github, we will review and merge it, Thank you !
