import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Register from '../Register';

describe('Register Component', () => {
  test('renders registration form', () => {
    render(<Register />);
    expect(screen.getByText(/register/i)).toBeInTheDocument();
  });

  test('validates empty form submission', async () => {
    render(<Register />);
    const submitButton = screen.getByRole('button', { name: /register/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/please fill in all fields/i)).toBeInTheDocument();
    });
  });

  test('validates email format', async () => {
    render(<Register />);
    const emailInput = screen.getByLabelText(/email/i);
    const submitButton = screen.getByRole('button', { name: /register/i });

    userEvent.type(emailInput, 'invalid-email');
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/invalid email format/i)).toBeInTheDocument();
    });
  });

  test('submits form with valid data', async () => {
    render(<Register />);
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole('button', { name: /register/i });

    userEvent.type(emailInput, 'test@example.com');
    userEvent.type(passwordInput, 'password123');
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/registration successful/i)).toBeInTheDocument();
    });
  });

  test('handles registration error', async () => {
    // Mock API error
    render(<Register />);
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole('button', { name: /register/i });

    userEvent.type(emailInput, 'existing@example.com');
    userEvent.type(passwordInput, 'password123');
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/user already exists/i)).toBeInTheDocument();
    });
  });
});