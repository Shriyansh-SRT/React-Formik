import { useField } from 'formik'
import React from 'react'

export const CustomCheckBox = ({ label, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <input 
          {...field} 
          {...props}
          type="checkbox"
          className={`h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 ${meta.touched && meta.error ? "border-red-500" : ""}`}
        />
        <label className="text-sm text-gray-700">{label}</label>
      </div>
      {meta.touched && meta.error && (
        <div className="text-sm text-red-500">{meta.error}</div>
      )}
    </div>
  )
}
