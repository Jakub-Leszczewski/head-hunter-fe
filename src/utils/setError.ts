export const setError = (message?: string | string[]): string => {
  if(message instanceof Array && message.length > 0) return message.join(',\n');
  else if (typeof message === 'string') return message;

  return 'Coś poszło nie tak, spróbuj ponownie później'
}
