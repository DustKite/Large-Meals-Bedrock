const cookingPotRecipes = [
        {
            'identifer': 'large_meals:pufferfish_broth',
            'tags': ['cooking_pot'],
            'priority': 0,
            "time": 200,
            "experience": 1.0,
            "container": { "item": "minecraft:bowl" },
            "ingredients": [
                { "item": "minecraft:pufferfish" },
                { "item": "minecraft:potato" },
                { "item": "minecraft:beetroot" },
                [
                    { "tag": "farmersdelight:is_onion" },
                    { "item": "better_on_bedrock:onion" }
                ],
                { "tag": "farmersdelight:is_milk" }
            ],
            "result": { "item": "large_meals:pufferfish_broth" }
        },
        {
            'identifer': 'large_meals:potato_soup',
            'tags': ['cooking_pot'],
            'priority': 0,
            "time": 200,
            "experience": 1.0,
            "container": { "item": "minecraft:bowl" },
            "ingredients": [
                { "item": "minecraft:potato" },
                { "item": "minecraft:potato" },
                [
                    { "tag": "farmersdelight:is_onion" },
                    { "item": "better_on_bedrock:onion" }
                ],
                { "tag": "farmersdelight:is_milk" }
            ],
            "result": { "item": "large_meals:potato_soup" }
        },
        {
            'identifer': 'large_meals:red_soup',
            'tags': ['cooking_pot'],
            'priority': 0,
            "time": 200,
            "experience": 1.0,
            "container": { "item": "minecraft:bowl" },
            "ingredients": [
                [
                    { "tag": "farmersdelight:is_tomato" },
                    { "item": "better_on_bedrock:tomato_seed" }
                ],
                { "item": "minecraft:beetroot" },
                [
                    { "tag": "farmersdelight:is_onion" },
                    { "item": "better_on_bedrock:onion" }
                ]
            ],
            "result": { "item": "large_meals:red_soup" }
        },
        {
            'identifer': 'large_meals:tomato_egg_soup',
            'tags': ['cooking_pot'],
            'priority': 0,
            "time": 200,
            "experience": 1.0,
            "container": { "item": "minecraft:bowl" },
            "ingredients": [
                [
                    { "tag": "farmersdelight:is_tomato" },
                    { "item": "better_on_bedrock:tomato_seed" }
                ],
                { "tag": "minecraft:egg" },
                [
                    { "tag": "farmersdelight:is_onion" },
                    { "item": "better_on_bedrock:onion" }
                ]
            ],
            "result": { "item": "large_meals:tomato_egg_soup" }
        },
        {
            'identifer': 'large_meals:cod_deluxe',
            'tags': ['cooking_pot'],
            'priority': 0,
            "time": 200,
            "experience": 1.0,
            "container": { "item": "minecraft:bowl" },
            "ingredients": [
                { "item": "minecraft:cod" },
                { "item": "minecraft:beetroot" },
                { "tag": "farmersdelight:is_rice" },
                [
                    { "tag": "farmersdelight:is_tomato" },
                    { "item": "better_on_bedrock:tomato_seed" }
                ]
            ],
            "result": { "item": "large_meals:cod_deluxe" }
        },
        {
            'identifer': 'large_meals:hearty_lunch',
            'tags': ['cooking_pot'],
            'priority': 0,
            "time": 200,
            "experience": 1.0,
            "container": { "item": "minecraft:bowl" },
            "ingredients": [
                { "item": "farmersdelight:bacon" },
                { "item": "farmersdelight:bacon" },
                { "tag": "farmersdelight:is_rice" },
                [
                    { "tag": "farmersdelight:is_cabbage" },
                    { "item": "better_on_bedrock:gabage_leaves" }
                ],
                { "item": "minecraft:carrot" },
                [
                    { "tag": "farmersdelight:is_onion" },
                    { "item": "better_on_bedrock:onion" }
                ]
            ],
            "result": { "item": "large_meals:hearty_lunch" }
        },
        {
            'identifer': 'large_meals:chicken_curry',
            'tags': ['cooking_pot'],
            'priority': 0,
            "time": 200,
            "experience": 1.0,
            "container": { "item": "minecraft:bowl" },
            "ingredients": [
                [
                    { "tag": "farmersdelight:is_raw_chicken" },
                    { "item": "minecraft:chicken" }
                ],
                [
                    { "tag": "farmersdelight:is_onion" },
                    { "item": "better_on_bedrock:onion" }
                ],
                { "tag": "farmersdelight:is_milk" },
                { "item": "farmersdelight:tomato_sauce" }
            ],
            "result": { "item": "large_meals:chicken_curry" }
        },
        {
            'identifer': 'large_meals:pasta_with_mushroom_sauce',
            'tags': ['cooking_pot'],
            'priority': 0,
            "time": 200,
            "experience": 1.0,
            "container": { "item": "minecraft:bowl" },
            "ingredients": [
                { "item": "minecraft:brown_mushroom" },
                { "item": "minecraft:brown_mushroom" },
                { "tag": "farmersdelight:is_milk" },
                [
                    { "tag": "farmersdelight:is_onion" },
                    { "item": "better_on_bedrock:onion" }
                ],
                { "tag": "farmersdelight:is_pasta" }
            ],
            "result": { "item": "large_meals:pasta_with_mushroom_sauce" }
        },
        {
            'identifer': 'large_meals:omurice_block_item',
            'tags': ['cooking_pot'],
            'priority': 0,
            "time": 250,
            "experience": 1.5,
            "ingredients": [
                { "tag": "farmersdelight:is_rice" },
                [
                    { "tag": "farmersdelight:is_raw_chicken" },
                    { "item": "minecraft:chicken" }
                ],
                { "tag": "minecraft:egg" },
                { "tag": "farmersdelight:is_milk" },
                { "item": "minecraft:carrot" },
                [
                    { "tag": "farmersdelight:is_cabbage" },
                    { "item": "better_on_bedrock:gabage_leaves" }
                ]
            ],
            "result": { "item": "large_meals:omurice_block_item" }
        },
        {
            'identifer': 'large_meals:mushroom_pot_pie_block_item',
            'tags': ['cooking_pot'],
            'priority': 0,
            "time": 250,
            "experience": 1.5,
            "ingredients": [
                { "item": "farmersdelight:brown_mushroom_colony" },
                [
                    { "tag": "farmersdelight:is_raw_chicken" },
                    { "item": "minecraft:chicken" }
                ],
                { "item": "minecraft:carrot" },
                [
                    { "tag": "farmersdelight:is_cabbage" },
                    { "item": "better_on_bedrock:gabage_leaves" }
                ],
                { "tag": "farmersdelight:is_milk" },
                { "item": "farmersdelight:pie_crust" }
            ],
            "result": { "item": "large_meals:mushroom_pot_pie_block_item" }
        },
        {
            'identifer': 'large_meals:sweet_berry_custard',
            'tags': ['cooking_pot'],
            'priority': 0,
            "time": 200,
            "experience": 1.0,
            "container": { "item": "minecraft:glass_bottle" },
            "ingredients": [
                { "item": "minecraft:sweet_berries" },
                { "tag": "farmersdelight:is_milk" },
                { "tag": "minecraft:egg" },
                { "item": "minecraft:sugar" }
            ],
            "result": { "item": "large_meals:sweet_berry_custard" }
        },
        {
            'identifer': 'large_meals:rice_pudding',
            'tags': ['cooking_pot'],
            'priority': 0,
            "time": 200,
            "experience": 1.0,
            "container": { "item": "minecraft:bowl" },
            "ingredients": [
                { "tag": "farmersdelight:is_rice" },
                { "tag": "farmersdelight:is_milk" },
                { "item": "minecraft:sugar" }
            ],
            "result": { "item": "large_meals:rice_pudding" }
        }
];
export { cookingPotRecipes };