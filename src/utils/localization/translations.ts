import { readonly } from '@/utils/readonly';
import defaultLangSource from '../../assets/messages/english.json';
import i18n from 'i18n-js';
/**
 * Translations
 * @description An object that contains all translations
 * and is lazily loaded to avoid unnecessary use.
 * @readonly
 */
export const translations = readonly({
  en: () => defaultLangSource,
  tr: () => require('../../assets/messages/turkish.json'),
});

/**
 * Translations Type
 * @description Used to obtain the type and keys of the JSON files with the messages.
 * @throws NOTE: It is important to remember that the keys to your translations must be on the same level.
 */
type RecursiveKeyOf<TObj extends Record<string, any>> = {
  [TKey in keyof TObj & string]: TObj[TKey] extends Record<string, any>
    ? `${TKey}` | `${TKey}.${RecursiveKeyOf<TObj[TKey]>}`
    : `${TKey}`;
}[keyof TObj & string];
export type TDefaultLangSource = typeof defaultLangSource;
export type TxKeyPath = RecursiveKeyOf<TDefaultLangSource>;

export type TTranslateAttrs = (key: TxKeyPath, config?: i18n.TranslateOptions) => string;
