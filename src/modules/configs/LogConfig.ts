export interface LogLevel {
  name: string,
  level: number,
  group: LogLevelGroup
}

export enum LogLevelGroup {
  Debug = 'Debug',
  Info = 'Info',
  Error = 'Error'
}

export const LogConfig = {
  Levels: {
    debug: {
      name: 'debug',
      level: 0,
      group: LogLevelGroup.Debug
    },
    notice: {
      name: 'notice',
      level: 1,
      group: LogLevelGroup.Info
    },
    info: {
      name: 'info',
      level: 2,
      group: LogLevelGroup.Info
    },
    warn: {
      name: 'warn',
      level: 3,
      group: LogLevelGroup.Info
    },
    error: {
      name: 'error',
      level: 4,
      group: LogLevelGroup.Error
    },
    fatal: {
      name: 'fatal',
      level: 5,
      group: LogLevelGroup.Error
    },
    critical: {
      name: 'critical',
      level: 6,
      group: LogLevelGroup.Error
    },
    emergency: {
      name: 'emergency',
      level: 7,
      group: LogLevelGroup.Error
    }
  }
};

