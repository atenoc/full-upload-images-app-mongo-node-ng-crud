import { connect } from 'mongoose';

export async function startConnectionDB(){
    await connect('mongodb://localhost/images-db',{
        useNewUrlParser: true,
        useFindAndModify: false
    })

    console.log('Database conected');
}

