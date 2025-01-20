import React from 'react';
import { useFormik } from 'formik';
import { basicSchema } from '../schemas';

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
  
}

const Basic = () => {
  const {values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      age: ''
    },
    validationSchema: basicSchema,
    onSubmit
  });
  console.log(errors);
  
  // console.log(formik);
  

  return (
    <div className="flex justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Basic Form</h2>
        <form onSubmit={handleSubmit} autoComplete="off" className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className={`mt-1 block w-full px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none ${errors.email && touched.email ? "input-error" : ""}`}
            />
            {errors.email && touched.email && <p className='error'>{errors.email}</p>}
            
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className={`mt-1 block w-full px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none ${errors.password && touched.password ? "input-error" : ""}`}
            />
            {errors.password && touched.password && <p className='error'>{errors.password}</p>}
            
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm password"
              className={`mt-1 block w-full px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none ${errors.confirmPassword && touched.confirmPassword ? "input-error" : ""}`}
            />
            {errors.confirmPassword && touched.confirmPassword && <p className='error'>{errors.confirmPassword}</p>}
            
          </div>

          <div>
            <label
              htmlFor="Age"
              className="block text-sm font-medium text-gray-700"
            >
              Age
            </label>
            <input
              value={values.age}
              onChange={handleChange}
              onBlur={handleBlur}
              type="number"
              id="age"
              name="age"
              // placeholder="Enter your email"
              className={`mt-1 block w-full px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none ${errors.age && touched.age ? "input-error" : ""}`}
            />
            {errors.age && touched.age && <p className='error'>{errors.age}</p>}
            
          </div>
          <button
            disabled={isSubmitting}
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Basic;
