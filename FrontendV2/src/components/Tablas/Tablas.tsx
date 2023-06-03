import { ThemeProvider } from 'styled-components'; // Define the interface for the Input component
import { DivTablas } from './Tablas.styled';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface TablasProps {
  variant: 'citas' | 'productos' | 'proveedores' | 'servicios' | 'empleados';
}

// Use the Single Responsibility Principle (SRP)
const Tablashtml = ({ variant }: TablasProps) => {
  return (
    <DivTablas variant={variant}>
      <div>
        <table>
          <thead>
            {variant == 'citas' && (
              <tr>
                <th>id</th>
                <th>fecha inicio</th>
                <th>fecha fin</th>
                <th>servicio</th>
                <th>usuario</th>
                <th>empleado</th>
                <th>estado</th>
                <th>editar</th>
                <th>eliminar</th>
              </tr>
            )}
            {variant == 'productos' && (
              <tr>
                <th>id</th>
                <th>nombre</th>
                <th>cantidad</th>
                <th>tipo producto</th>
                <th>proveedor</th>
                <th>editar</th>
                <th>eliminar</th>
              </tr>
            )}
            {variant == 'proveedores' && (
              <tr>
                <th>id</th>
                <th>nombre</th>
                <th>correo</th>
                <th>dirección</th>
                <th>tipo documento</th>
                <th>número documento</th>
                <th>estado</th>
                <th>editar</th>
              </tr>
            )}
            {variant == 'servicios' && (
              <tr>
                <th>id</th>
                <th>nombre</th>
                <th>valor</th>
                <th>estado</th>
                <th>editar</th>
              </tr>
            )}
            {variant == 'empleados' && (
              <tr>
                <th>id</th>
                <th>nombre</th>
                <th>fecha nacimiento</th>
                <th>fecha ingreso</th>
                <th>dirección</th>
                <th>tipo documento</th>
                <th>número documento</th>
                <th>correo</th>
                <th>celular</th>
                <th>rol</th>
                <th>tipo empleado</th>
                <th>estado</th>
                <th>editar</th>
              </tr>
            )}
          </thead>
          <tbody>
            {variant == 'citas' && (
              <tr>
                <td>dd</td>
                <td>dd</td>
                <td>dd</td>
                <td>dd</td>
                <td>dd</td>
                <td>dd</td>
                <td>dd</td>
                <td>dd</td>
                <td>dd</td>
              </tr>
            )}
            {variant == 'productos' && (
              <tr>
                <td>dd</td>
                <td>dd</td>
                <td>dd</td>
                <td>dd</td>
                <td>dd</td>
                <td>dd</td>
                <td>dd</td>
              </tr>
            )}
            {variant == 'proveedores' && (
              <tr>
                <td>dd</td>
                <td>dd</td>
                <td>dd</td>
                <td>dd</td>
                <td>dd</td>
                <td>dd</td>
                <td>dd</td>
                <td>dd</td>
              </tr>
            )}
            {variant == 'servicios' && (
              <tr>
                <td>dd</td>
                <td>dd</td>
                <td>dd</td>
                <td>dd</td>
                <td>dd</td>
              </tr>
            )}
            {variant == 'empleados' && (
              <tr>
                <td>dd</td>
                <td>dd</td>
                <td>dd</td>
                <td>dd</td>
                <td>dd</td>
                <td>dd</td>
                <td>dd</td>
                <td>dd</td>
                <td>dd</td>
                <td>dd</td>
                <td>dd</td>
                <td>dd</td>
                <td>dd</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </DivTablas>
  );
};

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface TablasTheme {}

const tablasTheme: TablasTheme = {};

const Tablas = (props: TablasProps) => (
  <ThemeProvider theme={tablasTheme}>
    <Tablashtml {...props} />
  </ThemeProvider>
);

export default Tablas;
