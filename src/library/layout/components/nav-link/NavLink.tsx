import React, { useEffect } from 'react';
import { Button, Row, Image, Typography } from 'antd';
import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { connectWallets, getListManageWallets } from 'app/redux/defiSlice';

import IconSubtract from 'library/assets/images/icon-subtract.png';
import IconEllipse from 'library/assets/images/icon-ellipse.png';
import NavLeftItems from 'data/nav-left-items';
import Logo from 'library/assets/images/logo.png';
import './NavLink.modules.scss';

const { Text, Paragraph } = Typography;
const nav = NavLeftItems();

const NavLinkLayout = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { manage_wallets } = useAppSelector((state) => state.defiSlide);

  const handleConnectWallets = () => {
    dispatch(connectWallets());
  };

  useEffect(() => {
    dispatch(getListManageWallets());
  }, []);

  const renterId = (id_connect: string) => {
    return id_connect.slice(0, 4) + '...' + id_connect.slice(id_connect.length - 4, id_connect.length);
  };

  return (
    <Row className="nav">
      <Image src={Logo} preview={false} />
      {nav.map((nav, idx) => {
        return (
          <Row key={idx} className="nav__list">
            <NavLink to={nav.to} className="nav__item">
              <Row className="icon">{nav.icon && <nav.icon />}</Row>
              <Row className="title">{nav.title_const}</Row>
            </NavLink>
          </Row>
        );
      })}
      <Button className="flex-center btn-wallets" onClick={handleConnectWallets}>
        Manage Wallets <Image className="pl-6" src={IconSubtract} preview={false} />
      </Button>
      <Row className="nav-connected__list">
        <Text className="text-title">Connected</Text>
        {manage_wallets?.connected?.map((item: any, index: number) => (
          <Paragraph key={index} className="flex-center nav-connected__item">
            <Image src={IconEllipse} preview={false} width={26} />
            <Row className="text-right">
              <Text className="text-id">{renterId(item.id_connect)}</Text>
              <Text className="text-name">{item.type_name}</Text>
            </Row>
          </Paragraph>
        ))}
      </Row>
      <Row className="nav-connected__list">
        <Text className="text-title">Watching</Text>
        {manage_wallets?.watching?.map((item: any, index: number) => (
          <Paragraph key={index} className="flex-center nav-connected__item">
            <Image src={IconEllipse} preview={false} width={26} />
            <Row className="text-right">
              <Text className="text-id">{renterId(item.id_watching)}</Text>
              <Text className="text-name">{item.type_name}</Text>
            </Row>
          </Paragraph>
        ))}
      </Row>
    </Row>
  );
};

export default NavLinkLayout;
