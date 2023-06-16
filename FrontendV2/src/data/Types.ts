export interface Empleado {
  ID_EMPLEADO: number;
  NOMBRE: string;
  FECHA_NACIMIENTO: string;
  FECHA_INGRESO: string;
  DIRECCION: string;
  ID_TIPO_DOCUMENTO: number;
  TIPO_DOCUMENTO: string;
  NUMERO_DOCUMENTO: string;
  CORREO: string;
  CELULAR: string;
  ID_TIPO_EMPLEADO: number;
  TIPO_EMPLEADO: string;
  ROL: string;
}

export interface Producto {
  ID_PRODUCTO: number;
  NOMBRE_PRODUCTO: string;
  CANTIDAD: number;
  TIPO_PRODUCTO: string;
  PROVEEDOR: string;
}

export interface Proveedores {
  ID_PROVEEDOR: number;
  NOMBRE: string;
  CORREO: string;
  DIRECCION: string;
  TIPO_DOCUMENTO: string;
  NUMERO_DOCUMENTO: number;
}

export interface Servicio {
  ID_SERVICIO: number;
  NOMBRE: string;
  VALOR: string;
}

export interface TipoDocumento {
  ID_TIPO_DOCUMENTO: string;
  TIPO_DOCUMENTO: string;
}

export interface TipoEmpleado {
  ID_TIPO_EMPLEADO: number;
  TIPO_EMPLEADO: string;
}

export interface TipoProducto {
  ID_TIPO_PRODUCTO: number;
  TIPO_PRODUCTO: string;
}

export interface Rol {
  ID_ROL: number;
  ROL: string;
}

export interface Estado {
  ID_ESTADO_CITA: number;
  ESTADO_CITA: string;
}
