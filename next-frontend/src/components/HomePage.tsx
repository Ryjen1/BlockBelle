import { useI18n } from '../contexts/I18nContext';
import ProfileCustomization from './ProfileCustomization';

export default function HomePage() {
  const { t } = useI18n();

  return (
    <div>
      <h1>{t('home.title')}</h1>
      <p>{t('home.description')}</p>
      <p>{t('home.subtitle')}</p>
      <ProfileCustomization />
    </div>
  );
}