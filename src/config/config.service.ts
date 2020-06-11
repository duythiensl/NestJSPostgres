import { Injectable, Inject, Logger } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as fs from 'fs';

import * as path from 'path';
import { CONFIG_OPTIONS } from './constants';

@Injectable()
export class ConfigService {
  private readonly envConfig;
  constructor(@Inject(CONFIG_OPTIONS) private options) {
    const filePath = `${process.env.NODE_ENV || 'development'}.config.json`;
    const envFile = path.resolve(__dirname, '../../', options.folder, filePath);
    this.envConfig =  JSON.parse(fs.readFileSync(envFile, 'utf8'));
  }

  getConfig<T>(key: string) {
    return this.envConfig[key];
  }
}
