import React from 'react';
import PropTypes from 'prop-types';
import { Auth, User } from '../../services/auth';
import { Loader } from '../../components/messages';

export default function SignOut({ auth, user }) {
  setTimeout(() => auth.signOut({ email: user.email }));
  return <Loader text={`Signing out ${user.email}...`} />;
}

SignOut.propTypes = {
  auth: PropTypes.instanceOf(Auth).isRequired,
  user: PropTypes.instanceOf(User).isRequired,
};
