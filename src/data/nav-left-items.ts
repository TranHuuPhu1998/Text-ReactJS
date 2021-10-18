import IconOverview from 'library/assets/icons/icon-overview';
import IconDeFi from 'library/assets/icons/icon-defi';
import IconHistory from 'library/assets/icons/icon-history';
import IconWordSpace from 'library/assets/icons/icon-workspace';
import IConStaking from 'library/assets/icons/icon-staking';

type NavItems = {
  title_const: string;
  icon?: React.FC,
  to:string
}

export default function (): NavItems[] {
  return [
    {
      title_const: 'Overview',
      icon: IconOverview,
      to:"/overview",
    },
    {
      title_const: 'DeFi',
      icon: IconDeFi,
      to:"/defi",
    },
    {
      title_const: 'History',
      icon: IconHistory,
      to:"/history",
    },
    {
      title_const: 'WordSpace',
      icon: IconWordSpace,
      to:"/word-space",
    },
    {
      title_const: 'Staking',
      icon: IConStaking,
      to:"/staking",
    },
  ];
}
