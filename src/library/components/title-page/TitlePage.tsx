import './TitlePage.modules.scss';

interface Props {
  title: string;
}

const TitlePage = ({ title }: Props) => {
  return <h2 className="title">{title}</h2>;
};

export default TitlePage;
