import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import schemas from './sanity/schemas'


const config = defineConfig({
  projectId: 's73shshl',
  dataset: 'production',
  title: 'Andrey Dev',
    apiVersion: '2023-06-13',
    basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas }
})

export default config
