import VueFormGenerator from 'vue-form-generator'

let formParameters = {
  schema: {
    fields: [
      {
        type: 'input',
        inputType: 'text',
        label: 'A label describing the membership',
        placeholder: 'A label describing the membership',
        model: 'label',
        required: true,
        validator: VueFormGenerator.validators.string
      },
      {
        type: 'input',
        inputType: 'text',
        label: 'The ID of the organization in which the person or organization is a member',
        placeholder: 'The ID of the organization in which the person or organization is a member',
        model: 'organization_id',
        required: true,
        validator: VueFormGenerator.validators.string
      },
      {
        type: 'input',
        inputType: 'text',
        label: 'The ID of the person who is a member of the organization',
        placeholder: 'The ID of the person who is a member of the organization',
        model: 'person_id',
        required: true,
        validator: VueFormGenerator.validators.string
      },
      {
        type: 'input',
        inputType: 'text',
        label: 'The ID of the post held by the member in the organization through this membership',
        placeholder: 'The ID of the post held by the member in the organization through this membership',
        model: 'post_id',
        required: true,
        validator: VueFormGenerator.validators.string
      },
      {
        type: 'input',
        inputType: 'text',
        label: 'The role that the member fulfils in the organization',
        placeholder: 'The role that the member fulfils in the organization',
        model: 'role',
        required: true,
        validator: VueFormGenerator.validators.string
      },
      {
        type: 'input',
        inputType: 'text',
        label: 'The ID of the geographic area to which this membership is related',
        placeholder: 'The ID of the geographic area to which this membership is related',
        model: 'area_id',
        required: true,
        validator: VueFormGenerator.validators.string
      },
      {
        type: 'input',
        inputType: 'text',
        label: 'The date on which the relationship ended',
        placeholder: 'The date on which the relationship ended',
        model: 'end_date',
        pattern: /^[0-9]{4}((-[0-9]{2}){0,2}|(-[0-9]{2}){2}T[0-9]{2}(:[0-9]{2}){0,2}(Z|[+-][0-9]{2}(:[0-9]{2})?))$/,
        required: true,
        validator: VueFormGenerator.validators.regexp
      },
      {
        type: 'input',
        inputType: 'text',
        label: 'The membership\'s unique identifier',
        placeholder: 'The membership\'s unique identifier',
        model: 'id',
        required: true,
        validator: VueFormGenerator.validators.string
      },
      {
        type: 'input',
        inputType: 'text',
        label: 'The ID of the organization on whose behalf the person is a member of the organization',
        placeholder: 'The ID of the organization on whose behalf the person is a member of the organization',
        model: 'on_behalf_of_id',
        required: true,
        validator: VueFormGenerator.validators.string
      },
      {
        type: 'input',
        inputType: 'text',
        label: 'The date on which the relationship began',
        placeholder: 'The date on which the relationship began',
        model: 'start_date',
        required: true,
        validator: VueFormGenerator.validators.string
      }
    ]
  },
  title: 'Create Membership',
  formOptions: {
    validateAfterChanged: true
  }
}

export default formParameters
