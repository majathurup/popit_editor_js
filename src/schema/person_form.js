import VueFormGenerator from 'vue-form-generator'

let formParameters = {
  schema: {
    fields: [{
      type: 'input',
      inputType: 'text',
      label: 'Name',
      model: 'name',
      placeholder: 'A person\'s preferred full name',
      required: true,
      validator: VueFormGenerator.validators.string
    },
    {
      type: 'input',
      inputType: 'text',
      label: 'National Identity',
      model: 'national_identity',
      placeholder: 'A national identity',
      required: true,
      validator: VueFormGenerator.validators.string
    },
    {
      type: 'input',
      inputType: 'text',
      label: 'One or more primary given names',
      model: 'given_name',
      placeholder: 'One or more primary given names',
      required: true,
      validator: VueFormGenerator.validators.string
    },
    {
      type: 'input',
      inputType: 'text',
      label: 'A one-line account of a person\'s life',
      model: 'summary',
      placeholder: 'A one-line account of a person\'s life',
      required: true,
      validator: VueFormGenerator.validators.string
    },
    {
      type: 'input',
      inputType: 'text',
      label: 'An extended account of a person\'s life',
      model: 'biography',
      placeholder: 'An extended account of a person\'s life',
      required: true,
      validator: VueFormGenerator.validators.string
    },
    {
      type: 'input',
      inputType: 'text',
      label: 'One or more secondary given name',
      model: 'additional_name',
      placeholder: 'One or more secondary given name',
      required: true,
      validator: VueFormGenerator.validators.string
    },
    {
      type: 'input',
      inputType: 'text',
      label: 'A date of birth',
      model: 'birth_date',
      placeholder: 'A date of birth',
      pattern: /^[0-9]{4}(-[0-9]{2}){0,2}$/,
      required: true,
      validator: VueFormGenerator.validators.regexp
    },
    {
      type: 'input',
      inputType: 'text',
      label: 'The time at which the resource was created',
      model: 'created_at',
      placeholder: 'The time at which the resource was created',
      required: true,
      validator: VueFormGenerator.validators.string
    },
    {
      type: 'input',
      inputType: 'text',
      label: 'A date of death',
      model: 'death_date',
      placeholder: 'A date of death',
      pattern: /^[0-9]{4}(-[0-9]{2}){0,2}$/,
      required: true,
      validator: VueFormGenerator.validators.regexp
    },
    {
      type: 'input',
      inputType: 'text',
      label: 'A preferred email address',
      model: 'email',
      placeholder: 'A preferred email address',
      required: true,
      validator: VueFormGenerator.validators.email
    },
    {
      type: 'input',
      inputType: 'text',
      label: 'One or more family names',
      model: 'family_name',
      placeholder: 'One or more family names',
      required: true,
      validator: VueFormGenerator.validators.string
    },
    {
      type: 'input',
      inputType: 'text',
      label: 'A gender',
      model: 'gender',
      placeholder: 'A gender',
      required: true,
      validator: VueFormGenerator.validators.string
    },
    {
      type: 'input',
      inputType: 'text',
      label: 'One or more honorifics preceding a person\'s name',
      model: 'honorific_prefix',
      placeholder: 'One or more honorifics preceding a person\'s name',
      required: true,
      validator: VueFormGenerator.validators.string
    },
    {
      type: 'input',
      inputType: 'text',
      label: 'One or more honorifics following a person\'s name',
      model: 'honorific_suffix',
      placeholder: 'One or more honorifics following a person\'s name',
      required: true,
      validator: VueFormGenerator.validators.string
    },
    {
      type: 'input',
      inputType: 'text',
      label: 'The person\'s unique identifier',
      model: 'id',
      placeholder: 'The person\'s unique identifier',
      required: true,
      validator: VueFormGenerator.validators.string
    },
    {
      type: 'input',
      inputType: 'text',
      label: 'A URL of a head shot',
      model: 'image',
      placeholder: 'A URL of a head shot',
      required: true,
      validator: VueFormGenerator.validators.string
    },
    {
      type: 'input',
      inputType: 'text',
      label: 'One or more patronymic names',
      model: 'patronymic_name',
      placeholder: 'One or more patronymic names',
      required: true,
      validator: VueFormGenerator.validators.string
    },
    {
      type: 'input',
      inputType: 'text',
      label: 'A name to use in a lexicographically ordered list',
      model: 'sort_name',
      placeholder: 'A name to use in a lexicographically ordered list',
      required: true,
      validator: VueFormGenerator.validators.string
    },
    {
      type: 'input',
      inputType: 'text',
      label: 'The time at which the resource was last modified',
      model: 'updated_at',
      placeholder: 'The time at which the resource was last modified',
      required: true,
      validator: VueFormGenerator.validators.string
    }]
  },
  title: 'Create Person',
  formOptions: {
    validateAfterChanged: true
  }
}

export default formParameters
