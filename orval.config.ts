const config = {
  'startrail-api': {
    input: './startrail-api-spec.json',
    output: {
      target: './app/__generated__/startrail-api.ts',
      client: 'react-query',
      override: {
        mutator: {
          path: './app/util/axios-instance.ts',
          name: 'axiosInstance',
        },
      },
    },
  },
};

export default config;