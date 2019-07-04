import * as yup from 'yup'

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required('El nombre es requerido'),
  dniNumber: yup
    .number()
    .required('El documento es requerido')
    .positive('Ingrese un valor valido'),
  dniType: yup
    .string()
    .required('El tipo de documento es requerido'),
  dniExpiry: yup
    .string()
    .required('La expiracion del documento es requerida'),
  email: yup
    .string()
    .required('El email es requerido')
    .email('El email no es valido'),
  phone: yup
    .string()
    .typeError('El telefono no es valido')
    .required('El numero de telefono es requerido'),
  address: yup
    .string()
    .required('La dirección es requerida'),
})

export default validationSchema
