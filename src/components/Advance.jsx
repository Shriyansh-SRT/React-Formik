import React from 'react';
import { Field, Form, Formik } from 'formik';
import { Custominput } from './Custominput';
import { advancedSchema } from '../schemas';
import { CustomSelect } from './CustomSelect';
import { CustomCheckBox } from './CustomCheckBox';


const onSubmit = async (values, actions) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
  
}

const Advance = () => {
  return (
    <Formik
      initialValues={{ username: "", jobType: "", acceptedTos: false }}
      validationSchema={advancedSchema}
      onSubmit={onSubmit}
    >
      {({isSubmitting}) => (
        <div className="flex justify-center bg-gray-100 min-h-screen py-10">
          <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
            <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Advanced Form</h2>
            <Form className="space-y-6">
              <div>
                <Custominput
                  label="Username"
                  name="username"
                  type="text"
                  placeholder="Enter username"
                  className="mt-1 block w-full px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <CustomSelect
                  label="Job Type"
                  name="jobType"
                  placeholder="Please select a job"
                  className="mt-1 block w-full px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <option value="">Please select the job type</option>
                  <option value="developer">Developer</option>
                  <option value="designer">Designer</option>
                  <option value="manager">Product Manager</option>
                  <option value="other">Other</option>
                </CustomSelect>
              </div>

              {/* Checkbox for accepted TOS */}
              <CustomCheckBox 
                label="I accept the terms and conditions"
                type="checkbox"
                name="acceptedTos"
              />

              {/* Submit Button */}
              <div>
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Submit
                </button>
              </div>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Advance;
