import React from 'react';
import { Link } from 'react-router-dom';
import FormForgot from '../../components/form-forgot';
import IsAuthenticated from '../../routes/check-auth';

export default function Forgot() {
  return (
    <>
      <IsAuthenticated />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-3xl w-50 max-w-md">
          <div className="font-bold self-center text-2xl sm:text-3xl text-gray-800">Conta Café</div>
          <div className="mt-4 text-justify self-center text-sm sm:text-sm text-gray-800">
            Digite abaixo o seu e-mail de cadastro. Vamos enviar intruções para uma nova senha
          </div>

          <div className="mt-8">
            <FormForgot />
          </div>
        </div>
        <div className="flex justify-center items-center mt-6">
          <Link
            to="/signin"
            className="inline-flex items-center text-gray-700 font-medium text-xs text-center"
          >
            <span className="ml-2">
              Lembrou a senha?
              <a className="text-xs ml-2 text-primary font-semibold">
                Clique aqui para fazer login
              </a>
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
