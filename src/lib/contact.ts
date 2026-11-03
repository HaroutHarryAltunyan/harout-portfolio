/** Contact form validation, shared by the form and its tests. */
export type Fields = { name: string; email: string; company: string; subject: string; message: string };
export type Errors = Partial<Record<keyof Fields, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validate(f: Fields): Errors {
  const e: Errors = {};
  if (f.name.trim().length < 2) e.name = "Enter your name.";
  if (!EMAIL_RE.test(f.email.trim())) e.email = "Enter a valid email address, like name@company.com.";
  if (f.subject.trim().length < 3) e.subject = "Add a short subject.";
  if (f.message.trim().length < 20) e.message = "Write at least 20 characters so I know how to help.";
  if (f.message.length > 4000) e.message = "Keep the message under 4,000 characters.";
  return e;
}

