import { useFormik } from 'formik';
import React from 'react';

export default function FormForgot() {
  const formik = useFormik({
    initialValues: {
      email: ''
    },
    onSubmit: () => {}
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col mb-6">
          <label className="label">
            <span className="label-text">E-mail</span>
          </label>
          <input
            className="input h-11"
            id="email"
            name="email"
            type="email"
            placeholder="E-mail"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>

        <button className="btn btn-primary w-full" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
}
