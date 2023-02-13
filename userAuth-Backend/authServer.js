const express = require("express");
const app = express();
const { Client } = require("pg");
const cors = require("cors");
app.use(cors({ origin: "*" }));
const PORT = 8080;

const client = new Client({
  connectionString: "postgresql://postgres:docker@localhost:5432/danduser",
});

client.connect();

app.use(cors());

app.use(express.json());

let characterQueryString = `INSERT INTO character_sheets(
    userid,
    name, 
    class, 
    race, 
    subrace,
    subclass,
    personality_traits ,
    ideals, 
    bonds, 
    flaws ,
    backgrounds ,
    hit_dice ,
    speed ,
    level, 
    experience ,
    ability_scores ,
    saving_throws, 
    proficiencies ,
    other_profs_languages ,
    equipment ,
    inventory ,
    coins ,
    spells ,
    spell_slots, 
    feats ,
    features_traits ,
    backstory ,
    allies_organizations,
    notes,
    sprite) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30) ;`//ON CONFLICT DO NOTHING`;

app.get("/", (req, res) => {
  client.query("SELECT * FROM authuser;").then((result) => {
    res.setHeader("Content-Type", "application/json");
    console.log(result.rows);
    res.send(result.rows);
  });
});

app.post("/", (req, res) => {
  let user = req.body;
  //console.log("req", req);
  client
    .query(`INSERT INTO Authuser(username, userid, email, picture) VALUES ($1,$2,$3,$4) ON CONFLICT DO NOTHING;`, [
      user.username,
      user.userid,
      user.email,
      user.picture,
    ])
    .then((result) => {
      //console.log("result", result);
      res.status(200, "push working");
      res.send("Added");
    })
    .catch((err) => {
      res.send(err);
      //console.log("error", err);
    });
});


  app.get("/user-character/:userid", (req, res) => {
    let userId = req.params.userid
    console.log('Im fetching')
    client.query("SELECT * FROM character_sheets WHERE userid=$1", [userId])
    .then((results) => {
      //console.log('rows',results.rows)
      res
        .status(200)
        .send(results.rows)
    })
    .catch((err) => {
      //console.log(err);
      res.send(err);
    });
  })

  app.get("/user-character/char/:name", (req, res) => {
    let name = req.params.name
    console.log('Im fetching')
    client.query("SELECT * FROM character_sheets WHERE name=$1;", [name])
    .then((results) => {
      console.log('rows',results)
      res
        .status(200)
        .send(results.rows)
    })
    .catch((err) => {
      console.log(err);
      res.status(404)
      res.send(err);
    });
  })

  app.route("/user-character")
  .get((req, res) => {
    client.query("SELECT * FROM character_sheets")
    .then((results) => {
      res
        .status(200)
        .send(results.rows)
    })
    .catch((err) => {
      //console.log(err);
      res.send(err);
    });
  })

  .post((req, res) => {
    let user = req.body;
    client
      .query(characterQueryString, [
        user.userid,
        user.name,
        user.class,
        user.race,
        user.subrace,
        user.subclass,
        user.personality_traits,
        user.ideals,
        user.bonds,
        user.flaws,
        user.backgrounds,
        user.hit_dice,
        user.speed,
        user.level,
        user.experience,
        user.ability_scores,
        user.saving_throws,
        user.proficiencies,
        user.other_profs_languages,
        user.equipment,
        user.inventory,
        user.coins,
        user.spells,
        user.spell_slots,
        user.feats,
        user.features_traits,
        user.backstory,
        user.allies_organizations,
        user.notes,
        user.sprite,
      ])
      .then((result) => {
        res
          .status(201)
          .send(result)
        })
        .catch(err => {
          //console.log(err)
          res.send(err)
        })
      
  });

  app.delete('/user-character/delete/:id',(req, res) => {
    let id = req.params.id.replace(/-/g,' ');
    client
    .query(`DELETE FROM character_sheets WHERE name=$1`, [id])
    .then((result) => {
      res.status(200).send(`goodbye forever ${id}`);
    });
  })
  
app
  .route("/user-character/:id")
  .patch((req, res) => {
    let id = req.params.id.replace(/-/g,' ');
    let user = req.body;
    // console.log(id,'this is the id')
    // console.log(user.name,'this is the name should match the id')
    client
    .query(
      `UPDATE character_sheets SET 
      name='${user.name}',
      class='${user.class}',
      race='${user.race}',
      subclass='${user.subclass}',
      subrace='${user.subrace}',
      personality_traits='${user.personality_traits}',
      ideals='${user.ideals}',
      bonds='${user.bonds}',
      flaws='${user.flaws}', 
      backgrounds='${user.backgrounds}',
      hit_dice='${user.hit_dice}',
      speed='${user.speed}',
      level='${user.level}',
      experience='${user.experience}',
      ability_scores='${user.ability_scores}', 
      saving_throws='${user.saving_throws}',
      proficiencies='${user.proficiencies}',
      other_profs_languages='${user.other_profs_languages}',
      equipment='${user.equipment}',
      inventory='${user.inventory}',
      coins='${user.coins}',
      spells='${user.spells}',
      spell_slots='${user.spell_slots}',
      feats='${user.feats}',
      features_traits='${user.features_traits}',
      backstory='${user.backstory}',
      allies_organizations='${user.allies_organizations}',
      notes='${user.notes}',
      sprite ='${user.sprite}' 
      WHERE name='${id}';`
      )
      .then((result) => {
        res
        .status(201)
        .send("character updated")
      })
      .catch((err) => {
        //console.log(err);
        res.send(err);
      });
  });

app.listen(PORT, () => {
  console.log("Listening on port: ", PORT);
});

// userid VARCHAR(50),
// name VARCHAR(1000) PRIMARY KEY,
// class VARCHAR(1000),
// race VARCHAR(1000),
// personality_traits VARCHAR(1000),
// ideals VARCHAR(1000),
// bonds VARCHAR(1000),
// flaws VARCHAR(1000),
// backgrounds VARCHAR(1000),
// hit_dice VARCHAR(1000),
// speed VARCHAR(1000),
// level VARCHAR(1000),
// experience VARCHAR(1000),
// ability_scores VARCHAR(1000),
// saving_throws VARCHAR(1000),
// proficiencies VARCHAR(1000),
// other_profs_languages VARCHAR(1000),
// equipment VARCHAR(1000),
// inventory VARCHAR(1000),
// coins VARCHAR(1000),
// spells VARCHAR(1000),
// spell_slots VARCHAR(1000),
// feats VARCHAR(1000),
// features_traits VARCHAR(1000),
// backstory VARCHAR(1000),
// allies_organizations VARCHAR(1000),
// notes VARCHAR(1000),
// sprite VARCHAR(1000),
