import UserData from "./AccountComponents/UserData";
import {Image} from "semantic-ui-react";

const Account = () => (
  <div style={{display: 'flex', flexDirection: 'column', height: '95vh', alignItems: 'center', justifyContent:
  'center' }}>
    <Image src="/img/logo.png" style={{width: '18vw'}}/>
    <h1 style={{fontSize: '5em'}}>Account</h1>
    <UserData/>
  </div>
);

export default Account;
