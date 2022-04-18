import styled from 'styled-components';

export const Grid = styled.div`
  flex: 1;
  display: grid;
  grid:
    'navbar navbar' auto
    'sidebar content' 1fr
    / auto 1fr;
`;

export const SidebarGrid = styled.div`
  grid-area: sidebar;
`;

export const ContentGrid = styled.div`
  grid-area: content;
  padding-top: 5px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const NavbarGrid = styled.div`
  grid-area: navbar;
`;
