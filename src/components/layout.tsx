import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAuth } from '../context/auth';
import { Grid, SidebarGrid, ContentGrid, NavbarGrid } from '../styles/layout.style';
import Navbar from './navbar';
import Sidebar from './sidebar';

export default function Layout() {
  const { user } = useAuth();

  return (
    <div>
      <Grid className="min-h-screen">
        <NavbarGrid>
          <Navbar />
        </NavbarGrid>
        <SidebarGrid className="bg-base-200">
          <Sidebar />
        </SidebarGrid>
        <ContentGrid>
          <Outlet />
        </ContentGrid>
      </Grid>
    </div>
  );
}
