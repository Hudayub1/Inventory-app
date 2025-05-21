const {Client} = require('pg');

const SQL = `
INSERT INTO genre (genreid, genre)
VALUES
    (1, 'Free Roam'),
    (2, 'Horror'),
    (3, 'Action');

INSERT INTO games (gameid, genreid, name)
VALUES
    (1, 1, 'GTA V'),
    (2, 2, 'Resident Evil'),
    (3, 3, 'God of War');
    
INSERT INTO developer (devid, name, gameid)
VALUES
    (1, 'Rockstar', 1),
    (2, 'Naughty Dog', 3),
    (3, 'Capcom', 2);

`;

/* Had to reorder SQL query*/


async function main() {
    console.log("seeding...")
    const client = new Client({   
        
        host: "localhost", 
        user: "hud",
        database: "games_inv",
        password: "020516",
        port: 5432 // default port

    });
    
    try {
        await client.connect();
        await client.query(SQL);
        return true;
    }catch (err) {
        console.error('seeding failed;', err);
        throw err;
    }finally {
        await client.end();
        console.log("done");
    }
        
};

main()