'use strict';

var express = require('express');
var router = express.Router();
var controller = require('./player.controller')

//router.get('/:search', controller.index);

//router.get('/', controller.returnPlayerData);
router.get('/', getPlayerData);


module.exports = router;

function getPlayerData(req, res) {
    let playerId = req.params.id;
    res.send(response);
}








const response = {
	"currentPlayer": {
		"_id": 1,
		"username": "Leonardo",
		"gameId": 1,
		"discColor": "blue",
		"currentOrange": 3,
		"currentBrown": 3,
		"currentPink": 3,
		"orangeIncome": 3,
		"brownIncome": 3,
		"pinkIncome": 3,
		"pass": false,
		"turnOrder": 1,
		"totalDiscs": 13,
		"availableDiscs": 13,
		"availableColonyShips": 3,
		"passOrder": 0,
		"whosTurn": true,
		"exploreDiscCount": null,
		"influenceDiscCount": null,
		"researchDiscCount": null,
		"upgradeDiscCount": null,
		"buildDiscCount": null,
		"moveDiscCount": null,
		"species": "Terran"
	},
	"scienceTrack": [{
		"description": "Heres some stuff about that there tile",
		"imageUrl": "gl_starbase",
		"tileName": "Starbase",
		"track": "Star",
		"tileId": 2,
		"position": 1
	}],
	"ships": {
		"interceptor": {
			"compartments": 4,
			"components": [{
				"componentId": 4,
				"name": "Nuclear Source",
				"power": 3,
				"powerCost": 0,
				"position": 0,
				"hullPoints": 0,
				"yellowDice": 0,
				"orangeDice": 0,
				"redDice": 0,
				"missiles": 0,
				"shields": 0,
				"computers": 0,
				"drive": 0,
				"initiative": 0,
				"imageUrl": "gl_nuclearSource"
			},
			{
				"componentId": 5,
				"name": "Nuclear Drive",
				"power": 0,
				"powerCost": 1,
				"position": 0,
				"hullPoints": 0,
				"yellowDice": 0,
				"orangeDice": 0,
				"redDice": 0,
				"missiles": 0,
				"shields": 0,
				"computers": 0,
				"drive": 1,
				"initiative": 0,
				"imageUrl": "gl_nuclearDrive"
			},
			{
				"componentId": 1,
				"name": "Ion Cannon",
				"power": 0,
				"powerCost": 1,
				"position": 0,
				"hullPoints": 0,
				"yellowDice": 1,
				"orangeDice": 0,
				"redDice": 0,
				"missiles": 0,
				"shields": 0,
				"computers": 0,
				"drive": 0,
				"initiative": 0,
				"imageUrl": "gl_ionCannon"
			}],
			"modelName": "interceptor",
			"_id": 1,
			"initiative": 2,
			"computers": 0,
			"drive": 1,
			"hullPoints": 0,
			"powerAvailable": 3,
			"powerConsumption": 2,
			"shields": 0,
			"yellowDice": 1,
			"orangeDice": 0,
			"redDice": 0
		},
		"cruiser": {
			"compartments": 6,
			"components": [{
				"componentId": 4,
				"name": "Nuclear Source",
				"power": 3,
				"powerCost": 0,
				"position": 0,
				"hullPoints": 0,
				"yellowDice": 0,
				"orangeDice": 0,
				"redDice": 0,
				"missiles": 0,
				"shields": 0,
				"computers": 0,
				"drive": 0,
				"initiative": 0,
				"imageUrl": "gl_nuclearSource"
			},
			{
				"componentId": 5,
				"name": "Nuclear Drive",
				"power": 0,
				"powerCost": 1,
				"position": 0,
				"hullPoints": 0,
				"yellowDice": 0,
				"orangeDice": 0,
				"redDice": 0,
				"missiles": 0,
				"shields": 0,
				"computers": 0,
				"drive": 1,
				"initiative": 0,
				"imageUrl": "gl_nuclearDrive"
			},
			{
				"componentId": 1,
				"name": "Ion Cannon",
				"power": 0,
				"powerCost": 1,
				"position": 0,
				"hullPoints": 0,
				"yellowDice": 1,
				"orangeDice": 0,
				"redDice": 0,
				"missiles": 0,
				"shields": 0,
				"computers": 0,
				"drive": 0,
				"initiative": 0,
				"imageUrl": "gl_ionCannon"
			},
			{
				"componentId": 2,
				"name": "Hull",
				"power": 0,
				"powerCost": 0,
				"position": 0,
				"hullPoints": 1,
				"yellowDice": 0,
				"orangeDice": 0,
				"redDice": 0,
				"missiles": 0,
				"shields": 0,
				"computers": 0,
				"drive": 0,
				"initiative": 0,
				"imageUrl": "gl_hull"
			},
			{
				"componentId": 3,
				"name": "Electron Computer",
				"power": 0,
				"powerCost": 0,
				"position": 0,
				"hullPoints": 0,
				"yellowDice": 0,
				"orangeDice": 0,
				"redDice": 0,
				"missiles": 0,
				"shields": 0,
				"computers": 1,
				"drive": 0,
				"initiative": 0,
				"imageUrl": "gl_electronComputer"
			}],
			"modelName": "cruiser",
			"_id": 2,
			"initiative": 1,
			"computers": 1,
			"drive": 1,
			"hullPoints": 1,
			"powerAvailable": 3,
			"powerConsumption": 2,
			"shields": 0,
			"yellowDice": 1,
			"orangeDice": 0,
			"redDice": 0
		},
		"starbase": {
			"compartments": 5,
			"components": [{
				"componentId": 4,
				"name": "Nuclear Source",
				"power": 3,
				"powerCost": 0,
				"position": 0,
				"hullPoints": 0,
				"yellowDice": 0,
				"orangeDice": 0,
				"redDice": 0,
				"missiles": 0,
				"shields": 0,
				"computers": 0,
				"drive": 0,
				"initiative": 0,
				"imageUrl": "gl_nuclearSource"
			},
			{
				"componentId": 1,
				"name": "Ion Cannon",
				"power": 0,
				"powerCost": 1,
				"position": 0,
				"hullPoints": 0,
				"yellowDice": 1,
				"orangeDice": 0,
				"redDice": 0,
				"missiles": 0,
				"shields": 0,
				"computers": 0,
				"drive": 0,
				"initiative": 0,
				"imageUrl": "gl_ionCannon"
			},
			{
				"componentId": 2,
				"name": "Hull",
				"power": 0,
				"powerCost": 0,
				"position": 0,
				"hullPoints": 1,
				"yellowDice": 0,
				"orangeDice": 0,
				"redDice": 0,
				"missiles": 0,
				"shields": 0,
				"computers": 0,
				"drive": 0,
				"initiative": 0,
				"imageUrl": "gl_hull"
			},
			{
				"componentId": 2,
				"name": "Hull",
				"power": 0,
				"powerCost": 0,
				"position": 0,
				"hullPoints": 1,
				"yellowDice": 0,
				"orangeDice": 0,
				"redDice": 0,
				"missiles": 0,
				"shields": 0,
				"computers": 0,
				"drive": 0,
				"initiative": 0,
				"imageUrl": "gl_hull"
			},
			{
				"componentId": 3,
				"name": "Electron Computer",
				"power": 0,
				"powerCost": 0,
				"position": 0,
				"hullPoints": 0,
				"yellowDice": 0,
				"orangeDice": 0,
				"redDice": 0,
				"missiles": 0,
				"shields": 0,
				"computers": 1,
				"drive": 0,
				"initiative": 0,
				"imageUrl": "gl_electronComputer"
			}],
			"modelName": "starbase",
			"_id": 4,
			"initiative": 4,
			"computers": 1,
			"drive": 0,
			"hullPoints": 2,
			"powerAvailable": 3,
			"powerConsumption": 1,
			"shields": 0,
			"yellowDice": 1,
			"orangeDice": 0,
			"redDice": 0
		},
		"dreadnought": {
			"compartments": 8,
			"components": [{
				"componentId": 4,
				"name": "Nuclear Source",
				"power": 3,
				"powerCost": 0,
				"position": 0,
				"hullPoints": 0,
				"yellowDice": 0,
				"orangeDice": 0,
				"redDice": 0,
				"missiles": 0,
				"shields": 0,
				"computers": 0,
				"drive": 0,
				"initiative": 0,
				"imageUrl": "gl_nuclearSource"
			},
			{
				"componentId": 5,
				"name": "Nuclear Drive",
				"power": 0,
				"powerCost": 1,
				"position": 0,
				"hullPoints": 0,
				"yellowDice": 0,
				"orangeDice": 0,
				"redDice": 0,
				"missiles": 0,
				"shields": 0,
				"computers": 0,
				"drive": 1,
				"initiative": 0,
				"imageUrl": "gl_nuclearDrive"
			},
			{
				"componentId": 1,
				"name": "Ion Cannon",
				"power": 0,
				"powerCost": 1,
				"position": 0,
				"hullPoints": 0,
				"yellowDice": 1,
				"orangeDice": 0,
				"redDice": 0,
				"missiles": 0,
				"shields": 0,
				"computers": 0,
				"drive": 0,
				"initiative": 0,
				"imageUrl": "gl_ionCannon"
			},
			{
				"componentId": 1,
				"name": "Ion Cannon",
				"power": 0,
				"powerCost": 1,
				"position": 0,
				"hullPoints": 0,
				"yellowDice": 1,
				"orangeDice": 0,
				"redDice": 0,
				"missiles": 0,
				"shields": 0,
				"computers": 0,
				"drive": 0,
				"initiative": 0,
				"imageUrl": "gl_ionCannon"
			},
			{
				"componentId": 2,
				"name": "Hull",
				"power": 0,
				"powerCost": 0,
				"position": 0,
				"hullPoints": 1,
				"yellowDice": 0,
				"orangeDice": 0,
				"redDice": 0,
				"missiles": 0,
				"shields": 0,
				"computers": 0,
				"drive": 0,
				"initiative": 0,
				"imageUrl": "gl_hull"
			},
			{
				"componentId": 2,
				"name": "Hull",
				"power": 0,
				"powerCost": 0,
				"position": 0,
				"hullPoints": 1,
				"yellowDice": 0,
				"orangeDice": 0,
				"redDice": 0,
				"missiles": 0,
				"shields": 0,
				"computers": 0,
				"drive": 0,
				"initiative": 0,
				"imageUrl": "gl_hull"
			},
			{
				"componentId": 3,
				"name": "Electron Computer",
				"power": 0,
				"powerCost": 0,
				"position": 0,
				"hullPoints": 0,
				"yellowDice": 0,
				"orangeDice": 0,
				"redDice": 0,
				"missiles": 0,
				"shields": 0,
				"computers": 1,
				"drive": 0,
				"initiative": 0,
				"imageUrl": "gl_electronComputer"
			}],
			"modelName": "dreadnought",
			"_id": 3,
			"initiative": 0,
			"computers": 1,
			"drive": 1,
			"hullPoints": 2,
			"powerAvailable": 3,
			"powerConsumption": 3,
			"shields": 0,
			"yellowDice": 2,
			"orangeDice": 0,
			"redDice": 0
		}
	},
	"upgrades": [],
	"status": {
		"_id": 1,
		"playerId": 1,
		"playerName": "Leonardo",
		"gameId": 1,
		"turnStarted": false,
		"action": null,
		"turnOver": null,
		"mapId": null,
		"pass": null,
		"exTileChosen": null,
		"exInfluenced": null,
		"exRewardRevealed": null,
		"exRewardChosen": null,
		"exResourceSet": null,
		"influenceStarted": null,
		"influenceOne": null,
		"influenceTwo": null,
		"researchTileChosen": null
	}
}