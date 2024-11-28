export const config = {
  mockup: true,
  api: {
    profile: {
      subpath: '/profile',
      endpoint: {
        profilePath: '/profile',
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
