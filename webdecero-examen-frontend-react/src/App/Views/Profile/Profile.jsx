import { useAuth } from '../../hooks/useAuth';
import Icon from '../../components/Icons/Icons';

import './Profile.css';

export const Profile = () => {
  const { getUserData, logout } = useAuth();
  const userData = getUserData();

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-avatar">
          <img
            src={userData?.image || '/default-avatar.png'}
            alt="Avatar"
            className="avatar-image"
          />
        </div>

        <div className="profile-header">
          <h1 className="profile-name">
            {userData?.firstName} {userData?.lastName}
          </h1>
          <p className="profile-contact">
            {userData?.email}
            <br />
            <span className="contact-item">
              <Icon name="location" size={16} />
              {userData?.address?.city || 'Ciudad'} - {userData?.address?.country || 'País'}
            </span>
          </p>
        </div>

        <div className="divider"></div>

        <div className="profile-info-grid">
          <div className="info-card">
            <p className="info-value">{userData?.birthDate}</p>
            <p className="info-label">Cumpleaños</p>
          </div>
          <div className="info-card">
            <p className="info-value">{userData?.age}</p>
            <p className="info-label">Edad</p>
          </div>
          <div className="info-card">
            <p className="info-value">{userData?.phone}</p>
            <p className="info-label">Teléfono</p>
          </div>
        </div>

        <div className="additional-info">
          <p className="additional-info-item">
            Dirección: {userData?.address.address}, {userData?.address.city}, {userData?.address.state} {userData?.address.postalCode}
          </p>
          <p className="additional-info-item">
            Cursando estudios en: {userData?.university}
          </p>
          <p className="additional-info-item">
            Género: {userData?.gender === 'female' ? 'Femenino' : 'Masculino'}
          </p>
        </div>

        <button onClick={logout} className="logout-button">
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
};