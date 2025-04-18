import { useAuth } from '../../hooks/useAuth';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import './Login.css';

const Login = () => {
  const { register, handleSubmit, formState: { errors }, login, isLoading, authError } = useAuth();

  const onSubmit = (data) => login({
    username: data.username,
    password: data.password
  });

  return (
    <div className="login-container">
      <div className="login-card">
        <form onSubmit={handleSubmit(onSubmit)} className="login-form">
          <Input type="text" placeholder="Usuario" {...register('username', { required: 'El usuario es requerido', minLength: { value: 4, message: 'Mínimo 4 caracteres' } })} error={errors.username} icon="user" disabled={isLoading} />
          <Input type="password" placeholder="Contraseña" {...register('password', { required: 'La contraseña es requerida', minLength: { value: 6, message: 'Mínimo 6 caracteres' } })} error={errors.password} icon="lock" disabled={isLoading} />
          {errors.root && <p className="login-error">{errors.root.message}</p>}
          <Button type="submit" className="login-button" disabled={isLoading}>{isLoading ? 'Autenticando...' : 'AUTENTICAR'}</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;