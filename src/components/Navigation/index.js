import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import {Menu} from "semantic-ui-react";


const Navigation = () => (
      <Menu>
      <Menu.Item
          name='Sign In'
          href={ROUTES.SIGN_IN}
      />
      <Menu.Item
          name='Home'
          href={ROUTES.HOME}
      />
      <Menu.Item
          name='Account'
          href={ROUTES.ACCOUNT}
      />
      <Menu.Item
          name='Appointments'
          href={ROUTES.APPOINTMENTS}
      />
        <Menu.Item
          name='Catalogue'
          href={ROUTES.CATALOGUE}
      />
      </Menu>
  // <div>
  //   <ul>
  //     <li>
  //       <Link to={ROUTES.SIGN_IN}>Sign In</Link>
  //     </li>
  //     <li>
  //       <Link to={ROUTES.LANDING}>Landing</Link>
  //     </li>
  //     <li>
  //       <Link to={ROUTES.HOME}>Home</Link>
  //     </li>
  //     <li>
  //       <Link to={ROUTES.ACCOUNT}>Account</Link>
  //     </li>
  //     <li>
  //       <Link to={ROUTES.ADMIN}>Admin</Link>
  //     </li>
  //     <li>
  //       <Link to={ROUTES.APPOINTMENTS}>Appointments</Link>
  //     </li>
  //   </ul>
  // </div>
);

export default Navigation;
