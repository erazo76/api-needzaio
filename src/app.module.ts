import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import { enviroments } from './enviroments';
import { UserModule } from './user/user.module';
import config from './config';
import { DatabaseModule } from './database/database.module'
import { DocumentModule } from './document/document.module';
import { TypeDocumentModule } from './type-document/type-document.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({      
      driver: ApolloDriver,      
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    UserModule,
    DatabaseModule,
    DocumentModule,
    TypeDocumentModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
