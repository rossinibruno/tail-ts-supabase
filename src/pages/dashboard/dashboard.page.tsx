import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth';
import { supabase } from '../../config/supabase';

export default function Dashboard() {
  const { user, signout } = useAuth();
  const navigate = useNavigate();

  async function handleSignout() {
    await signout();
    navigate('/signin', { replace: true });
  }

  async function handleFunction() {
    const { data, error } = await supabase.functions.invoke('hello', {
      body: JSON.stringify({
        name: 'Bruno Rossini'
      })
    });

    console.log(data);
    console.log(error);
  }

  return (
    <div>
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <a>Conta Café</a>
          </li>
        </ul>
      </div>
      Welcome, {user?.id}!<button onClick={handleSignout}>Signout</button>
      <button onClick={handleFunction}>Call function</button>
    </div>
  );
}
