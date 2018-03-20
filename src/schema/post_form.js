import VueFormGenerator from 'vue-form-generator'

let formParameters = {
  schema: {
    fields: [
      {
        type: 'input',
        inputType: 'text',
        label: 'The post\'s unique identifier',
        placeholder: 'The post\'s unique identifier',
        model: 'id',
        required: true,
        validator: VueFormGenerator.validators.string
      },
      {
        type: 'input',
        inputType: 'text',
        label: 'A label describing the post',
        placeholder: 'A label describing the post',
        model: 'label',
        required: true,
        validator: VueFormGenerator.validators.string
      },
      {
        type: 'input',
        inputType: 'text',
        label: 'The ID of the organization in which the post is held',
        placeholder: 'The ID of the organization in which the post is held',
        model: 'organization_id',
        required: true,
        validator: VueFormGenerator.validators.string
      },
      {
        type: 'input',
        inputType: 'text',
        label: 'The function that the holder of the post fulfils',
        placeholder: 'The function that the holder of the post fulfils',
        model: 'role',
        required: true,
        validator: VueFormGenerator.validators.string
      },
      {
        type: 'input',
        inputType: 'text',
        label: 'The ID of the geographic area to which this post is related',
        placeholder: 'The ID of the geographic area to which this post is related',
        model: 'area_id',
        required: true,
        validator: VueFormGenerator.validators.string
      },
      {
        type: 'input',
        inputType: 'text',
        label: 'The date on which the post was eliminated',
        placeholder: 'The date on which the post was eliminated',
        model: 'end_date',
        pattern: /^[0-9]{4}(-[0-9]{2}){0,2}$/,
        required: true,
        validator: VueFormGenerator.validators.regexp
      },
      {
        type: 'input',
        inputType: 'text',
        label: 'The date on which the post was created',
        placeholder: 'The date on which the post was created',
        model: 'start_date',
        pattern: /^[0-9]{4}(-[0-9]{2}){0,2}$/,
        required: true,
        validator: VueFormGenerator.validators.regexp
      }
    ]
  },
  title: 'Create Post',
  formOptions: {
    validateAfterChanged: true
  }
}

export default formParameters
