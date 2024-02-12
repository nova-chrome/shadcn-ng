import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run shadcn-ng:serve:development',
        production: 'nx run shadcn-ng:serve:production',
      },
      ciWebServerCommand: 'nx run shadcn-ng:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
