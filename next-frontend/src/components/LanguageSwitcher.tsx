import { useI18n } from '../contexts/I18nContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useI18n();

  return (
    <select value={language} onChange={(e) => setLanguage(e.target.value)}>
      <option value="en">English</option>
      <option value="es">Español</option>
    </select>
  );
}