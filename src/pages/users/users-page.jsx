import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUsers } from '../../services/fake-users';

export default function UsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(getUsers(15));
  }, []);

  return (
    <>
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <Link to="/">Conta Café</Link>
          </li>
          <li>
            <a>Usuários</a>
          </li>
        </ul>
      </div>
      <table className="table table-compact w-full">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Company</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.company}</td>
              <td>
                <Link to="/users/1" className="btn btn-ghost btn-xs">
                  Visualizar
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div class="btn-group justify-center mt-8">
        <button class="btn btn-sm btn-active">1</button>
        <button class="btn btn-sm">2</button>
        <button class="btn btn-sm">3</button>
        <button class="btn btn-sm">4</button>
      </div>
    </>
  );
}
