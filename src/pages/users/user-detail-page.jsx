import React from 'react';
import { Link } from 'react-router-dom';
import FormUserDetail from '../../components/form-user-detail';

export default function UserDetailPage() {
  return (
    <>
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <Link to="/">Conta Café</Link>
          </li>
          <li>
            <Link to="/users">Usuários</Link>
          </li>
          <li>
            <a>Detalhes</a>
          </li>
        </ul>
      </div>
      <FormUserDetail />
    </>
  );
}
