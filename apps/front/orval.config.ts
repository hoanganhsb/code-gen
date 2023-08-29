const config = {
  'startrail-api': {
    input: './startrail-api-spec.json',
    output: {
      target: './src/__generated__/startrail-api.ts',
      client: 'react-query',
      override: {
        mutator: {
          path: './src/util/axios-instance.ts',
          name: 'axiosInstance',
        },
      },
    },
  },
};

export default config;