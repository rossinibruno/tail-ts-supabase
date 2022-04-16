import { useFormik } from 'formik';
import { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/auth';
import { useToast } from '../context/toast';

export default function FormSignin() {
  const navigate = useNavigate();
  const location = useLocation();
  const { signin } = useAuth();
  const { addToast } = useToast();

  //@ts-ignore
  const from = location.state?.from?.pathname || '/';

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: async ({ email, password }) => {
      const { error } = await signin({ email, password });

      if (error) addToast({ text: error.message, type: 'error' });
      else {
        addToast({ text: 'Bem vindo!', type: 'success' });
        navigate(from, { replace: true });
      }
    }
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col mb-3">
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
            required
          />
        </div>
        <div className="flex flex-col mb-6">
          <label className="label">
            <span className="label-text">Senha</span>
          </label>
          <input
            className="input h-11"
            id="password"
            name="password"
            type="password"
            placeholder="Senha"
            onChange={formik.handleChange}
            value={formik.values.password}
            required
          />
        </div>

        <button className="btn btn-primary w-full" type="submit">
          Entrar
        </button>
      </form>
    </div>
  );
}
