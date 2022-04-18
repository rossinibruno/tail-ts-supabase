import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useToast } from '../context/toast';
import { getUsers } from '../services/fake-users';

interface UserData {
  name: string;
  email: string;
  company: string;
  phone: string;
}

export default function FormUserDetail() {
  const [user, setUser] = useState({} as UserData);
  const [loading, setLoading] = useState(false);

  const { addToast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    setUser(getUsers(1)[0]);
  }, []);

  async function resetPassword() {
    setLoading(true);
    await setTimeout(() => {
      addToast({ type: 'success', text: 'E-mail com recuperação de senha enviado!' });
      setLoading(false);
    }, 3000);
  }

  async function handleSave() {
    await setTimeout(() => {
      addToast({ type: 'success', text: 'Usuário salvo com sucesso!' });
      navigate('/users', { replace: true });
    }, 500);
  }

  return (
    <div className="card bg-base-200 rounded-box p-5 w-1/2">
      <div className="flex">
        <div className="grid flex-1">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Nome</span>
            </label>
            <input
              type="text"
              placeholder="Nome"
              className="input input-bordered w-full max-w-xs"
              value={user.name}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="Nome"
              className="input input-bordered w-full max-w-xs"
              value={user.email}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Company</span>
            </label>
            <input
              type="text"
              placeholder="Nome"
              className="input input-bordered w-full max-w-xs"
              value={user.company}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Telefone</span>
            </label>
            <input
              type="text"
              placeholder="Nome"
              className="input input-bordered w-full max-w-xs"
              value={user.phone}
            />
          </div>
          <div className="mt-5">
            <button className="btn btn-primary" onClick={handleSave}>
              Salvar
            </button>
            <Link to="/users" className="btn btn-ghost ml-5">
              Voltar
            </Link>
          </div>
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="flex-1">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Status</span>
            </label>
            <select className="select select-bordered">
              <option selected>Ativo</option>
              <option>Inativo</option>
            </select>
          </div>
          <div className="w-full max-w-xs mt-10">
            <button
              className={`btn btn-primary w-full ${loading ? 'loading btn-disabled' : ''}`}
              onClick={resetPassword}
            >
              Resetar Senha
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
