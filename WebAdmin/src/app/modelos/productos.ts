export interface Producto{
    id?: number;
    nombre: string;
    descripcion: string;
    precio: number;
    imagen?: File;
    estado: number;
    puntos: number;
    idtipoproducto: number;
}