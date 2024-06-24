import { createRoot } from 'react-dom/client';

function NavigationBar() {
  // TODO: Implementar realmente una barra de navegación
  return <h1>Hola desde React!</h1>;
}

const domNode = document.getElementById('navigation');
const root = createRoot(domNode);
root.render(<NavigationBar />);