export const config = {
  mockup: true,
  api: {
    profile: {
      subpath: '/profile',
      endpoint: {
        personalInformationPath: '/personalInformation',
        skillPath: '/skill',
        certificatePath: '/certificate',
        experiencePath: '/experience',
        educationPath: '/education',
        projectPath: '/project',
      },
    },
    language: {
      subpath: '',
      endpoint: {
        languagesPath: '/languages',
      },
    },
  },
};
