type EmailDraft = {
  to: string
  subject: string
  body: string
}

// URLSearchParams encodes spaces as "+", which some mail apps show literally
function encodeParams(params: Record<string, string>): string {
  return new URLSearchParams(params).toString().replace(/\+/g, '%20')
}

export function mailtoLink({ to, subject, body }: EmailDraft): string {
  return `mailto:${to}?${encodeParams({ subject, body })}`
}

export function gmailLink({ to, subject, body }: EmailDraft): string {
  return `https://mail.google.com/mail/?${encodeParams({ view: 'cm', fs: '1', to, su: subject, body })}`
}

export function outlookLink({ to, subject, body }: EmailDraft): string {
  return `https://outlook.office.com/mail/deeplink/compose?${encodeParams({ to, subject, body })}`
}

export function formatPrice(amount: number): string {
  return `$${amount.toFixed(2)}`
}
