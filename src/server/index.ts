import { Server } from './module/server';


const server = new Server();
server.registerSSR();
server.start();
