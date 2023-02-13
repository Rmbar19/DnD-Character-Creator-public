DROP TABLE IF EXISTS authuser CASCADE;

DROP TABLE IF EXISTS character_sheets CASCADE;

CREATE TABLE
    IF NOT EXISTS authuser (
        id SERIAL ,
        username VARCHAR(255),
        userid VARCHAR(255) PRIMARY KEY, 
        email VARCHAR(255),
        picture VARCHAR(255)    
    );

CREATE TABLE
    IF NOT EXISTS character_sheets (
        userid VARCHAR(50),
         name VARCHAR(1000) PRIMARY KEY,
        class VARCHAR(1000),
        race VARCHAR(1000),
        subrace VARCHAR(1000),
        subclass VARCHAR(1000),
        personality_traits VARCHAR(1000),
        ideals VARCHAR(1000),
        bonds VARCHAR(1000),
        flaws VARCHAR(1000),
        backgrounds VARCHAR(1000),
        hit_dice VARCHAR(1000),
        speed VARCHAR(1000),
        level VARCHAR(1000),
        experience VARCHAR(1000),
        ability_scores VARCHAR(1000),
        saving_throws VARCHAR(1000),
        proficiencies VARCHAR(1000),
        other_profs_languages VARCHAR(1000),
        equipment VARCHAR(1000),
        inventory VARCHAR(1000),
        coins VARCHAR(1000),
        spells VARCHAR(1000),
        spell_slots VARCHAR(1000),
        feats VARCHAR(1000),
        features_traits VARCHAR(1000),
        backstory VARCHAR(1000),
        allies_organizations VARCHAR(1000),
        notes VARCHAR(1000),
        sprite VARCHAR(1000),
         CONSTRAINT FK_userid FOREIGN KEY(userid) 
        REFERENCES authuser(userid) ON DELETE CASCADE ON UPDATE CASCADE 
    );

-- INSERT INTO
--     Authuser (username, userid)
-- VALUES
--     ('marcmenard', 'asdrw34r');