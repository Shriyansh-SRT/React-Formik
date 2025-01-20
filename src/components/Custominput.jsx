import { useField } from 'formik'
import React from 'react'

export const Custominput = ({label, ...props}) => {
  // const [field, meta] = useField(props)
  const [field, meta] = useField(props)

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input 
        {...field} 
        {...props}
        className={`mt-1 block w-full px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none ${meta.touched && meta.error ? "border-red-500" : ""}`}
      />
      {meta.touched && meta.error && (
        <div className="text-sm text-red-500">{meta.error}</div>
      )}
    </div>
  )
}
