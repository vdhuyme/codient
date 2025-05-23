import { Config } from '@interfaces/common/config'
import { NodeEnvironment } from 'types'
import { parseBoolean } from '@utils/parse'

const env = process.env

export const config: Config = {
  app: {
    env: (env.NODE_ENVIRONMENT as NodeEnvironment) ?? 'development',
    host: env.APP_URL ?? 'http://localhost',
    port: parseInt(env.PORT || '8000', 10)
  },
  google: {
    clientId: env.GOOGLE_CLIENT_ID!,
    clientSecret: env.GOOGLE_CLIENT_SECRET!,
    redirectUri: env.GOOGLE_REDIRECT_URI!
  },
  database: {
    connection: env.DB_CONNECTION ?? 'postgres',
    host: env.POSTGRES_HOST!,
    port: parseInt(env.POSTGRES_PORT || '3306', 10),
    username: env.POSTGRES_USER!,
    password: env.POSTGRES_PASSWORD!,
    database: env.POSTGRES_DB!,
    logging: parseBoolean(env.POSTGRES_LOGGING) ?? false,
    synchronize: parseBoolean(env.POSTGRES_SYNCHRONIZE) ?? false,
    ssl: parseBoolean(env.POSTGRES_SSL_MODE) ?? false
  },
  hash: {
    salt: parseInt(env.SALT || '10', 10) ?? 10
  },
  jwt: {
    accessTokenSecretKey: env.ACCESS_TOKEN_KEY!,
    refreshTokenSecretKey: env.REFRESH_TOKEN_KEY!,
    accessTokenExpirationTime: parseInt(env.ACCESS_TOKEN_EXP_TIME || '300', 10),
    refreshTokenExpirationTime: parseInt(env.REFRESH_TOKEN_EXP_TIME || '10080', 10)
  }
}
