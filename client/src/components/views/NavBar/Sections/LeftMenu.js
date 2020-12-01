import React from 'react';
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
    <Menu.Item key="mail">
      <a href="/">Home</a>
    </Menu.Item>
    <SubMenu title={<span>Shoes Brand Community</span>}>
      <MenuItemGroup title="Community">
        <Menu.Item key="setting:1">Nike</Menu.Item>
        <Menu.Item key="setting:2">Adidas</Menu.Item>
        <Menu.Item key="setting:3">New Balance</Menu.Item>
        <Menu.Item key="setting:3">Converse</Menu.Item>
        <Menu.Item key="setting:3">Reebok</Menu.Item>
      </MenuItemGroup>
    </SubMenu>
    <SubMenu title={<span>Question</span>}>
      <MenuItemGroup title="Question">
        <Menu.Item key="setting:1">Shoes Question</Menu.Item>
        <Menu.Item key="setting:2">Shipping Question</Menu.Item>
      </MenuItemGroup>
    </SubMenu>
  </Menu>
  )
}

export default LeftMenu