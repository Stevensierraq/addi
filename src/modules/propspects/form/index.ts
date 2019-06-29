import { withFormik } from 'formik'

import UiForm from './ui'

const PropspectForm = withFormik({
  displayName: 'PropspectForm',

  enableReinitialize: true,

  // tslint:disable-next-line:no-console
  handleSubmit: (values, { setSubmitting }) => console.log(values),

})(UiForm)

export default PropspectForm
