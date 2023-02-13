
# DnD Character Sheet Creater Back-End

This is the back end for the DnD Character sheet generator and tracker.  This back end will control the database that holds all the default information on the defferent classes/races/equipment etc...



## Authors

- [@echarles253](https://github.com/echarles253)
- [@segerlu](https://github.com/segerlu)

## Getting Started

1. `CD to back-end`
2. `npm install`
3. `Create database`
4. `Run dndMigration.sq inside database` | *if your database is inside a container then you will need to cp the file to the container* 
5. `Uncomment updateTables() on line 15 of server.js and run the server` | *this will populate the database with the initial data*
6. `Stop the server then recomment the updateTables()`
7. `Save the file and re-run the server`
8. `You're good to go!`
## Routes

#### Get all items from specified table
```http
  GET /:table
```

#### Post new row to specified table using the body to push the data
```http
  POST /:table
```

#### Delete a row based on the the given index
```http
  DELETE /:table/:index
```


## Tables

#### classes

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `index`   | `varchar(150)` | **Required** Primary Key |
| `name`   | `varchar(150)` | Not required but recommended|
| `hit_die`   | `varchar(150)` | Not required but recommended |
| `proficiency_choices`   | `text` | Not required but recommended |
| `proficiencies`   | `text` | Not required but recommended |
| `saving_throws`   | `text` | Not required but recommended |
| `staring_equipment`   | `text` | Not required but recommended |
| `staring_equipment_options`   | `text` | Not required but recommended |
| `class_levels`   | `text` | Not required but recommended |
| `multi_classing`   | `text` | Not required but recommended |
| `subclasses`   | `text` | Not required but recommended |
| `spell_casting`   | `text` | Not required but recommended |
| `spells`   | `text` | Not required but recommended |
| `url`   | `text` | Not required but recommended |

#### races

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `index`   | `varchar(150)` | **Required** Primary Key |
| `name`   | `varchar(150)` | Not required but recommended|
| `speed`   | `varchar(150)` | Not required but recommended |
| `ability_bonuses`   | `text` | Not required but recommended |
| `alignment`   | `text` | Not required but recommended |
| `age`   | `text` | Not required but recommended |
| `size`   | `text` | Not required but recommended |
| `size_description`   | `text` | Not required but recommended |
| `languages`   | `text` | Not required but recommended |
| `starting_proficiencies`   | `text` | Not required but recommended |
| `language_description`   | `text` | Not required but recommended |
| `traits`   | `text` | Not required but recommended |
| `subraces`   | `text` | Not required but recommended |
| `url`   | `text` | Not required but recommended |

#### equipment

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `index`   | `varchar(150)` | **Required** Primary Key |
| `special`   | `text` | Not required but recommended|
| `description`   | `text` | Not required but recommended |
| `name`   | `varchar(150)` | Not required but recommended |
| `equipment_category`   | `text` | Not required but recommended |
| `gear_category`   | `text` | Not required but recommended |
| `cost`   | `text` | Not required but recommended |
| `weight`   | `text` | Not required but recommended |
| `url`   | `text` | Not required but recommended |
| `contents`   | `text` | Not required but recommended |
| `properties`   | `text` | Not required but recommended |

#### subclasses

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `index`   | `varchar(150)` | **Required** Primary Key |
| `name`   | `varchar(150)` | Not required but recommended|
| `class`   | `text` | Not required but recommended |
| `subclass_flavor`   | `text` | Not required but recommended |
| `description`   | `text` | Not required but recommended |
| `subclass_levels`   | `text` | Not required but recommended |
| `url`   | `text` | Not required but recommended |
| `spells`   | `text` | Not required but recommended |

#### subraces

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `index`   | `varchar(150)` | **Required** Primary Key |
| `name`   | `varchar(150)` | Not required but recommended|
| `race`   | `text` | Not required but recommended |
| `description`   | `text` | Not required but recommended |
| `ability_bonuses`   | `text` | Not required but recommended |
| `starting_proficiencies`   | `text` | Not required but recommended |
| `languages`   | `text` | Not required but recommended |
| `racial_traits`   | `text` | Not required but recommended |
| `url`   | `text` | Not required but recommended |

#### magic_items

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `index`   | `varchar(150)` | **Required** Primary Key |
| `name`   | `varchar(150)` | Not required but recommended|
| `equipment_category`   | `text` | Not required but recommended |
| `rarity`   | `text` | Not required but recommended |
| `variants`   | `text` | Not required but recommended |
| `variant`   | `varchar(150)` | Not required but recommended |
| `description`   | `text` | Not required but recommended |
| `url`   | `text` | Not required but recommended |

#### backgrounds

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `index`   | `varchar(150)` | **Required** Primary Key |
| `name`   | `varchar(150)` | Not required but recommended|
| `starting_proficiencies`   | `text` | Not required but recommended |
| `language_options`   | `text` | Not required but recommended |
| `starting_equipment`   | `text` | Not required but recommended |
| `starting_equipment_options`   | `text` | Not required but recommended |
| `feature`   | `text` | Not required but recommended |
| `personality_traits`   | `text` | Not required but recommended |
| `ideals`   | `text` | Not required but recommended |
| `bonds`   | `text` | Not required but recommended |
| `flaws`   | `text` | Not required but recommended |
| `url`   | `text` | Not required but recommended |

#### feats

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `index`   | `varchar(150)` | **Required** Primary Key |
| `name`   | `varchar(150)` | Not required but recommended|
| `prerequisites`   | `text` | Not required but recommended |
| `description`   | `text` | Not required but recommended |
| `url`   | `text` | Not required but recommended |

#### features

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `index`   | `varchar(150)` | **Required** Primary Key |
| `name`   | `varchar(150)` | Not required but recommended|
| `class`   | `text` | Not required but recommended |
| `level`   | `varchar(150)` | Not required but recommended |
| `prerequisites`   | `text` | Not required but recommended |
| `description`   | `text` | Not required but recommended |
| `url`   | `text` | Not required but recommended |

#### spells

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `index`   | `varchar(150)` | **Required** Primary Key |
| `name`   | `varchar(150)` | Not required but recommended|
| `description`   | `text` | Not required but recommended |
| `higher_level`   | `text` | Not required but recommended |
| `range`   | `varchar(150)` | Not required but recommended |
| `components`   | `text` | Not required but recommended |
| `material`   | `text` | Not required but recommended |
| `ritual`   | `varchar(150)` | Not required but recommended |
| `duration`   | `varchar(150)` | Not required but recommended |
| `concentration`   | `varchar(150)` | Not required but recommended |
| `casting_time`   | `varchar(150)` | Not required but recommended |
| `level`   | `varchar(150)` | Not required but recommended |
| `damage`   | `text` | Not required but recommended |
| `school`   | `text` | Not required but recommended |
| `classes`   | `text` | Not required but recommended |
| `subclasses`   | `text` | Not required but recommended |
| `url`   | `text` | Not required but recommended |

#### conditions

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `index`   | `varchar(150)` | **Required** Primary Key |
| `name`   | `varchar(150)` | Not required but recommended|
| `description`   | `text` | Not required but recommended |
| `url`   | `text` | Not required but recommended |

#### damage_types

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `index`   | `varchar(150)` | **Required** Primary Key |
| `name`   | `varchar(150)` | Not required but recommended|
| `description`   | `text` | Not required but recommended |
| `url`   | `text` | Not required but recommended |

#### proficiencies

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `index`   | `varchar(150)` | **Required** Primary Key |
| `name`   | `varchar(150)` | Not required but recommended|
| `type`   | `text` | Not required but recommended |
| `classes`   | `varchar(150)` | Not required but recommended |
| `races`   | `text` | Not required but recommended |
| `url`   | `text` | Not required but recommended |
| `reference`   | `text` | Not required but recommended |

#### languages

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `index`   | `varchar(150)` | **Required** Primary Key |
| `name`   | `varchar(150)` | Not required but recommended|
| `type`   | `text` | Not required but recommended |
| `typical_speakers`   | `varchar(150)` | Not required but recommended |
| `script`   | `text` | Not required but recommended |
| `url`   | `text` | Not required but recommended |