import { render, screen } from '@testing-library/react';
import { I18nProvider, useI18n } from '../contexts/I18nContext';

const TestComponent = () => {
  const { t, language, setLanguage } = useI18n();
  return (
    <div>
      <p>{t('common.welcome')}</p>
      <button onClick={() => setLanguage('es')}>Switch to Spanish</button>
      <span>{language}</span>
    </div>
  );
};

describe('I18n', () => {
  it('renders English by default', () => {
    render(
      <I18nProvider>
        <TestComponent />
      </I18nProvider>
    );
    expect(screen.getByText('Welcome')).toBeInTheDocument();
    expect(screen.getByText('en')).toBeInTheDocument();
  });

  it('switches to Spanish', () => {
    render(
      <I18nProvider>
        <TestComponent />
      </I18nProvider>
    );
    const button = screen.getByText('Switch to Spanish');
    button.click();
    expect(screen.getByText('Bienvenido')).toBeInTheDocument();
    expect(screen.getByText('es')).toBeInTheDocument();
  });
});