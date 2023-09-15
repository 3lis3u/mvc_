import mongoose from "mongoose";

mongoose.connect("mongodb+srv://admin:zeu990879@cluster0.6xsfoch.mongodb.net/ehoje");
// A função connect guarda a string de conexão dentro dos parênses.

let db = mongoose.connection;
// Agora criamos uma variável que guarda a ação de conectar nosso usário como mogodb.
export default db;
