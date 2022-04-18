import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/auth';

export default function Navbar() {
  const { signout } = useAuth();
  const navigate = useNavigate();

  async function handleSignout() {
    await signout();
    navigate('/signin', { replace: true });
  }

  return (
    <div className="navbar bg-base-200">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Conta Café
        </Link>
      </div>
      <div className="flex-none gap-2 mr-3">
        <div className="form-control">
          <input type="text" placeholder="Pesquisar" className="input input-bordered" />
        </div>
      </div>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src="https://api.lorem.space/image/face?hash=33791" />
          </div>
        </label>
        <ul
          tabIndex={0}
          className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
        >
          <li>
            <a className="justify-between">Perfil</a>
          </li>
          <li>
            <a>Configurações</a>
          </li>
          <li>
            <a onClick={handleSignout}>Sair</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
