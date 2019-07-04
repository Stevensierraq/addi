import { withFormik } from 'formik'

import UiForm from './ui'
import validationSchema from './validation'

import { addPropspect } from '../../../store/actions'

const PropspectForm = withFormik<any, any>({
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

  handleSubmit: (values, { setSubmitting, resetForm, props }) => {
    setSubmitting(true)

    setTimeout(() => {
      props.dispatch(addPropspect(values))
      setSubmitting(false)
      resetForm()

    }, 1500)
  },

})(UiForm)

export default PropspectForm
