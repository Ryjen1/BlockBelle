import { useI18n } from '../contexts/I18nContext';

export default function Register() {
  const { t } = useI18n();

  return (
    <div>
      <h1>{t('register.title')}</h1>
      <p>{t('register.description')}</p>
      <button>{t('register.submit')}</button>
    </div>
  );
}