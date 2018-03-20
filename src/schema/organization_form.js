import VueFormGenerator from 'vue-form-generator'

let formParameters = {
  schema: {
    fields: [
      {
        type: 'input',
        inputType: 'text',
        label: 'A primary name, e.g. a legally recongized name',
        placeholder: 'A primary name, e.g. a legally recongized name',
        model: 'name',
        required: true,
        validator: VueFormGenerator.validators.string
      },
      {
        type: 'input',
        inputType: 'text',
        label: 'A one-line description of an organzation',
        placeholder: 'A one-line description of an organzation',
        model: 'abstract',
        required: true,
        validator: VueFormGenerator.validators.string
      },
      {
        type: 'input',
        inputType: 'text',
        label: 'The ID of the geographic area to which this organization is related',
        placeholder: 'The ID of the geographic area to which this organization is related',
        model: 'area_id',
        required: true,
        validator: VueFormGenerator.validators.string
      },
      {
        type: 'input',
        inputType: 'text',
        label: 'An organization category, e.g. committee',
        placeholder: 'An organization category, e.g. committee',
        model: 'classification',
        required: true,
        validator: VueFormGenerator.validators.string
      },
      {
        type: 'input',
        inputType: 'text',
        label: 'The time at which the resource was created',
        placeholder: 'The time at which the resource was created',
        model: 'created_at',
        required: true,
        validator: VueFormGenerator.validators.string
      },
      {
        type: 'textArea',
        label: 'An extended description of an organization',
        placeholder: 'An extended description of an organization',
        model: 'description',
        required: true,
        validator: VueFormGenerator.validators.string
      },
      {
        type: 'input',
        inputType: 'text',
        label: 'A date of dissolution',
        placeholder: 'A date of dissolution',
        model: 'dissolution_date',
        pattern: /^[0-9]{4}(-[0-9]{2}){0,2}$/,
        required: true,
        validator: VueFormGenerator.validators.regexp
      },
      {
        type: 'input',
        inputType: 'text',
        label: 'Date when organization was founded',
        placeholder: 'Date when organization was founded',
        model: 'founding_date',
        pattern: /^[0-9]{4}(-[0-9]{2}){0,2}$/,
        required: true,
        validator: VueFormGenerator.validators.regexp
      },
      {
        type: 'input',
        inputType: 'text',
        label: 'The organization\'s unique identifier',
        placeholder: 'The organization\'s unique identifier',
        model: 'id',
        required: true,
        validator: VueFormGenerator.validators.string
      },
      {
        type: 'input',
        inputType: 'text',
        label: 'A URL of an image',
        placeholder: 'A URL of an image',
        model: 'image',
        required: true,
        validator: VueFormGenerator.validators.string
      },
      {
        type: 'input',
        inputType: 'text',
        label: 'The ID of the organization that contains this organization',
        placeholder: 'The ID of the organization that contains this organization',
        model: 'parent_id',
        required: true,
        validator: VueFormGenerator.validators.string
      },
      {
        type: 'input',
        inputType: 'text',
        label: 'The time at which the resource was last modified',
        placeholder: 'The time at which the resource was last modified',
        model: 'updated_at',
        required: true,
        validator: VueFormGenerator.validators.string
      }
    ]
  },
  title: 'Create Organization',
  formOptions: {
    validateAfterChanged: true
  }
}

export default formParameters
