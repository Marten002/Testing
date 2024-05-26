import React, { Fragment } from 'react';

import ContentWithAsideLayout from '../../layouts/ContentWithAsideLayout';
import SettingsChangePassword from '../Settings/SettingsChangePassword';
import UserUpdateNotifications from './UserUpdateNotifications';
import UserTwoFactorAuth from './UserTwoFactorAuth';
import UserPersonal from './UserPersonal';
import UserProfile from './UserProfile';
import UserQuotes from './UserQuotes';
import UserAbout from './UserAbout';
import UserFriends from './UserFriends';
import UserLogs from './UserLogs';

import quotes from '../../data/quotes/quotes';
import friends from '../../data/people/people';
import invoice from '../../data/invoice/invoice';

const UserHeader = () => {
  return <UserProfile />
}

const UserAside = () => {
  return (
    <Fragment>
      <SettingsChangePassword />
      <UserUpdateNotifications />
      <UserTwoFactorAuth />
      <UserPersonal />
    </Fragment>
  )
}

const User = () => {
  return (
    <ContentWithAsideLayout banner={<UserHeader />} aside={<UserAside />}>
      <UserAbout />
      <UserQuotes quotes={quotes} />
      <UserFriends friends={friends} />
      <UserLogs invoice={invoice} />
    </ContentWithAsideLayout>
  );
};

export default User;
