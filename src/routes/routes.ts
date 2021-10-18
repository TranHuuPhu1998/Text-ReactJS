import { lazy } from 'react';

const Home = lazy(() => import('features/home'));
const Company = lazy(() => import('features/company'));
const AnalyticsApp = lazy(() => import('features/analytics-app'));
const LearnDeFi = lazy(() => import('features/learn-defi'));
const Staking = lazy(() => import('features/staking'));
const DeFi = lazy(() => import('features/defi'));
const Overview = lazy(() => import('features/overview'));
const History = lazy(() => import('features/history'));
const WordSpace = lazy(() => import('features/word-space'));

export default [
  // top menu
  {
    path: '/home',
    exact: true,
    component: Home,
    title: 'Home',
  },
  {
    path: '/company',
    exact: true,
    component: Company,
    title: 'Company',
  },
  {
    path: '/analytics-app',
    exact: true,
    component: AnalyticsApp,
    title: 'Analytics App',
  },
  {
    path: '/learn-defi',
    exact: true,
    component: LearnDeFi,
    title: 'Learn De Fi',
  },
  {
    path: '/staking',
    exact: true,
    component: Staking,
    title: 'Staking',
  },
   // nav menu
  {
    path: '/deFi',
    exact: true,
    component: DeFi,
    title: 'DeFi',
  },
  {
    path: '/overview',
    exact: true,
    component: Overview,
    title: 'Overview',
  },
  {
    path: '/history',
    exact: true,
    component: History,
    title: 'History',
  },
  {
    path: '/word-space',
    exact: true,
    component: WordSpace,
    title: 'WordSpace',
  },
  
];
