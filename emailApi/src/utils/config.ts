import cnf from "dotenv";
cnf.config();

type ConfigT = {
  apiPort: string;
  emailService: string;
  emailServer: string;
  emailUser: string;
  emailPassword: string;
};

const config: ConfigT = {
  apiPort: process.env.API_PORT || "3000",
  emailService: process.env.EMAIL_SERVICE || "",
  emailServer: process.env.EMAIL_SERVER || "",
  emailUser: process.env.EMAIL_USER || "",
  emailPassword: process.env.EMAIL_PASSWORD || "",
};

export default config;
