module.exports = {
  helpers: {
  prompts: {
    name: {
      'type': 'string',
      'required': true,
      'message': 'Project name'
    },
    description: {
      'type': 'string',
      'required': false,
      'message': 'Project description',
      'default': 'Nuxt.js project'
    },
    author: {
      'type': 'string',
      'message': 'Author'
    },
  },
  completeMessage: '{{#inPlace}}To get started:\n\n  mv .env.example .env\n  npm install # Or yarn install\n  npm run dev{{else}}To get started:\n\n  cd {{destDirName}}\n  mv .env.example .env\n  npm install # Or yarn install\n  npm run dev{{/inPlace}}'
};
