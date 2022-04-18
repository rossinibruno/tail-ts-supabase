import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <ul className="menu menu-compact bg-base-200 w-56 p-2">
      <li>
        <Link to="/categories">Categorias</Link>
      </li>
      <li>
        <Link to="/buyers">Compradores</Link>
      </li>
      <li>
        <Link to="/traders">Lojistas</Link>
      </li>
      <li>
        <Link to="/users">Usuários</Link>
      </li>
      <li>
        <Link to="/farmers">Produtores</Link>
      </li>
      <li>
        <Link to="/negotiations">Negociações</Link>
      </li>
    </ul>
  );
}
