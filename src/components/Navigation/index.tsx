import {ActivableLink} from '../ActivableLink';
import {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

export const Navigation = () => {
  
  const navigate = useNavigate();
  const [isAuthenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    setAuthenticated(localStorage.getItem("access_token") !== null);
  }, []);

  function logout() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("id");
    setAuthenticated(false);
    navigate('/');
  }

  if(!isAuthenticated) { 
    return (
      <>
        <ActivableLink to="/">Home</ActivableLink>
        <ActivableLink to="/login">Login</ActivableLink>
      </>
    );
  }

  return (
    <>
      <ActivableLink to="/">Home</ActivableLink>
      <ActivableLink to="/artigos">Meus Artigos</ActivableLink>
      <ActivableLink to="/artigos/novo">Novo Artigo</ActivableLink>
      <ActivableLink to='' onClick={logout}>Logout</ActivableLink>
    </>
  );
};