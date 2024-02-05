import {  useParams } from "react-router-dom";
import LoginForm from '../components/LoginForm/LoginForm'
import { RegisterForm } from "../components/RegisterForm/RegisterForm";


const AuthPage = () => {
    const { id } = useParams();
    return (
    <div>
      <div>
          {id === 'login' && <LoginForm />}
          {id === 'register' && <RegisterForm />}
      </div>
    </div>
  );
};

export default AuthPage;
