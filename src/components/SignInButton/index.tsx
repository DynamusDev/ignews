import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { signIn, useSession, signout } from 'next-auth/client'

import styles from './styles.module.scss'

export function SignInButton() {
  const [session] = useSession();

  return (
    <button
      type="button"
      className={styles.signInButton}
      onClick={!session ? () => signIn('github') : null}
    >
      <FaGithub color={session ? '#04d361' : '#eba417'} />
      {
        session ? session.user.name : 'Sign In with Github'
      }
      {
        session &&
        <FiX
          color='#737380'
          className={styles.closeIcon}
          onClick={() => signout()}
        />
      }
    </button>
  );
}