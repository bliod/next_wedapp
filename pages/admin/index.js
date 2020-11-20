import React, {useContext} from 'react';
import { logout } from '../../components/Auth';
import UserContext from '../../contexts/UserContext';

const admin = ({}) => {
    const context = useContext(UserContext);

    const handleLogout = () => {
        logout()
        context.updateUser(null);
        console.log("logout")
    }
    return (
        <div>
            <h1>This is Admin</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default admin;

export async function getServerSideProps(ctx) {
    if (!ctx.req.headers.cookie) {
        // If no user, redirect to login
        ctx.res.writeHead(307, { Location: '/login' });
        ctx.res.end();
        return { props: {} };
      }
    
    return { props: {}};
  }
  