import { Dispatch, SetStateAction, useState } from 'react'

interface UseResponseInfoReturn {
  loading: boolean;
  error: string | null;
  setLoading: Dispatch<SetStateAction<boolean>>
  setError: Dispatch<SetStateAction<string | null>>
}

export const UseResponseInfo = (): UseResponseInfoReturn => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  return {
    loading,
    error,
    setLoading,
    setError
  }
}
