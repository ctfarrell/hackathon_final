module.exports = ({ env }) => ({    
    upload: {
        config: {
          provider: 'strapi-provider-upload-google-cloud-storage',
          providerOptions: {
              bucketName: 'intrinsic_bucket',
              publicFiles: false,
              uniform: false,
              basePath: '',
          },
        },
      },
  }
