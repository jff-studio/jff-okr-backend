import 'reflect-metadata';
import { Module } from '@nestjs/common';
import { TypeGraphQLModule } from 'typegraphql-nestjs';
import { context, Context } from './context';
import { Provider } from '@nestjs/common';
import { resolvers } from './server/prisma/generated/type-graphql';
import path from 'path';

@Module({
  imports: [
    TypeGraphQLModule.forRoot({
      path: '/',
      playground: true,
      introspection: true,
      emitSchemaFile: path.join(
        __dirname,
        '..',
        'server',
        'generated-schema.gql',
      ),
      context: (): Context => context,
      validate: false,
    }),
  ],
  providers: [...(resolvers as unknown as Provider<any>[])],
})
export class AppModule {}
