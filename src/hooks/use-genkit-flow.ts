'use client';

import { useState, useCallback } from 'react';

/**
 * Custom hook to call Genkit flows with specialized error handling for rate limits (429).
 * - 1st 429: Displays "thinking" message and auto-retries after 10s.
 * - 2nd failure: Displays error with manual retry button.
 */
export function useGenkitFlow<TInput, TOutput>(
  flowAction: (input: TInput) => Promise<TOutput>
) {
  const [data, setData] = useState<TOutput | null>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'retrying' | 'error' | 'success'>('idle');
  const [lastInput, setLastInput] = useState<TInput | null>(null);

  const callFlow = useCallback(async (input: TInput, retryCount = 0) => {
    setLastInput(input);
    
    if (retryCount === 0) {
      setStatus('loading');
      setData(null);
    } else {
      setStatus('retrying');
    }

    try {
      const result = await flowAction(input);
      setData(result);
      setStatus('success');
    } catch (err: any) {
      // Check for 429 Too Many Requests (Rate Limit)
      const isRateLimit = 
        err.message?.includes('429') || 
        err.message?.includes('Too Many Requests') ||
        err.status === 429;

      if (isRateLimit && retryCount === 0) {
        // First time seeing 429, show "thinking" and auto-retry after 10 seconds
        setTimeout(() => {
          callFlow(input, 1);
        }, 10000);
      } else {
        // Second failure or non-429 error
        setStatus('error');
      }
    }
  }, [flowAction]);

  return {
    data,
    status,
    callFlow,
    retry: () => lastInput && callFlow(lastInput, 0)
  };
}
