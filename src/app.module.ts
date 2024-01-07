import { Module } from '@nestjs/common';
import { CustomLogger } from './lib/logger';
import { UserModule } from './modules';
import { CustomMongooseModule } from './loaders';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    CustomLogger.forRoot({isGlobal: true}),
    CustomMongooseModule.forRoot(process.env.MONGOOSE_URL, {
      connectionFactory: (connection) => {
        connection.on('connected', () => {
          console.log('mongodb is connected');
        });
        connection._events.connected();
        return connection;
      },
    }),
    UserModule,
  ]
})
export class AppModule { }
