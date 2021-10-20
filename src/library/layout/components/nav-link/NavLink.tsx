import { Button, Row, Image, Typography } from 'antd';
import { NavLink } from 'react-router-dom';
import IconSubtract from 'library/assets/images/icon-subtract.png';
import IconEllipse from 'library/assets/images/icon-ellipse.png';
import NavLeftItems from 'data/nav-left-items';
import Logo from 'library/assets/images/logo.png';
import './NavLink.modules.scss';

const { Text, Paragraph } = Typography;
const nav = NavLeftItems();

const NavLinkLayout = (): JSX.Element => {
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
      <Button className="flex-center btn-wallets">
        Manage Wallets <Image className="pl-6" src={IconSubtract} preview={false} />
      </Button>
      <Row className="nav-connected__list">
        <Text className="text-title">Connected</Text>
        <Paragraph className="flex-center nav-connected__item">
          <Image src={IconEllipse} preview={false} width={26} />
          <Row className="text-right">
            <Text className="text-id">0x4e5...0a7E</Text>
            <Text className="text-name">Ethereum</Text>
          </Row>
        </Paragraph>
      </Row>
      <Row className="nav-connected__list">
        <Text className="text-title">Watching</Text>
        <Paragraph className="flex-center nav-connected__item">
          <Image src={IconEllipse} preview={false} width={26} />
          <Row className="text-right">
            <Text className="text-id">0x4e5...0a7E</Text>
            <Text className="text-name">Matic</Text>
          </Row>
        </Paragraph>
        <Paragraph className="flex-center nav-connected__item">
          <Image src={IconEllipse} preview={false} width={26} />
          <Row className="text-right">
            <Text className="text-id">0x4e5...0a7E</Text>
            <Text className="text-name">BSC</Text>
          </Row>
        </Paragraph>
      </Row>
    </Row>
  );
};

export default NavLinkLayout;
