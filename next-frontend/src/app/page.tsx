import HomePage from '../components/HomePage';
import LanguageSwitcher from '../components/LanguageSwitcher';

export default function Home() {
  return (
    <div>
      <LanguageSwitcher />
      <HomePage />
    </div>
  );
}