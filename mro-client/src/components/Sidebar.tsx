import { FaIndustry, FaTruck, FaTools, FaHome } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <div className="sidebar-item" onClick={() => navigate('/index')}>
        <FaHome className="icon" />
        <span>Inicio</span>
      </div>
      <div className="sidebar-item" onClick={() => navigate('/produccion')}>
        <FaIndustry className="icon" />
        <span>Producción</span>
      </div>
      <div className="sidebar-item" onClick={() => navigate('/logistica')}>
        <FaTruck className="icon" />
        <span>Logística</span>
      </div>
      <div className="sidebar-item" onClick={() => navigate('/mantenimiento')}>
        <FaTools className="icon" />
        <span>Mantenimiento</span>
      </div>
    </div>
  );
}
