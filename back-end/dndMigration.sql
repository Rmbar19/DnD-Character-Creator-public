DROP TABLE IF EXISTS races;
DROP TABLE IF EXISTS classes;
DROP TABLE IF EXISTS equipment;
DROP TABLE IF EXISTS subclasses;
DROP TABLE IF EXISTS subraces;
DROP TABLE IF EXISTS magic_items;
DROP TABLE IF EXISTS backgrounds;
DROP TABLE IF EXISTS feats;
DROP TABLE IF EXISTS features;
DROP TABLE IF EXISTS spells;
DROP TABLE IF EXISTS conditions;
DROP TABLE IF EXISTS damage_types;
DROP TABLE IF EXISTS proficiencies;
DROP TABLE IF EXISTS languages;

CREATE TABLE IF NOT EXISTS  classes (
    index varchar(150) PRIMARY KEY,
    name varchar(150),
    hit_die varchar(150),
    proficiency_choices text,
    proficiencies text,
    saving_throws text,
    starting_equipment text,
    starting_equipment_options text,
    class_levels text,
    multi_classing text,
    subclasses text,
    spell_casting text,
    spells text,
    url text
);
CREATE TABLE IF NOT EXISTS races (
    index varchar(150) PRIMARY KEY,
    name varchar(150),
    speed varchar(150),
    ability_bonuses text,
    alignment text,
    age text,
    size text,
    size_description text,
    languages text,
    starting_proficiencies text,
    language_description text,
    traits text,
    subraces text,
    url text
);
CREATE TABLE IF NOT EXISTS equipment (
    description text,
    special text,
    index varchar(150) PRIMARY KEY,
    name varchar(150),
    equipment_category text,
    gear_category text,
    cost text,
    weight text,
    url text,
    contents text,
    properties text
);
CREATE TABLE IF NOT EXISTS subclasses (
    index varchar(150) PRIMARY KEY,
    class text,
    name varchar(150),
    subclass_flavor text,
    description text,
    subclass_levels text,
    url text,
    spells text
);
CREATE TABLE IF NOT EXISTS subraces (
    index varchar(150) PRIMARY KEY,
    name varchar(150),
    race text,
    description text,
    ability_bonuses text,
    starting_proficiencies text,
    languages text,
    racial_traits text,
    url text
);
CREATE TABLE IF NOT EXISTS magic_items (
    index varchar(150) PRIMARY KEY,
    name varchar(150),
    equipment_category text,
    rarity text,
    variants text,
    variant varchar(150),
    description text,
    url text
);
CREATE TABLE IF NOT EXISTS backgrounds (
     index varchar(150) PRIMARY KEY,
    name varchar(150),
    starting_proficiencies text,
    language_options text,
    starting_equipment text,
    starting_equipment_options text,
    feature text,
    personality_traits text,
    ideals text,
    bonds text,
    flaws text,
    url text
);
CREATE TABLE IF NOT EXISTS feats (
    index varchar(150) PRIMARY KEY,
    name varchar(150),
    prerequisites text,
    description text,
    url text
);
CREATE TABLE IF NOT EXISTS features (
     index varchar(150) PRIMARY KEY,
    name varchar(150),
    class text,
    level varchar(150),
    prerequisites text,
    description text,
    url text
);
CREATE TABLE IF NOT EXISTS spells (
       index varchar(150) PRIMARY KEY,
    name varchar(150),
    description text,
    higher_level text,
    range varchar(150),
    components text,
    material text,
    ritual varchar(150),
    duration varchar(150),
    concentration varchar(150),
    casting_time varchar(150),
    level varchar(150),
    damage text,
    school text,
    classes text,
    subclasses text,
    url text
);
CREATE TABLE IF NOT EXISTS conditions(
       index varchar(150) PRIMARY KEY,
    name varchar(150),
    description text,
    url text

);

CREATE TABLE IF NOT EXISTS damage_types (
       index varchar(150) PRIMARY KEY,
    name varchar(150),
    description text,
    url text
);

CREATE TABLE IF NOT EXISTS proficiencies (
    index varchar(150) PRIMARY KEY,
    name varchar(150),
    type text,
    classes text,
    races text,
    url text,
    reference text
);

CREATE TABLE IF NOT EXISTS languages (
    index varchar(150) PRIMARY KEY,
    name varchar(150),
    type text,
    typical_speakers text,
    script text,
    url text
);