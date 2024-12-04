```javascript
// pages/about.js
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]';

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(context, authOptions);
  // console.log(session); // Remove for production
  return {
    props: {
      session: JSON.stringify(session), // Serialize the session
    },
  };
}

export default function About({ session }) {
  const parsedSession = JSON.parse(session); // Parse the session
  return (
    <div>
      <h1>About Page</h1>
      {parsedSession && <p>Logged in as {parsedSession.user.email}</p>}
    </div>
  );
}
```