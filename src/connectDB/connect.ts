import mongoose from "mongoose";

const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;

const connectToDB = async () => {
    mongoose.connect(
        `mongodb+srv://${dbUser}:${dbPass}@cluster0.6n3zh.mongodb.net/?retryWrites=true&w=majority`,
        (error) => {
            if (error) {
                return console.log("error", error);
            }
            return console.log(
                "Conexão com banco de dados realizada com sucesso."
            );
        }
    );
};

export default connectToDB;
