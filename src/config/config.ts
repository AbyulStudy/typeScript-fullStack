import { config } from "dotenv";
config();

export const Config = {
  server: {
    host: process.env.SERVER_HOST,
    port: Number(process.env.SERVER_PORT),
    mode: process.env.SERVER_MODE,
    mode_description: process.env.SERVER_MODE_DESC,
    swagger: process.env.SWAGGER,
    secretkey: process.env.SECRET_KEY,
    expire: process.env.SECRET_KEY_EXPIRE,
    expire_description: process.env.SECRET_KEY_EXPIRE_DESC
  },
  fileupload: {
    dirname: process.env.FILE_UPLOAD_DIR,
    maxsize: process.env.FILE_UPLOAD_SIZE,
    description: process.env.FILE_UPLOAD_SIZE_DESC
  },
  logger: {},
  db: [
    {
      name: process.env.DB_NAME!,
      host: process.env.DB_HOST!,
      user: process.env.DB_USER!,
      port: Number(process.env.DB_PORT),
      password: process.env.DB_PASS!,
      database: process.env.DB_DATABASE!,
      connectionLimit: Number(process.env.DB_CONNECTIONLIMIT)
    }
  ],
  session: {
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  },
  googleAuth: {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK,
    scope: ["profile", "email"],
    store: true
  },
  kakaoAuth: {
    clientID: process.env.KAKAO_RESTAPI_KEY,
    callbackURL: process.env.KAKAO_CALLBACK
  },
  naverAuth: {
    clientID: process.env.NAVER_CLIENT_ID,
    clientSecret: process.env.NAVER_CLIENT_SECRET,
    callbackURL: process.env.NAVER_CALLBACK
  }
};
