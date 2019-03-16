import { useEffect } from 'react'


export const useScrollToPosition = (value) => {
    useEffect(
      () => {
        window.scrollTo(0,0);
      },
      [value]
    )
  }