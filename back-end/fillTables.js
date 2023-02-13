import fetch from 'node-fetch';
import pg from 'pg';
import connectionString from './secrets.js';

let client = new pg.Client({
    connectionString: connectionString.connectionString
});
client.connect();
let url = 'https://www.dnd5eapi.co';

let queryStringClass = `INSERT INTO classes
(
index, 
name,
hit_die,
proficiency_choices,
proficiencies,
saving_throws,
starting_equipment,
starting_equipment_options,
class_levels,
multi_classing,
subclasses ,
spell_casting,
spells,
url 
) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) ON CONFLICT DO NOTHING;`
let queryStringRace = `INSERT INTO races
(
    index,
    name,
    speed,
    ability_bonuses,
    alignment,
    age,
    size,
    size_description,
    languages,
    starting_proficiencies,
    language_description,
    traits ,
    subraces,
    url
) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) ON CONFLICT DO NOTHING;`
let queryStringEquipment = `INSERT INTO equipment
(
    description,
    special,
    index,
    name,
    equipment_category,
    gear_category,
    cost,
    weight,
    url,
    contents,
    properties
) VALUES ($1, $2, $3, $4, $5, $6, $7, $8,$9,$10,$11) ON CONFLICT DO NOTHING;`
let queryStringSubclass = `INSERT INTO subclasses
(
    index,
    class,
    name,
    subclass_flavor,
    description,
    subclass_levels,
    url,
    spells 
) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) ON CONFLICT DO NOTHING;`
let queryStringSubraces = `INSERT INTO subraces
(
    index,
    name,
    race,
    description,
    ability_bonuses,
    starting_proficiencies,
    languages,
    racial_traits,
    url
) VALUES ($1, $2, $3, $4, $5, $6, $7, $8,$9) ON CONFLICT DO NOTHING;`
let queryStringMagicItems = `INSERT INTO magic_items
(
    index,
    name,
    equipment_category,
    rarity,
    variants,
    variant,
    description,
    url
) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) ON CONFLICT DO NOTHING;`
let queryStringBackgrounds = `INSERT INTO backgrounds
(
    index,
    name,
    starting_proficiencies,
    language_options,
    starting_equipment,
    starting_equipment_options,
    feature,
    personality_traits,
    ideals,
    bonds,
    flaws,
    url
) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) ON CONFLICT DO NOTHING;`
let queryStringFeats = `INSERT INTO feats
(
    index,
    name,
    prerequisites,
    description,
    url
) VALUES ($1, $2, $3, $4, $5) ON CONFLICT DO NOTHING;`
let queryStringFeatures = `INSERT INTO features
(
    index,
    name,
    class,
    level,
    prerequisites,
    description,
    url
) VALUES ($1, $2, $3, $4, $5, $6, $7) ON CONFLICT DO NOTHING;`
let queryStringSpells = `INSERT INTO spells
(
    index,
    name,
    description,
    higher_level,
    range,
    components,
    material,
    ritual,
    duration,
    concentration,
    casting_time,
    level,
    damage,
    school,
    classes,
    subclasses,
    url
) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14,$15,$16,$17) ON CONFLICT DO NOTHING;`
let queryStringConditions = `INSERT INTO conditions
(
    index,
    name,
    description,
    url
) VALUES ($1, $2, $3, $4) ON CONFLICT DO NOTHING;`
let queryStringDamageTypes = `INSERT INTO damage_types (
index,
name,
description,
url 
) VALUES ($1, $2, $3, $4) ON CONFLICT DO NOTHING;`
let queryStringProficiencies = `INSERT INTO proficiencies (
    index,
    name,
    type,
    classes,
    races,
    url,
    reference
    ) VALUES ($1, $2, $3, $4, $5, $6, $7) ON CONFLICT DO NOTHING;`
let queryStringLanguages = `INSERT INTO languages (
    index,
    name,
    type,
    typical_speakers,
    script,
    url
        ) VALUES ($1, $2, $3, $4, $5, $6) ON CONFLICT DO NOTHING;`

let updateTables = () => {

    // let urls = [
    //     'https://www.dnd5eapi.co/api/proficiencies',
    //     'https://www.dnd5eapi.co/api/languages',
    //     'https://www.dnd5eapi.co/api/classes',
    //     'https://www.dnd5eapi.co/api/races',
    //     'https://www.dnd5eapi.co/api/equipment',
    //     'https://www.dnd5eapi.co/api/subclasses',
    //     'https://www.dnd5eapi.co/api/subraces',
    //     'https://www.dnd5eapi.co/api/magic-items',
    //     'https://www.dnd5eapi.co/api/backgrounds',
    //     'https://www.dnd5eapi.co/api/feats',
    //     'https://www.dnd5eapi.co/api/features',
    //     'https://www.dnd5eapi.co/api/spells',
    //     'https://www.dnd5eapi.co/api/conditions',
    //     'https://www.dnd5eapi.co/api/damage-types',
    // ]


    // Promise.all(urls.map(url => fetch(url).then(result => result.json())))
    // .then(data => data.forEach(result => {
    //     result.results.forEach(url => {
    //         fetch( ogUrl + url.url)
    //         .then(response => response.json())
    //         .then(data1 => {
               
             
    //             let table = url.url.split('/')[2];
    //             let newItem = data1;
    //             let columns = Object.keys(newItem);
    //             let queryString = `INSERT INTO ${table} (`;
    //             let temp = `) VALUES (`
            
    //             for (let i = 0; i < columns.length; i++) {
    //                 queryString += i === columns.length - 1 ? `${columns[i]==='desc'? 'description':columns[i]}` : `${columns[i]==='desc'? 'description':columns[i]}, `
    //                 temp+= i === columns.length - 1 ? `'${JSON.stringify(newItem[columns[i]])}'` : `'${JSON.stringify(newItem[columns[i]])}', ` 
    //             }
    //             queryString += temp + ');'
    //             client.query(queryString)
    //             .then((response) => console.log(`${table} added`))
    //             .catch(err => console.log(err))
    //         })
    //     })

    // }))
        // let allData = {
        //     proficiencies: data[0],
        //     languages: data[1],
        //     classes: data[2],
        
        // }
    

    fetch(url + '/api/proficiencies')
        .then(response => response.json())
        .then(data1 => {
            data1.results.forEach(result => {
                fetch(url + result.url)
                    .then(response => response.json())
                    .then(data => {
                        client.query(queryStringProficiencies,
                            [
                                JSON.stringify(data.index),
                                JSON.stringify(data.name),
                                JSON.stringify(data.type),
                                JSON.stringify(data.classes),
                                JSON.stringify(data.races),
                                JSON.stringify(data.url),
                                JSON.stringify(data.reference)
                            ])
                            .then(response => {
                                console.log('Proficiency added')
                            })
                    })
                    .catch(error => {
                        console.log('this is fucked up', error)
                    })
            })
        })

fetch(url + '/api/languages')
        .then(response => response.json())
        .then(data1 => {
            data1.results.forEach(result => {
                fetch(url + result.url)
                    .then(response => response.json())
                    .then(data => {
                        client.query(queryStringLanguages,
                            [
                                JSON.stringify(data.index),
                                JSON.stringify(data.name),
                                JSON.stringify(data.type),
                                JSON.stringify(data.typical_speakers),
                                JSON.stringify(data.script),
                                JSON.stringify(data.url)
                            ])
                            .then(response => {
                                console.log('Language added')
                            })
                    })
                    .catch(error => {
                        console.log('this is fucked up', error)
                    })
            })
        })

    fetch(url + '/api/classes')
        .then(response => response.json())
        .then(data1 => {
            data1.results.forEach(result => {
                fetch(url + result.url)
                    .then(response => response.json())
                    .then(data => {
                        client.query(queryStringClass,
                            [
                                JSON.stringify(data.index),
                                JSON.stringify(data.name),
                                JSON.stringify(data.hit_die),
                                JSON.stringify(data.proficiency_choices),
                                JSON.stringify(data.proficiencies),
                                JSON.stringify(data.saving_throws),
                                JSON.stringify(data.starting_equipment),
                                JSON.stringify(data.starting_equipment_options),
                                JSON.stringify(data.class_levels),
                                JSON.stringify(data.multi_classing),
                                JSON.stringify(data.subclasses),
                                JSON.stringify(data.spell_casting),
                                JSON.stringify(data.spells),
                                JSON.stringify(data.url)
                            ])
                            .then(response => {
                                console.log('Class added')
                            })
                    })
                    .catch(error => {
                        console.log('this is fucked up', error)
                    })
            })
        })

    fetch(url + '/api/races')
        .then(response => response.json())
        .then(data1 => {
            data1.results.forEach(result => {
                fetch(url + result.url)
                    .then(response => response.json())
                    .then(data => {
                        client.query(queryStringRace,
                            [
                                JSON.stringify(data.index),
                                JSON.stringify(data.name),
                                JSON.stringify(data.speed),
                                JSON.stringify(data.ability_bonuses),
                                JSON.stringify(data.alignment),
                                JSON.stringify(data.age),
                                JSON.stringify(data.size),
                                JSON.stringify(data.size_description),
                                JSON.stringify(data.languages),
                                JSON.stringify(data.starting_proficiencies),
                                JSON.stringify(data.language_description),
                                JSON.stringify(data.traits),
                                JSON.stringify(data.subraces),
                                JSON.stringify(data.url)
                            ])
                            .then(response => {
                                console.log('Race added')
                            })
                    })
                    .catch(error => {
                        console.log('this is fucked up', error)
                    })
            })
        })

    fetch(url + '/api/equipment')
        .then(response => response.json())
        .then(data1 => {
            data1.results.forEach(result => {
                fetch(url + result.url)
                    .then(response => response.json())
                    .then(data => {
                        client.query(queryStringEquipment,
                            [
                                JSON.stringify(data.description),
                                JSON.stringify(data.special),
                                JSON.stringify(data.index),
                                JSON.stringify(data.name),
                                JSON.stringify(data.equipment_category),
                                JSON.stringify(data.gear_category),
                                JSON.stringify(data.cost),
                                JSON.stringify(data.weight),
                                JSON.stringify(data.url),
                                JSON.stringify(data.contents),
                                JSON.stringify(data.properties)])
                            .then(response => {
                                console.log('Equipment added')
                            })
                    })
                    .catch(error => {
                        console.log('this is fucked up', error)
                    })
            })
        })

    fetch(url + '/api/subclasses')
        .then(response => response.json())
        .then(data1 => {
            data1.results.forEach(result => {
                fetch(url + result.url)
                    .then(response => response.json())
                    .then(data => {
                        client.query(queryStringSubclass,
                            [
                                JSON.stringify(data.index),
                                JSON.stringify(data.class),
                                JSON.stringify(data.name),
                                JSON.stringify(data.subclass_flavor),
                                JSON.stringify(data.description),
                                JSON.stringify(data.subclass_levels),
                                JSON.stringify(data.url),
                                JSON.stringify(data.spells)
                            ])
                            .then(response => {
                                console.log('Subclasses added')
                            })
                    })
                    .catch(error => {
                        console.log('this is fucked up', error)
                    })
            })
        })

    fetch(url + '/api/subraces')
        .then(response => response.json())
        .then(data1 => {
            data1.results.forEach(result => {
                fetch(url + result.url)
                    .then(response => response.json())
                    .then(data => {
                        client.query(queryStringSubraces,
                            [
                                JSON.stringify(data.index),
                                JSON.stringify(data.name),
                                JSON.stringify(data.race),
                                JSON.stringify(data.description),
                                JSON.stringify(data.ability_bonuses),
                                JSON.stringify(data.starting_proficiencies),
                                JSON.stringify(data.languages),
                                JSON.stringify(data.racial_traits),
                                JSON.stringify(data.url)
                            ])
                            .then(response => {
                                console.log('Subraces added')
                            })
                    })
                    .catch(error => {
                        console.log('this is fucked up', error)
                    })
            })
        })

    fetch(url + '/api/magic-items')
        .then(response => response.json())
        .then(data1 => {
            data1.results.forEach(result => {
                fetch(url + result.url)
                    .then(response => response.json())
                    .then(data => {
                        client.query(queryStringMagicItems,
                            [
                                JSON.stringify(data.index),
                                JSON.stringify(data.name),
                                JSON.stringify(data.equipment_category),
                                JSON.stringify(data.rarity),
                                JSON.stringify(data.variants),
                                JSON.stringify(data.variant),
                                JSON.stringify(data.description),
                                JSON.stringify(data.url)
                            ])
                            .then(response => {
                                console.log('Magic Items added')
                            })
                    })
                    .catch(error => {
                        console.log('this is fucked up', error)
                    })
            })
        })


    fetch(url + '/api/backgrounds')
        .then(response => response.json())
        .then(data1 => {
            data1.results.forEach(result => {
                fetch(url + result.url)
                    .then(response => response.json())
                    .then(data => {
                        client.query(queryStringBackgrounds,
                            [
                                JSON.stringify(data.index),
                                JSON.stringify(data.name),
                                JSON.stringify(data.starting_proficiencies),
                                JSON.stringify(data.language_options),
                                JSON.stringify(data.starting_equipment),
                                JSON.stringify(data.starting_equipment_options),
                                JSON.stringify(data.feature),
                                JSON.stringify(data.personality_traits),
                                JSON.stringify(data.ideals),
                                JSON.stringify(data.bonds),
                                JSON.stringify(data.flaws),
                                JSON.stringify(data.url)
                            ])
                            .then(response => {
                                console.log('Background added')
                            })
                    })
                    .catch(error => {
                        console.log('this is fucked up', error)
                    })
            })
        })

    fetch(url + '/api/feats')
        .then(response => response.json())
        .then(data1 => {
            data1.results.forEach(result => {
                fetch(url + result.url)
                    .then(response => response.json())
                    .then(data => {
                        client.query(queryStringFeats,
                            [
                                JSON.stringify(data.index),
                                JSON.stringify(data.name),
                                JSON.stringify(data.prerequisites),
                                JSON.stringify(data.description),
                                JSON.stringify(data.url)
                            ])
                            .then(response => {
                                console.log('Feats added')
                            })
                    })
                    .catch(error => {
                        console.log('this is fucked up', error)
                    })
            })
        })

    fetch(url + '/api/features')
        .then(response => response.json())
        .then(data1 => {
            data1.results.forEach(result => {
                fetch(url + result.url)
                    .then(response => response.json())
                    .then(data => {
                        client.query(queryStringFeatures,
                            [
                                JSON.stringify(data.index),
                                JSON.stringify(data.name),
                                JSON.stringify(data.class),
                                JSON.stringify(data.level),
                                JSON.stringify(data.prerequisites),
                                JSON.stringify(data.description),
                                JSON.stringify(data.url),
                            ])
                            .then(response => {
                                console.log('Features added')
                            })
                    })
                    .catch(error => {
                        console.log('this is fucked up', error)
                    })
            })
        })

    fetch(url + '/api/spells')
        .then(response => response.json())
        .then(data1 => {
            data1.results.forEach(result => {
                fetch(url + result.url)
                    .then(response => response.json())
                    .then(data => {
                        client.query(queryStringSpells,
                            [
                                JSON.stringify(data.index),
                                JSON.stringify(data.name),
                                JSON.stringify(data.description),
                                JSON.stringify(data.higher_level),
                                JSON.stringify(data.range),
                                JSON.stringify(data.components),
                                JSON.stringify(data.material),
                                JSON.stringify(data.ritual),
                                JSON.stringify(data.duration),
                                JSON.stringify(data.concentration),
                                JSON.stringify(data.casting_time),
                                JSON.stringify(data.level),
                                JSON.stringify(data.damage),
                                JSON.stringify(data.school),
                                JSON.stringify(data.classes),
                                JSON.stringify(data.subclasses),
                                JSON.stringify(data.url)
                            ])
                            .then(response => {
                                console.log('Spells added')
                            })
                    })
                    .catch(error => {
                        console.log('this is fucked up', error)
                    })
            })
        })

    fetch(url + '/api/conditions')
        .then(response => response.json())
        .then(data1 => {
            data1.results.forEach(result => {
                fetch(url + result.url)
                    .then(response => response.json())
                    .then(data => {
                        client.query(queryStringConditions,
                            [
                                JSON.stringify(data.index),
                                JSON.stringify(data.name),
                                JSON.stringify(data.description),
                                JSON.stringify(data.url)
                            ])
                            .then(response => {
                                console.log('Conditions added')
                            })
                    })
                    .catch(error => {
                        console.log('this is fucked up', error)
                    })
            })
        })

    fetch(url + '/api/damage-types')
        .then(response => response.json())  //broken
        .then(data1 => {

            data1.results.forEach(result => {
                fetch(url + result.url)
                    .then(response => response.json())
                    .then(data => {
                        client.query(queryStringDamageTypes,
                            [
                                JSON.stringify(data.index),
                                JSON.stringify(data.name),
                                JSON.stringify(data.description),
                                JSON.stringify(data.url)
                            ])
                            .then(response => {

                                console.log('Damage Type added')
                            })
                    })
                    .catch(error => {
                        console.log('this is fucked up', error)
                    })
            })
        })

}

export default updateTables;
