import Sidebar from './Sidebar';

export default function Index() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ padding: '2rem', flex: 1 }}>
        <h1>Hola Mundo</h1>
      </div>
    </div>
  );
}
