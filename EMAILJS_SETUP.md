# EmailJS Setup

The contact form supports two safe behaviors:

- If EmailJS variables are configured, it sends mail through EmailJS.
- If they are missing, it falls back to opening the user's default mail client.

## Required variables

Create a `.env` file from `.env.example` and set:

```bash
VITE_CONTACT_EMAIL=srinithisrinithi09@gmail.com
VITE_EMAILJS_SERVICE_ID=service_8eusket
VITE_EMAILJS_TEMPLATE_ID=template_j5u3qpy
VITE_EMAILJS_PUBLIC_KEY=Lq-b9zkDDo2as94ms
```

## EmailJS template variables

Use these variables in your EmailJS template:

- `{{from_name}}`
- `{{from_email}}`
- `{{subject}}`
- `{{message}}`
- `{{to_email}}`

## Netlify

Add the same `VITE_...` variables in Netlify under:

`Site settings` -> `Environment variables`
