import './TitlePage.modules.scss';
import { Typography } from 'antd';

const { Title } = Typography;
interface Props {
  title: string;
}

const TitlePage = ({ title }: Props) => {
  return (
    <Title level={2} className="title">
      {title}
    </Title>
  );
};

export default TitlePage;
