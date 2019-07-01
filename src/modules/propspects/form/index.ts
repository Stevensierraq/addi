import { withFormik } from 'formik'

import UiForm from './ui'
import validationSchema from './validation'

const PropspectForm = withFormik({
  displayName: 'PropspectForm',

  enableReinitialize: true,

  validationSchema,

  mapPropsToValues: () => ({
    name: '',
    email: '',
    phone: '',
    address: '',
    dniType: 'CC',
    dniExpiry: '',
    dniNumber: '',
  }),

  // tslint:disable-next-line:no-console
  handleSubmit: (values, { setSubmitting, resetForm }) => {
    setSubmitting(true)
    setTimeout(() => {
      // tslint:disable-next-line:no-console
      console.log(values)
      setSubmitting(false)
      resetForm()

    }, 3000)
  },

})(UiForm)

export default PropspectForm
