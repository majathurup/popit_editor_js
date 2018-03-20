<template>
  <el-main>
    <el-row>
      <el-card class="form">
        <h1>{{title}}</h1>
        <vue-form-generator :schema="schema" :model="model" :options="formOptions"></vue-form-generator>
        <el-button @click="submit">Submit</el-button>
      </el-card>
    </el-row>
  </el-main>
</template>
<script>
import { HTTP } from '../http-common.js'
import { getLanguage } from '../utils.js'
import objectDiff from '../objDiff.js'

export default {
  props: {
    schema: Object,
    title: String,
    formOptions: Object,
    entities: String
  },
  data: function () {
    return {
      model: {}
    }
  },
  methods: {
    submit (e) {
      var language = getLanguage()

      var url = '/' + language + '/' + this.entities + '/'
      var loggedIn = this.$store.state.loggedIn
      if (loggedIn) {
        this.$refs.formSchema.form().validate((valid) => {
          if (valid) {
            console.log(JSON.stringify(this.model))
            this.$refs.formSchema.clearErrorMessage()
            var newObj = objectDiff(this.model)
            console.log(newObj)
            HTTP.post(url, newObj)
              .then(response => {
                console.log(response)
                var nextURL = '/' + this.entities + '/edit/' + response.data.result.id
                this.$router.push(nextURL)
              })
              .catch(e => {
                console.log(e)
                if ('response' in e) {
                  console.log(e.response.data)
                  console.log(e.response.data.errors)
                  var errData = e.response.data.errors
                  for (var errorKey in errData) {
                    var errMsg = 'Error in ' + errorKey + ': ' + errData[errorKey]
                    this.$message.error(errMsg)
                  }
                }
              })
          } else {
            this.$refs.formSchema.setErrorMessage('Please Fill in the form')
            return false
          }
        })
      } else {
        this.$router.push('/login')
      }
    }
  }
}
</script>
<style scoped>
  .form {
    text-align: left;
    width: 600px;
    margin: auto;
  }
  .el-form {
    text-align: left;
  }
</style>
