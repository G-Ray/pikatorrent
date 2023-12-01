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

## Sync translations

`en.json` is the source of truth for other languages.

To pull new keys and remove old ones in other languages:

```
npm -w @pikatorrent/app run sync-i18n
```

## Send the new translations

Send a Pull Request on Github, we will review and merge it, Thank you !
