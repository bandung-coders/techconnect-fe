// Redux toolkit
import { isRejectedWithValue } from '@reduxjs/toolkit'
import type { Middleware } from '@reduxjs/toolkit'

/**
 * Log a warning and show a toast!
 */
export const rtkQueryErrorLogger: Middleware =
  () => (next) => (action) => {
    if (isRejectedWithValue(action)) {
      const description = action.payload.data.message || 'Tejadi kesalahan'

      alert("ERROR")
    }

    return next(action)
  }
