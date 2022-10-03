import { registerAs } from "@nestjs/config";

export default registerAs('config', () =>{
    return {
        port: process.env.PORT,
        mongo: {
            urlMongo: process.env.MONGO_HOST_URL 
          },

    };
}); 