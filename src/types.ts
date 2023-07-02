/* eslint-disable no-unused-vars */
export enum Categoria {
    PINTOR = 'PINTOR',
    ALBAÑIL = 'ALBAÑIL',
    FONTANERO = 'FONTANERO',
    CARPINTERO = 'CARPINTERO',
    ELECTRICISTA = 'ELECTRICISTA',
    CERRAJERO = 'CERRAJERO',
    ELECTRONICO = 'ELECTRONICO',
    JARDINERO = 'JARDINERO',
    TECNICO = 'TECNICO',
    MASAJISTA = 'MASAJISTA',
    MANICURISTA = 'MANICURISTA'
  }
export type reviewsType = {
    id:number,
    titulo:string,
    mensaje:string,
}

export type userType = {
    id: number,
    nombre: string,
    profesion: string,
    telefono: string,
    correo:string,
    password:string
    descripcion:string,
    imagen:string,
    creado:Date,
    editado:Date,
    categoria: Categoria,
    reviews: reviewsType[]
}

export type createUserType = Omit<userType, 'id'| 'creado'| 'editado'| 'reviews'>
